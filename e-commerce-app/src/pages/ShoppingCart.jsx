
import { useContext } from 'react'

import { Box, Badge, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Wrap } from "@chakra-ui/react";

import CartContext from "../context_reducer/CartContext";


function ShoppingCart() {


    const { pro, removeFromBasket, total } = useContext(CartContext)
   // console.log(total)
   // console.log(pro)


    //console.log(pro)
    return (
        <Box mt="300px">
            <h3 >Your total is: {total}</h3>
      {pro && pro.map((items) => {
           
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
                            <Button onClick={() => removeFromBasket(items)} variant='solid' colorScheme='red'>
                                Remove from cart
                            </Button>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>

                    </CardFooter>
                    </Card>
            )
           
         }

        )}
        
        </Box>
    )
}
export default ShoppingCart