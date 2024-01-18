import { http, createConfig, useBlockNumber } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"

// useBlockNumber({ chainId: 11155111 })

declare module "wagmi" {
  interface Register {
    config: typeof config
  }
}

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
