import { useReducer, createContext } from "react";
import reducer from "./reducer"


const CartContext = createContext()

export const CartProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, {
        total: 0,
        pro: []
    })

    const addToBasket = (product) => {

        const updatedBasket = state.pro
        updatedBasket.push(product)

        updatePrice(updatedBasket)
        dispatch({
            type: "add",
            product: updatedBasket
        })
        
    }

    const removeFromBasket = (product) => {

        const updatedBasket = state.pro.filter((currValue) => 
            currValue.id != product.id
           
        )

        updatePrice(updatedBasket)
        dispatch({
            type: "remove",
            product: updatedBasket
        })
        
    }

    const updatePrice = (product) => {
        let total = 0
        const updatedBasket = product.forEach((products) => {
            total += products.price
           
        })
        console.log(total)

        dispatch({
            type: "update price",
            product: total
        })
        
    }

    

    const value = { addToBasket, removeFromBasket, pro: state.pro, total: state.total }

    return <CartContext.Provider value={value}> {props.children} </CartContext.Provider>
}

export default CartContext;