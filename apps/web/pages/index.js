import { Inter } from "next/font/google"
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalError, useWeb3ModalProvider } from "@web3modal/ethers5/react"
import ConnectButton from "@/components/shared/ConnectButton"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { marketplaceAddress } from "@/config"
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
import axios from "axios"
import Image from "next/image"

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
  }, [isConnected])

  async function loadNFTs() {
    if (isConnected == false) {
      console.log("isConnected == ", isConnected)
      return
    }
      console.log("isConnected == ", isConnected)
    // if (isConnected == false) {
    //   await open()
    //   return
    // }
    /* create a generic provider and query for unsold market items */
    // const provider = new ethers.providers.JsonRpcProvider()
    const provider = new ethers.providers.Web3Provider(walletProvider)
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider)
    const data = await contract.fetchMarketItems()
    console.log("data", data)

    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = await Promise.all(
      data.map(async (i, idx) => {
        const tokenUri = await contract.tokenURI(i.tokenId)
        console.log("tokenUri", tokenUri)
        // https://ipfs.io/ipfs/QmdQihdJpmBxZJB9jnZozjBZyfCbzG4RFGvPDHqGKW9ivB/nft1.jpg
        const tokenImageUrl = "https://ipfs.io/ipfs/QmdQihdJpmBxZJB9jnZozjBZyfCbzG4RFGvPDHqGKW9ivB/nft1.jpg"
        // let meta = "https://ipfs.io/ipfs/QmdQihdJpmBxZJB9jnZozjBZyfCbzG4RFGvPDHqGKW9ivB/nft1.jpg"
        // "https://gateway.pinata.cloud/ipfs/QmdQihdJpmBxZJB9jnZozjBZyfCbzG4RFGvPDHqGKW9ivB/nft1.jpg"
        try {
          // meta = await axios.get(tokenUri)

          // const
          // console.log(meta.data)
          let price = ethers.utils.formatUnits(i.price.toString(), "ether")
          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: tokenUri, //"https://ipfs.io/ipfs/QmdQihdJpmBxZJB9jnZozjBZyfCbzG4RFGvPDHqGKW9ivB/nft1.jpg", // meta.data.image,
            name:  `NFT Item #${idx+1}`, //"nft1.jpg", // meta.data.name,
            description: `Description ${idx+1}` //"Item desc", // meta.data.description,
          }
          return item
        } catch (error) {
          console.log("Cannot connect to ipfs server")
        }
        return null
      })
    )

    console.log("items", items)
    if (items){
      setNfts(items)
      setLoadingState("loaded")
    }
      
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

  console.log("nfts", nfts)

  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i )=>(
              <div key={i}>
<div className="sc-beff130f-0 sc-4be2248d-1 hksMfk lmdJxr Asset--loaded">
          <article
            className="flex flex-col h-full rounded-xl relative z-20 overflow-hidden bg-white shadow-md transition-shadow duration-250 ease-in-out w-full"
          >
            <a href="/detail"
              className="no-underline cursor-pointer text-interactive-primary hover:text-interactive-primary-hover disabled:pointer-events-none disabled:opacity-40 Asset--anchor">
              <div className="h-72 w-72">
                <div className="h-72 w-72 relative">
                  <Image src={nft.image} alt="Cool Cat" loading="lazy" decoding="async" className="" fill={true} style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className="flex flex-col w-full p-4">
                <div className="flex items-center justify-between">
                  <div className="text-lg leading-sm font-semibold text-primary">
                  {nft.name ? nft.name : `NFT Item #${i+1}`}
                  </div>
                  <div>
                    <div className="flex items-center overflow-hidden h-7 px-2">
                      <span className="leading-sm font-bold text-2xl text-primary">
                        {nft.price} ETH
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-400 leading-sm text-primary text-ellipsis overflow-hidden truncate whitespace-no-wrap w-48">
                {nft.description}
                </div>
                <div className="flex flex-row pt-4">
                  <span className="flex-none mr-4">Seller</span>
                  <span className="flex-auto text-gray-400 leading-sm text-primary text-ellipsis overflow-hidden truncate whitespace-no-wrap w-32">{nft.seller}</span>
                </div>
                <div className="flex flex-row">
                  <span className="flex-none mr-4">Owner</span>
                  <span className="flex-auto text-gray-400 leading-sm text-primary text-ellipsis overflow-hidden truncate whitespace-no-wrap w-32">{nft.owner}</span>
                </div>
              </div>
            </a>
            <div className="rounded-xl ml-[-1px] rounded-b-default rounded-t-none">
              <div className="">
                <button type="button" onClick={() => buyNft(nft)} className="inline-flex items-center justify-center whitespace-nowrap transition duration-200 text-md leading-md font-semibold bg-blue-500 text-white hover:bg-blue-2 gap-3 rounded-xl px-6 py-3 disabled:pointer-events-none disabled:opacity-40  w-full rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-lg p-0">
                  <span className="text-sm leading-sm font-semibold text-white" >Buy now
                  <span></span>
                  </span>
                </button>
              </div>
            </div>
          </article>
        </div>
            </div>
            ))
          }
          {/* {nfts.map((nft, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <div className="relative h-80">
              <Image src={nft.image} fill={true} className="absolute inset-0 h-full object-cover object-center" alt="" />
              </div>
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
                  className="mt-4 bg-blue-500 text-white font-bold py-2 px-12 rounded inline-flex items-center justify-center whitespace-nowrap transition duration-200 text-md gap-3 w-full"
                  onClick={() => buyNft(nft)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}
