import { HardhatUserConfig } from "hardhat/config"
// import "@nomicfoundation/hardhat-toolbox-viem"
import "@nomicfoundation/hardhat-toolbox"
import { config as dotEnvConfig } from "dotenv"
dotEnvConfig()

console.log("PRIVATE_KEY", process.env.PRIVATE_KEY)
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: ["29c7b718cec0dad617742acf1c0dbda9b0b57ab9dc002c1ed643167968f6be46"],
    },
  },
}

export default config
