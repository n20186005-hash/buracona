// Presentation layer for the tide module.
//
// Same pattern as weatherView.ts: one HTML source of truth shared by the
// build-time render and the client-side live refresh.

import { buildTideAdvice, type TideData, type TideExtreme } from './tide';
import { weekdayShort } from './weatherView';

const esc = (s: unknown): string =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string);

const hhmm = (t: string): string => t.slice(11, 16);

function dayLabel(date: string, locale: string): string {
  try {
    return new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(
      new Date(`${date}T12:00:00Z`)
    );
  } catch {
    return date.slice(5);
  }
}

/** 24-hour tide curve: six hours either side of "now", with a marker for now. */
function tideCurve(d: TideData): string {
  const start = Math.max(0, d.nowIndex - 6);
  const end = Math.min(d.heights.length - 1, d.nowIndex + 18);
  const n = end - start + 1;
  if (n < 3) return '';

  const vals = d.heights.slice(start, end + 1);
  const lo = Math.min(...vals);
  const hi = Math.max(...vals);
  const span = hi - lo || 1;

  const W = 720;
  const H = 150;
  const PAD = 18;
  const xs = (i: number) => ((i / (n - 1)) * W).toFixed(1);
  const ys = (v: number) => (PAD + (1 - (v - lo) / span) * (H - PAD * 2)).toFixed(1);

  const line = vals
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${xs(i)},${ys(v)}`)
    .join(' ');
  const area = `${line} L${W},${H} L0,${H} Z`;
  const nowX = xs(d.nowIndex - start);
  const nowY = ys(d.current);

  return `<svg viewBox="0 0 ${W} ${H}" class="w-full h-auto" role="img">
    <defs>
      <linearGradient id="tide-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--color-emerald)" stop-opacity="0.26" />
        <stop offset="100%" stop-color="var(--color-emerald)" stop-opacity="0.02" />
      </linearGradient>
    </defs>
    <path d="${area}" fill="url(#tide-fill)" />
    <path d="${line}" fill="none" stroke="var(--color-emerald)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
    <line x1="${nowX}" y1="0" x2="${nowX}" y2="${H}" stroke="var(--color-sun)" stroke-width="1.5" stroke-dasharray="4 4" />
    <circle cx="${nowX}" cy="${nowY}" r="5.5" fill="var(--color-sun)" stroke="var(--color-cream)" stroke-width="2.5" />
  </svg>`;
}

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
  const shell = tone === 'risk' ? 'bg-red-50 border border-red-200' : 'bg-white border border-black/5';
  const head = tone === 'risk' ? 'text-red-600' : 'text-[color:var(--color-emerald)]';
  const dot = tone === 'risk' ? 'bg-red-500' : 'bg-[color:var(--color-emerald)]';
  const text = tone === 'risk' ? 'text-red-900' : 'text-[color:var(--color-ink)]/90';
  return `<div class="rounded-3xl ${shell} p-6 md:p-7">
    <div class="text-xs uppercase tracking-widest ${head}">${esc(title)}</div>
    <div class="mt-4 space-y-2.5">${bulletList(keys, L, dot, text)}</div>
  </div>`;
}

function extremeChip(e: TideExtreme, L: any): string {
  const isHigh = e.kind === 'high';
  return `<div class="flex-1 min-w-[130px] rounded-2xl bg-white border border-black/5 px-5 py-4">
    <div class="text-xs ${isHigh ? 'text-[color:var(--color-emerald)]' : 'text-[color:var(--color-moss)]/60'}">${isHigh ? esc(L.high) : esc(L.low)}</div>
    <div class="num-display text-2xl mt-1">${hhmm(e.time)}</div>
    <div class="text-xs text-[color:var(--color-moss)]/60 mt-1">${e.height.toFixed(2)} m</div>
  </div>`;
}

export function renderTideHtml(d: TideData | null, L: any, locale: string): string {
  if (!d || !d.times.length) {
    return `<div class="rounded-3xl bg-white border border-black/5 p-8 text-center text-sm text-[color:var(--color-moss)]/70">${esc(L.error)}</div>`;
  }

  const span = d.dayMax - d.dayMin;
  const pos = span > 0.01 ? (d.current - d.dayMin) / span : 0.5;
  const pct = Math.round(pos * 100);
  const adv = buildTideAdvice(d);
  const updated = hhmm(d.updatedIso);

  const trend = d.rising ? L.rising : L.falling;
  const nextHigh = d.nextHigh ? `${esc(L.nextHigh)} ${hhmm(d.nextHigh.time)}` : '';
  const nextLow = d.nextLow ? `${esc(L.nextLow)} ${hhmm(d.nextLow.time)}` : '';
  const sub = [trend, nextHigh, nextLow].filter(Boolean).map(esc).join(' · ');

  const currentCard = `<div class="rounded-3xl bg-[color:var(--color-ink)] text-[color:var(--color-cream)] p-8 md:p-10">
    <div class="flex flex-wrap items-start justify-between gap-8">
      <div>
        <div class="text-xs uppercase tracking-[0.25em] text-[color:var(--color-sun)]">${esc(L.nowLabel)}</div>
        <div class="mt-4 flex items-end gap-3">
          <div class="num-display text-6xl md:text-7xl leading-none">${d.current.toFixed(2)}</div>
          <div class="text-2xl text-white/50 pb-1">m</div>
        </div>
        <div class="text-white/70 mt-3 text-sm">${sub}</div>
      </div>
      <div class="grid grid-cols-3 gap-x-8 gap-y-5 text-sm">
        <div><div class="text-white/50 text-xs">${esc(L.rangeLabel)}</div><div class="mt-1 text-white/90">${span.toFixed(2)} m</div></div>
        <div><div class="text-white/50 text-xs">${esc(L.moonLabel)}</div><div class="mt-1 text-white/90">${esc(L.moon?.[d.moon.name] ?? '')}</div></div>
        <div><div class="text-white/50 text-xs">${esc(L.strengthLabel)}</div><div class="mt-1 text-white/90">${esc(L.strength?.[d.moon.strength] ?? '')}</div></div>
      </div>
    </div>
    <div class="mt-8">
      <div class="h-2 rounded-full bg-white/15 overflow-hidden">
        <div class="h-full bg-[color:var(--color-sun)]" style="width:${pct}%"></div>
      </div>
      <div class="mt-2 flex justify-between text-xs text-white/40">
        <span>${esc(L.dayMin)} ${d.dayMin.toFixed(2)} m</span>
        <span>${esc(L.dayMax)} ${d.dayMax.toFixed(2)} m</span>
      </div>
    </div>
    ${updated ? `<div class="mt-6 pt-5 border-t border-white/10 text-xs text-white/40">${esc(L.updatedAt)} ${esc(updated)}</div>` : ''}
  </div>`;

  const ticks: string[] = [];
  const cStart = Math.max(0, d.nowIndex - 6);
  const cEnd = Math.min(d.heights.length - 1, d.nowIndex + 18);
  for (let i = cStart; i <= cEnd; i += 6) ticks.push(hhmm(d.times[i]));

  const curve = `<div class="mt-6 rounded-3xl bg-white border border-black/5 p-6 md:p-8">
    <div class="text-xs uppercase tracking-[0.25em] text-[color:var(--color-emerald)]">${esc(L.curveLabel)}</div>
    <div class="mt-6">${tideCurve(d)}</div>
    <div class="mt-3 flex justify-between text-xs text-[color:var(--color-moss)]/50 num-display">${ticks.map((t) => `<span>${t}</span>`).join('')}</div>
  </div>`;

  const todayBlock = d.today && d.today.extremes.length
    ? `<div class="mt-6">
        <div class="text-xs uppercase tracking-[0.25em] text-[color:var(--color-emerald)]">${esc(L.todayLabel)}</div>
        <div class="mt-5 flex flex-wrap gap-3">${d.today.extremes.map((e) => extremeChip(e, L)).join('')}</div>
      </div>`
    : '';

  const future = d.days.filter((day) => day.date !== d.today?.date).slice(0, 6);
  const futureBlock = future.length
    ? `<div class="mt-10">
        <div class="text-xs uppercase tracking-[0.25em] text-[color:var(--color-emerald)]">${esc(L.daysAhead)}</div>
        <div class="mt-5 grid grid-cols-2 md:grid-cols-6 gap-3">
          ${future
            .map(
              (day) => `<div class="rounded-2xl bg-white border border-black/5 p-4">
                <div class="text-xs text-[color:var(--color-moss)]/60">${esc(weekdayShort(day.date, locale))}</div>
                <div class="text-sm mt-0.5">${esc(dayLabel(day.date, locale))}</div>
                <div class="mt-3 space-y-1.5">
                  ${day.extremes
                    .slice(0, 4)
                    .map(
                      (e) =>
                        `<div class="flex items-center gap-1.5 text-xs ${e.kind === 'high' ? 'text-[color:var(--color-emerald)]' : 'text-[color:var(--color-moss)]/70'}"><span aria-hidden="true">${e.kind === 'high' ? '↑' : '↓'}</span><span class="num-display">${hhmm(e.time)}</span></div>`
                    )
                    .join('')}
                </div>
              </div>`
            )
            .join('')}
        </div>
      </div>`
    : '';

  const advice = `<div class="mt-10 grid md:grid-cols-3 gap-5">
    ${groupCard(L.gBest, adv.best, L, 'plain')}
    ${groupCard(L.gExplore, adv.explore, L, 'plain')}
    ${groupCard(L.gSafety, adv.safety, L, 'risk')}
  </div>`;

  return `<div>${currentCard}${curve}${todayBlock}${futureBlock}${advice}
    <div class="mt-8 text-center text-xs text-[color:var(--color-moss)]/50">${esc(L.source)}</div>
  </div>`;
}
