import { Box, CardBody, Button, Image, Card, Stack, Heading, Text, Badge, Divider, CardFooter, ButtonGroup, Wrap, FormControl, FormLabel, Input, FormHelperText, } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import CartContext from "../context_reducer/CartContext";
import { MdAddShoppingCart } from "react-icons/md"

import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://reactprojectbackendservermodule2.onrender.com"

function ProductDetails() {

    const [review, setReview] = useState("");

    const { addToBasket } = useContext(CartContext)

    const { id } = useParams()

    const [productsDet, setProductsDet] = useState([])

    const addReview = () => {
        setReview(newReview)
    }

    const prodFind = productsDet.find(
        (product) => product.id == id
    )

    useEffect(() => {
        axios.get(`${API_URL}/products`)
            .then((response) => setProductsDet(response.data))
            .catch((error) => console.log(error))
    }, [])

    return (

        <Box bg="#f4eae3"  >
            <Wrap Wrap pt="100px" justify="space-around">
                {prodFind && (
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        mb="70px"
                        mt="70px"
                    >
                        <Image
                            objectFit='cover'
                            //maxW= "600px"
                            maxH="500px"
                            src={prodFind.image}
                            alt='product image'
                        />

                        <Stack>
                            <CardBody>
                                <Heading size='2xl'>{prodFind.name}</Heading>
                                <Badge py='2' mt="20px" >
                                    {prodFind.category}
                                </Badge>

                                <Text py='2' mt="50px" fontSize="2xl">
                                    {prodFind.description}
                                </Text>
                            </CardBody>

                            <Button onClick={() => addToBasket(prodFind)} variant='solid' leftIcon={<MdAddShoppingCart />} colorScheme='gray'>
                                Add to cart
                            </Button>

                            {/* <input
                                type="text"
                                required
                                value={newReview}
                                onChange={(e) => setReview(e.target.value)}
                                placeholder="Enter review"
                            />
                            <button className="addRevBtn" onClick={addReview}>Submit</button> */}
                            
                            {/* <FormControl isInvalid={isError}>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' value={input} onChange={handleInputChange} />
                                {!isError ? (
                                    <FormHelperText>
                                        Enter the email you'd like to receive the newsletter on.
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage>Email is required.</FormErrorMessage>
                                )}
                            </FormControl> */}

                            <CardFooter>
                                <Text fontSize="5xl">
                                    {prodFind.price}€
                                </Text>
                            </CardFooter>
                        </Stack>
                    </Card>
                )}
            </Wrap>
        </Box>

    )

}

export default ProductDetails;











