import Image from "next/image"
import { Inter } from "next/font/google"
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalError, useWeb3ModalProvider } from "@web3modal/ethers5/react"
import ConnectButton from "@/components/shared/ConnectButton"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { marketplaceAddress } from "@/config"
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
import axios from "axios"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const { isConnected } = useWeb3ModalAccount()
  const { open } = useWeb3Modal()
  const { error } = useWeb3ModalError()
  const { walletProvider } = useWeb3ModalProvider()

  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState("not-loaded")
  // const { address, chainId, isConnected } = useWeb3ModalAccount()

  useEffect(() => {
    loadNFTs()
  }, [])

  async function loadNFTs() {
    if (isConnected == false) {
      await open()
      return
    }
    /* create a generic provider and query for unsold market items */
    // const provider = new ethers.providers.JsonRpcProvider()
    const provider = new ethers.providers.Web3Provider(walletProvider)
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider)
    const data = await contract.fetchMarketItems()

    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await contract.tokenURI(i.tokenId)
        console.log("tokenUri", tokenUri)
        // https://ipfs.io/ipfs/QmdQihdJpmBxZJB9jnZozjBZyfCbzG4RFGvPDHqGKW9ivB/
        let meta = "https://gateway.pinata.cloud/ipfs/QmdQihdJpmBxZJB9jnZozjBZyfCbzG4RFGvPDHqGKW9ivB/nft1.jpg"
        try {
          meta = await axios.get(tokenUri)
        } catch (error) {
          console.log("Cannot connect to ipfs server")
        }
        // const
        // console.log(meta.data)
        let price = ethers.utils.formatUnits(i.price.toString(), "ether")
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        }
        return item
      })
    )
    setNfts(items)
    setLoadingState("loaded")
  }

  async function buyNft(nft) {
    if (isConnected == false) {
      await open()

      if (error) {
        return
      }
    }

    const provider = new ethers.providers.Web3Provider(walletProvider)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether")
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    })
    await transaction.wait()
    loadNFTs()
  }

  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <img src={nft.image} />
              <div className="p-4">
                <p className="text-2xl font-semibold">{nft.name}</p>
                <div>
                  <p className="text-gray-400">{nft.description}</p>
                </div>
                <div>
                  <p className="text-sm">Owner: {nft.owner}</p>
                  <p className="text-sm">Seller: {nft.seller}</p>
                </div>
              </div>
              <div className="p-4 bg-black">
                <p className="text-2xl font-bold text-white">{nft.price} ETH</p>
                <button
                  className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                  onClick={() => buyNft(nft)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
