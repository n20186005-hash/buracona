// Tide data layer for Buracona.
//
// Fetches hourly sea-surface height and derives the things a visitor actually
// needs: whether the water is coming in or going out, when the next high/low
// tide is, and — most importantly — when the lava platforms and tide pools are
// exposed. Moon phase is computed locally to flag spring vs. neap tides.
//
// Like weather.ts this module is imported by both the server (build-time
// render) and the client (live refresh), and it caches + de-duplicates.

import { SITE } from './site';

const TZ = 'Atlantic/Cape_Verde';

export type ExtremeKind = 'high' | 'low';

export interface TideExtreme {
  /** Local time, "YYYY-MM-DDTHH:00". */
  time: string;
  /** Index into the hourly series. */
  i: number;
  height: number;
  kind: ExtremeKind;
}

export interface TideDay {
  date: string;
  extremes: TideExtreme[];
  /** Height difference between the day's highest and lowest water (m). */
  range: number;
}

export type MoonName =
  | 'new'
  | 'waxingCrescent'
  | 'first'
  | 'waxingGibbous'
  | 'full'
  | 'waningGibbous'
  | 'last'
  | 'waningCrescent';

export type TideStrength = 'spring' | 'neap' | 'mid';

export interface MoonInfo {
  /** 0 = new moon, 0.5 = full moon. */
  phase: number;
  /** Days since the last new moon. */
  age: number;
  name: MoonName;
  strength: TideStrength;
}

export interface TideData {
  updatedIso: string;
  nowIndex: number;
  current: number;
  rising: boolean;
  times: string[];
  heights: number[];
  nextHigh: TideExtreme | null;
  nextLow: TideExtreme | null;
  nextExtreme: TideExtreme | null;
  hoursToNext: number;
  today: TideDay | null;
  days: TideDay[];
  /** Today's low / high water (m), used to position the gauge. */
  dayMin: number;
  dayMax: number;
  moon: MoonInfo;
}

export function tideUrl(lat: number, lng: number): string {
  return (
    'https://marine-api.open-meteo.com/v1/marine' +
    `?latitude=${lat}&longitude=${lng}` +
    '&hourly=sea_level_height_msl' +
    `&timezone=${encodeURIComponent(TZ)}&forecast_days=7&past_days=1`
  );
}

/** Current wall-clock time in the site's time zone, as "YYYY-MM-DD" + "HH:00". */
function localNow(tz: string, at: Date): { date: string; hour: string } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(at);
  const g = (t: string) => parts.find((x) => x.type === t)?.value ?? '';
  return { date: `${g('year')}-${g('month')}-${g('day')}`, hour: `${g('hour')}:00` };
}

/**
 * Local maxima / minima of the hourly series. Consecutive extremes of the same
 * kind are collapsed so a flat peak yields a single entry.
 *
 * The true turning point sits between hourly samples, so it is recovered by
 * fitting a parabola through the three points — that's how published tide
 * tables get times like 10:47 rather than "sometime around 11".
 */
function findExtremes(times: string[], heights: number[]): TideExtreme[] {
  const out: TideExtreme[] = [];
  let last: ExtremeKind | null = null;
  for (let i = 1; i < heights.length - 1; i++) {
    const a = heights[i - 1];
    const b = heights[i];
    const c = heights[i + 1];
    const isHigh = b >= a && b >= c && (b > a || b > c);
    const isLow = !isHigh && b <= a && b <= c && (b < a || b < c);
    if (!isHigh && !isLow) continue;
    const kind: ExtremeKind = isHigh ? 'high' : 'low';
    if (last !== kind) out.push(interpolate(times, heights, i, kind));
    last = kind;
  }
  return out;
}

