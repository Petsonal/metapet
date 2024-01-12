import { useEffect, useState } from "react"
import { Connector, useConnect } from "wagmi"

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.slice(0, 1).map((connector) => (
    <WalletOption key={connector.uid} connector={connector} onClick={() => connect({ connector })} />
  ))
}

function WalletOption({ connector, onClick }: { connector: Connector; onClick: () => void }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    <button disabled={!ready} onClick={onClick}>
      {/* {connector.name} */}
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
