import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { useRouter } from "next/router"
import axios from "axios"

import { marketplaceAddress } from "../config"

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalError, useWeb3ModalProvider } from "@web3modal/ethers5/react"
import { RPC_JSON_URL } from "@/config/config"

export default function ResellNFT() {
  const { isConnected } = useWeb3ModalAccount()
  const { open } = useWeb3Modal()
  const { error } = useWeb3ModalError()
  const { walletProvider } = useWeb3ModalProvider()

  const [formInput, updateFormInput] = useState({ price: "", image: "" })
  const router = useRouter()
  const { id, tokenURI } = router.query
  const { image, price } = formInput

  useEffect(() => {
    fetchNFT()
  }, [id, isConnected])

  async function fetchNFT() {
    if (!tokenURI) return
    const meta = await axios.get(tokenURI)
    updateFormInput((state) => ({ ...state, image: meta.data.image }))
  }

  async function listNFTForSale() {
    if (!price) return

    if (!walletProvider) {
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

      const priceFormatted = ethers.utils.parseUnits(formInput.price, "ether")
      let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
      let listingPrice = await contract.getListingPrice()

      listingPrice = listingPrice.toString()
      let transaction = await contract.resellToken(id, priceFormatted, { value: listingPrice })
      await transaction.wait()

      router.push("/")
    } catch (error) {
      console.log("Error ", error)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col pb-12">
        <input
          placeholder="Asset Price in Eth"
          className="mt-2 border rounded p-4"
          onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}
        />
        {image && <img className="rounded mt-4" width="350" src={image} />}
        <button onClick={listNFTForSale} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          List NFT
        </button>
      </div>
    </div>
  )
}
