import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useState } from "react";
import { Flex, Box, Heading, Button, Image } from "@chakra-ui/react";

function Navbar() {
    return (
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

                
            </Flex>
        </Flex>
    )

}

export default Navbar 