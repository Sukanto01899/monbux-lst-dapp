import { Token } from "./types";

export const PERMIT2_ADDRESS = "0x000000000022D473030F116dDEE9F6B43aC78BA3";

export const MAGIC_CALLDATA_STRING = "f".repeat(130); // used when signing the eip712 message

export const AFFILIATE_FEE = 50; // 0.5% affiliate fee. Denoted in Bps.
export const FEE_RECIPIENT = "0x78df57AB583F80737e7836247E80FFC1487f6CdF"; // The ETH address that should receive affiliate fees

export const MAX_ALLOWANCE = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935");

// UI Constants
export const DEBOUNCE_DELAY = 500; // ms
export const MIN_TRADE_AMOUNT = "0.001";
export const DEFAULT_SLIPPAGE = 0.01; // 1%
export const SLIPPAGE_OPTIONS = [
  { label: "0.1%", value: 10 },
  { label: "0.5%", value: 50 },
  { label: "1%", value: 100 },
  { label: "2%", value: 200 },
  { label: "3%", value: 300 },
];
export const AUTO_BALANCE_SET = [
  { label: "25%", value: 25 },
  { label: "50%", value: 50 },
  { label: "75%", value: 75 },
  { label: "Max", value: 100 },
];

export const MONAD_TESTNET_TOKENS: Token[] = [
  {
    chainId: 1,
    name: "Wrapped MON",
    symbol: "WMON",
    decimals: 18,
    address: "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701",
    logoURI: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/I_t8rg_V_400x400.jpg/public",
  },
  {
    chainId: 1,
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    address: "0x88b8e2161dedc77ef4ab7585569d2415a1c1055d",
    logoURI: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/images.png/public",
  },
  {
    chainId: 1,
    name: "MON",
    symbol: "MON",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    logoURI: "https://fast.image.delivery/vlxqcdl.png?source=image.delivery",
  },
  {
    chainId: 1,
    name: "USDC Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
    logoURI: "https://fast.image.delivery/efzciwa.png?source=image.delivery",
  },
  {
    chainId: 1,
    name: "aprMON",
    symbol: "aprMON",
    decimals: 18,
    address: "0xb2f82D0f38dc453D596Ad40A37799446Cc89274A",
    logoURI: "https://fast.image.delivery/mcgidvt.jpg?source=image.delivery",
  },
  {
    chainId: 1,
    name: "gMON",
    symbol: "gMON",
    decimals: 18,
    address: "0xaEef2f6B429Cb59C9B2D7bB2141ADa993E8571c3",
    logoURI: "https://fast.image.delivery/gnqpkpp.webp?source=image.delivery",
  },
  {
    chainId: 1,
    name: "ShMonad",
    symbol: "shMON",
    decimals: 18,
    address: "0x3a98250F98Dd388C211206983453837C8365BDc1",
    logoURI: "https://fast.image.delivery/hxrzvmy.webp?source=image.delivery",
  },
  {
    chainId: 1,
    name: "Moyaki",
    symbol: "YAKI",
    decimals: 18,
    address: "0xfe140e1dCe99Be9F4F15d657CD9b7BF622270C50",
    logoURI: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/6679b698-a845-412b-504b-23463a3e1900/public",
  },
  {
    chainId: 1,
    name: "Molandak",
    symbol: "DAK",
    decimals: 18,
    address: "0x0F0BDEbF0F83cD1EE3974779Bcb7315f9808c714",
    logoURI: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/27759359-9374-4995-341c-b2636a432800/public",
  },
  {
    chainId: 1,
    name: "Chog",
    symbol: "CHOG",
    decimals: 18,
    address: "0xE0590015A873bF326bd645c3E1266d4db41C4E6B",
    logoURI: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/5d1206c2-042c-4edc-9f8b-dcef2e9e8f00/public",
  },
  {
    chainId: 1,
    name: "Wrapped BTC",
    symbol: "WBTC",
    decimals: 8,
    address: "0xcf5a6076cfa32686c0Df13aBaDa2b40dec133F1d",
    logoURI: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/wbtc.png/public",
  },
  {
    chainId: 1,
    name: "Monbux",
    symbol: "mMON",
    decimals: 18,
    address: "0x4791Ccff46F419300d11adf07Ba72BB3BCC51743",
    logoURI: "https://www.monbux.xyz/monbux-logo.png",
  },
];

