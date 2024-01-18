import ConnectButton from "@/components/shared/ConnectButton"
import Header from "@/components/shared/header"
import { Web3ModalProvider } from "@/context/Web3Modal"
import theme from "@/lib/theme"
import "@/styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"
import Link from "next/link"

export default function App({ Component, pageProps }) {
  return (
    <Web3ModalProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </Web3ModalProvider>
  )
}
