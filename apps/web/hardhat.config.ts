import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import { config as dotEnvConfig } from "dotenv"
dotEnvConfig()

// console.log("process.env.PRIVATE_KEY", process.env.PRIVATE_KEY)

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: "https://sepolia.infura.io/v3/b884221f77114ef7b7b14e874781015e",
      },
      chainId: 1337,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/b884221f77114ef7b7b14e874781015e`, // ${process.env.INFURA_API_KEY},
      accounts: ["0x29c7b718cec0dad617742acf1c0dbda9b0b57ab9dc002c1ed643167968f6be46"], // process.env.PRIVATE_KEY ||
    },
  },
}

export default config
