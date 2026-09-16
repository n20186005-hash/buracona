// Weather data layer for Buracona.
//
// Data is fetched server-side (at build time for this static site) and cached
// in memory with an in-flight de-duplicator, so the four language pages share a
// single request. The very same module is imported by the client bundle to
// refresh the module with live values once the page has loaded.
//
// The advice engine is intentionally language-agnostic: it returns stable
// translation KEYS, never prose, so all copy stays in i18n/translations.ts.

import { SITE } from './site';

const TZ = 'Atlantic/Cape_Verde';

export type ConditionKind =
  | 'clear'
  | 'partly'
  | 'cloudy'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'heavy'
  | 'snow'
  | 'thunder';

export interface DailyEntry {
  date: string;
  code: number;
  tmax: number;
  tmin: number;
  pop: number;
  windMax: number;
  uv: number;
}

export interface CurrentWeather {
  temp: number;
  apparent: number;
  humidity: number;
  code: number;
  wind: number;
  gust: number;
  precip: number;
}

export interface MarineData {
  wave: number;
  seaTemp: number;
  waveMax: number[];
}

export interface WeatherData {
  updatedIso: string;
  current: CurrentWeather;
  daily: DailyEntry[];
  marine: MarineData | null;
}

export function forecastUrl(lat: number, lng: number): string {
  return (
    'https://api.open-meteo.com/v1/forecast' +
    `?latitude=${lat}&longitude=${lng}` +
    '&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,wind_speed_10m,wind_gusts_10m' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max' +
    `&timezone=${encodeURIComponent(TZ)}&forecast_days=7`
  );
}

export function marineUrl(lat: number, lng: number): string {
  return (
    'https://marine-api.open-meteo.com/v1/marine' +
    `?latitude=${lat}&longitude=${lng}` +
    '&current=wave_height,sea_surface_temperature' +
    '&daily=wave_height_max,sea_surface_temperature_max' +
    `&timezone=${encodeURIComponent(TZ)}&forecast_days=7`
  );
}

function num(v: unknown, fallback = 0): number {
  return typeof v === 'number' && Number.isFinite(v) ? v : fallback;
}

function normalize(f: any, m: any): WeatherData {
  const cur = f?.current ?? {};
  const d = f?.daily ?? {};
  const times: string[] = Array.isArray(d.time) ? d.time : [];

  const daily: DailyEntry[] = times.map((t, i) => ({
    date: t,
    code: num(d.weather_code?.[i]),
    tmax: num(d.temperature_2m_max?.[i]),
    tmin: num(d.temperature_2m_min?.[i]),
    pop: num(d.precipitation_probability_max?.[i]),
    windMax: num(d.wind_speed_10m_max?.[i]),
    uv: num(d.uv_index_max?.[i]),
  }));

  return {
    updatedIso: typeof cur.time === 'string' ? cur.time : '',
    current: {
      temp: num(cur.temperature_2m),
      apparent: num(cur.apparent_temperature, num(cur.temperature_2m)),
      humidity: num(cur.relative_humidity_2m),
      code: num(cur.weather_code),
      wind: num(cur.wind_speed_10m),
      gust: num(cur.wind_gusts_10m),
      precip: num(cur.precipitation),
    },
    daily,
    marine:
      m && m.current
        ? {
            wave: num(m.current.wave_height),
            seaTemp: num(m.current.sea_surface_temperature),
            waveMax: Array.isArray(m.daily?.wave_height_max) ? m.daily.wave_height_max : [],
          }
        : null,
  };
}

const TTL_MS = 30 * 60 * 1000;
let cached: { at: number; data: WeatherData } | null = null;
let inflight: Promise<WeatherData | null> | null = null;

/**
 * Fetch (and cache) weather + marine conditions.
 * Returns null when the service is unreachable — callers must degrade gracefully.
 */
export function getWeather(
  lat: number = SITE.latitude,
  lng: number = SITE.longitude
): Promise<WeatherData | null> {
  if (cached && Date.now() - cached.at < TTL_MS) return Promise.resolve(cached.data);
  if (inflight) return inflight;

  inflight = (async () => {
    try {
      const [fRes, mRes] = await Promise.all([
        fetch(forecastUrl(lat, lng)),
        fetch(marineUrl(lat, lng)).catch(() => null),
      ]);
      if (!fRes || !fRes.ok) throw new Error('forecast unavailable');
      const f = await fRes.json();
      const m = mRes && mRes.ok ? await mRes.json().catch(() => null) : null;
      const data = normalize(f, m);
      cached = { at: Date.now(), data };
      return data;
    } catch {
      return cached?.data ?? null;
    } finally {
      inflight = null;
    }
  })();

  return inflight;
}

// ── Classification helpers ────────────────────────────────────────────────

