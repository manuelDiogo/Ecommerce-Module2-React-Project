
import { Box, Flex } from "@chakra-ui/react";


function Footer() {

    return (
        <Flex
                height= "35px"
                bottom="0"
                left="0"
                right="0"
                zIndex="999"
                p={2}
                bg="#f4eae3"
                color="teal"
                position= "fixed"
                justifyContent="flex-start"
                
            >
         ©PM-STORE
        </Flex>
    )
}

export default Footer;