/** Parabolic interpolation of the turning point around hourly index `i`. */
function interpolate(
  times: string[],
  heights: number[],
  i: number,
  kind: ExtremeKind
): TideExtreme {
  const a = heights[i - 1];
  const b = heights[i];
  const c = heights[i + 1];
  const denom = a - 2 * b + c;
  let delta = 0;
  if (Math.abs(denom) > 1e-9) delta = (0.5 * (a - c)) / denom;
  if (!Number.isFinite(delta) || Math.abs(delta) > 1) delta = 0;

  // Times are local wall-clock strings; treat them as UTC to do the arithmetic.
  const t = new Date(Date.parse(`${times[i]}Z`) + Math.round(delta * 3600000));
  const height = b - 0.25 * (a - c) * delta;

  return { time: t.toISOString().slice(0, 16), i, height, kind };
}

/** Moon phase from a known new moon — enough to separate spring from neap tides. */
export function moonInfo(at: Date): MoonInfo {
  const SYNODIC = 29.530588853;
  const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14) / 86400000;
  let age = (at.getTime() / 86400000 - KNOWN_NEW_MOON) % SYNODIC;
  if (age < 0) age += SYNODIC;
  const phase = age / SYNODIC;

  let name: MoonName;
  if (age < 1.5 || age >= 27.5) name = 'new';
  else if (age < 6.5) name = 'waxingCrescent';
  else if (age < 8.5) name = 'first';
  else if (age < 13.5) name = 'waxingGibbous';
  else if (age < 16.5) name = 'full';
  else if (age < 20.5) name = 'waningGibbous';
  else if (age < 22.5) name = 'last';
  else name = 'waningCrescent';

  // Distance to a syzygy (new / full) vs. to a quadrature (quarters).
  const toSyzygy = Math.min(phase, Math.abs(phase - 0.5), 1 - phase);
  const toQuad = Math.min(Math.abs(phase - 0.25), Math.abs(phase - 0.75));
  const strength: TideStrength = toSyzygy < 0.09 ? 'spring' : toQuad < 0.09 ? 'neap' : 'mid';

  return { phase, age, name, strength };
}

function groupDays(times: string[], heights: number[], extremes: TideExtreme[]): TideDay[] {
  const byDate = new Map<string, number[]>();
  times.forEach((t, i) => {
    const d = t.slice(0, 10);
    const arr = byDate.get(d) ?? [];
    arr.push(heights[i]);
    byDate.set(d, arr);
  });
  const exByDate = new Map<string, TideExtreme[]>();
  for (const e of extremes) {
    const d = e.time.slice(0, 10);
    const arr = exByDate.get(d) ?? [];
    arr.push(e);
    exByDate.set(d, arr);
  }
  return Array.from(byDate.keys())
    .sort()
    .map((date) => {
      const vals = byDate.get(date) ?? [];
      const lo = vals.length ? Math.min(...vals) : 0;
      const hi = vals.length ? Math.max(...vals) : 0;
      return { date, extremes: exByDate.get(date) ?? [], range: hi - lo };
    });
}

