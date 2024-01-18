import { defineConfig } from "@wagmi/cli"
import { etherscan, react } from "@wagmi/cli/plugins"
import { erc721Abi } from "viem"
import { mainnet, sepolia } from "wagmi/chains"

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      name: "erc721",
      abi: erc721Abi,
    },
  ],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: mainnet.id,
      contracts: [
        {
          name: "EnsRegistry",
          address: {
            [mainnet.id]: "0x314159265dd8dbb310642f98f50c066173c1259b",
            [sepolia.id]: "0x10fC673e227e7C8B67Ed1d69C42db713e3faaa54",
          },
        },
      ],
    }),
    react(),
  ],
})
