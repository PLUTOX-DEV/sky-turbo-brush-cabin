import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { FeatureRow, Community, Roadmap, SiteFooter, Tokenomics } from "@/components/sections";
import { Hero } from "@/components/hero";
import { LiveChart } from "@/components/live-chart";
import { SiteHeader } from "@/components/site-header";
import { StatsRow } from "@/components/stats-row";
import { fetchMarket } from "@/lib/market";

export const Route = createFileRoute("/")({
  loader: () => fetchMarket(),
  component: Home,
});

function Home() {
  const initial = Route.useLoaderData();
  const fetchMarketFn = useServerFn(fetchMarket);
  const { data } = useQuery({
    queryKey: ["market"],
    queryFn: () => fetchMarketFn(),
    initialData: initial,
    refetchInterval: 12_000,
  });

  return (
    <div id="top" className="min-h-dvh">
      <SiteHeader />
      <main>
        <Hero />
        <LiveChart market={data} />
        <StatsRow market={data} />
        <FeatureRow />
        <Tokenomics market={data} />
        <Roadmap />
        <Community />
      </main>
      <SiteFooter />
    </div>
  );
}
