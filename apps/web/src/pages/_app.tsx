import "@/styles/globals.css"
import "@/styles/chakraui.css"
import "@/styles/normalize.css"
import type { AppProps } from "next/app"
import Layout from "@/components/shared/layout"

// import { ConnectKitProvider, getDefaultConfig } from "connectkit"
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
  appName: "Petsonal",
  projectId: "6831d6853ff259c014dacae33001d9a5",
  chains,
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
