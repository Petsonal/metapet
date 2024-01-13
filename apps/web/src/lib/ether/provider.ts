"use client"

import { JsonRpcProvider, ethers } from "ethers"

// interface window {
//     ethereum: any
// }

// if (window.ethereum == null) {
//   // If MetaMask is not installed, we use the default provider,
//   // which is backed by a variety of third-party services (such
//   // as INFURA). They do not have private keys installed,
//   // so they only have read-only access
//   console.log("MetaMask not installed; using read-only defaults")
//   provider = ethers.getDefaultProvider()
// } else {
//   // Connect to the MetaMask EIP-1193 object. This is a standard
//   // protocol that allows Ethers access to make all read-only
//   // requests through MetaMask.
//   provider = new ethers.BrowserProvider(window.ethereum)

//   // It also provides an opportunity to request access to write
//   // operations, which will be performed by the private key
//   // that MetaMask manages for the user.
//   signer = await provider.getSigner()
// }

export function getEtherProvider() {
  // If no %%url%% is provided, it connects to the default
  // http://localhost:8545, which most nodes use.
  let provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/b884221f77114ef7b7b14e874781015e")

  // Get write access as an account by getting the signer
  // let signer = await provider.getSigner()
  return provider;
}

export function getBrowserProvider() {
  const etherProvider = new ethers.BrowserProvider(window.ethereum)
  return etherProvider
}
