import { HardhatUserConfig } from "hardhat/config"
import { config as dotEnvConfig } from "dotenv"
// import "@nomiclabs/hardhat-waffle";
// import "@nomicfoundation/hardhat-toolbox-viem"
require("@nomicfoundation/hardhat-toolbox-viem")
dotEnvConfig()

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // sepolia: {
    //   url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
    //   accounts: ["29c7b718cec0dad617742acf1c0dbda9b0b57ab9dc002c1ed643167968f6be46"],
    // },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}

export default config
