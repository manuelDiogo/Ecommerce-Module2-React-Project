import { useReducer, createContext } from "react";
import reducer ,{ initialState } from "./reducer"


export const CartContext = createContext()

export const CartProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToBasket = (product) => {

        const updatedBasket = state.pro
        updatedBasket.push(product)
//console.log(updatedBasket)
        dispatch({
            type: "add",
            product: updatedBasket
        })
        
    }

    const removeFromBasket = (product) => {

        const updatedBasket = state.pro.filter((currValue) => {
            currValue.id !== product
            console.log(currValue.id)
        })
//console.log(updatedBasket)
        dispatch({
            type: "remove",
            product: updatedBasket
        })
        
    }

    const value = { addToBasket, removeFromBasket, pro: state.pro, total: state.total }

    return <CartContext.Provider value={value}> {props.children} </CartContext.Provider>
}

export default CartContext;