function normalize(payload: any, at: Date): TideData | null {
  const times: string[] = payload?.hourly?.time ?? [];
  const raw: any[] = payload?.hourly?.sea_level_height_msl ?? [];
  if (!times.length || raw.length !== times.length) return null;

  const heights = raw.map((v) => (typeof v === 'number' && Number.isFinite(v) ? v : 0));

  const { date, hour } = localNow(TZ, at);
  const nowKey = `${date}T${hour}`;
  let nowIndex = times.indexOf(nowKey);
  if (nowIndex < 0) {
    const target = Date.parse(`${nowKey}Z`);
    let best = Infinity;
    for (let i = 0; i < times.length; i++) {
      const d = Math.abs(Date.parse(`${times[i]}Z`) - target);
      if (d < best) {
        best = d;
        nowIndex = i;
      }
    }
  }
  if (nowIndex < 0) nowIndex = 0;

  const extremes = findExtremes(times, heights);
  const days = groupDays(times, heights, extremes);

  const ahead = extremes.filter((e) => e.i > nowIndex);
  const nextHigh = ahead.find((e) => e.kind === 'high') ?? null;
  const nextLow = ahead.find((e) => e.kind === 'low') ?? null;
  const nextExtreme =
    nextHigh && nextLow ? (nextHigh.i <= nextLow.i ? nextHigh : nextLow) : (nextHigh ?? nextLow);

  const today = days.find((d) => d.date === date) ?? null;
  const todayVals: number[] = [];
  for (let i = 0; i < times.length; i++) {
    if (times[i].slice(0, 10) === date) todayVals.push(heights[i]);
  }
  const dayMin = todayVals.length ? Math.min(...todayVals) : heights[nowIndex];
  const dayMax = todayVals.length ? Math.max(...todayVals) : heights[nowIndex];

  const cur = heights[nowIndex];
  const rising = nowIndex + 1 < heights.length ? heights[nowIndex + 1] > cur : false;

  return {
    updatedIso: times[nowIndex],
    nowIndex,
    current: cur,
    rising,
    times,
    heights,
    nextHigh,
    nextLow,
    nextExtreme,
    hoursToNext: nextExtreme ? Math.max(0, nextExtreme.i - nowIndex) : 0,
    today,
    days,
    dayMin,
    dayMax,
    moon: moonInfo(at),
  };
}

const TTL_MS = 30 * 60 * 1000;
let cached: { at: number; data: TideData } | null = null;
let inflight: Promise<TideData | null> | null = null;

/** Fetch (and cache) tide predictions. Returns null when unavailable. */
export function getTide(
  lat: number = SITE.latitude,
  lng: number = SITE.longitude
): Promise<TideData | null> {
  if (cached && Date.now() - cached.at < TTL_MS) return Promise.resolve(cached.data);
  if (inflight) return inflight;

  inflight = (async () => {
    try {
      const res = await fetch(tideUrl(lat, lng));
      if (!res.ok) throw new Error('tide unavailable');
      const data = normalize(await res.json(), new Date());
      if (data) cached = { at: Date.now(), data };
      return data;
    } catch {
      return cached?.data ?? null;
    } finally {
      inflight = null;
    }
  })();

  return inflight;
}

// ── Advice engine ─────────────────────────────────────────────────────────

export interface TideAdvice {
  best: string[];
  explore: string[];
  safety: string[];
}

/**
 * Returns translation keys for the advice that actually applies right now —
 * nothing is emitted for conditions that don't hold.
 */
export function buildTideAdvice(d: TideData): TideAdvice {
  const best: string[] = [];
  const explore: string[] = [];
  const safety: string[] = [];

  const span = d.dayMax - d.dayMin;
  // Where today's water sits: 0 = lowest of the day, 1 = highest.
  const pos = span > 0.01 ? (d.current - d.dayMin) / span : 0.5;

  // ── When to come / what the next two hours look like ──
  const soon = d.hoursToNext <= 2;
  if (d.nextExtreme?.kind === 'low' && !d.rising && soon) best.push('best_low_soon');
  else if (d.nextExtreme?.kind === 'high' && d.rising && soon) best.push('best_high_soon');
  else if (d.rising) best.push('best_after_low');
  else if (d.nextExtreme) best.push('best_after_high');
  else best.push('best_general');

  // ── What's worth doing at this water level ──
  if (pos <= 0.33) explore.push('explore_low');
  else if (pos >= 0.67) explore.push('explore_high');
  else explore.push('explore_mid');
  if (d.moon.strength === 'spring') explore.push('explore_spring');
  else if (d.moon.strength === 'neap') explore.push('explore_neap');

  // ── Safety (only when a real hazard applies) ──
  if (d.rising) safety.push('safety_rising');
  if (d.rising && d.nextExtreme?.kind === 'high' && soon) safety.push('safety_cut');
  if (pos <= 0.33) safety.push('safety_rocks');
  if (d.moon.strength === 'spring') safety.push('safety_spring');

  return { best, explore, safety };
}
