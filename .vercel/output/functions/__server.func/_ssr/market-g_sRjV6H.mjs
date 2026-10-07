import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { n as TOKEN } from "./token-D9fxp8v3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/market-g_sRjV6H.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var EMPTY = {
	priceUsd: null,
	mcap: null,
	fdv: null,
	liquidity: null,
	holders: null,
	volume24h: null,
	priceChange24h: null,
	priceChange1h: null,
	holderChange24h: null,
	volumeChange24h: null,
	supply: TOKEN.supply,
	graduationPct: null,
	mintRevoked: true,
	freezeRevoked: true,
	topHoldersPct: null,
	updatedAt: Date.now()
};
async function getJson(url, timeoutMs = 8e3) {
	const ctrl = new AbortController();
	const timer = setTimeout(() => ctrl.abort(), timeoutMs);
	try {
		const res = await fetch(url, {
			headers: {
				accept: "application/json",
				"user-agent": "GLDNDOG-dashboard/1.0"
			},
			signal: ctrl.signal
		});
		if (!res.ok) return null;
		return await res.json();
	} catch {
		return null;
	} finally {
		clearTimeout(timer);
	}
}
async function loadMarket() {
	const [jup, gecko] = await Promise.all([getJson(`https://lite-api.jup.ag/tokens/v2/search?query=${TOKEN.mint}`), getJson(`https://api.geckoterminal.com/api/v2/networks/solana/tokens/${TOKEN.mint}`)]);
	const token = Array.isArray(jup) ? jup[0] : void 0;
	const stats = token?.stats24h;
	const volume = (stats?.buyVolume ?? 0) + (stats?.sellVolume ?? 0);
	return {
		priceUsd: token?.usdPrice ?? null,
		mcap: token?.mcap ?? token?.fdv ?? null,
		fdv: token?.fdv ?? null,
		liquidity: token?.liquidity ?? null,
		holders: token?.holderCount ?? null,
		volume24h: volume > 0 ? volume : null,
		priceChange24h: stats?.priceChange ?? null,
		priceChange1h: token?.stats1h?.priceChange ?? null,
		holderChange24h: stats?.holderChange ?? null,
		volumeChange24h: stats?.volumeChange ?? null,
		supply: token?.circSupply ?? token?.totalSupply ?? TOKEN.supply,
		graduationPct: gecko?.data?.attributes?.launchpad_details?.graduation_percentage ?? null,
		mintRevoked: token?.audit?.mintAuthorityDisabled ?? true,
		freezeRevoked: token?.audit?.freezeAuthorityDisabled ?? true,
		topHoldersPct: token?.audit?.topHoldersPercentage ?? null,
		updatedAt: Date.now()
	};
}
var fetchMarket_createServerFn_handler = createServerRpc({
	id: "5cc5d6d3d691dda88334777b1b79aea01a701d2e1e1db865c87b6b016e2cbfd8",
	name: "fetchMarket",
	filename: "src/lib/market.ts"
}, (opts) => fetchMarket.__executeServer(opts));
var fetchMarket = createServerFn({ method: "GET" }).handler(fetchMarket_createServerFn_handler, async () => {
	try {
		return await loadMarket();
	} catch {
		return {
			...EMPTY,
			updatedAt: Date.now()
		};
	}
});
//#endregion
export { fetchMarket_createServerFn_handler };
