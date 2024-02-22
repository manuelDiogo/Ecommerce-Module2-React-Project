import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Link as ChakraLink, useDisclosure } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa'
import { useRef } from "react";
import { FaShopify } from "react-icons/fa6"
import { Text, Flex, Box, FormControl, FormLabel, Input, Button, Badge, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from "@chakra-ui/react";
import { useContext, useState } from 'react'
import CartContext from "../context_reducer/CartContext";
import { FaSearch } from "react-icons/fa"
function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const { pro } = useContext(CartContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate({ pathname: "/search", search: `?searchedProducts=${search}` })
        setSearch("")
    }
    return (
        <div>
            <Flex
                position="fixed"
                top="0"
                left="0"
                right="0"
                zIndex="999"
                p={2}
                bg="#F4EAE3"
                color="black"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box display="flex" mt="10px" ml="20px">
                    <Icon as={FaShopify} boxSize={14} />
                    <Text
                        fontSize="30px"
                        ml="5px"
                        color="black"
                        fontWeight='bold'
                        _hover={{ textDecoration: "none", color: "gray.500" }}
                    >
                        E-COMMERCE
                    </Text>
                </Box>
                <Box p="2" display="flex" flexDirection="column" justifyContent="center"></Box>
                <Flex width="50%" justifyContent="space-between">
                    <Button
                        ref={btnRef}
                        mt="10px"
                        color="black"
                        fontSize="30px"
                        fontWeight="bold"
                        bg="transparent"
                        border="none"
                        _hover={{ textDecoration: "none", color: "gray.500" }}
                        onClick={onOpen}
                        leftIcon={<FaSearch />}
                    >
                        search
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='top'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <form onSubmit={handleSubmit}>
                                <FormControl>
                                    <FormLabel mt="30px" fontSize="30px" display="flex" justifyContent="center" color="black">Find your favourite product</FormLabel>
                                    <Input
                                        type='text'
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        color="black"
                                    />
                                </FormControl>
                                <Box mt="20px" mb="20px" display="flex" justifyContent="center">
                                    <Button colorScheme="green" type="submit">Submit</Button>
                                </Box>
                            </form>
                        </DrawerContent>
                    </Drawer>
                    <Flex alignItems="center" justifyContent="center">
                    </Flex>
                    <Flex alignItems="center">
                        <ChakraLink
                            fontSize="30px"
                            as={ReactRouterLink}
                            to="/about"
                            mr="55px"
                            color="black"
                            fontWeight='bold'
                            _hover={{ textDecoration: "none", color: "gray.500" }}
                        >
                            about
                        </ChakraLink>
                        <ChakraLink
                            fontSize="30px"
                            as={ReactRouterLink}
                            to="/home"
                            mr="55px"
                            color="black"
                            fontWeight='bold'
                            _hover={{ textDecoration: "none", color: "gray.500" }}
                        >
                            shop
                        </ChakraLink>
                        <ChakraLink
                            fontSize="30px"
                            as={ReactRouterLink}
                            to="/cart"
                            color="black"
                            fontWeight='bold'
                            _hover={{ textDecoration: "none", color: "gray.500" }}
                        >
                            <Flex mr="30px" align="center" position="relative">
                                <Icon as={FaShoppingCart} boxSize={14} />
                                <Badge
                                    position="absolute"
                                    bottom="30px"
                                    left="62%"
                                    transform="translateX(-50%)"
                                    colorScheme='teal'
                                    fontSize="xl"
                                    borderRadius="full"
                                    variant="solid"
                                    padding="1px 10px"
                                >
                                    {pro.length}
                                </Badge>
                            </Flex>
                        </ChakraLink>
                    </Flex>
                </Flex>
            </Flex >
        </div >
    )
}
export default Navbar




















