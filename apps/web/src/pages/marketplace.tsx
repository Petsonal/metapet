import type { ButtonProps } from "@fluentui/react-components"
import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import styles from "../styles/pages/marketplace.module.css"
import Header from "@/components/shared/header"
import { useCallback, useEffect, useState } from "react"
import { getBrowserProvider, getEtherProvider } from "@/lib/ether/provider"
import NFTMarketplace from "../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
import { MARKET_ADDRESS } from "@/lib/constants/keys"
import { BrowserProvider, JsonRpcSigner, ethers, formatUnits, parseUnits } from "ethers"
import axios from "axios"
import abi from "./abi.json"
import { JsonRpcPayload } from "web3"
import WalletConnect from "@/components/shared/walletconnect"

export default function Home() {
  // const [nfts, setNfts] = useState<any>([])
  // const [loadingState, setLoadingState] = useState("not-loaded")

  // useEffect(() => {
  //   loadNFTs()
  // }, [])

  // async function loadNFTs() {
  // const marketplaceAddress = MARKET_ADDRESS as string
  /* create a generic provider and query for unsold market items */
  // const provider = getEtherProvider()
  // let wallet = new ethers.Wallet("29c7b718cec0dad617742acf1c0dbda9b0b57ab9dc002c1ed643167968f6be46", provider)
  // const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, wallet)
  // const data = await contract.fetchMarketItems()

  /*
   *  map over items returned from smart contract and format
   *  them as well as fetch their token metadata
   */
  //   const items = await Promise.all(
  //     data.map(async (i:any) => {
  //       const tokenUri = await contract.tokenURI(i.tokenId)
  //       const meta = await axios.get(tokenUri)
  //       let price = formatUnits(i.price.toString(), "ether")
  //       let item = {
  //         price,
  //         tokenId: i.tokenId.toNumber(),
  //         seller: i.seller,
  //         owner: i.owner,
  //         image: meta.data.image,
  //         name: meta.data.name,
  //         description: meta.data.description,
  //       }
  //       return item
  //     })
  //   )
  //   setNfts(items)
  //   setLoadingState("loaded")
  // }

  // async function buyNft(nft: any) {
  //   /* needs the user to sign the transaction, so will use Web3Provider and sign it */
  //   // const web3Modal = new BrowserProvider(window.ethereum)
  //   // const signer = web3Modal.getSigner();
  //   // const connection = await web3Modal.connect()
  //   // const provider = new ethers.providers.Web3Provider(connection)
  //   // const signer = provider.getSigner()
  //   const provider = new BrowserProvider(window.ethereum)
  //   let wallet = new ethers.Wallet("29c7b718cec0dad617742acf1c0dbda9b0b57ab9dc002c1ed643167968f6be46", provider)

  //   const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)

  //   /* user will be prompted to pay the asking proces to complete the transaction */
  //   const price = parseUnits(nft.price.toString(), "ether")
  //   const transaction = await contract.createMarketSale(nft.tokenId, {
  //     value: price,
  //   })
  //   await transaction.wait()
  //   loadNFTs()
  // }

  // if (loadingState === "loaded" && !nfts.length)
  //   return <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>

  const [number, setNumber] = useState(0)
  const [getNumber, setGetNumber] = useState<bigint>(0n)

  const handleGet = async (e: any) => {
    e.preventDefault()

    const address = "0x10fC673e227e7C8B67Ed1d69C42db713e3faaa54"
    const etherProvider = new ethers.BrowserProvider(window.ethereum)

    // Prompt user to connect Metamask
    await etherProvider
      .send("eth_requestAccounts", [])
      .then(() => {
        console.log("Connected")
      })
      .catch((error:any) => {
        console.log(error)
      })

    // Get signer
    const signer = etherProvider.getSigner()


    // Get address
    // signer.address.then((address:JsonRpcSigner) => {
      // console.log("Address:", address)
    // })
    // console.log(signer.getAddress());

    // let wallet = new ethers.Wallet("29c7b718cec0dad617742acf1c0dbda9b0b57ab9dc002c1ed643167968f6be46", etherProvider)

    // const contract = new ethers.Contract(address, abi, signer)
    // let num = await contract.get().then((value: bigint) => {
    //   console.log(value)
    //   setGetNumber(value)
    // })

    // console.log("num", num, typeof(num))
  }
  const handleSet = async (e: any) => {
    e.preventDefault()
    const address = "0x10fC673e227e7C8B67Ed1d69C42db713e3faaa54"
    const etherProvider = getBrowserProvider()

    let wallet = new ethers.Wallet("29c7b718cec0dad617742acf1c0dbda9b0b57ab9dc002c1ed643167968f6be46", etherProvider)

    const contract = new ethers.Contract(address, abi, wallet)
    let num = await contract.set(number).then((value: any) => {
      console.log(value)
    })
  }

  const onChangeAddress = useCallback((e: any) => {
    setNumber(e.target.value)
  }, [])

  return (
    <>
      <Header />
      <WalletConnect/>
      <section className="p-16  place-items-center justify-center align-middle flex flex-col">
        <h2 className="text-gray-950 font-bold text-3xl">Explore Marketplace</h2>
        <form onSubmit={handleSet} className="">
          <label>
            Set Number:
            <input
              type="text"
              name="name"
              value={number}
              onChange={onChangeAddress}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
          <input
            type="submit"
            value="Set Number"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          />
        </form>
        <button
          onClick={handleGet}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get Number
        </button>

        <h1>{getNumber.toString()}</h1>
      </section>
    </>
  )
}
