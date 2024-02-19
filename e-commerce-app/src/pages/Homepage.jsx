import { Box, Badge, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Wrap } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdAddShoppingCart } from "react-icons/md"



const API_URL = "http://localhost:3245"

function Homepage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/products`)
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error))

    }, [])

    return (
        <Box bg="#f4eae3">
            <Wrap pt="100px" justify="space-evenly" >

                {products && products.map((items) => {
                    return (
                        <Card maxW='300px' mt="70px"  >
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
                                <ButtonGroup spacing='2'>
                                    {/* <Button variant='solid' colorScheme='gray'>
                                        Buy now
                                    </Button> */}
                                    <Button variant='solid' leftIcon={<MdAddShoppingCart />} colorScheme='gray'>
                                        Add to cart
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    )
                })}

            </Wrap>
        </Box>
    )

}


export default Homepage;