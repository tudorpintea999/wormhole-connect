import {
  MainnetChainName,
  TestnetChainName,
} from "@wormhole-foundation/wormhole-connect";

export type Network = {
  name: string;
  testnet: TestnetChainName;
  mainnet: MainnetChainName;
};

export const NETWORKS: Network[] = [
  {
    name: "Solana",
    testnet: "solana",
    mainnet: "solana",
  },
  {
    name: "Ethereum",

    testnet: "goerli",
    mainnet: "ethereum",
  },
  {
    name: "BSC",
    testnet: "bsc",
    mainnet: "bsc",
  },
  {
    name: "Polygon",
    testnet: "mumbai",
    mainnet: "polygon",
  },
  {
    name: "Avalanche",
    testnet: "fuji",
    mainnet: "avalanche",
  },
  {
    name: "Fantom",
    testnet: "fantom",
    mainnet: "fantom",
  },
  {
    name: "Celo",
    testnet: "alfajores",
    mainnet: "celo",
  },
  {
    name: "Moonbeam",
    testnet: "moonbasealpha",
    mainnet: "moonbeam",
  },
  {
    name: "Sui",
    testnet: "sui",
    mainnet: "sui",
  },
  {
    name: "Aptos",
    testnet: "aptos",
    mainnet: "aptos",
  },
  {
    name: "Base",
    testnet: "basegoerli",
    mainnet: "base",
  },
  {
    name: "Osmosis",
    testnet: "osmosis",
    mainnet: "osmosis",
  },
];

// TODO: move the connect config to a shared sdk
export const TESTNET_TOKEN_KEYS: string[] = [
  "ETH",
  "WETH",
  "USDCeth",
  "WBTC",
  "USDT",
  "DAI",
  "MATIC",
  "WMATIC",
  "USDCpolygon",
  "BNB",
  "WBNB",
  "AVAX",
  "WAVAX",
  "USDCavax",
  "FTM",
  "WFTM",
  "CELO",
  "GLMR",
  "WGLMR",
  "SOL",
  "WSOL",
  "USDCsol",
  "SUI",
  "APT",
  "ETHarbitrum",
  "WETHarbitrum",
  "USDCarbitrum",
  "ETHoptimism",
  "WETHoptimism",
  "USDCoptimism",
  "SEI",
  "ETHbase",
  "WETHbase",
  "OSMO",
  "tBTC",
  "tBTCpolygon",
  "tBTCoptimism",
  "tBTCarbitrum",
  "tBTCbase",
  "tBTCsol",
  "wstETH",
].sort();

export const MAINNET_TOKEN_KEYS: string[] = [
  "ETH",
  "WETH",
  "USDCeth",
  "WBTC",
  "USDT",
  "DAI",
  "BUSD",
  "MATIC",
  "WMATIC",
  "USDCpolygon",
  "BNB",
  "WBNB",
  "USDCbnb",
  "AVAX",
  "WAVAX",
  "USDCavax",
  "FTM",
  "WFTM",
  "CELO",
  "GLMR",
  "WGLMR",
  "SOL",
  "WSOL",
  "USDCsol",
  "SUI",
  "APT",
  "ETHarbitrum",
  "WETHarbitrum",
  "USDCarbitrum",
  "ETHoptimism",
  "WETHoptimism",
  "USDCoptimism",
  "ETHbase",
  "WETHbase",
  "OSMO",
  "tBTC",
  "tBTCpolygon",
  "tBTCoptimism",
  "tBTCarbitrum",
  "tBTCbase",
  "tBTCsol",
  "wstETH",
  "BONK",
].sort();

export type RouteInfo = {
  key: string;
  title: string;
  description: string;
  link?: string;
};

export const ROUTE_INFOS: RouteInfo[] = [
  {
    key: "bridge",
    title: "Token Bridge",
    description:
      "Lock-and-Mint bridging between all Wormhole supported chains.",
  },
  {
    key: "relay",
    title: "Token Bridge Automatic Redeems",
    description:
      "Automatic redeems and native gas drop-off for the Token Bridge powered by xLabs.",
  },
  {
    key: "cctpManual",
    title: "Circle CCTP",
    description:
      "Permissionlessly transfer native USDC cross-chain with CCTP + Wormhole.",
    link: "https://www.circle.com/en/cross-chain-transfer-protocol",
  },
  {
    key: "cctpRelay",
    title: "CCTP Automatic Redeems",
    description:
      "Automatic redeems and native gas drop-off for CCTP powered by xLabs.",
  },
  {
    key: "cosmosGateway",
    title: "Gateway",
    description:
      "Gateway connects liquidity and users from Ethereum and beyond to Cosmos chains and apps, all with an IBC-based liquidity router.",
    link: "https://wormhole.com/gateway/",
  },
  {
    key: "tbtc",
    title: "Threshold BTC",
    description:
      "Permissionlessly transfer tBTC cross-chain with Threshold + Wormhole.",
    link: "https://threshold.network/earn/btc",
  },
];
export const ROUTES = ROUTE_INFOS.map((r) => r.key);

export const DEFAULT_MAINNET_RPCS = {
  ethereum: "https://rpc.ankr.com/eth",
  solana: "https://solana-mainnet.rpc.extrnode.com",
  polygon: "https://rpc.ankr.com/polygon",
  bsc: "https://bscrpc.com",
  avalanche: "https://rpc.ankr.com/avalanche",
  fantom: "https://rpc.ankr.com/fantom",
  celo: "https://rpc.ankr.com/celo",
  moonbeam: "https://rpc.ankr.com/moonbeam",
  sui: "https://rpc.mainnet.sui.io",
  aptos: "https://fullnode.mainnet.aptoslabs.com/v1",
  arbitrum: "https://rpc.ankr.com/arbitrum",
  optimism: "https://rpc.ankr.com/optimism",
  base: "https://base.publicnode.com",
  sei: "", // TODO: fill in
  wormchain: "",
  osmosis: "https://osmosis-rpc.polkachu.com",
};

export const DEFAULT_TESTNET_RPCS = {
  goerli: "https://rpc.ankr.com/eth_goerli",
  mumbai: "https://rpc.ankr.com/polygon_mumbai",
  bsc: "https://data-seed-prebsc-1-s3.binance.org:8545",
  fuji: "https://api.avax-test.network/ext/bc/C/rpc",
  fantom: "https://rpc.ankr.com/fantom_testnet",
  alfajores: "https://alfajores-forno.celo-testnet.org",
  solana: "https://api.devnet.solana.com",
  moonbasealpha: "https://rpc.api.moonbase.moonbeam.network",
  sui: "https://fullnode.testnet.sui.io",
  aptos: "https://fullnode.testnet.aptoslabs.com/v1",
  arbitrumgoerli: "https://arbitrum-goerli.publicnode.com",
  optimismgoerli: "https://optimism-goerli.publicnode.com",
  basegoerli: "https://base-goerli.publicnode.com",
  sei: "https://rpc.atlantic-2.seinetwork.io",
  wormchain: "",
  osmosis: "https://rpc.osmotest5.osmosis.zone",
};
