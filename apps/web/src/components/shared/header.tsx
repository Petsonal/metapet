import Link from "next/link"
import ConnectWallet from "../item/ConnectWallet/ConnectWallet"
import MenuItem from "./menuitem"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MetaPet</span>
          </a>

          <ConnectWallet />
          <MenuItem />
        </div>
      </nav>
    </header>
  )
}
