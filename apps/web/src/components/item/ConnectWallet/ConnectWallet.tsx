import { useConnect } from "wagmi"
import { injected } from 'wagmi/connectors'
import styles from "./styles.module.css"

export default function ConnectWallet() {
  const { connect } = useConnect()

  //   <button
  //   type="button"
  //   className="inline-flex items-center justify-center select-none relative whitespace-nowrap align-middle outline-none rounded-md border-transparent border-2 outline-offset-2 w-auto leading-1.2 font-semibold transition-property-common transition-duration-normal h-10 min-w-10 text-md px-6 bg-blue-500 text-white"
  // >
  //   <span className="chakra-button__icon inline-flex self-center flex-shrink-0 mr-3">
  //     <svg
  //       stroke="currentColor"
  //       fill="currentColor"
  //       strokeWidth="0"
  //       viewBox="0 0 512 512"
  //       focusable="false"
  //       className="chakra-icon w-4 h-4 inline-block leading-4 flex-shrink-0 text-current"
  //       aria-hidden="true"
  //       height="1em"
  //       width="1em"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect
  //         width="416"
  //         height="288"
  //         x="48"
  //         y="144"
  //         fill="none"
  //         strokeLinejoin="round"
  //         strokeWidth="32"
  //         rx="48"
  //         ry="48"
  //       ></rect>
  //       <path
  //         fill="none"
  //         strokeLinejoin="round"
  //         strokeWidth="32"
  //         d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
  //       ></path>
  //       <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
  //     </svg>
  //   </span>
  //   Connect Wallet
  // </button>

  // return connectors.map((connector) => (
  //   <button key={connector.uid} onClick={() => connect({ connector })}>
  //     {connector.name}
  //   </button>
  // ))
  return (<>1</>)
}

{
  /*  */
}

{
  /* <button
       data-collapse-toggle="mobile-menu-4"
       type="button"
       className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
       aria-controls="mobile-menu-4"
       aria-expanded="false"
     >
       <span className="sr-only">Open main menu</span>
       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
         <path
           fillRule="evenodd"
           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
           clipRule="evenodd"
         ></path>
       </svg>
       <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
         <path
           fillRule="evenodd"
           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
           clipRule="evenodd"
         ></path>
       </svg>
     </button> */
}
{
  /* </div> */
}
