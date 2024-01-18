"use client"

import React from "react"
import { useState } from "react"
import { ethers } from "ethers"
import { create as ipfsHttpClient } from "ipfs-http-client"
import { useRouter } from "next/router"
import { marketplaceAddress } from "../config"
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalError, useWeb3ModalProvider } from "@web3modal/ethers5/react"

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

import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons"

export default function CreateItem() {
  const { isConnected } = useWeb3ModalAccount()
  const { open } = useWeb3Modal()
  const { error } = useWeb3ModalError()
  const { walletProvider } = useWeb3ModalProvider()

  const router = useRouter()
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: "", name: "", description: "" })

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      })
      // const url = `https://ipfs.infura.io/ipfs/${added.path}`
      const url = `http://localhost:8080/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log("Error uploading file: ", error)
    }
  }
  async function uploadToIPFS() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    })
    try {
      const added = await client.add(data)
      // const url = `https://ipfs.infura.io/ipfs/${added.path}`
      const url = `http://127.0.0.1:8080/ipfs/${added.path}`
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      return url
    } catch (error) {
      console.log("Error uploading file: ", error)
    }
  }

  async function listNFTForSale() {
    const url = await uploadToIPFS()

    if (isConnected == false) {
      await open()
      return
    }
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const { walletProvider } = useWeb3ModalProvider()
    const provider = new ethers.providers.Web3Provider(walletProvider)
    const signer = provider.getSigner()

    /* next, create the item */
    const price = ethers.utils.parseUnits(formInput.price, "ether")
    let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()
    let transaction = await contract.createToken(url, price, { value: listingPrice })
    await transaction.wait()

    router.push("/")
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col pb-12">
        <div className="form-input py-2">
          <label className="block font-medium text-gray-900 dark:text-white">Asset Name</label>
          <input
            placeholder="Asset Name"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}
          />
        </div>
        <input
          type="file"
          name="Asset"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={onChange}
        />
        {fileUrl && <img className="rounded mt-4" width="350" src={fileUrl} />}
        <button onClick={listNFTForSale} className="font-bold mt-4 bg-blue-500 text-white rounded p-4 shadow-lg">
          Create NFT
        </button>
      </div>
    </div>
  )
}
