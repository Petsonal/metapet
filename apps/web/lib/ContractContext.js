// ContractContext.js
import React, { createContext, useContext, useState } from "react"
import { ethers } from "ethers"

const ContractContext = createContext()

const ContractProvider = ({ children }) => {
  const [provider, setProvider] = useState(null)

  const checkContractExistence = async (contractAddress) => {
    if (!provider) {
      throw new Error("Provider not set. Make sure to set the provider before checking contract existence.")
    }

    const contract = new ethers.Contract(contractAddress, [], provider)
    const code = await provider.getCode(contractAddress)
    const contractExists = code !== "0x"

    return contractExists
  }

  return <ContractContext.Provider value={{ setProvider, checkContractExistence }}>{children}</ContractContext.Provider>
}

const useContract = () => {
  const context = useContext(ContractContext)
  if (!context) {
    throw new Error("useContract must be used within a ContractProvider")
  }
  return context
}

export { ContractProvider, useContract }
