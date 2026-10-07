import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { U as isRedirect, b as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { i as shortMint, n as TOKEN, r as birdeyeChartUrl, t as LINKS } from "./token-D9fxp8v3.mjs";
import { a as Shield, c as Heart, d as Coins, f as Check, l as ExternalLink, n as X, o as PawPrint, p as ChartColumn, r as Users, s as Menu, t as Zap, u as Copy } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as formatCount, c as formatUsd, i as fetchMarket, n as Route, o as formatPct, r as changeTone, s as formatPrice } from "./router-DChgzzCX.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-AGzd66CE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
function XLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
	});
}
function TelegramLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21.5 3.4 18.7 20.1c-.2 1-1.3 1.4-2.2.8l-4.7-3.5-2.3 2.2c-.3.3-.7.4-1.1.4l.4-4.8 8.7-7.9c.4-.3-.1-.5-.6-.2l-10.8 6.8-4.6-1.4c-1-.3-1-1 .2-1.5L20 2.3c.8-.3 1.6.2 1.5 1.1z" })
	});
}
function SolanaMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.4 16.7c.2-.2.4-.2.6-.2h13.4c.4 0 .6.4.3.7l-2.5 2.6c-.2.2-.4.2-.6.2H3.2c-.4 0-.6-.4-.3-.7l2.5-2.6zm0-12.6c.2-.2.4-.2.6-.2h13.4c.4 0 .6.4.3.7l-2.5 2.6c-.2.2-.4.2-.6.2H3.2c-.4 0-.6-.4-.3-.7l2.5-2.6zM19.2 8.8c-.2-.2-.4-.2-.6-.2H5.2c-.4 0-.6.4-.3.7l2.5 2.6c.2.2.4.2.6.2h13.4c.4 0 .6-.4.3-.7l-2.5-2.6z" })
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,border-color,opacity] duration-(--motion-quick) ease-(--ease-out) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			gold: "bg-gold text-ink shadow-[0_0_24px_var(--color-gold-glow)] hover:bg-gold-bright",
			outline: "border border-gold/55 bg-transparent text-gold-bright hover:bg-gold/10",
			ghost: "text-cream hover:bg-elevated hover:text-fg",
			dark: "border border-border bg-elevated text-fg hover:border-gold/40 hover:text-gold-bright"
		},
		size: {
			sm: "h-9 rounded-full px-3.5 text-sm",
			md: "h-11 rounded-full px-5 text-sm",
			lg: "h-12 rounded-full px-6 text-base",
			icon: "size-11 rounded-full"
		}
	},
	defaultVariants: {
		variant: "gold",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function FeatureRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto mt-3 grid max-w-7xl gap-3 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4",
		children: [
			{
				icon: PawPrint,
				title: "Community Driven",
				body: "Built by the pack, for the pack. $GLDNDOG is about belonging."
			},
			{
				icon: Shield,
				title: "Real Utility",
				body: "Supporting dog shelters and spreading positivity with every milestone."
			},
			{
				icon: Zap,
				title: "Solana Powered",
				body: "Fast. Low fees. Global. Paired with tokenized $GOLD."
			},
			{
				icon: Heart,
				title: "Golden Future",
				body: "More dogs. More love. More $GLDNDOG."
			}
		].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "panel flex items-start gap-4 px-5 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 flex size-10 items-center justify-center rounded-full bg-gold/12 text-gold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold text-fg",
				children: item.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-muted",
				children: item.body
			})] })]
		}, item.title))
	});
}
function Tokenomics({ market }) {
	const rows = [
		{
			label: "Total supply",
			value: `${formatCount(TOKEN.supply)} ${TOKEN.symbol}`
		},
		{
			label: "Pair",
			value: `${TOKEN.symbol} / ${TOKEN.quoteSymbol}`
		},
		{
			label: "Mint authority",
			value: market?.mintRevoked ? "Revoked" : "Check explorer"
		},
		{
			label: "Freeze authority",
			value: market?.freezeRevoked ? "Revoked" : "Check explorer"
		},
		{
			label: "Top holders",
			value: market?.topHoldersPct != null ? formatPct(market.topHoldersPct) : "—"
		},
		{
			label: "Launchpad",
			value: market?.graduationPct != null ? `${market.graduationPct.toFixed(1)}% to Raydium` : "StonkFun / LaunchLab"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "tokenomics",
		className: "section-anchor mx-auto mt-16 max-w-7xl px-4 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-6 max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-gold uppercase",
					children: "Tokenomics"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-semibold",
					children: "Simple supply. Golden pair."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: [
						"1 billion ",
						TOKEN.symbol,
						" on Solana, paired with Oro $GOLD. No hidden mint. Shelter donations scale with market-cap milestones — ",
						TOKEN.donation.rule
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel overflow-hidden lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "divide-y divide-gold/10",
					children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4 px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm text-muted",
							children: row.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "ticker text-sm font-medium text-fg",
							children: row.value
						})]
					}, row.label))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "panel flex flex-col justify-between gap-5 px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-gold uppercase",
						children: "Shelter pact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-2xl font-semibold text-gold-bright",
						children: "$1k / $100k MC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "Every $100k of market cap unlocks another $1,000 for dog shelters. The pack grows, the dogs eat."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyMint, {})]
			})]
		})]
	});
}
function Roadmap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "roadmap",
		className: "section-anchor mx-auto mt-16 max-w-7xl px-4 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-gold uppercase",
				children: "Roadmap"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-2xl font-semibold",
				children: "The path to a brighter future"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-3 md:grid-cols-2 xl:grid-cols-4",
			children: [
				{
					phase: "01",
					title: "Genesis",
					status: "Live",
					body: "Launched on StonkFun, paired with Oro $GOLD. The retriever retrieved gold."
				},
				{
					phase: "02",
					title: "The Pack",
					status: "Now",
					body: "Website, Telegram + X, and Dexscreener verification. Community first."
				},
				{
					phase: "03",
					title: "Shelter Drops",
					status: "Next",
					body: "Hit the first $100k market-cap milestone and send $1k to dog shelters."
				},
				{
					phase: "04",
					title: "Golden Future",
					status: "Soon",
					body: "Raydium graduation, partnerships, and more dogs in more homes."
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "panel px-5 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-gold",
							children: item.phase
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-gold/30 px-2.5 py-0.5 text-xs text-gold-bright",
							children: item.status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-lg font-semibold",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: item.body
					})
				]
			}, item.phase))
		})]
	});
}
function Community() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "community",
		className: "section-anchor mx-auto mt-16 max-w-7xl px-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "panel overflow-hidden px-5 py-8 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-gold uppercase",
						children: "Community"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl font-semibold",
						children: "Come sit with the pack"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-sm leading-relaxed text-muted",
						children: "Charts fade. Community stays. Jump into Telegram, follow on X, copy the contract, and retrieve $GOLD with a heart of gold."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: LINKS.telegram,
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramLogo, { className: "size-4" }), "Telegram"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: LINKS.x,
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XLogo, { className: "size-4" }), "Follow on X"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "dark",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: LINKS.jupiter,
									target: "_blank",
									rel: "noreferrer",
									children: [
										"Buy ",
										TOKEN.ticker,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyMint, {})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/mascot.jpg",
						alt: "Golden retriever mascot",
						width: 512,
						height: 512,
						className: "mx-auto w-full max-w-sm rounded-xl object-cover ring-1 ring-gold/30"
					})
				})]
			})
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mx-auto mt-16 max-w-7xl px-4 pb-12 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-start justify-between gap-4 border-t border-gold/15 py-6 text-xs text-subtle sm:flex-row sm:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/logo.jpg",
							alt: "",
							className: "size-6 rounded-full object-cover"
						}),
						TOKEN.ticker,
						" · ",
						TOKEN.chain
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolanaMark, { className: "size-3.5" }), "Meme coin. Not financial advice. DYOR."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.solscan,
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-gold-bright",
							children: "Solscan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.stonkfun,
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-gold-bright",
							children: "StonkFun"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.oro,
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-gold-bright",
							children: "$GOLD"
						})
					]
				})
			]
		})
	});
}
function CopyMint() {
	const [copied, setCopied] = (0, import_react.useState)(false);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: copy,
		className: "flex w-full items-center justify-between gap-3 rounded-2xl border border-gold/25 bg-elevated px-3 py-3 text-left transition-colors duration-(--motion-quick) hover:border-gold/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs tracking-wide text-muted uppercase",
			children: "Contract"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 block font-mono text-xs text-cream sm:text-sm",
			children: shortMint()
		})] }), copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-up" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4 text-gold" })]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative mx-auto max-w-7xl overflow-hidden px-4 pb-6 pt-8 sm:px-6 sm:pt-12 lg:pt-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/dog-mark.jpg",
			alt: "",
			className: "pointer-events-none absolute -right-8 top-4 hidden w-md opacity-30 mix-blend-lighten lg:block"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-bright uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-2 rounded-full bg-gold shadow-[0_0_10px_var(--color-gold)]" }), "Solana meme coin"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "gold-text font-display text-4xl font-extrabold leading-none tracking-tight",
						children: TOKEN.ticker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg font-medium text-gold-bright sm:text-xl",
						children: TOKEN.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base",
						children: TOKEN.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.telegram,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramLogo, { className: "size-4" }), "Join TG"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.x,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XLogo, { className: "size-4" }), "Follow on X"]
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-lg lg:max-w-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-dog.jpg",
					alt: "Golden retriever holding a gold bar",
					width: 1600,
					height: 900,
					className: "relative z-10 w-full [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pointer-events-none absolute right-2 bottom-10 hidden max-w-40 text-right font-script text-2xl leading-tight text-gold-bright lg:block",
					children: TOKEN.quote
				})]
			})]
		})]
	});
}
var INTERVALS = [
	{
		label: "1m",
		birdeye: "1m"
	},
	{
		label: "5m",
		birdeye: "5m"
	},
	{
		label: "15m",
		birdeye: "15m"
	},
	{
		label: "1h",
		birdeye: "1H"
	},
	{
		label: "4h",
		birdeye: "4H"
	},
	{
		label: "1d",
		birdeye: "1D"
	}
];
function LiveChart({ market }) {
	const [interval, setInterval] = (0, import_react.useState)(INTERVALS[3]);
	const tone = changeTone(market?.priceChange24h);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "chart",
		className: "section-anchor mx-auto max-w-7xl px-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 border-b border-gold/15 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/logo.jpg",
								alt: "",
								width: 40,
								height: 40,
								className: "size-10 rounded-full object-cover ring-1 ring-gold/50"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-semibold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: TOKEN.ticker }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "/"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-gold-bright",
										children: ["$", TOKEN.quoteSymbol]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-0.5 flex items-center gap-1.5 text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolanaMark, { className: "size-3.5" }), "Solana"]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col items-start gap-1 sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ticker text-2xl font-semibold text-gold-bright sm:text-3xl",
								children: formatPrice(market?.priceUsd)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: cn("text-sm font-medium", tone === "up" && "text-up", tone === "down" && "text-down", tone === "flat" && "text-muted"),
								children: [formatPct(market?.priceChange24h), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-1 text-subtle",
									children: "(24h)"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3 sm:min-w-40 sm:justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: "Market Cap"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ticker text-lg font-semibold text-gold-bright",
									children: formatUsd(market?.mcap)
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2 border-b border-gold/10 px-3 py-2 sm:px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						role: "tablist",
						"aria-label": "Chart interval",
						children: INTERVALS.map((item) => {
							const active = item.label === interval.label;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "tab",
								"aria-selected": active,
								onClick: () => setInterval(item),
								className: cn("h-8 min-w-10 rounded-full px-3 text-xs font-medium transition-colors duration-(--motion-quick)", active ? "bg-gold text-ink" : "text-muted hover:bg-elevated hover:text-fg"),
								children: item.label
							}, item.label);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-xs text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-live" }),
							TOKEN.symbol,
							" / ",
							TOKEN.quoteSymbol,
							" · ",
							interval.label,
							" · live"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative bg-black",
					style: { height: "var(--chart-height)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "$GLDNDOG live candlestick chart",
						src: birdeyeChartUrl(interval.birdeye),
						className: "absolute inset-0 h-full w-full border-0",
						allow: "clipboard-write"
					}, interval.birdeye)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2 border-t border-gold/10 px-4 py-3 text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Live market data. Chart powered by Birdeye." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-gold-bright",
								href: LINKS.birdeye,
								target: "_blank",
								rel: "noreferrer",
								children: "Birdeye"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-gold-bright",
								href: LINKS.geckoterminal,
								target: "_blank",
								rel: "noreferrer",
								children: "GeckoTerminal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-gold-bright",
								href: LINKS.jupiter,
								target: "_blank",
								rel: "noreferrer",
								children: "Buy on Jupiter"
							})
						]
					})]
				})
			]
		})
	});
}
var NAV = [
	{
		href: "#chart",
		label: "Chart"
	},
	{
		href: "#tokenomics",
		label: "Tokenomics"
	},
	{
		href: "#roadmap",
		label: "Roadmap"
	},
	{
		href: "#community",
		label: "Community"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-gold/15 bg-bg/80 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo.jpg",
						alt: "",
						width: 36,
						height: 36,
						className: "size-9 rounded-full ring-2 ring-gold/70 object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold tracking-wide text-gold-bright",
						children: TOKEN.ticker
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 text-sm text-muted md:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "transition-colors duration-(--motion-quick) hover:text-fg",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: LINKS.telegram,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramLogo, { className: "size-3.5" }), "Join TG"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: LINKS.x,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XLogo, { className: "size-3.5" }), "Follow on X"]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold-bright md:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid overflow-hidden border-t border-gold/10 bg-surface md:hidden", "transition-[grid-template-rows,opacity] duration-(--motion-fast) ease-(--ease-out)", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-1 px-4 py-3",
					"aria-label": "Mobile",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "rounded-lg px-3 py-3 text-sm text-cream hover:bg-elevated",
						onClick: () => setOpen(false),
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex gap-2 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.telegram,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramLogo, { className: "size-3.5" }), "Join TG"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.x,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XLogo, { className: "size-3.5" }), "Follow on X"]
							})
						})]
					})]
				})
			})
		})]
	});
}
function Delta({ value }) {
	const tone = changeTone(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("text-xs font-medium", tone === "up" && "text-up", tone === "down" && "text-down", tone === "flat" && "text-muted"),
		children: formatPct(value)
	});
}
function StatsRow({ market }) {
	const mcap = market?.mcap ?? 0;
	const goal = TOKEN.donation.mcapMilestone;
	const progress = mcap > 0 ? Math.min(100, mcap / goal * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto mt-5 grid max-w-7xl gap-3 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "panel flex items-center gap-4 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-12 items-center justify-center rounded-full bg-gold/12 text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Market Cap"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ticker text-xl font-semibold",
						children: formatUsd(market?.mcap)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delta, { value: market?.priceChange24h })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "panel flex items-center gap-4 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-12 items-center justify-center rounded-full bg-gold/12 text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Holders"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ticker text-xl font-semibold",
						children: formatCount(market?.holders)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delta, { value: market?.holderChange24h })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "panel flex items-center gap-4 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-12 items-center justify-center rounded-full bg-gold/12 text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Volume (24h)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ticker text-xl font-semibold",
						children: formatUsd(market?.volume24h)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delta, { value: market?.volumeChange24h })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "panel flex items-center gap-4 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-12 items-center justify-center rounded-full bg-gold/12 text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Donate Progress"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-cream",
							children: TOKEN.donation.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-2 overflow-hidden rounded-full bg-elevated",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gold transition-[width] duration-(--motion-slow) ease-(--ease-out)",
								style: { width: `${progress}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center justify-between text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ticker",
								children: [
									formatUsd(mcap || null),
									" / ",
									formatUsd(goal)
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ticker",
								children: [progress.toFixed(1), "%"]
							})]
						})
					]
				})]
			})
		]
	});
}
function Home() {
	const initial = Route.useLoaderData();
	const fetchMarketFn = useServerFn(fetchMarket);
	const { data } = useQuery({
		queryKey: ["market"],
		queryFn: () => fetchMarketFn(),
		initialData: initial,
		refetchInterval: 12e3
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveChart, { market: data }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsRow, { market: data }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureRow, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tokenomics, { market: data }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roadmap, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Community, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
