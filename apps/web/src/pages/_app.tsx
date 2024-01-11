import "@/styles/globals.css"
import "@/styles/chakraui.css"
import "@/styles/normalize.css"
import type { AppProps } from "next/app"
import Layout from "@/components/shared/layout"

// import { ConnectKitProvider, getDefaultConfig } from "connectkit"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
