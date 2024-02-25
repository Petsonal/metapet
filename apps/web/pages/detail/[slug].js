import { ethers } from "ethers"
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { marketplaceAddress } from "../../config"

import NFTMarketplace from "../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalError, useWeb3ModalProvider } from "@web3modal/ethers5/react"
import { useRouter } from "next/router"
import { RPC_JSON_URL } from "@/config/config"
import Loading from "@/components/Loading/Loading"
import Waiting from "@/components/Waiting/Waiting"

export async function getServerSideProps(context) {
  const { slug } = context.query
  // Fetch data based on the slug
  // Example: const postData = await fetchPostBySlug(slug);

  return {
    props: {
      slug,
    },
  }
}

export default function Detail({ slug }) {
  const { isConnected } = useWeb3ModalAccount()
  const { open } = useWeb3Modal()
  const { error } = useWeb3ModalError()
  const { walletProvider } = useWeb3ModalProvider()

  const [nftItem, setNFTItem] = useState()
  const [loadingState, setLoadingState] = useState("not-loaded")
  const [isLoading, setIsLoading] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  const router = useRouter()
  // console.log("router.query.slug", router.query)
  // console.log("slug", slug)

  useEffect(() => {
    loadNFTs()
  }, [isConnected])
  async function loadNFTs() {
    setIsLoading(true)
    try {
      const provider = new ethers.providers.JsonRpcProvider(RPC_JSON_URL)
      if (!provider) {
        await open()
        return
      }

      const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider)
      // contract.get
      const data = await contract.fetchMarketItems()
      // console.log("data", data)

      const itemFiltered = data.filter((item) => item.tokenId.toNumber() == slug)

      const item = await Promise.all(
        itemFiltered.map(async (i, idx) => {
          const tokenUrl = await contract.tokenURI(i.tokenId)
          let price = ethers.utils.formatUnits(i.price.toString(), "ether")
          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: tokenUrl, // meta.data.image,
            name: `NFT Item #${idx + 1}`,
            description: `Description ${idx + 1}`,
          }
          return item
        })
      )

      setNFTItem(item[0])
      setLoadingState("loaded")
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log("Error ", error)
    }
  }

  async function buyNft(nft) {
    try {
      if (!walletProvider) {
        await open()
        return
      }

      const provider = new ethers.providers.Web3Provider(walletProvider)
      if (!provider) {
        await open()
        return
      }

      console.log("1. signer")
      const signer = provider.getSigner()
      if (!signer) {
        await open()
        return
      }

      setIsLoading(true)
      const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)

      /* user will be prompted to pay the asking proces to complete the transaction */
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether")
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      })

      setIsWaiting(true)
      await transaction.wait()
      setIsWaiting(false)

      loadNFTs()
      setIsLoading(false)
      router.push("/my-nfts")
    } catch (error) {
      setIsLoading(false)
      console.log("Error", error)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  if (isWaiting) {
    return <Waiting />
  }

  return (
    <div className="">
      <div className="p-4">
        <h2 className="text-2xl py-2">Detail</h2>
        {nftItem && (
          <div className="grid grid-cols-2">
            <article className="flex flex-col h-full rounded-xl relative z-20 overflow-hidden bg-white shadow-md transition-shadow duration-250 ease-in-out w-full">
              <div className="no-underline cursor-pointer text-interactive-primary hover:text-interactive-primary-hover disabled:pointer-events-none disabled:opacity-40 Asset--anchor">
                <div className="">
                  <div className="h-[30rem] w-[30rem] relative">
                    {/* <img alt="Cool Cat" loading="lazy" decoding="async" data-nimg="fill" className="" src="https://ipfs.io/ipfs/QmXoNVqZ4htg2BKeSv7khMr6LHvUbe2jw9hj2rRhht6sXy" style="position: absolute; height: 100%; width: 100%; inset: 0px; object-fit: cover; color: transparent;" /> */}
                    <Image
                      src={nftItem.image}
                      priority={false}
                      alt="Cool Cat"
                      loading="lazy"
                      decoding="async"
                      className=""
                      fill={true}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </article>
            <div className="flex flex-col w-full p-8">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl leading-sm font-semibold text-primary">{nftItem.name}</h2>
                </div>
                <div className="text-sm text-gray-400 leading-sm text-primary py-4 w-96">{nftItem.description}</div>
                <div className="flex items-center overflow-hidden h-7 px-2">
                  <span className="leading-sm font-bold text-2xl text-primary">{nftItem.price} ETH</span>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => buyNft(nftItem)}
                    className="inline-flex items-center justify-center whitespace-nowrap transition duration-200 text-md leading-md font-semibold bg-blue-500 text-white hover:bg-blue-2 gap-3 rounded-xl px-6 py-3 disabled:pointer-events-none disabled:opacity-40  w-56 p-0"
                  >
                    <span className="text-sm leading-sm font-ssemibold text-white">
                      Buy now
                      <span></span>
                    </span>
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
