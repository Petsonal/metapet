import styles from "./styles.module.css"

export default function ConnectWallet() {
  return (
    <button type="button" className="chakra-button css-6cka7m">
      <span className="chakra-button__icon css-1qx7bcs">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          focusable="false"
          className="chakra-icon css-13otjrl"
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
            stroke-linejoin="round"
            stroke-width="32"
            rx="48"
            ry="48"
          ></rect>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-width="32"
            d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
          ></path>
          <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
        </svg>
      </span>
      Connect Wallet
    </button>
  )
}
