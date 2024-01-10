import "@/styles/globals.css"
import "@/styles/chakraui.css"
import "@/styles/normalize.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "@/lib/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
