"use client"

import React from "react"
import { useState } from "react"
import { ethers } from "ethers"
import { create as ipfsHttpClient } from "ipfs-http-client"
import { useRouter } from "next/router"
import { marketplaceAddress } from "../config"
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalError, useWeb3ModalProvider } from "@web3modal/ethers5/react"
import { JWT_PINTANA } from "@/lib/config"
import axios from "axios"

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
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter()
  // const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: 0, name: "", description: "" })

  const [image, setImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

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
        const urlImage = `https://ipfs.io/ipfs/${cid}`

        return urlImage
      } else {
        console.log("Cannot load cid image")
      }
    } catch (error) {
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
    setIsUploading(true)
    const url = await uploadToIPFS()

    if (isConnected == false) {
      await open()
      return
    }
    console.log("Finish")
    const provider = new ethers.providers.Web3Provider(walletProvider)
    const signer = provider.getSigner()

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
  }

  if (isUploading) {
    return (
      <div className="flex justify-center">
        <div role="status">
          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>)
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
        {/* bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 */}
        {/* {fileUrl && <img className="rounded mt-4" width="350" src={fileUrl} />} */}
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
