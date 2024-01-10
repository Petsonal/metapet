import Image from "next/image"
import { Inter } from "next/font/google"
// import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import { Button } from "@fluentui/react-components"
import type { ButtonProps } from "@fluentui/react-components"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return <Button appearance="primary">Example</Button>
}
