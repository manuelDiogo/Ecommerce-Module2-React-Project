import { Box } from "@chakra-ui/react";
import { useContext } from 'react'

import {CartContext} from "../context_reducer/CartContext";



function ShoppingCart () {
    
    const {products, total} = useContext(CartContext)
    console.log(products)


    return (
        <Box mt="400px">
            <p>total : {total} </p>
            {products}
        </Box>
    );
}
export default ShoppingCart