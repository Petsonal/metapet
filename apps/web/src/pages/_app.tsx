import "@/styles/globals.css"
import "@/styles/chakraui.css"
import "@/styles/normalize.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "@/lib/theme"
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
// import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const config = createConfig({ 
  chains: [mainnet, sepolia],
  ssr: true, 
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
