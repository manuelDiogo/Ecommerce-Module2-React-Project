import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import { Flex, Box, FormControl, FormLabel, Input ,Button} from "@chakra-ui/react";

import { useContext, useState } from 'react'
import CartContext from "../context_reducer/CartContext";

function Navbar() {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const { pro } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${search}`)
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
                bg="#f4eae3"
                color="white"

                justifyContent="space-between"
                alignItems="center"
            >
                <Box p="2" display="flex" flexDirection="column" justifyContent="center">
                </Box>
                <Flex alignItems="center">
                
                <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel color="black">Search</FormLabel>
                <Input 
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    color="black" 
                />
            </FormControl>
            <Button type="submit">Submit</Button>
        </form>
            
                    <ChakraLink
                        fontSize="30px"
                        as={ReactRouterLink}
                        to="/about"
                        mr="20px"
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
                        mr="34px"
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
                        mr="34px"
                        color="black"
                        fontWeight='bold'
                        _hover={{ textDecoration: "none", color: "gray.500" }}
                    >
                        cart <span>{pro.length}</span>
                    </ChakraLink>

                </Flex>
            </Flex>
        </div>
    )

}

export default Navbar 