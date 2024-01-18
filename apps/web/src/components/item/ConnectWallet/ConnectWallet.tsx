"use client"

import { useConnect, Connector, useAccount } from "wagmi"
import styles from "./styles.module.css"
import { WalletOptions } from "@/lib/metamask/wallet-options"
import { Account } from "@/lib/metamask/account"

export default function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
  return <></>
}
s