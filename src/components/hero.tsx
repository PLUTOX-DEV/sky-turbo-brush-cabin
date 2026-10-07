import { TelegramLogo, XLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { LINKS, TOKEN } from "@/lib/token";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8">
      <div className="hero-frame relative isolate overflow-hidden">
        <img
          src="/images/dog-mark.jpg"
          alt=""
          className="pointer-events-none absolute -right-10 top-0 hidden w-72 opacity-20 mix-blend-lighten lg:block"
        />
        <img
          src="/images/hero-dog.jpg"
          alt="Golden retriever holding a gold bar"
          width={1600}
          height={900}
          className="hero-dog pointer-events-none relative z-0 mx-auto mt-2 w-full max-w-sm lg:absolute lg:top-0 lg:right-0 lg:z-0 lg:mt-0 lg:h-full lg:max-w-none lg:w-5/12 lg:object-contain lg:object-right"
        />

        <div className="relative z-20 max-w-lg pb-4 pt-2 lg:pb-10 lg:pt-8">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-bright uppercase">
            <span className="inline-block size-2 rounded-full bg-gold" />
            Solana meme coin
          </p>
          <h1 className="gold-text hero-title font-display font-extrabold tracking-tight">{TOKEN.ticker}</h1>
          <p className="mt-4 text-lg font-medium text-gold-bright sm:text-xl">{TOKEN.tagline}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">{TOKEN.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={LINKS.telegram} target="_blank" rel="noreferrer">
                <TelegramLogo className="size-4" />
                Join TG
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={LINKS.x} target="_blank" rel="noreferrer">
                <XLogo className="size-4" />
                Follow on X
              </a>
            </Button>
          </div>
        </div>

        <p className="pointer-events-none absolute right-4 bottom-6 z-20 hidden max-w-40 text-right font-script text-3xl leading-tight text-gold-bright lg:block">
          {TOKEN.quote}
        </p>
      </div>
    </section>
  );
}
