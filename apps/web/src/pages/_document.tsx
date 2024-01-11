import Header from "@/components/shared/header"
import { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="MetaPet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="MetaPet" />
        <meta name="application-name" content="MetaPet" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="MetaPet" />
        <meta property="og:description" content="MetaPet" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metapet.com/" />
        <meta property="og:image" content="https://metapet.com/images/og.png" />
      </Head>
      <body className="h-full chakra-ui-light">
        <ColorModeScript />

        <Main />

        <NextScript />
      </body>
    </Html>
  )
}
