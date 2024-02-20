import { useReducer, createContext } from "react";
import { initialState } from "./reducer"


export const CartContext = createContext()

export const cartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToBasket = (product) => {

        const updatedBasket = state.products
        updatedBasket.push(product)

        dispatch({
            type: "add",
            payload: updatedBasket
        })
        
    }

    const value = { addToBasket }

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}

export default CartContext;