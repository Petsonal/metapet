import type { ButtonProps } from "@fluentui/react-components"
import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import styles from "../styles/pages/marketplace.module.css"

export default function Home() {
  return (
    <Flex marginTop="200px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Text fontSize="60px" fontWeight="600" textColor="white">
        Explore Marketplace
      </Text>
      <Flex display="flex" gap="25" marginTop="50">
        <Button
          marginRight="5"
          borderRadius="30"
          border="solid white 1px"
          textColor="black"
          _hover={{
            background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
            border: "none",
            textColor: "white",
          }}
        >
          Collectibles
        </Button>
        <Button
          marginRight="5"
          borderRadius="30"
          textColor="black"
          border="solid white 1px"
          _hover={{
            background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
            border: "none",
            textColor: "white",
          }}
        >
          Art
        </Button>
        <Button
          marginRight="5"
          borderRadius="30"
          border="solid white 1px"
          textColor="black"
          _hover={{
            background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
            border: "none",
            textColor: "white",
          }}
        >
          Gaming
        </Button>
        <Button
          marginRight="5"
          borderRadius="30"
          border="solid white 1px"
          textColor="black"
          _hover={{
            background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
            border: "none",
            textColor: "white",
          }}
        >
          Sports
        </Button>
        <Button
          marginRight="5"
          borderRadius="30"
          border="solid white 1px"
          textColor="black"
          _hover={{
            background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
            border: "none",
            textColor: "white",
          }}
        >
          Photography
        </Button>
        <Button
          marginRight={"5"}
          borderRadius="30"
          border="solid white 1px"
          textColor="black"
          _hover={{
            background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
            border: "none",
            textColor: "white",
          }}
        >
          Music
        </Button>
        <Button
          marginRight="5"
          borderRadius="30"
          border="solid white 1px"
          textColor="black"
          _hover={{
            background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
            border: "none",
            textColor: "white",
          }}
        >
          Virtual Worlds
        </Button>
        <Button
          marginRight="5"
          borderRadius="30"
          border="solid white 1px"
          textColor="black"
          _hover={{
            background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
            border: "none",
            textColor: "white",
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
              <Image src="images/NFT5.png" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
              <Box display="flex" flexDirection="column" className={styles.cont}>
                <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                  <Box display="flex" flexDirection="column" justifyContent="center">
                    <Text fontSize="24" textColor="white" fontWeight="600">
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
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
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={styles.btn}
                    fontSize="18px"
                    _hover={{
                      background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
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
              <Image src="images/NFT11.png" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
              <Box display="flex" flexDirection="column" className={styles.cont}>
                <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                  <Box display="flex" flexDirection="column" justifyContent="center">
                    <Text fontSize="24" textColor="white" fontWeight="600">
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
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
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={styles.btn}
                    _hover={{
                      background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
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
              <Image src="images/NFT7.png" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
              <Box display="flex" flexDirection="column" className={styles.cont}>
                <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                  <Box display="flex" flexDirection="column" justifyContent="center">
                    <Text fontSize="24" textColor="white" fontWeight="600">
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
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
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={styles.btn}
                    _hover={{
                      background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
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
              <Image src="images/NFT8.png" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
              <Box display="flex" flexDirection="column" className={styles.cont}>
                <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                  <Box display="flex" flexDirection="column" justifyContent="center">
                    <Text fontSize="24" textColor="white" fontWeight="600">
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
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
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={styles.btn}
                    _hover={{
                      background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
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
              <Image src="images/NFT9.png" width={"100%"} height="100%" objectFit="cover" />
            </Box>
            <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
              <Box display="flex" flexDirection="column" className={styles.cont}>
                <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                  <Box display="flex" flexDirection="column" justifyContent="center">
                    <Text fontSize="24" textColor="white" fontWeight="600">
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
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
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={styles.btn}
                    _hover={{
                      background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
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
              <Image src="images/NFT10.png" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
              <Box display="flex" flexDirection="column" className={styles.cont}>
                <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                  <Box display="flex" flexDirection="column" justifyContent="center">
                    <Text fontSize="24" textColor="white" fontWeight="600">
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
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
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={styles.btn}
                    _hover={{
                      background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
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
              <Image src="images/NFT11.png" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
              <Box display="flex" flexDirection="column" className={styles.cont}>
                <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                  <Box display="flex" flexDirection="column" justifyContent="center">
                    <Text fontSize="24" textColor="white" fontWeight="600">
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
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
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={styles.btn}
                    _hover={{
                      background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
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
              <Image src="images/NFT12.png" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Flex justifyContent="space-around" alignItems="center" paddingBottom="20px">
              <Box display="flex" flexDirection="column" className={styles.cont}>
                <Box display="flex" w="275px" flexDirection="row" justifyContent="space-around">
                  <Box display="flex" flexDirection="column" justifyContent="center">
                    <Text fontSize="24" textColor="white" fontWeight="600">
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
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
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={styles.btn}
                    _hover={{
                      background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
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
        border="solid white 1px"
        textColor="black"
        _hover={{
          background: "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
          border: "none",
          textColor: "white",
        }}
      >
        View More
      </Button>
    </Flex>
  )
}