/** WMO weather code → human condition bucket. */
export function conditionOf(code: number): ConditionKind {
  if (code === 0) return 'clear';
  if (code === 1 || code === 2) return 'partly';
  if (code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if ([51, 53, 55, 56, 57].includes(code)) return 'drizzle';
  if ([61, 63, 66, 67, 80, 81].includes(code)) return 'rain';
  if ([65, 82].includes(code)) return 'heavy';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snow';
  if ([95, 96, 99].includes(code)) return 'thunder';
  return 'cloudy';
}

/** Wind speed (km/h) → Beaufort force. */
export function beaufort(kmh: number): number {
  const v = Math.abs(kmh);
  if (v < 1) return 0;
  if (v < 6) return 1;
  if (v < 12) return 2;
  if (v < 20) return 3;
  if (v < 29) return 4;
  if (v < 39) return 5;
  if (v < 50) return 6;
  if (v < 62) return 7;
  if (v < 75) return 8;
  if (v < 89) return 9;
  if (v < 103) return 10;
  if (v < 118) return 11;
  return 12;
}

export type WindBand = 'calm' | 'light' | 'strong' | 'gale';
export type UvBand = 'low' | 'moderate' | 'high' | 'veryHigh' | 'extreme';

export function windBandOf(kmh: number): WindBand {
  const b = beaufort(kmh);
  if (b <= 2) return 'calm';
  if (b <= 4) return 'light';
  if (b <= 6) return 'strong';
  return 'gale';
}

export function uvBandOf(uv: number): UvBand {
  if (uv < 3) return 'low';
  if (uv < 6) return 'moderate';
  if (uv < 8) return 'high';
  if (uv < 11) return 'veryHigh';
  return 'extreme';
}

// ── Advice engine ─────────────────────────────────────────────────────────

export interface Advice {
  risks: string[];
  dress: string[];
  play: string[];
  items: string[];
  sea: string[];
}

/**
 * Turn raw numbers into the keys of the advice lines that should actually be
 * shown. Nothing is emitted for conditions that do not apply — the UI stays
 * empty rather than padded.
 */
export function buildAdvice(d: WeatherData): Advice {
  const today = d.daily[0];
  const cond = conditionOf(d.current.code);

  const tmax = today ? today.tmax : d.current.temp;
  const tmin = today ? today.tmin : d.current.temp;
  const pop = today ? today.pop : 0;
  const uv = today ? today.uv : 0;

  // Use the strongest wind signal available (gusts matter most on an exposed
  // basalt coastline), falling back to today's forecast maximum.
  const windRef = Math.max(d.current.gust, d.current.wind, today ? today.windMax : 0);
  const band = windBandOf(windRef);
  const range = tmax - tmin;

  const wet =
    cond === 'drizzle' || cond === 'rain' || cond === 'heavy' || cond === 'thunder' || pop >= 60;
  const windy = band === 'strong' || band === 'gale';

  const risks: string[] = [];
  const dress: string[] = [];
  const play: string[] = [];
  const items: string[] = [];
  const sea: string[] = [];

  // ── Risk alerts (highest priority, only when triggered) ──
  if (cond === 'thunder') risks.push('risk_thunder');
  if (cond === 'heavy') risks.push('risk_rain_heavy');
  if (band === 'gale') risks.push('risk_wind7');
  if (cond === 'fog') risks.push('risk_fog');
  if (d.marine && d.marine.wave >= 2.5) risks.push('risk_wave');

  // ── What to wear ──
  if (tmax >= 32) dress.push('dress_hot');
  else if (tmax <= 10) dress.push('dress_cold');
  else if (range > 8) dress.push('dress_range');
  else dress.push('dress_mild');
  if (wet) dress.push('dress_rain');
  if (uv >= 5) dress.push('dress_uv');
  if (windy) dress.push('dress_wind');

  // ── Activity plan ──
  if (cond === 'thunder') play.push('play_thunder');
  else if (cond === 'heavy') play.push('play_rain_heavy');
  else if (cond === 'fog') play.push('play_fog');
  else if (band === 'gale') play.push('play_wind7');
  else if (band === 'strong') play.push('play_wind5');
  else if (pop >= 60) play.push('play_rain_prob');
  else if (cond === 'rain' || cond === 'drizzle') play.push('play_rain_light');
  else if (cond === 'clear') play.push('play_clear');
  else if (cond === 'partly') play.push('play_partly');
  else play.push('play_cloudy');
  if (tmax >= 32) play.push('play_hot');

  // ── What to bring ──
  if (cond === 'heavy' || (wet && windy)) items.push('item_raincoat');
  else if (cond === 'drizzle') items.push('item_fold_umbrella');
  else if (wet) items.push('item_umbrella');
  if (uv >= 5) items.push('item_sunscreen', 'item_sunglasses', 'item_hat');
  if (tmax >= 32) items.push('item_water');
  if (range > 8) items.push('item_jacket');
  if (tmax <= 10) items.push('item_warm_coat');
  if (cond === 'fog') items.push('item_mask');
  if (windy) items.push('item_wind_hat');
  if (wet) items.push('item_grip_shoes');

  // ── Sea & coast (site-specific extension for a coastal sea cave) ──
  if (d.marine) {
    if (d.marine.wave >= 2.5) sea.push('sea_rough');
    else if (d.marine.wave >= 1.5) sea.push('sea_moderate');
    else sea.push('sea_calm');
    sea.push(d.marine.seaTemp >= 22 ? 'sea_warm' : 'sea_cool');
  }

  return { risks, dress, play, items, sea };
}
