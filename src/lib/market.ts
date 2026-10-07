import { createServerFn } from "@tanstack/react-start";
import { TOKEN } from "./token";

export type MarketSnapshot = {
  priceUsd: number | null;
  mcap: number | null;
  fdv: number | null;
  liquidity: number | null;
  holders: number | null;
  volume24h: number | null;
  priceChange24h: number | null;
  priceChange1h: number | null;
  holderChange24h: number | null;
  volumeChange24h: number | null;
  supply: number;
  graduationPct: number | null;
  mintRevoked: boolean;
  freezeRevoked: boolean;
  topHoldersPct: number | null;
  updatedAt: number;
};

const EMPTY: MarketSnapshot = {
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
  updatedAt: Date.now(),
};

let lastGood: MarketSnapshot | null = null;

type JupiterToken = {
  usdPrice?: number;
  mcap?: number;
  fdv?: number;
  liquidity?: number;
  holderCount?: number;
  circSupply?: number;
  totalSupply?: number;
  stats1h?: { priceChange?: number };
  stats24h?: {
    priceChange?: number;
    holderChange?: number;
    volumeChange?: number;
    buyVolume?: number;
    sellVolume?: number;
  };
  audit?: {
    mintAuthorityDisabled?: boolean;
    freezeAuthorityDisabled?: boolean;
    topHoldersPercentage?: number;
  };
};

type DexPairs = {
  pairs?: Array<{
    baseToken?: { address?: string };
    priceUsd?: string;
    liquidity?: { usd?: number };
  }>;
};

