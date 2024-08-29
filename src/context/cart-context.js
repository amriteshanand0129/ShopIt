import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../reducers/cartReducer"

const CartContext = createContext();

const CartProvider = ({children}) => {

    const initialState = {
        cart: []
    }
    const [{cart}, cartDispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{cart, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }