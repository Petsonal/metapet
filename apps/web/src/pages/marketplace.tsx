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
import WalletConnect from "@/components/shared/walletconnect"
import { useAccount } from "wagmi"
import { useEnsName } from "wagmi"

import { useReadContract } from 'wagmi'

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

    // const etherProvider = new ethers.BrowserProvider(window.ethereum)

    // // Prompt user to connect Metamask
    // await etherProvider
    //   .send("eth_requestAccounts", [])
    //   .then((account) => {
    //     console.log(account)
    //     console.log("Connected")

    //     // console.log("num", num, typeof(num))
    //   })
    //   .catch((error: any) => {
    //     console.log(error)
    //   })

    // // Get signer
    // const signer = await etherProvider.getSigner()

    // // Get address
    // // signer.address.then((address:JsonRpcSigner) => {
    // // console.log("Address:", address)
    // // })
    // // console.log(signer.getAddress());

    // const address = "0x10fC673e227e7C8B67Ed1d69C42db713e3faaa54"

    // // let wallet = new ethers.Wallet("29c7b718cec0dad617742acf1c0dbda9b0b57ab9dc002c1ed643167968f6be46", etherProvider)
    // signer.then(() => {
    //   const contract = new ethers.Contract(address, abi, signer)
    //   let num = await contract.get().then((value: bigint) => {
    //     console.log(value)
    //     setGetNumber(value)
    //   })
    // })
  }
  const handleSet = async (e: any) => {
    // e.preventDefault()
    // const address = "0xdeA9091D12De6E647a5697CE7bcdb577052706c6"
    // const etherProvider = getBrowserProvider()

    // let wallet = new ethers.Wallet("29c7b718cec0dad617742acf1c0dbda9b0b57ab9dc002c1ed643167968f6be46", etherProvider)

    // const contract = new ethers.Contract(address, abi, wallet)
    // let num = await contract.set(number).then((value: any) => {
    //   console.log(value)
    // })
  }

  const onChangeAddress = useCallback((e: any) => {
    // setNumber(e.target.value)
  }, [])

  const { address } = useAccount()
  const { data, error, status } = useEnsName({ address })

  

  return (
    <>
      <Header />
      <h1><div>ENS name: {data}</div></h1>
      <WalletConnect />
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
        <div className="flex justify-center">
          <div className="px-4" style={{ maxWidth: "1600px" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {/* {nfts.map((nft, i) => (
                <div key={i} className="border shadow rounded-xl overflow-hidden">
                  <img src={nft.image} />
                  <div className="p-4">
                    <p style={{ height: "64px" }} className="text-2xl font-semibold">
                      {nft.name}
                    </p>
                    <div style={{ height: "70px", overflow: "hidden" }}>
                      <p className="text-gray-400">{nft.description}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-black">
                    <p className="text-2xl font-bold text-white">{nft.price} ETH</p>
                    <button
                      className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                      // onClick={() => buyNft(nft)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>

        <Flex display="flex" gap="25" marginTop="50">
          <Button
            marginRight="5"
            borderRadius="30"
            border="solid black 1px"
            textColor="black"
            _hover={{
              background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
              border: "none",
              textColor: "black",
            }}
          >
            Collectibles
          </Button>
          <Button
            marginRight="5"
            borderRadius="30"
            textColor="black"
            border="solid black 1px"
            _hover={{
              background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
              border: "none",
              textColor: "black",
            }}
          >
            Art
          </Button>
          <Button
            marginRight="5"
            borderRadius="30"
            border="solid black 1px"
            textColor="black"
            _hover={{
              background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
              border: "none",
              textColor: "black",
            }}
          >
            Gaming
          </Button>
          <Button
            marginRight="5"
            borderRadius="30"
            border="solid black 1px"
            textColor="black"
            _hover={{
              background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
              border: "none",
              textColor: "black",
            }}
          >
            Buy
          </Button>
          <Button
            marginRight="5"
            borderRadius="30"
            border="solid black 1px"
            textColor="black"
            _hover={{
              background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
              border: "none",
              textColor: "black",
            }}
          >
            Photography
          </Button>
          <Button
            marginRight={"5"}
            borderRadius="30"
            border="solid black 1px"
            textColor="black"
            _hover={{
              background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
              border: "none",
              textColor: "black",
            }}
          >
            Music
          </Button>
          <Button
            marginRight="5"
            borderRadius="30"
            border="solid black 1px"
            textColor="black"
            _hover={{
              background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
              border: "none",
              textColor: "black",
            }}
          >
            Virtual Worlds
          </Button>
          <Button
            marginRight="5"
            borderRadius="30"
            border="solid black 1px"
            textColor="black"
            _hover={{
              background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
              border: "none",
              textColor: "black",
            }}
          >
            Trading Cards
          </Button>
        </Flex>

        <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="25px" gridRowGap="50px" margin="50px">
          <GridItem
            w="300px"
            h="425px"
            backdropFilter="blur(10px)"
            bg="rgba(255, 255, 255, 0.1)"
            position="relative"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
          >
            <Flex
              display="flex"
              flexDirection="column"
              paddingTop="15px"
              paddingLeft="10px"
              paddingRight="10px"
              justifyContent="space-between"
              className={styles.conteiner}
            >
              <Box className={styles.img}>
                <Image src="img/nft/nft1.jpg" w="100%" h="100%" objectFit="cover" />
              </Box>
              <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
                <Box display="flex" flexDirection="column" className={styles.cont}>
                  <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Text fontSize="24" textColor="black" fontWeight="600">
                        Reox Fancxy
                      </Text>
                      <Text opacity="0.5" textColor="black" fontSize="12px">
                        @hibnastiar
                      </Text>
                    </Box>
                    <Box>
                      <Text textColor="yellow" fontSize="24px" fontWeight="700">
                        0.8 ETH
                      </Text>
                    </Box>
                  </Box>

                  <Box alignItems="flex-start">
                    <Button
                      borderRadius="12px"
                      border="solid black 1px"
                      textColor="black"
                      w="275px"
                      h="55px"
                      display="none"
                      className={styles.btn}
                      fontSize="18px"
                      _hover={{
                        background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                        textColor: "black",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            w="300px"
            h="425px"
            backdropFilter="blur(10px);"
            bg="rgba(255, 255, 255, 0.1)"
            position="relative"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
          >
            <Flex
              display="flex"
              flexDirection="column"
              paddingTop="15px"
              paddingLeft="10px"
              paddingRight="10px"
              justifyContent="space-between"
              className={styles.conteiner}
            >
              <Box className={styles.img}>
                <Image src="img/nft/nft1.jpg" w="100%" h="100%" objectFit="cover" />
              </Box>
              <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
                <Box display="flex" flexDirection="column" className={styles.cont}>
                  <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Text fontSize="24" textColor="black" fontWeight="600">
                        Reox Fancxy
                      </Text>
                      <Text opacity="0.5" textColor="black" fontSize="12px">
                        @hibnastiar
                      </Text>
                    </Box>
                    <Box>
                      <Text textColor="yellow" fontSize="24px" fontWeight="700">
                        0.8 ETH
                      </Text>
                    </Box>
                  </Box>

                  <Box alignItems="flex-start">
                    <Button
                      borderRadius="12px"
                      border="solid black 1px"
                      textColor="black"
                      w="275px"
                      h="55px"
                      display="none"
                      className={styles.btn}
                      _hover={{
                        background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                        textColor: "black",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            w="300px"
            h="425px"
            backdropFilter="blur(10px);"
            bg="rgba(255, 255, 255, 0.1)"
            position="relative"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
          >
            <Flex
              display="flex"
              flexDirection="column"
              paddingTop="15px"
              paddingLeft="10px"
              paddingRight="10px"
              justifyContent="space-between"
              className={styles.conteiner}
            >
              <Box className={styles.img}>
                <Image src="img/nft/nft2.jpg" w="100%" h="100%" objectFit="cover" />
              </Box>
              <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
                <Box display="flex" flexDirection="column" className={styles.cont}>
                  <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Text fontSize="24" textColor="black" fontWeight="600">
                        Reox Fancxy
                      </Text>
                      <Text opacity="0.5" textColor="black" fontSize="12px">
                        @hibnastiar
                      </Text>
                    </Box>
                    <Box>
                      <Text textColor="yellow" fontSize="24px" fontWeight="700">
                        0.8 ETH
                      </Text>
                    </Box>
                  </Box>

                  <Box alignItems="flex-start">
                    <Button
                      borderRadius="12px"
                      border="solid black 1px"
                      textColor="black"
                      w="275px"
                      h="55px"
                      display="none"
                      className={styles.btn}
                      _hover={{
                        background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                        textColor: "black",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            w="300px"
            h="425px"
            backdropFilter="blur(10px);"
            bg="rgba(255, 255, 255, 0.1)"
            position="relative"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
          >
            <Flex
              display="flex"
              flexDirection="column"
              paddingTop="15px"
              paddingLeft="10px"
              paddingRight="10px"
              justifyContent="space-between"
              className={styles.conteiner}
            >
              <Box className={styles.img}>
                <Image src="img/nft/nft1.jpg" w="100%" h="100%" objectFit="cover" />
              </Box>
              <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
                <Box display="flex" flexDirection="column" className={styles.cont}>
                  <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Text fontSize="24" textColor="black" fontWeight="600">
                        Reox Fancxy
                      </Text>
                      <Text opacity="0.5" textColor="black" fontSize="12px">
                        @hibnastiar
                      </Text>
                    </Box>
                    <Box>
                      <Text textColor="yellow" fontSize="24px" fontWeight="700">
                        0.8 ETH
                      </Text>
                    </Box>
                  </Box>

                  <Box alignItems="flex-start">
                    <Button
                      borderRadius="12px"
                      border="solid black 1px"
                      textColor="black"
                      w="275px"
                      h="55px"
                      display="none"
                      className={styles.btn}
                      _hover={{
                        background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                        textColor: "black",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            w="300px"
            h="425px"
            backdropFilter="blur(10px);"
            bg="rgba(255, 255, 255, 0.1)"
            position="relative"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
          >
            <Flex
              display="flex"
              flexDirection="column"
              paddingTop="15px"
              paddingLeft="10px"
              paddingRight="10px"
              justifyContent="space-between"
              className={styles.conteiner}
            >
              <Box className={styles.img}>
                <Image src="img/nft/nft1.jpg" width={"100%"} height="100%" objectFit="cover" />
              </Box>
              <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
                <Box display="flex" flexDirection="column" className={styles.cont}>
                  <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Text fontSize="24" textColor="black" fontWeight="600">
                        Reox Fancxy
                      </Text>
                      <Text opacity="0.5" textColor="black" fontSize="12px">
                        @hibnastiar
                      </Text>
                    </Box>
                    <Box>
                      <Text textColor="yellow" fontSize="24px" fontWeight="700">
                        0.8 ETH
                      </Text>
                    </Box>
                  </Box>

                  <Box alignItems="flex-start">
                    <Button
                      borderRadius="12px"
                      border="solid black 1px"
                      textColor="black"
                      w="275px"
                      h="55px"
                      display="none"
                      className={styles.btn}
                      _hover={{
                        background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                        textColor: "black",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            w="300px"
            h="425px"
            backdropFilter="blur(10px);"
            bg="rgba(255, 255, 255, 0.1)"
            position="relative"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
          >
            <Flex
              display="flex"
              flexDirection="column"
              paddingTop="15px"
              paddingLeft="10px"
              paddingRight="10px"
              justifyContent="space-between"
              className={styles.conteiner}
            >
              <Box className={styles.img}>
                <Image src="img/nft/nft1.jpg" w="100%" h="100%" objectFit="cover" />
              </Box>
              <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
                <Box display="flex" flexDirection="column" className={styles.cont}>
                  <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Text fontSize="24" textColor="black" fontWeight="600">
                        Reox Fancxy
                      </Text>
                      <Text opacity="0.5" textColor="black" fontSize="12px">
                        @hibnastiar
                      </Text>
                    </Box>
                    <Box>
                      <Text textColor="yellow" fontSize="24px" fontWeight="700">
                        0.8 ETH
                      </Text>
                    </Box>
                  </Box>

                  <Box alignItems="flex-start">
                    <Button
                      borderRadius="12px"
                      border="solid black 1px"
                      textColor="black"
                      w="275px"
                      h="55px"
                      display="none"
                      className={styles.btn}
                      _hover={{
                        background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                        textColor: "black",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            w="300px"
            h="425px"
            backdropFilter="blur(10px);"
            bg="rgba(255, 255, 255, 0.1)"
            position="relative"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
          >
            <Flex
              display="flex"
              flexDirection="column"
              paddingTop="15px"
              paddingLeft="10px"
              paddingRight="10px"
              justifyContent="space-between"
              className={styles.conteiner}
            >
              <Box className={styles.img}>
                <Image src="img/nft/nft1.jpg" w="100%" h="100%" objectFit="cover" />
              </Box>
              <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
                <Box display="flex" flexDirection="column" className={styles.cont}>
                  <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Text fontSize="24" textColor="black" fontWeight="600">
                        Reox Fancxy
                      </Text>
                      <Text opacity="0.5" textColor="black" fontSize="12px">
                        @hibnastiar
                      </Text>
                    </Box>
                    <Box>
                      <Text textColor="yellow" fontSize="24px" fontWeight="700">
                        0.8 ETH
                      </Text>
                    </Box>
                  </Box>

                  <Box alignItems="flex-start">
                    <Button
                      borderRadius="12px"
                      border="solid black 1px"
                      textColor="black"
                      w="275px"
                      h="55px"
                      display="none"
                      className={styles.btn}
                      _hover={{
                        background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                        textColor: "black",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            w="300px"
            h="425px"
            backdropFilter="blur(10px);"
            bg="rgba(255, 255, 255, 0.1)"
            position="relative"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
          >
            <Flex
              display="flex"
              flexDirection="column"
              paddingTop="15px"
              paddingLeft="10px"
              paddingRight="10px"
              justifyContent="space-between"
              className={styles.conteiner}
            >
              <Box className={styles.img}>
                <Image src="img/nft/nft1.jpg" w="100%" h="100%" objectFit="cover" />
              </Box>
              <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
                <Box display="flex" flexDirection="column" className={styles.cont}>
                  <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Text fontSize="24" textColor="black" fontWeight="600">
                        Reox Fancxy
                      </Text>
                      <Text opacity="0.5" textColor="black" fontSize="12px">
                        @hibnastiar
                      </Text>
                    </Box>
                    <Box>
                      <Text textColor="yellow" fontSize="24px" fontWeight="700">
                        0.8 ETH
                      </Text>
                    </Box>
                  </Box>

                  <Box alignItems="flex-start">
                    <Button
                      borderRadius="12px"
                      border="solid black 1px"
                      textColor="black"
                      w="275px"
                      h="55px"
                      display="none"
                      className={styles.btn}
                      _hover={{
                        background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                        textColor: "black",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
        <Button
          marginRight="5"
          borderRadius="30"
          border="solid black 1px"
          textColor="black"
          _hover={{
            background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
            border: "none",
            textColor: "black",
          }}
        >
          View More
        </Button>
      </section>
    </>
  )
}
