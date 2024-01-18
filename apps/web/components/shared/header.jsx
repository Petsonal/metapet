import Link from "next/link"
import MenuItem from "./menuitem"
import ConnectButton from "./ConnectButton"
// import dynamic from "next/dynamic"
// import ConnectWallet from "../item/ConnectWallet/ConnectWallet"
// import WalletConnect from "../item/WalletConnect/WalletConnect"
// import { ConnectButton } from "@rainbow-me/rainbowkit"

// const ConnectWallet = dynamic(() => import("../item/ConnectWallet/ConnectWallet"), {
//   loading: () => <p>Loading...</p>,
//   ssr: false,
// })

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MetaPet</span>
          </a>
          <div className="flex md:order-2">
            <ConnectButton />
          </div>
          <MenuItem />
        </div>
      </nav>
    </header>
  )
}
