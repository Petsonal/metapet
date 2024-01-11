import { ChakraProvider } from "@chakra-ui/react"
import theme from "@/lib/theme"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { config } from "@/lib/metamask/config"
import { WagmiProvider } from "wagmi"

import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }: { children: any }) {
  const queryClient = new QueryClient()
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ChakraProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}
