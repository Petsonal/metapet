import "@rainbow-me/rainbowkit/styles.css"

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { mainnet, polygon, optimism, arbitrum, base, zora, goerli, sepolia } from "wagmi/chains"
import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"

const { chains, publicClient } = configureChains(
  [goerli, sepolia, mainnet, polygon, optimism, arbitrum, base, zora],
  [infuraProvider({ apiKey: process.env.INFURA_API_KEY || "" }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})
