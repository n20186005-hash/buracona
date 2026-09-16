// Presentation layer for the weather module.
//
// The markup lives here (not in the .astro template) so that the server
// (build-time render) and the client (live refresh) emit exactly the same
// HTML from a single source of truth.

import { buildAdvice, conditionOf, uvBandOf, windBandOf, type WeatherData } from './weather';

const CLOUD = 'M7 15h10a3.5 3.5 0 0 0 .4-6.98A5 5 0 0 0 8.2 7.2A3.9 3.9 0 0 0 7 15z';

export function wxIcon(kind: string, cls = 'w-8 h-8'): string {
  const a = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"`;
  let body = '';
  switch (kind) {
    case 'clear':
      body =
        '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.3M12 19.1v2.3M2.6 12h2.3M19.1 12h2.3M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6"/>';
      break;
    case 'partly':
      body =
        '<circle cx="8.6" cy="8.4" r="3.1"/><path d="M8.6 2.7v1.7M2.7 8.4h1.7M4.4 4.2l1.2 1.2M12.8 4.2l-1.2 1.2"/>' +
        '<path d="M8 20h9.2a3.2 3.2 0 0 0 .3-6.4A5 5 0 0 0 9.2 12.4A3.8 3.8 0 0 0 8 20z"/>';
      break;
    case 'fog':
      body = `<path d="${CLOUD}"/><path d="M4 18.5h16M6.5 21.5h11"/>`;
      break;
    case 'drizzle':
      body = `<path d="${CLOUD}"/><path d="M9.5 18v1.6M14.5 18v1.6"/>`;
      break;
    case 'rain':
      body = `<path d="${CLOUD}"/><path d="M9 18l-.8 2.4M12.5 18l-.8 2.4M16 18l-.8 2.4"/>`;
      break;
    case 'heavy':
      body = `<path d="${CLOUD}"/><path d="M8.8 17.8l-1.2 3.4M12.2 17.8l-1.2 3.4M15.6 17.8l-1.2 3.4"/>`;
      break;
    case 'snow':
      body = `<path d="${CLOUD}"/><path d="M9.5 18.5h.01M12 20.5h.01M14.5 18.5h.01M12 17h.01"/>`;
      break;
    case 'thunder':
      body = `<path d="${CLOUD}"/><path d="M13 16.2l-3.2 4.3h2.9L12 23"/>`;
      break;
    default:
      body = `<path d="${CLOUD}"/>`;
  }
  return `<svg ${a} class="${cls}" aria-hidden="true">${body}</svg>`;
}

export function weekdayShort(date: string, locale: string): string {
  try {
    return new Intl.DateTimeFormat(locale, { weekday: 'short', timeZone: 'UTC' }).format(
      new Date(`${date}T12:00:00Z`)
    );
  } catch {
    return date.slice(5);
  }
}

const esc = (s: unknown): string =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string);

const round = (v: number): number => Math.round(v);

function bulletList(keys: string[], L: any, dot: string, text: string): string {
  return keys
    .map(
      (k) =>
        `<div class="flex gap-3"><span class="mt-2 w-1.5 h-1.5 rounded-full ${dot} flex-shrink-0"></span><div class="text-sm leading-relaxed ${text}">${esc(L.adv?.[k] ?? k)}</div></div>`
    )
    .join('');
}

function groupCard(title: string, keys: string[], L: any, tone: 'plain' | 'risk'): string {
  if (!keys.length) return '';
  const shell =
    tone === 'risk'
      ? 'bg-red-50 border border-red-200'
      : 'bg-white border border-black/5';
  const head = tone === 'risk' ? 'text-red-600' : 'text-[color:var(--color-emerald)]';
  const dot = tone === 'risk' ? 'bg-red-500' : 'bg-[color:var(--color-emerald)]';
  const text = tone === 'risk' ? 'text-red-900' : 'text-[color:var(--color-ink)]/90';
  return `<div class="rounded-3xl ${shell} p-6 md:p-7">
    <div class="text-xs uppercase tracking-widest ${head}">${esc(title)}</div>
    <div class="mt-4 space-y-2.5">${bulletList(keys, L, dot, text)}</div>
  </div>`;
}

