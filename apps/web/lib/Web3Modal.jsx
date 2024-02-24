'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = '6831d6853ff259c014dacae33001d9a5'

// 2. Set chains
// const mainnet = {
//     chainId: 1,
//     name: 'Ethereum',
//     currency: 'ETH',
//     explorerUrl: 'https://etherscan.io',
//     rpcUrl: 'https://cloudflare-eth.com'
// }

// const hardhat = {
//     chainId: 1337,
//     name: 'Ethereum',
//     currency: 'ETH',
//     explorerUrl: 'https://etherscan.io',
//     rpcUrl: 'http://localhost:8545'
// }

const sepolia = {
    chainId: 11155111,
    name: 'Ether Infura Sepolia',
    currency: 'SepoliaETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://sepolia.infura.io/v3/b884221f77114ef7b7b14e874781015e'
}


// 3. Create modal
// const metadata = {
//     name: 'My Website',
//     description: 'My Website description',
//     url: 'https://metacat.com',
//     icons: ['https://avatars.mywebsite.com/']
// }

createWeb3Modal({
    ethersConfig: defaultConfig({ enableEIP6963: true }),
    chains: [sepolia],
    projectId,
    themeMode: 'light'
})

export function Web3ModalProvider({ children }) {
    return children
}