async function getJson<T>(url: string, timeoutMs = 8000): Promise<T | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      headers: {
        accept: "application/json",
        "user-agent": "GLDNDOG-dashboard/1.0",
      },
      signal: ctrl.signal,
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function rpc(method: string, params: unknown[]): Promise<unknown> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch("https://api.mainnet-beta.solana.com", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
      signal: ctrl.signal,
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { result?: unknown };
    return json.result ?? null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function readU64(bytes: Uint8Array, offset: number): number {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const lo = view.getUint32(offset, true);
  const hi = view.getUint32(offset + 4, true);
  return lo + hi * 2 ** 32;
}

function decodeLaunchpad(base64Data: string) {
  const bin = atob(base64Data);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  if (bytes.length < 77) return null;
  const virtualA = readU64(bytes, 37);
  const virtualB = readU64(bytes, 45);
  const realA = readU64(bytes, 53);
  const realB = readU64(bytes, 61);
  const totalFundRaisingB = readU64(bytes, 69);
  const denom = virtualA - realA;
  if (denom <= 0) return null;
  const priceInGold = (virtualB + realB) / denom;
  const graduationPct = totalFundRaisingB > 0 ? (realB / totalFundRaisingB) * 100 : null;
  const quoteUi = realB / 10 ** TOKEN.decimals;
  return { priceInGold, graduationPct, quoteUi };
}

async function loadOnchain(): Promise<MarketSnapshot | null> {
  const [account, dex] = await Promise.all([
    rpc("getAccountInfo", [TOKEN.pool, { encoding: "base64" }]),
    getJson<DexPairs>(`https://api.dexscreener.com/latest/dex/tokens/${TOKEN.goldMint}`),
  ]);

  const data = (account as { value?: { data?: [string, string] } } | null)?.value?.data?.[0];
  if (!data) return null;
  const curve = decodeLaunchpad(data);
  if (!curve) return null;

  const goldPair = (dex?.pairs ?? [])
    .filter((p) => p.baseToken?.address === TOKEN.goldMint && p.priceUsd)
    .sort((a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0))[0];
  const goldUsd = goldPair?.priceUsd ? Number(goldPair.priceUsd) : null;
  if (!goldUsd || !Number.isFinite(goldUsd)) return null;

  const priceUsd = curve.priceInGold * goldUsd;
  const mcap = priceUsd * TOKEN.supply;
  const liquidity = curve.quoteUi * goldUsd;

  return {
    ...EMPTY,
    priceUsd,
    mcap,
    fdv: mcap,
    liquidity,
    graduationPct: curve.graduationPct,
    updatedAt: Date.now(),
  };
}

async function loadJupiter(): Promise<MarketSnapshot | null> {
  const tokenArr = await getJson<JupiterToken[]>(
    `https://lite-api.jup.ag/tokens/v2/search?query=${TOKEN.mint}`,
  );
  const token = Array.isArray(tokenArr) ? tokenArr[0] : undefined;
  if (!token?.usdPrice) return null;
  const stats = token.stats24h;
  const volume = (stats?.buyVolume ?? 0) + (stats?.sellVolume ?? 0);
  return {
    priceUsd: token.usdPrice,
    mcap: token.mcap ?? token.fdv ?? null,
    fdv: token.fdv ?? null,
    liquidity: token.liquidity ?? null,
    holders: token.holderCount ?? null,
    volume24h: volume > 0 ? volume : null,
    priceChange24h: stats?.priceChange ?? null,
    priceChange1h: token.stats1h?.priceChange ?? null,
    holderChange24h: stats?.holderChange ?? null,
    volumeChange24h: stats?.volumeChange ?? null,
    supply: token.circSupply ?? token.totalSupply ?? TOKEN.supply,
    graduationPct: lastGood?.graduationPct ?? null,
    mintRevoked: token.audit?.mintAuthorityDisabled ?? true,
    freezeRevoked: token.audit?.freezeAuthorityDisabled ?? true,
    topHoldersPct: token.audit?.topHoldersPercentage ?? null,
    updatedAt: Date.now(),
  };
}

export async function loadMarket(): Promise<MarketSnapshot> {
  const jup = await loadJupiter();
  if (jup) {
    if (jup.graduationPct == null) {
      const chain = await loadOnchain();
      if (chain?.graduationPct != null) jup.graduationPct = chain.graduationPct;
    }
    lastGood = jup;
    return jup;
  }
  const chain = await loadOnchain();
  if (chain) {
    lastGood = {
      ...chain,
      holders: lastGood?.holders ?? null,
      volume24h: lastGood?.volume24h ?? null,
      priceChange24h: lastGood?.priceChange24h ?? null,
      priceChange1h: lastGood?.priceChange1h ?? null,
      holderChange24h: lastGood?.holderChange24h ?? null,
      volumeChange24h: lastGood?.volumeChange24h ?? null,
    };
    return lastGood;
  }
  return lastGood ?? { ...EMPTY, updatedAt: Date.now() };
}

export const fetchMarket = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await loadMarket();
  } catch {
    return lastGood ?? { ...EMPTY, updatedAt: Date.now() };
  }
});

function compact(value: number, suffix: string, div: number) {
  const n = value / div;
  const digits = Math.abs(n) >= 100 ? 0 : Math.abs(n) >= 10 ? 1 : 2;
  return `$${n.toFixed(digits)}${suffix}`;
}

export function formatUsd(value: number | null | undefined, digits = 2): string {
  if (value == null || Number.isNaN(value)) return "—";
  const abs = Math.abs(value);
  if (abs === 0) return "$0.00";
  if (abs >= 1_000_000_000) return compact(value, "B", 1_000_000_000);
  if (abs >= 1_000_000) return compact(value, "M", 1_000_000);
  if (abs >= 1_000) return compact(value, "K", 1_000);
  if (abs >= 1) return `$${value.toFixed(digits)}`;
  if (abs >= 0.01) return `$${value.toFixed(4)}`;
  if (abs >= 0.0001) return `$${value.toFixed(6)}`;
  const s = value.toFixed(8).replace(/0+$/, "").replace(/\.$/, "");
  return `$${s}`;
}

export function formatPrice(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  if (value >= 1) return `$${value.toFixed(4)}`;
  if (value >= 0.0001) return `$${value.toFixed(6)}`;
  const s = value.toFixed(8).replace(/0+$/, "").replace(/\.$/, "");
  return `$${s}`;
}

export function formatCount(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

export function formatPct(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

export function changeTone(value: number | null | undefined): "up" | "down" | "flat" {
  if (value == null || value === 0) return "flat";
  return value > 0 ? "up" : "down";
}
