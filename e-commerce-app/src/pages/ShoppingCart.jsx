import { Box } from "@chakra-ui/react";
import { useState, useReducer, useContext } from 'react'

import Homepage from "./Homepage";
import {CartContext} from "../context_reducer/CartContext";



function ShoppingCart () {
    const [productsCart, setProductsCart] = useState([])

    const {products} = useContext(CartContext)
    console.log(products)


    return (
        <Box mt="500px">
            {products.map((item)=> {
                {item.name}
            })}
        </Box>
    )

}

export default ShoppingCart