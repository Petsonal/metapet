import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"
import { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-full chakra-ui-light">
        <Header />
        <ColorModeScript />
        <main>
          <Main />
        </main>
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
