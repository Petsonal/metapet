"use client"

// import { useConnect, Connector, useAccount } from "wagmi"
import styles from "./styles.module.css"
import { WalletOptions } from "@/lib/metamask/wallet-options"
import { Account } from "@/lib/metamask/account"
import { useState } from "react"
import { JsonRpcProvider, getDefaultProvider } from "ethers"
import NFTMarketplace from "../../../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json"
// import { ethers } from "ethers"

// import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: any
  }
}

interface FormEvent extends React.FormEvent {
  target: HTMLFormElement
  currentTarget: HTMLFormElement
}

export default function WalletConnect() {
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  // const provider = new ethers.providers.JsonRpcProvider();

  // const signer = provider.getSigner()
  // const { isConnected } = useAccount()
  // if (isConnected) return <Account />
  // return <WalletOptions />
  const ethers = require("ethers")
  const INFURA_API_KEY = process.env.INFURA_INFURA_API_KEY
  const PRIVATE_KEY = process.env.PRIVATE_KEY
  // const provider = getDefaultProvider("http://localhost:8545/")
  const network = "sepolia"
  // const provider = new JsonRpcProvider("https://sepolia.infura.io/v3/b884221f77114ef7b7b14e874781015e", network)
  // const signer = provider.getSigner()
  // const provider_Metamask = new ethers.providers.Web3Provider(window.ethereum)
  // const infuraProvider = new ethers.providers.InfuraProvider("goerli", INFURA_API_KEY)
  // console.log("provider", provider)

  // Instantiating a BrowserProvider
  const provider = new ethers.BrowserProvider(window.ethereum)

  const abi = NFTMarketplace.abi
  // encoding increment method call
  // const contract = new ethers.Contract(counter, abi, signer)
  // const { data } = await contract.increment.populateTransaction()

  // Use the useState hook function to add state variables to a functional component.
  const [blockNumber, setBlockNumber] = useState<number | null>(null)
  const [txSent, setTxSent] = useState<string | null>(null)
  const [txSentInfura, setTxSentInfura] = useState<string | null>(null)

  // Get the latest block using the InfuraProvider or wallet
  // const handleButton1 = async () => {
  //   const latest_block = await infuraProvider.getBlockNumber("latest")
  //   setBlockNumber(latest_block)
  // }

  // const handleButton2 = async () => {
  //   const latest_block = await provider_Metamask.getBlockNumber("latest")
  //   setBlockNumber(latest_block)
  // }

  // Handle the form submissions to send the transactions
  // const handleSubmitWeb3 = async (e: FormEvent) => {
  //   e.preventDefault()
  //   const data = new FormData(e.target)
  //   const address = data.get("address")
  //   const amount = data.get("amount")
  //   sendTransaction(address, amount)
  // }

  // const handleSubmitInfura = async (e: FormEvent) => {
  //   e.preventDefault()
  //   if (e != null) {
  //     const data = new FormData(e.target)
  //     const address = data.get("address")
  //     const amount = data.get("amount")
  //     const signer = new ethers.Wallet(PRIVATE_KEY, infuraProvider)
  //     sendTransaction(address, amount, signer)
  //   }
  // }

  // Send the transaction using either the Web3Provider or InfuraProvider
  const sendTransaction = async (
    address: FormDataEntryValue | null,
    amount: FormDataEntryValue | null,
    signer: any = null
  ) => {
    if (signer == null) {
      // Web3 Provider
      if (!window.ethereum) console.error("No wallet found!")
      else {
        await window.ethereum.send("eth_requestAccounts")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const tx = await signer.sendTransaction({
          to: address,
          value: ethers.utils.parseEther(amount),
        })
        console.log("tx", tx)
        setTxSent("Transaction initiated! Tx hash: " + tx.hash)
      }
    } // InfuraProvider
    else {
      const tx = await signer.sendTransaction({
        to: address,
        value: ethers.utils.parseEther(amount),
      })
      console.log("tx", tx)
      setTxSentInfura("Transaction initiated! Tx hash: " + tx.hash)
    }
  }

  return (
    <header className="App-header">
      <h3> Press one of the buttons to find out the latest block number: </h3>
      <div>
        {/* <button onClick={handleButton1}>InfuraProvider</button> */}
        {/* <button onClick={handleButton2}>Web3Provider</button> */}
        <p>{blockNumber}</p>
      </div>
      <h3> Fill out the form to send a transaction via Web3Provider: </h3>
      <div>
        {/* <form onSubmit={handleSubmitWeb3}>
          <input type="text" name="address" placeholder="Recipient Address" />
          <input type="text" name="amount" placeholder="Amount (ETH)" />
          <input type="submit" value="Send w/ Web3Provider" />
        </form> */}
        <p>{txSent}</p>
      </div>
      <h3> Fill out the form to send a transaction via InfuraProvider: </h3>
      <div>
        {/* <form onSubmit={handleSubmitInfura}>
          <input type="text" name="address" placeholder="Recipient Address" />
          <input type="text" name="amount" placeholder="Amount (ETH)" />
          <input type="submit" value="Send w/ InfuraProvider" />
        </form> */}
        <p>{txSentInfura}</p>
      </div>
    </header>
  )
}
