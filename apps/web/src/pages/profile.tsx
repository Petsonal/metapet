"use client"

import Header from "@/components/shared/header"
// import { useAccount, useEnsName } from "wagmi"
import NFTMarketplace from "../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
import { useCallback, useEffect, useState } from "react"
import { ethers } from "ethers"
// import WalletConnect from "@/components/item/WalletConnect/WalletConnect"
import abi from "./abi.json"
import { getBrowserProvider, getEtherProvider } from "@/lib/ether/provider"

// const web3 = new Web3(Web3.givenProvider);
// contract address is provided by Truffle migration

// const SimpleContract = new web3.eth.Contract(simpleStorageAbi, contractAddr);

// const erc20_rw = new ethers.Contract(address, abi, signer);

export default function Profile() {
  // const { address } = useAccount()
  // const { data, error, status } = useEnsName({ address })
  // if (status === "pending") return <div>Loading ENS name</div>
  // if (status === "error") return <div>Error fetching ENS name: {error.message}</div>
  // const [nfts, setNfts] = useState([])
  // const [loadingState, setLoadingState] = useState("not-loaded")
  // useEffect(() => {
  //   loadNFTs()
  // }, [])

  // async function loadNFTs() {
  /* create a generic provider and query for unsold market items */
  // const provider = new ethers.providers.JsonRpcProvider()
  // const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider)
  // const data = await contract.fetchMarketItems()
  // /*
  // *  map over items returned from smart contract and format
  // *  them as well as fetch their token metadata
  // */
  // const items = await Promise.all(data.map(async i => {
  //   const tokenUri = await contract.tokenURI(i.tokenId)
  //   const meta = await axios.get(tokenUri)
  //   let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
  //   let item = {
  //     price,
  //     tokenId: i.tokenId.toNumber(),
  //     seller: i.seller,
  //     owner: i.owner,
  //     image: meta.data.image,
  //     name: meta.data.name,
  //     description: meta.data.description,
  //   }
  //   return item
  // }))
  // setNfts(items)
  // setLoadingState('loaded')
  // }
  // async function buyNft(nft: any) {
  // /* needs the user to sign the transaction, so will use Web3Provider and sign it */
  // const web3Modal = new Web3Modal()
  // const connection = await web3Modal.connect()
  // const provider = new ethers.providers.Web3Provider(connection)
  // const signer = provider.getSigner()
  // const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
  // /* user will be prompted to pay the asking proces to complete the transaction */
  // const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
  // const transaction = await contract.createMarketSale(nft.tokenId, {
  //   value: price
  // })
  // await transaction.wait()
  // loadNFTs()
  // }

  const [number, setNumber] = useState(0)
  const [getNumber, setGetNumber] = useState<bigint>(0n)

  const handleGet = async (e: any) => {
    e.preventDefault()

    const address = "0x10fC673e227e7C8B67Ed1d69C42db713e3faaa54"
    const etherProvider = getEtherProvider()

    let wallet = new ethers.Wallet("29c7b718cec0dad617742acf1c0dbda9b0b57ab9dc002c1ed643167968f6be46", etherProvider)

    const contract = new ethers.Contract(address, abi, wallet)
    let num = await contract.get().then((value: bigint) => {
      console.log(value)
      setGetNumber(value)
    })

    // console.log("num", num, typeof(num))
  }
  const handleSet = async (e: any) => {
    e.preventDefault()
    const address = "0x10fC673e227e7C8B67Ed1d69C42db713e3faaa54"
    const etherProvider = getEtherProvider()

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
      <div className="relative bg-white overflow-hidden my-10 p-20 flex flex-col gap-4">
        {/* <div>ENS name: {data}</div> */}
        {/* <WalletConnect></WalletConnect> */}
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
      </div>
    </>
  )
}
