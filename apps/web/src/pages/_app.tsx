import "@/styles/globals.css"
import "@/styles/chakraui.css"
import "@/styles/normalize.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "@/lib/theme"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { config } from "@/lib/config"
import { WagmiProvider } from "wagmi"

// import { ConnectKitProvider, getDefaultConfig } from "connectkit"


const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
       <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
