  export async function checkContractExistence(provider, contractAddress) {
    // Create an instance of Contract with the provider and contract address
    const contract = new ethers.Contract(contractAddress, [], provider)

    // Get the contract code at the specified address
    const code = await provider.getCode(contractAddress)

    // Check if the code is non-empty (indicating the contract exists)
    const contractExists = code !== "0x"

    return contractExists
  }
