import type { ButtonProps } from "@fluentui/react-components"
import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import styles from "../styles/pages/marketplace.module.css"

export default function Home() {
  return (
    <section className="p-16  place-items-center justify-center align-middle flex flex-col">
      <h2 className="text-gray-950 font-bold text-3xl">Explore Marketplace</h2>
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
          Sports
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
                    Sports
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
                    Sports
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
                    Sports
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
                    Sports
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
                    Sports
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
                    Sports
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
                    Sports
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
                    Sports
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
  )
}
