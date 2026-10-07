import { useState } from "react";
import { SolanaMark } from "@/components/icons";
import { PriceChart } from "@/components/price-chart";
import { changeTone, formatPct, formatPrice, formatUsd, type MarketSnapshot } from "@/lib/market";
import { LINKS, TOKEN } from "@/lib/token";
import { cn } from "@/lib/utils";

const WINDOWS = [
  { label: "1h", ms: 60 * 60 * 1000 },
  { label: "4h", ms: 4 * 60 * 60 * 1000 },
  { label: "1d", ms: 24 * 60 * 60 * 1000 },
] as const;

export function LiveChart({ market }: { market: MarketSnapshot | undefined }) {
  const [window, setWindow] = useState<(typeof WINDOWS)[number]>(WINDOWS[2]);
  const tone = changeTone(market?.priceChange24h);

  return (
    <section id="chart" className="section-anchor relative z-20 mx-auto max-w-7xl px-4 sm:px-6">
      <div className="panel overflow-hidden">
        <div className="flex flex-col gap-4 border-b border-gold/15 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full object-cover ring-1 ring-gold/50"
            />
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>{TOKEN.ticker}</span>
                <span className="text-muted">/</span>
                <span className="text-gold-bright">${TOKEN.quoteSymbol}</span>
              </div>
              <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted">
                <SolanaMark className="size-3.5" />
                Solana
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start gap-1 sm:items-center">
            <p className="ticker text-2xl font-semibold text-gold-bright sm:text-3xl">
              {formatPrice(market?.priceUsd)}
            </p>
            <p
              className={cn(
                "text-sm font-medium",
                tone === "up" && "text-up",
                tone === "down" && "text-down",
                tone === "flat" && "text-muted",
              )}
            >
              {formatPct(market?.priceChange24h)}
              <span className="ml-1 text-subtle">(24h)</span>
            </p>
          </div>

          <div className="text-left sm:min-w-40 sm:text-right">
            <p className="text-xs text-muted">Market Cap</p>
            <p className="ticker text-lg font-semibold text-gold-bright">{formatUsd(market?.mcap)}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gold/10 px-3 py-2 sm:px-4">
          <div className="flex flex-wrap gap-1" role="tablist" aria-label="Chart window">
            {WINDOWS.map((item) => {
              const active = item.label === window.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setWindow(item)}
                  className={cn(
                    "h-8 min-w-10 rounded-full px-3 text-xs font-medium transition-colors duration-(--motion-quick)",
                    active ? "bg-gold text-ink" : "text-muted hover:bg-elevated hover:text-fg",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <p className="flex items-center gap-2 text-xs text-subtle">
            <span className="size-1.5 rounded-full bg-live" />
            {TOKEN.symbol} / {TOKEN.quoteSymbol} · {window.label} · live
          </p>
        </div>

        <div className="chart-frame bg-black/40">
          <PriceChart market={market} windowMs={window.ms} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gold/10 px-4 py-3 text-xs text-muted">
          <p>Live price from Jupiter. Full candle chart on Birdeye.</p>
          <div className="flex flex-wrap gap-3">
            <a className="hover:text-gold-bright" href={LINKS.birdeye} target="_blank" rel="noreferrer">
              Open live chart
            </a>
            <a className="hover:text-gold-bright" href={LINKS.geckoterminal} target="_blank" rel="noreferrer">
              GeckoTerminal
            </a>
            <a className="hover:text-gold-bright" href={LINKS.jupiter} target="_blank" rel="noreferrer">
              Buy on Jupiter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
