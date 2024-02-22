
import { useContext } from 'react'

import { Box, Badge, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Wrap, Flex } from "@chakra-ui/react";

import CartContext from "../context_reducer/CartContext";


import background from "../assets/background.png"

function ShoppingCart() {


    const { pro, removeFromBasket, total } = useContext(CartContext)

    // console.log(total)
    // console.log(pro)
    //console.log(pro)

    return (
        <Box bgImage={background}  minHeight="100vh" pt="80px" pb="45px" width="100%" overflowY="scroll" >
            <Card position="fixed" width="100vw" fontSize='l' fontWeight='bold' zIndex="999" textAlign="center">
                your total:
                <Badge ml='1' colorScheme='teal' fontSize='2xl'>
                    {total}€
                </Badge>
            </Card>
            <Flex flexWrap="wrap" justifyContent="flex-start" mt="70px" pl="60px">
                {pro && pro.map((items) => {
                    return (

                        < Card
                            direction={{ base: 'column', sm: 'row' }}
                            maxW="400px"
                            overflow='hidden'
                            variant='outline'
                            mr="60px"
                            mb="10px"


                        >
                            <Image
                                objectFit='cover'

                                boxSize="200px"
                                src={items.image}
                                alt="image"
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>{items.name}</Heading>

                                    <Text >
                                        {items.price}€
                                    </Text>
                                </CardBody>


                                <CardFooter>
                                    <Button onClick={() => removeFromBasket(items)} variant='solid' colorScheme='red'>
                                        Remove from cart
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card >


                    )

                }

                )}

            </Flex>
        </Box>
    )
}
export default ShoppingCart


// bg="#f4eae3"