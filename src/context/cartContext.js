import { createContext, useState, useContext} from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState ([])



    const addToCart = (item) =>{
        
        if (isInCart(item)){
            
            (cart.find(prod=>prod.id === item.id)).cant += item.cant
        }else{
            setCart([...cart,item])
        }      
 
    }


    const isInCart=(id)=>{
        console.log("esto es id: " ,id)
        return cart.some(item => item.id === id.id)
    }

    const vaciarCarrito =() =>{
        setCart ([])
    }


    return (
        <CartContext.Provider
        value={{
            cart,
            addToCart,
            vaciarCarrito,

            
        }}
        >
            {children}
        </CartContext.Provider>
    )
}