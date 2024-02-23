import { Box, Badge, Alert, AlertIcon, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Wrap } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MdAddShoppingCart } from "react-icons/md"
import CartContext from "../context_reducer/CartContext";
import { Link } from "react-router-dom";

const API_URL = "https://reactprojectbackendservermodule2.onrender.com"
//const API_URL = "http://localhost:3245"

function Homepage() {
    const [products, setProducts] = useState([])
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)
    useEffect(() => {
        axios.get(`${API_URL}/products`)
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error))
    }, [])
    const { addToBasket } = useContext(CartContext)
    const handleAddToCart = (items) => {
        addToBasket(items);
        setShowSuccessAlert(true);
        setTimeout(() => {
            setShowSuccessAlert(false);
        }, 2000);
    };
    return (
        <Box bg="#F4EAE3" pb="45px">
            <Wrap pt="100px" justify="space-evenly" >
                {showSuccessAlert && (
                    <Alert status='success' position='fixed' top='10%' left='50%' transform='translateX(-50%)' zIndex='999' width='100%' mt={4}>
                        <AlertIcon />
                      Added to cart
                    </Alert>
                )}
                {products && products.map((items) => {
                    return (
                        <Card key={items.id} maxW='300px' mt="70px"  >
                            <CardBody >
                                <Image
                                    src={items.image}
                                    borderRadius='lg'
                                    objectFit="cover"
                                    boxSize="250px"
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
                                    <Button onClick={() => handleAddToCart(items)} variant='solid' leftIcon={<MdAddShoppingCart />} colorScheme='gray'>
                                        Add to cart
                                    </Button>
                                    <Link to={`/details/${items.id}`}>
                                        <Button variant='solid' leftIcon={<MdAddShoppingCart />} colorScheme='blue'>
                                            details
                                        </Button>
                                    </Link>
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