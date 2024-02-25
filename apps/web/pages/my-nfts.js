import { ethers } from "ethers"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { marketplaceAddress } from "../config"
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalError, useWeb3ModalProvider } from "@web3modal/ethers5/react"
import Image from "next/image"
import { RPC_JSON_URL } from "@/config/config"
import Loading from "@/components/Loading/Loading"

export default function MyAssets() {
  const { isConnected } = useWeb3ModalAccount()
  const { open } = useWeb3Modal()
  const { error } = useWeb3ModalError()
  const { walletProvider } = useWeb3ModalProvider()

  const router = useRouter()
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState("not-loaded")

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadNFTs()
  }, [])

  async function loadNFTs() {
    if (!walletProvider){
      await open()
      return
    }

    try {
      const provider = new ethers.providers.Web3Provider(walletProvider)
      if (!provider) {
        await open()
        return
      }

      const signer = provider.getSigner()
      if (!signer) {
        await open()
        return
      }

      const marketplaceContract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)

      setIsLoading(true)
      const data = await marketplaceContract.fetchMyNFTs()

      const items = await Promise.all(
        data.map(async (i, idx) => {
          const tokenURI = await marketplaceContract.tokenURI(i.tokenId)
          const meta = await axios.get(tokenURI)
          let price = ethers.utils.formatUnits(i.price.toString(), "ether")
          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: tokenURI, //meta.data.image,
            tokenURI,
            name: `NFT Item #${idx + 1}`,
            description: `Description ${idx + 1}`
          }

          return item
        })
      )
      setNfts(items)
      setLoadingState("loaded")
      setIsLoading(false)
    } catch (error) {
      console.error("Error connect to smart contract")
    }

  }
  function listNFT(nft) {
    // console.log("nft:", nft)
    router.push(`/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)
  }

  if (isLoading) {
    return (<Loading />)
  }
  
  if (!isConnected){
    return <h2 className="py-10 px-20 text-3xl">Please connect to your wallet</h2>
  }

  if (loadingState === "loaded" && !nfts.length) return <h2 className="py-10 px-20 text-3xl">No NFTs owned</h2>
  return (
    <div className="flex justify-center">
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
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
                          {nft.name ? nft.name : `NFT Item #${i + 1}`}
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
                    </div>
                  </a>
                  <div className="rounded-xl ml-[-1px] rounded-b-default rounded-t-none">
                    <div className="">
                      <button type="button" onClick={() => listNFT(nft)} className="inline-flex items-center justify-center whitespace-nowrap transition duration-200 text-md leading-md font-semibold bg-blue-500 text-white hover:bg-blue-2 gap-3 rounded-xl px-6 py-3 disabled:pointer-events-none disabled:opacity-40  w-full rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-lg p-0">
                        <span className="text-sm leading-sm font-semibold text-white" >Resell
                          <span></span>
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
