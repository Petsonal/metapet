"use client"

import React, { useEffect } from "react"
import { useState } from "react"
import { ethers } from "ethers"
import { create as ipfsHttpClient } from "ipfs-http-client"
import { useRouter } from "next/router"
import { marketplaceAddress } from "../config"
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalError, useWeb3ModalProvider } from "@web3modal/ethers5/react"
import { JWT_PINTANA } from "@/lib/config"
import axios from "axios"
import Loading from "@/components/Loading/Loading"

// interface IpfsResponse{
//   IpfsHash: string;
//   PinSize:Number;
//   Timestamp: string;
// }

// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
const client = ipfsHttpClient({ host: "localhost", port: "5001", protocol: "http" })

// connect to the default API address http://localhost:5001
// const client = create({
//   host: "localhost",
//   port: 5001,
//   protocol: "http",
// })

// import { PinataClient } from "@pinata/sdk"
// import FormData from "form-data"

// const pinata = new PinataClient('3ca53d8a1cadc44565ac', 'a005dd65f5e6049888bee7f8958b9191d7c1d748662ab559ba8b0db3cef1ff37');

export default function CreateItem() {
  const { isConnected } = useWeb3ModalAccount()
  const { open } = useWeb3Modal()
  const { error } = useWeb3ModalError()
  const { walletProvider } = useWeb3ModalProvider()
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()
  const [loadingState, setLoadingState] = useState("not-loaded")
  const [formInput, updateFormInput] = useState({ price: 0, name: "", description: "" })

  const [image, setImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  // useEffect(()=>{
  //   if (!walletProvider){
  //     open()
  //   }
  // }, [])

  async function handleFileChange(e) {
    const file = e.target.files[0]
    if (!file) return

    // Display a preview of the selected image
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewImage(reader.result)
    }
    reader.readAsDataURL(file)

    setImage(file)
    // try {
    //   const added = await client.add(file, {
    //     progress: (prog) => console.log(`received: ${prog}`),
    //   })
    //   // const url = `https://ipfs.infura.io/ipfs/${added.path}`
    //   const url = `http://127.0.0.1:8080/ipfs/${added.path}`
    //   setFileUrl(url)
    // } catch (error) {
    //   console.log("Error uploading file: ", error)
    // }
  }

  async function uploadToIPFS() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !image) return

    const formData = new FormData()
    formData.append("file", image)

    const pinataMetadata = JSON.stringify({
      name,
      description,
    })
    formData.append("pinataMetadata", pinataMetadata)

    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append("pinataOptions", pinataOptions)

    try {
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT_PINTANA,
        },
      })

      console.log("uploading", res.data)
      const cid = res.data.IpfsHash
      if (cid) {
        const urlImage = `https://emerald-rare-cuckoo-385.mypinata.cloud/ipfs/${cid}`
        // const urlImage = `https://ipfs.io/ipfs/${cid}`

        return urlImage
      } else {
        console.log("Cannot load cid image")
      }
    } catch (error) {
      setUploading(false)
      console.log(error)
    }

    // try {
    //   const added = await client.add(data)
    //   // const url = `https://ipfs.infura.io/ipfs/${added.path}`
    //   const url = `http://127.0.0.1:8080/ipfs/${added.path}`
    //   /* after file is uploaded to IPFS, return the URL to use it in the transaction */
    //   return url
    // } catch (error) {
    //   console.log("Error uploading file: ", error)
    // }
  }

  async function listNFTForSale() {
    try {
      const url = await uploadToIPFS()

      if (!walletProvider) {
        await open()
        return
      }
      setIsUploading(true)

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

      console.log("formInput.price", formInput.price)
      /* next, create the item */
      const price = ethers.utils.parseEther(formInput.price)
      console.log("price", price)
      let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
      let listingPrice = await contract.getListingPrice()
      listingPrice = listingPrice.toString()
      console.log("listingPrice", listingPrice)
      let transaction = await contract.createToken(url, price, { value: listingPrice })
      console.log("transaction", transaction)
      await transaction.wait()

      setIsUploading(false)
      router.push("/")
    } catch (error) {
      setIsUploading(false)
      console.log("Error ", error)
    }
  }

  if (isUploading) {
    return <Loading />
  }

  if (!isConnected) {
    return (
      <div>
        <h2 className="py-10 px-20 text-3xl">Please connect to your wallet</h2>
      </div>
    )
  }
  return (
    <div className="flex justify-center">
      <div className="flex flex-col pb-12">
        <div className="form-input py-2">
          <label className="block font-medium text-gray-900 dark:text-white">Asset Name</label>
          <input
            placeholder="Asset Name"
            type="name"
            className=" bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
          />
        </div>
        <div className="form-input py-2">
          <label className="block font-medium text-gray-900 dark:text-white">Asset Description</label>
          <textarea
            placeholder="Asset Description"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => updateFormInput({ ...formInput, description: e.target.value })}
          />
        </div>
        <div className="form-input py-2">
          <label className="block font-medium text-gray-900 dark:text-white">Asset Price in Eth</label>
          <input
            placeholder="Asset Price in Eth"
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}
          />
        </div>
        <input type="file" name="Asset" accept="image/*" className="" onChange={handleFileChange} />
        {previewImage && (
          <div className="relative h-96 w-full">
            <h2>Preview:</h2>
            <img
              src={previewImage}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        )}
        <button onClick={listNFTForSale} className="font-bold mt-4 bg-blue-500 text-white rounded p-4 shadow-lg">
          Create NFT
        </button>
      </div>
    </div>
  )
}
