import { useEffect, useMemo, useState } from "react";
import { formatPrice, type MarketSnapshot } from "@/lib/market";

type Pt = { t: number; p: number };

function seedAnchors(market: MarketSnapshot, windowMs: number, now: number): Pt[] {
  const price = market.priceUsd ?? 0;
  const ch24 = market.priceChange24h ?? 0;
  const ch1h = market.priceChange1h ?? 0;
  const p24 = price / (1 + ch24 / 100);
  const p1h = price / (1 + ch1h / 100);
  const start = now - windowMs;
  const hour = now - 60 * 60 * 1000;
  const day = now - 24 * 60 * 60 * 1000;
  const anchors: Pt[] = [
    { t: day, p: p24 },
    { t: hour, p: p1h },
    { t: now, p: price },
  ].filter((pt) => pt.t >= start - 1000);
  if (anchors[0] && anchors[0].t > start) anchors.unshift({ t: start, p: anchors[0].p });
  return anchors;
}

function interpolate(anchors: Pt[], windowMs: number, now: number): Pt[] {
  if (anchors.length === 0) return [];
  const start = now - windowMs;
  const out: Pt[] = [];
  const steps = 48;
  for (let i = 0; i <= steps; i++) {
    const t = start + (windowMs * i) / steps;
    let a = anchors[0]!;
    let b = anchors[anchors.length - 1]!;
    for (let j = 0; j < anchors.length - 1; j++) {
      if (t >= anchors[j]!.t && t <= anchors[j + 1]!.t) {
        a = anchors[j]!;
        b = anchors[j + 1]!;
        break;
      }
    }
    const span = Math.max(1, b.t - a.t);
    const u = Math.min(1, Math.max(0, (t - a.t) / span));
    const e = u * u * (3 - 2 * u);
    out.push({ t, p: a.p + (b.p - a.p) * e });
  }
  return out;
}

function niceRange(min: number, max: number) {
  if (min === max) {
    const pad = Math.max(Math.abs(min) * 0.08, 1e-9);
    return { min: min - pad, max: max + pad };
  }
  const pad = (max - min) * 0.12;
  return { min: min - pad, max: max + pad };
}

export function PriceChart({
  market,
  windowMs,
}: {
  market: MarketSnapshot | undefined;
  windowMs: number;
}) {
  const [ticks, setTicks] = useState<Pt[]>([]);

  useEffect(() => {
    if (market?.priceUsd == null) return;
    const tick = { t: market.updatedAt || Date.now(), p: market.priceUsd };
    setTicks((prev) => {
      const last = prev[prev.length - 1];
      if (last && last.p === tick.p && Math.abs(last.t - tick.t) < 2000) return prev;
      return [...prev, tick].slice(-160);
    });
  }, [market?.priceUsd, market?.updatedAt]);

  const series = useMemo(() => {
    if (market?.priceUsd == null) return [];
    const now = Date.now();
    const seeded = interpolate(seedAnchors(market, windowMs, now), windowMs, now);
    const live = ticks.filter((pt) => pt.t >= now - windowMs);
    const merged = [...seeded.filter((pt) => live.every((l) => l.t - pt.t > 4000)), ...live];
    merged.sort((a, b) => a.t - b.t);
    if (merged.length) merged[merged.length - 1] = { t: now, p: market.priceUsd };
    return merged;
  }, [market, ticks, windowMs]);

  const w = 1000;
  const h = 420;
  const pad = { l: 16, r: 78, t: 18, b: 36 };

  const { path, area, yTicks, xTicks, last, lastX, lastY, up } = useMemo(() => {
    const empty = {
      path: "",
      area: "",
      yTicks: [] as { y: number; label: string }[],
      xTicks: [] as { x: number; label: string }[],
      last: null as number | null,
      lastX: 0,
      lastY: 0,
      up: true,
    };
    if (series.length < 2) return empty;
    const prices = series.map((p) => p.p);
    const { min, max } = niceRange(Math.min(...prices), Math.max(...prices));
    const innerW = w - pad.l - pad.r;
    const innerH = h - pad.t - pad.b;
    const t0 = series[0]!.t;
    const t1 = series[series.length - 1]!.t;
    const xOf = (t: number) => pad.l + ((t - t0) / Math.max(1, t1 - t0)) * innerW;
    const yOf = (p: number) => pad.t + (1 - (p - min) / (max - min)) * innerH;

    const d = series
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.t).toFixed(1)} ${yOf(pt.p).toFixed(1)}`)
      .join(" ");
    const lastPt = series[series.length - 1]!;
    const areaD = `${d} L ${xOf(lastPt.t).toFixed(1)} ${pad.t + innerH} L ${xOf(series[0]!.t).toFixed(1)} ${pad.t + innerH} Z`;

    const yTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => {
      const val = min + (max - min) * (1 - f);
      return { y: pad.t + f * innerH, label: formatPrice(val) };
    });

    const fmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric" });
    const xTicks = [0, 0.33, 0.66, 1].map((f) => {
      const t = t0 + (t1 - t0) * f;
      return { x: pad.l + f * innerW, label: fmt.format(t) };
    });

    return {
      path: d,
      area: areaD,
      yTicks,
      xTicks,
      last: lastPt.p,
      lastX: xOf(lastPt.t),
      lastY: yOf(lastPt.p),
      up: lastPt.p >= series[0]!.p,
    };
  }, [series]);

  if (!market?.priceUsd) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-muted">Loading live price…</div>
    );
  }

  const stroke = up ? "var(--color-up)" : "var(--color-gold)";

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" role="img" aria-label="GLDNDOG live price chart">
      <defs>
        <linearGradient id="gldn-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      {yTicks.map((tick) => (
        <g key={tick.y}>
          <line
            x1={pad.l}
            x2={w - pad.r}
            y1={tick.y}
            y2={tick.y}
            stroke="currentColor"
            className="text-gold/15"
          />
          <text
            x={w - pad.r + 8}
            y={tick.y + 4}
            className="fill-muted"
            fontSize="11"
            fontFamily="ui-monospace, monospace"
          >
            {tick.label}
          </text>
        </g>
      ))}
      {path ? <path d={area} fill="url(#gldn-fill)" /> : null}
      {path ? (
        <path
          d={path}
          fill="none"
          stroke={stroke}
          strokeWidth="2.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ) : null}
      {last != null ? (
        <>
          <line
            x1={pad.l}
            x2={w - pad.r}
            y1={lastY}
            y2={lastY}
            stroke={stroke}
            strokeDasharray="4 4"
            strokeOpacity="0.45"
          />
          <circle cx={lastX} cy={lastY} r="5" fill={stroke} />
          <circle cx={lastX} cy={lastY} r="9" fill={stroke} opacity="0.25" />
          <rect x={w - pad.r + 4} y={lastY - 11} width="70" height="20" rx="4" fill={stroke} />
          <text
            x={w - pad.r + 39}
            y={lastY + 3}
            textAnchor="middle"
            fontSize="10"
            fontFamily="ui-monospace, monospace"
            fill="var(--color-ink)"
          >
            {formatPrice(last)}
          </text>
        </>
      ) : null}
      {xTicks.map((tick) => (
        <text key={tick.x} x={tick.x} y={h - 12} textAnchor="middle" className="fill-subtle" fontSize="11">
          {tick.label}
        </text>
      ))}
    </svg>
  );
}
