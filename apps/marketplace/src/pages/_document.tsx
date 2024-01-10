import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-full chakra-ui-light">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
