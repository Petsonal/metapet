import { WagmiProvider, createConfig, http } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"
// import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors"

declare module "wagmi" {
  interface Register {
    config: typeof config
  }
}

// const projectId = process.env.WALLET_CONNECT_ID || ""
// console.log("projectId", projectId)
export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    // injected(),
    // walletConnect({ projectId}),
    metaMask({}),
    // safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
