import { BarChart3, Coins, Heart, Users } from "lucide-react";
import { changeTone, formatCount, formatPct, formatUsd, type MarketSnapshot } from "@/lib/market";
import { TOKEN } from "@/lib/token";
import { cn } from "@/lib/utils";

function Delta({ value }: { value: number | null | undefined }) {
  const tone = changeTone(value);
  return (
    <span
      className={cn(
        "text-xs font-medium",
        tone === "up" && "text-up",
        tone === "down" && "text-down",
        tone === "flat" && "text-muted",
      )}
    >
      {formatPct(value)}
    </span>
  );
}

export function StatsRow({ market }: { market: MarketSnapshot | undefined }) {
  const mcap = market?.mcap ?? 0;
  const goal = TOKEN.donation.mcapMilestone;
  const progress = mcap > 0 ? Math.min(100, (mcap / goal) * 100) : 0;

  return (
    <section className="mx-auto mt-5 grid max-w-7xl gap-3 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
      <article className="panel flex items-center gap-4 px-5 py-4">
        <span className="flex size-12 items-center justify-center rounded-full bg-gold/12 text-gold">
          <BarChart3 className="size-5" />
        </span>
        <div>
          <p className="text-xs text-muted">Market Cap</p>
          <p className="ticker text-xl font-semibold">{formatUsd(market?.mcap)}</p>
          <Delta value={market?.priceChange24h} />
        </div>
      </article>

      <article className="panel flex items-center gap-4 px-5 py-4">
        <span className="flex size-12 items-center justify-center rounded-full bg-gold/12 text-gold">
          <Users className="size-5" />
        </span>
        <div>
          <p className="text-xs text-muted">Holders</p>
          <p className="ticker text-xl font-semibold">{formatCount(market?.holders)}</p>
          <Delta value={market?.holderChange24h} />
        </div>
      </article>

      <article className="panel flex items-center gap-4 px-5 py-4">
        <span className="flex size-12 items-center justify-center rounded-full bg-gold/12 text-gold">
          <Coins className="size-5" />
        </span>
        <div>
          <p className="text-xs text-muted">Volume (24h)</p>
          <p className="ticker text-xl font-semibold">{formatUsd(market?.volume24h)}</p>
          <Delta value={market?.volumeChange24h} />
        </div>
      </article>

      <article className="panel flex items-center gap-4 px-5 py-4">
        <span className="flex size-12 items-center justify-center rounded-full bg-gold/12 text-gold">
          <Heart className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-muted">Donate Progress</p>
          <p className="text-sm font-medium text-cream">{TOKEN.donation.blurb}</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-elevated">
            <div
              className="h-full rounded-full bg-gold transition-[width] duration-(--motion-slow) ease-(--ease-out)"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-1 flex items-center justify-between text-xs text-muted">
            <span className="ticker">
              {formatUsd(mcap || null)} / {formatUsd(goal)}
            </span>
            <span className="ticker">{progress.toFixed(1)}%</span>
          </div>
        </div>
      </article>
    </section>
  );
}
