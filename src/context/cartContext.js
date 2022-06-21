import { createContext, useState, useContext} from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState ([])

    const addToCart = (item) =>{
        setCart([...cart,item])
    }

    return (
        <CartContext.Provider
        value={{
            cart,
            addToCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}