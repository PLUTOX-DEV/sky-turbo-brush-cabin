import { Menu, X } from "lucide-react";
import { useState } from "react";
import { TelegramLogo, XLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { LINKS, TOKEN } from "@/lib/token";

const NAV = [
  { href: "#chart", label: "Chart" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#community", label: "Community" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/images/logo.jpg" alt="" width={36} height={36} className="size-9 rounded-full object-cover ring-2 ring-gold/70" />
          <span className="text-sm font-semibold tracking-wide text-gold-bright">{TOKEN.ticker}</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex" aria-label="Primary">
          {NAV.map((item) => <a key={item.href} href={item.href} className="transition-colors duration-(--motion-quick) hover:text-fg">{item.label}</a>)}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm"><a href={LINKS.jupiter} target="_blank" rel="noreferrer">Buy $GLDNDOG</a></Button>
          <a href={LINKS.telegram} target="_blank" rel="noreferrer" aria-label="Join GLDNDOG on Telegram" className="inline-flex size-9 items-center justify-center rounded-full border border-gold/25 text-gold-bright transition-colors hover:border-gold/60 hover:bg-gold/10"><TelegramLogo className="size-4" /></a>
          <a href={LINKS.x} target="_blank" rel="noreferrer" aria-label="Follow GLDNDOG on X" className="inline-flex size-9 items-center justify-center rounded-full border border-gold/25 text-gold-bright transition-colors hover:border-gold/60 hover:bg-gold/10"><XLogo className="size-4" /></a>
        </div>

        <button type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold-bright md:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-gold/10 bg-surface px-4 py-3 md:hidden" aria-label="Mobile">
          {NAV.map((item) => <a key={item.href} href={item.href} className="block rounded-lg px-3 py-3 text-sm text-cream hover:bg-elevated" onClick={() => setOpen(false)}>{item.label}</a>)}
          <div className="mt-2 grid grid-cols-3 gap-2 pb-2">
            <Button asChild size="sm"><a href={LINKS.jupiter} target="_blank" rel="noreferrer">Buy</a></Button>
            <Button asChild variant="outline" size="sm"><a href={LINKS.telegram} target="_blank" rel="noreferrer"><TelegramLogo className="size-3.5" />TG</a></Button>
            <Button asChild variant="outline" size="sm"><a href={LINKS.x} target="_blank" rel="noreferrer"><XLogo className="size-3.5" />X</a></Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
