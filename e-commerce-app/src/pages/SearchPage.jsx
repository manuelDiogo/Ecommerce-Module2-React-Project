import { useParams, useSearchParams } from "react-router-dom"
import { MdAddShoppingCart } from "react-icons/md"
import { useState, useEffect } from "react"
import axios from "axios";
import { Box, Badge, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Wrap } from "@chakra-ui/react";


const API_URL = "http://localhost:3245"


function SearchPage() {
    const [searchedProducts, setSearchedProducts] = useSearchParams()
    const term = searchedProducts.get("searchedProducts");
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get(`${API_URL}/products`)
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error))

    }, [])

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
    );


    if (filteredProducts.length === 0) {
        return (
            <Box mt="500px">
                No matching products found.
            </Box>
        );
    }

    return (
        <Box bg="#f4eae3">
        <Wrap pt="100px"  justify="space-evenly" >
      
            {filteredProducts && filteredProducts.map((items) => {
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
                            <ButtonGroup spacing='2'>
                                {/* <Button variant='solid' colorScheme='gray'>
                                    Buy now
                                </Button> */}
                                <Button onClick= {() => addToBasket(items)} variant='solid' leftIcon={<MdAddShoppingCart />} colorScheme='gray'>
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

export default SearchPage