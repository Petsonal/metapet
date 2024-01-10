import styles from "./styles.module.css"

export default function ConnectWallet() {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center select-none relative whitespace-nowrap align-middle outline-none rounded-md border-transparent border-2 outline-offset-2 w-auto leading-1.2 font-semibold transition-property-common transition-duration-normal h-10 min-w-10 text-md px-6 bg-blue-500 text-white"
    >
      <span className="chakra-button__icon inline-flex self-center flex-shrink-0 mr-3">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          focusable="false"
          className="chakra-icon w-4 h-4 inline-block leading-4 flex-shrink-0 text-current"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="416"
            height="288"
            x="48"
            y="144"
            fill="none"
            strokeLinejoin="round"
            strokeWidth="32"
            rx="48"
            ry="48"
          ></rect>
          <path
            fill="none"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
          ></path>
          <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
        </svg>
      </span>
      Connect Wallet
    </button>
  )
}
