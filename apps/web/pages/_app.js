import ConnectButton from "@/components/shared/ConnectButton"
import Header from "@/components/shared/header"
import { ContractProvider } from "@/lib/ContractContext"
import { Web3ModalProvider } from "@/lib/Web3Modal"
import theme from "@/lib/theme"
import "@/styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"
import Link from "next/link"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ContractProvider>
        <Web3ModalProvider>
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Component {...pageProps} />
          </main>
        </Web3ModalProvider>
      </ContractProvider>
    </ChakraProvider>
  )
}
