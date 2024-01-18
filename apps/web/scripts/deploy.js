const hre = require("hardhat")
const fs = require("fs")

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace")
  const nftMarketplace = await NFTMarketplace.deploy()
  await nftMarketplace.deployed()
  console.log("nftMarketplace deployed to:", nftMarketplace.address)

  // const nftFactory = await hre.ethers.getContractFactory("NFTMarketplace")
  // const nft = await nftFactory.deploy(nftMarketplace.address)
  // await nft.deployed()

  // console.log("nft deployed to ", nft.address)

  fs.writeFileSync("./config.js", `export const marketplaceAddress = "${nftMarketplace.address}"`)
  // export const nftaddress = "${nft.address}"
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
