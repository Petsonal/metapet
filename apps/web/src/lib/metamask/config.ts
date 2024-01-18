// import { createConfig, http } from "wagmi"
// import { base, sepolia, mainnet, optimism } from "wagmi/chains"
// import { useAccount, useProvider, useSigner } from "wagmi"
// import { InjectedConnector } from "wagmi/connectors/injected"
// import { injected, metaMask, safe, walletConnect } from "wagmi/connectors"

// declare module "wagmi" {
//   interface Register {
//     config: typeof config
//   }
// }

// const projectId = process.env.WALLET_CONNECT_ID || ""
// console.log("projectId", projectId)
// export const config = createConfig({
//   chains: [mainnet, sepolia],
//   connectors: [
//     metaMask(),
//   ],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
// })
// import { createConfig, http } from "wagmi"
// import { mainnet, sepolia } from "wagmi/chains"
// import { metaMask } from "wagmi/connectors"

// const INFURA_KEY: string = process.env.INFURA_API_KEY || ""

// export const config = createConfig({
//   chains: [mainnet, sepolia],
//   connectors: [metaMask({ infuraAPIKey: INFURA_KEY })],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
// })

export function a() {}
