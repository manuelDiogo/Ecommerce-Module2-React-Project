
import { useContext, useEffect } from 'react'

import { Box, Badge, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Wrap } from "@chakra-ui/react";

import { CartContext } from "../context_reducer/CartContext";


function ShoppingCart() {


    const { pro } = useContext(CartContext)
    console.log(pro)
    return (
        pro.map((items) => {
            return (
                <Card key={items.id} maxW='300px' mt="70px"  >
                    <CardBody >
                        <Image
                            src={items.image}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{items.name}</Heading>

                            <Text color='black' fontSize='2xl'>
                                {items.price}€
                            </Text>
                            <Badge
                            >
                                {items.category}
                            </Badge>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>

                    </CardFooter>
                </Card>
            )
        }
        )
        )
}
export default ShoppingCart