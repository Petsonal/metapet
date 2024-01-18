import "@/styles/globals.css"
import "@/styles/chakraui.css"
import "@/styles/normalize.css"
import type { AppProps } from "next/app"
import Layout from "@/components/shared/layout"
import { ethers } from "ethers"
import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"
import { config } from "@/lib/config"

const queryClient = new QueryClient() 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