export function renderWeatherHtml(d: WeatherData | null, L: any, locale: string): string {
  if (!d || !d.daily.length) {
    return `<div class="rounded-3xl bg-white border border-black/5 p-8 text-center text-sm text-[color:var(--color-moss)]/70">${esc(L.error)}</div>`;
  }

  const today = d.daily[0];
  const cond = conditionOf(d.current.code);
  const windRef = Math.max(d.current.gust, d.current.wind, today.windMax);
  const band = windBandOf(windRef);
  const uvB = uvBandOf(today.uv);
  const adv = buildAdvice(d);
  const hhmm = d.updatedIso ? d.updatedIso.slice(11, 16) : '';

  const stats: Array<[string, string]> = [
    [L.humidity, `${round(d.current.humidity)}%`],
    [L.windLabel, `${round(d.current.wind)} km/h · ${L.wind?.[band] ?? ''}`],
    [L.uvLabel, `${today.uv.toFixed(1)} · ${L.uv?.[uvB] ?? ''}`],
    [L.precipLabel, `${round(today.pop)}%`],
  ];

  const currentCard = `<div class="rounded-3xl bg-[color:var(--color-ink)] text-[color:var(--color-cream)] p-8 md:p-10">
    <div class="flex flex-wrap items-start justify-between gap-8">
      <div>
        <div class="text-xs uppercase tracking-[0.25em] text-[color:var(--color-sun)]">${esc(L.nowLabel)}</div>
        <div class="mt-4 flex items-center gap-5">
          <div class="text-[color:var(--color-sun)]">${wxIcon(cond, 'w-14 h-14')}</div>
          <div>
            <div class="num-display text-6xl md:text-7xl leading-none">${round(d.current.temp)}°</div>
            <div class="text-white/70 mt-2 text-sm">${esc(L.cond?.[cond] ?? cond)} · ${esc(L.feelsLike)} ${round(d.current.apparent)}°</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-10 gap-y-5 text-sm">
        ${stats
          .map(
            ([k, v]) =>
              `<div><div class="text-white/50 text-xs">${esc(k)}</div><div class="mt-1 text-white/90">${esc(v)}</div></div>`
          )
          .join('')}
      </div>
    </div>
    ${hhmm ? `<div class="mt-6 pt-5 border-t border-white/10 text-xs text-white/40">${esc(L.updatedAt)} ${esc(hhmm)}</div>` : ''}
  </div>`;

  const forecast = `<div class="mt-10">
    <div class="text-xs uppercase tracking-[0.25em] text-[color:var(--color-emerald)]">${esc(L.forecast7)}</div>
    <div class="mt-5 grid grid-cols-2 md:grid-cols-7 gap-3">
      ${d.daily
        .map((day, i) => {
          const c = conditionOf(day.code);
          return `<div class="rounded-2xl bg-white border border-black/5 p-4 text-center">
            <div class="text-xs text-[color:var(--color-moss)]/60">${esc(i === 0 ? L.today : weekdayShort(day.date, locale))}</div>
            <div class="flex justify-center my-3 text-[color:var(--color-emerald)]">${wxIcon(c, 'w-7 h-7')}</div>
            <div class="num-display text-lg">${round(day.tmax)}° <span class="text-[color:var(--color-moss)]/45">${round(day.tmin)}°</span></div>
            <div class="text-xs text-[color:var(--color-moss)]/60 mt-1.5">${esc(L.precipShort)} ${round(day.pop)}%</div>
          </div>`;
        })
        .join('')}
    </div>
  </div>`;

  const riskBlock = adv.risks.length ? groupCard(L.gRisk, adv.risks, L, 'risk') : '';
  const adviceGrid = [
    groupCard(L.gDress, adv.dress, L, 'plain'),
    groupCard(L.gPlay, adv.play, L, 'plain'),
    groupCard(L.gItems, adv.items, L, 'plain'),
  ]
    .filter(Boolean)
    .join('');

  const advice = `<div class="mt-10 space-y-5">
    ${riskBlock ? `<div>${riskBlock}</div>` : ''}
    ${adviceGrid ? `<div class="grid md:grid-cols-3 gap-5">${adviceGrid}</div>` : ''}
  </div>`;

  const sea = d.marine
    ? `<div class="mt-10 rounded-3xl bg-[color:var(--color-mist)] border border-black/5 p-6 md:p-8">
        <div class="text-xs uppercase tracking-[0.25em] text-[color:var(--color-emerald)]">${esc(L.seaTitle)}</div>
        <div class="mt-6 grid md:grid-cols-[auto,1fr] gap-8 items-center">
          <div class="flex gap-10">
            <div><div class="text-xs text-[color:var(--color-moss)]/60">${esc(L.waveLabel)}</div><div class="num-display text-4xl mt-1">${d.marine.wave.toFixed(1)} m</div></div>
            <div><div class="text-xs text-[color:var(--color-moss)]/60">${esc(L.seaTempLabel)}</div><div class="num-display text-4xl mt-1">${round(d.marine.seaTemp)}°</div></div>
          </div>
          <div class="space-y-2.5">${bulletList(adv.sea, L, 'bg-[color:var(--color-emerald)]', 'text-[color:var(--color-ink)]/90')}</div>
        </div>
      </div>`
    : '';

  return `<div>${currentCard}${forecast}${advice}${sea}
    <div class="mt-8 text-center text-xs text-[color:var(--color-moss)]/50">${esc(L.source)}</div>
  </div>`;
}
