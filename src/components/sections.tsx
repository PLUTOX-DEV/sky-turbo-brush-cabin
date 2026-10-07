import {
  Check,
  Copy,
  ExternalLink,
  Heart,
  PawPrint,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SolanaMark, TelegramLogo, XLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { formatCount, formatPct, type MarketSnapshot } from "@/lib/market";
import { LINKS, TOKEN, shortMint } from "@/lib/token";

export function FeatureRow() {
  const items = [
    {
      icon: PawPrint,
      title: "Community Driven",
      body: "Built by the pack, for the pack. $GLDNDOG is about belonging.",
    },
    {
      icon: Shield,
      title: "Real Utility",
      body: "Supporting dog shelters and spreading positivity with every milestone.",
    },
    {
      icon: Zap,
      title: "Solana Powered",
      body: "Fast. Low fees. Global. Paired with tokenized $GOLD.",
    },
    {
      icon: Heart,
      title: "Golden Future",
      body: "More dogs. More love. More $GLDNDOG.",
    },
  ] as const;

  return (
    <section className="mx-auto mt-3 grid max-w-7xl gap-3 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className="panel flex items-start gap-4 px-5 py-4">
          <span className="mt-0.5 flex size-10 items-center justify-center rounded-full bg-gold/12 text-gold">
            <item.icon className="size-5" />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-fg">{item.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export function Tokenomics({ market }: { market: MarketSnapshot | undefined }) {
  const rows = [
    { label: "Total supply", value: `${formatCount(TOKEN.supply)} ${TOKEN.symbol}` },
    { label: "Pair", value: `${TOKEN.symbol} / ${TOKEN.quoteSymbol}` },
    { label: "Mint authority", value: market?.mintRevoked ? "Revoked" : "Check explorer" },
    { label: "Freeze authority", value: market?.freezeRevoked ? "Revoked" : "Check explorer" },
    { label: "Top holders", value: market?.topHoldersPct != null ? formatPct(market.topHoldersPct) : "—" },
    {
      label: "Launchpad",
      value: market?.graduationPct != null ? `${market.graduationPct.toFixed(1)}% to Raydium` : "StonkFun / LaunchLab",
    },
  ];

  return (
    <section id="tokenomics" className="section-anchor mx-auto mt-16 max-w-7xl px-4 sm:px-6">
      <header className="mb-6 max-w-2xl">
        <p className="text-xs font-semibold tracking-widest text-gold uppercase">Tokenomics</p>
        <h2 className="mt-2 text-2xl font-semibold">Simple supply. Golden pair.</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          1 billion {TOKEN.symbol} on Solana, paired with Oro $GOLD. No hidden mint. Shelter donations scale with
          market-cap milestones — {TOKEN.donation.rule}
        </p>
      </header>

      <div className="grid gap-3 lg:grid-cols-3">
        <div className="panel overflow-hidden lg:col-span-2">
          <dl className="divide-y divide-gold/10">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 px-5 py-4">
                <dt className="text-sm text-muted">{row.label}</dt>
                <dd className="ticker text-sm font-medium text-fg">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="panel flex flex-col justify-between gap-5 px-5 py-5">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">Shelter pact</p>
            <p className="mt-3 text-2xl font-semibold text-gold-bright">$1k / $100k MC</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Every $100k of market cap unlocks another $1,000 for dog shelters. The pack grows, the dogs eat.
            </p>
          </div>
          <CopyMint />
        </aside>
      </div>
    </section>
  );
}

export function Roadmap() {
  const phases = [
    {
      phase: "01",
      title: "Genesis",
      status: "Live",
      body: "Launched on StonkFun, paired with Oro $GOLD. The retriever retrieved gold.",
    },
    {
      phase: "02",
      title: "The Pack",
      status: "Now",
      body: "Website, Telegram + X, and Dexscreener verification. Community first.",
    },
    {
      phase: "03",
      title: "Shelter Drops",
      status: "Next",
      body: "Hit the first $100k market-cap milestone and send $1k to dog shelters.",
    },
    {
      phase: "04",
      title: "Golden Future",
      status: "Soon",
      body: "Raydium graduation, partnerships, and more dogs in more homes.",
    },
  ] as const;

  return (
    <section id="roadmap" className="section-anchor mx-auto mt-16 max-w-7xl px-4 sm:px-6">
      <header className="mb-6">
        <p className="text-xs font-semibold tracking-widest text-gold uppercase">Roadmap</p>
        <h2 className="mt-2 text-2xl font-semibold">The path to a brighter future</h2>
      </header>
      <ol className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {phases.map((item) => (
          <li key={item.phase} className="panel px-5 py-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-gold">{item.phase}</span>
              <span className="rounded-full border border-gold/30 px-2.5 py-0.5 text-xs text-gold-bright">
                {item.status}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Community() {
  return (
    <section id="community" className="section-anchor mx-auto mt-16 max-w-7xl px-4 sm:px-6">
      <div className="panel overflow-hidden px-5 py-8 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">Community</p>
            <h2 className="mt-2 text-2xl font-semibold">Come sit with the pack</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
              Charts fade. Community stays. Jump into Telegram, follow on X, copy the contract, and retrieve $GOLD with
              a heart of gold.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href={LINKS.telegram} target="_blank" rel="noreferrer">
                  <TelegramLogo className="size-4" />
                  Telegram
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={LINKS.x} target="_blank" rel="noreferrer">
                  <XLogo className="size-4" />
                  Follow on X
                </a>
              </Button>
              <Button asChild variant="dark">
                <a href={LINKS.jupiter} target="_blank" rel="noreferrer">
                  Buy {TOKEN.ticker}
                  <ExternalLink className="size-3.5" />
                </a>
              </Button>
            </div>
            <div className="mt-6">
              <CopyMint />
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/mascot.jpg"
              alt="Golden retriever mascot"
              width={512}
              height={512}
              className="mx-auto w-full max-w-sm rounded-xl object-cover ring-1 ring-gold/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-16 max-w-7xl px-4 pb-12 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-gold/15 py-6 text-xs text-subtle sm:flex-row sm:items-center">
        <p className="flex items-center gap-2">
          <img src="/images/logo.jpg" alt="" className="size-6 rounded-full object-cover" />
          {TOKEN.ticker} · {TOKEN.chain}
        </p>
        <p className="flex items-center gap-2">
          <SolanaMark className="size-3.5" />
          Meme coin. Not financial advice. DYOR.
        </p>
        <div className="flex gap-4">
          <a href={LINKS.solscan} target="_blank" rel="noreferrer" className="hover:text-gold-bright">
            Solscan
          </a>
          <a href={LINKS.stonkfun} target="_blank" rel="noreferrer" className="hover:text-gold-bright">
            StonkFun
          </a>
          <a href={LINKS.oro} target="_blank" rel="noreferrer" className="hover:text-gold-bright">
            $GOLD
          </a>
        </div>
      </div>
    </footer>
  );
}

function CopyMint() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(TOKEN.mint);
      setCopied(true);
      toast.success("Contract copied");
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error("Could not copy");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-gold/25 bg-elevated px-3 py-3 text-left transition-colors duration-(--motion-quick) hover:border-gold/50"
    >
      <span>
        <span className="block text-xs tracking-wide text-muted uppercase">Contract</span>
        <span className="mt-0.5 block font-mono text-xs text-cream sm:text-sm">{shortMint()}</span>
      </span>
      {copied ? <Check className="size-4 text-up" /> : <Copy className="size-4 text-gold" />}
    </button>
  );
}