export const MONAD_TESTNET_TOKENS_BY_SYMBOL: Record<string, Token> = {
  wmon: {
    chainId: 1,
    name: "Wrapped MON",
    symbol: "WMON",
    decimals: 18,
    address: "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701",
    logoURI: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/I_t8rg_V_400x400.jpg/public",
  },
  usdt: {
    chainId: 1,
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    address: "0x88b8e2161dedc77ef4ab7585569d2415a1c1055d",
    logoURI: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/images.png/public",
  },
  mon: {
    chainId: 1,
    name: "MON",
    symbol: "MON",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    logoURI: "https://fast.image.delivery/vlxqcdl.png?source=image.delivery",
  },
  usdc: {
    chainId: 1,
    name: "USDC Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
    logoURI: "https://fast.image.delivery/efzciwa.png?source=image.delivery",
  },
  aprmon: {
    chainId: 1,
    name: "aprMON",
    symbol: "aprMON",
    decimals: 18,
    address: "0xb2f82D0f38dc453D596Ad40A37799446Cc89274A",
    logoURI: "https://fast.image.delivery/mcgidvt.jpg?source=image.delivery",
  },
  gmon: {
    chainId: 1,
    name: "gMON",
    symbol: "gMON",
    decimals: 18,
    address: "0xaEef2f6B429Cb59C9B2D7bB2141ADa993E8571c3",
    logoURI: "https://fast.image.delivery/gnqpkpp.webp?source=image.delivery",
  },
  shmon: {
    chainId: 1,
    name: "ShMonad",
    symbol: "shMON",
    decimals: 18,
    address: "0x3a98250F98Dd388C211206983453837C8365BDc1",
    logoURI: "https://fast.image.delivery/hxrzvmy.webp?source=image.delivery",
  },
  yaki: {
    chainId: 1,
    name: "Moyaki",
    symbol: "YAKI",
    decimals: 18,
    address: "0xfe140e1dCe99Be9F4F15d657CD9b7BF622270C50",
    logoURI: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/6679b698-a845-412b-504b-23463a3e1900/public",
  },
  dak: {
    chainId: 1,
    name: "Molandak",
    symbol: "DAK",
    decimals: 18,
    address: "0x0F0BDEbF0F83cD1EE3974779Bcb7315f9808c714",
    logoURI: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/27759359-9374-4995-341c-b2636a432800/public",
  },
  chog: {
    chainId: 1,
    name: "Chog",
    symbol: "CHOG",
    decimals: 18,
    address: "0xE0590015A873bF326bd645c3E1266d4db41C4E6B",
    logoURI: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/5d1206c2-042c-4edc-9f8b-dcef2e9e8f00/public",
  },
  wbtc: {
    chainId: 1,
    name: "Wrapped BTC",
    symbol: "WBTC",
    decimals: 8,
    address: "0xcf5a6076cfa32686c0Df13aBaDa2b40dec133F1d",
    logoURI: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/wbtc.png/public",
  },
  mmon: {
    chainId: 1,
    name: "Monbux",
    symbol: "mMON",
    decimals: 18,
    address: "0x4791Ccff46F419300d11adf07Ba72BB3BCC51743",
    logoURI: "https://www.monbux.xyz/monbux-logo.png",
  },
};

export const MONAD_TESTNET_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0x760afe86e5de5fa0ee542fc7b7b713e1c5425701": {
    chainId: 1,
    name: "Wrapped MON",
    symbol: "WMON",
    decimals: 18,
    address: "0x760afe86e5de5fa0ee542fc7b7b713e1c5425701",
    logoURI: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/I_t8rg_V_400x400.jpg/public",
  },
  "0x88b8e2161dedc77ef4ab7585569d2415a1c1055d": {
    chainId: 1,
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    address: "0x88b8e2161dedc77ef4ab7585569d2415a1c1055d",
    logoURI: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/images.png/public",
  },
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
    chainId: 1,
    name: "MON",
    symbol: "MON",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    logoURI: "https://fast.image.delivery/vlxqcdl.png?source=image.delivery",
  },
  "0xf817257fed379853cde0fa4f97ab987181b1e5ea": {
    chainId: 1,
    name: "USDC Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
    logoURI: "https://fast.image.delivery/efzciwa.png?source=image.delivery",
  },
  "0xb2f82d0f38dc453d596ad40a37799446cc89274a": {
    chainId: 1,
    name: "aprMON",
    symbol: "aprMON",
    decimals: 18,
    address: "0xb2f82D0f38dc453D596Ad40A37799446Cc89274A",
    logoURI: "https://fast.image.delivery/mcgidvt.jpg?source=image.delivery",
  },
  "0xaeef2f6b429cb59c9b2d7bb2141ada993e8571c3": {
    chainId: 1,
    name: "gMON",
    symbol: "gMON",
    decimals: 18,
    address: "0xaEef2f6B429Cb59C9B2D7bB2141ADa993E8571c3",
    logoURI: "https://fast.image.delivery/gnqpkpp.webp?source=image.delivery",
  },
  "0x3a98250f98dd388c211206983453837c8365bdc1": {
    chainId: 1,
    name: "ShMonad",
    symbol: "shMON",
    decimals: 18,
    address: "0x3a98250F98Dd388C211206983453837C8365BDc1",
    logoURI: "https://fast.image.delivery/hxrzvmy.webp?source=image.delivery",
  },
  "0xfe140e1dce99be9f4f15d657cd9b7bf622270c50": {
    chainId: 1,
    name: "Moyaki",
    symbol: "YAKI",
    decimals: 18,
    address: "0xfe140e1dCe99Be9F4F15d657CD9b7BF622270C50",
    logoURI: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/6679b698-a845-412b-504b-23463a3e1900/public",
  },
  "0x0f0bdebf0f83cd1ee3974779bcb7315f9808c714": {
    chainId: 1,
    name: "Molandak",
    symbol: "DAK",
    decimals: 18,
    address: "0x0F0BDEbF0F83cD1EE3974779Bcb7315f9808c714",
    logoURI: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/27759359-9374-4995-341c-b2636a432800/public",
  },
  "0xe0590015a873bf326bd645c3e1266d4db41c4e6b": {
    chainId: 1,
    name: "Chog",
    symbol: "CHOG",
    decimals: 18,
    address: "0xE0590015A873bF326bd645c3E1266d4db41C4E6B",
    logoURI: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/5d1206c2-042c-4edc-9f8b-dcef2e9e8f00/public",
  },
  "0xcf5a6076cfa32686c0df13abada2b40dec133f1d": {
    chainId: 1,
    name: "Wrapped BTC",
    symbol: "WBTC",
    decimals: 8,
    address: "0xcf5a6076cfa32686c0Df13aBaDa2b40dec133F1d",
    logoURI: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/wbtc.png/public",
  },
  "0x4791ccff46f419300d11adf07ba72bb3bcc51743": {
    chainId: 1,
    name: "Monbux",
    symbol: "mMON",
    decimals: 18,
    address: "0x4791Ccff46F419300d11adf07Ba72BB3BCC51743",
    logoURI: "https://www.monbux.xyz/monbux-logo.png",
  }
};
