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
          {/* <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
            <ul className="flex flex-col mt-4 md:flexRow md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className="block py-2 pr-4 pl-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <Link href="/">Home</Link>
              </li>

              <li className="block py-2 pr-4 pl-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <Link href="/market">Market</Link>
              </li>
              <li className="block py-2 pr-4 pl-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <Link href="/create">Create</Link>
              </li>
              <li className="block py-2 pr-4 pl-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div> */}
          <MenuItem />
        </div>
      </nav>
    </header>
  )
}
