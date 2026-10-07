export const TOKEN = {
  name: "Golden Retriever",
  symbol: "GLDNDOG",
  ticker: "$GLDNDOG",
  quoteSymbol: "GOLD",
  mint: "HqwMCrvo9ZtMqhq6BcUSPjqcfNMdbDFpaYPr1YWxRxf",
  pool: "HZMVDo45dy5hafNUK1oKpFgrbu6yQCKKMFN8nSxBTPLQ",
  goldMint: "GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A",
  decimals: 6,
  supply: 1_000_000_000,
  chain: "Solana",
  tagline: "Retrieve $GOLD with a Heart of Gold",
  quote: "Good Dogs Build a Brighter Future",
  description:
    "More than a meme. $GLDNDOG is a community-driven Solana token with real purpose — supporting dog shelters, spreading positivity, and building a golden future together.",
  donation: {
    usdPerMilestone: 1_000,
    mcapMilestone: 100_000,
    blurb: "Help dog shelters. Real impact.",
    rule: "$1k donated to shelters at every $100k market-cap milestone.",
  },
} as const;

export const LINKS = {
  x: "https://x.com/gldn_dog",
  telegram: "https://t.me/gldndog",
  jupiter: `https://jup.ag/tokens/${TOKEN.mint}`,
  stonkfun: `https://www.stonkfun.xyz/token/${TOKEN.mint}`,
  birdeye: `https://birdeye.so/token/${TOKEN.mint}?chain=solana`,
  geckoterminal: `https://www.geckoterminal.com/solana/pools/${TOKEN.pool}`,
  solscan: `https://solscan.io/token/${TOKEN.mint}`,
  oro: "https://www.oro.finance",
} as const;

export function shortMint(mint: string = TOKEN.mint) {
  return `${mint.slice(0, 4)}…${mint.slice(-4)}`;
}
