import { createContext, useState, useContext} from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState ([])
    const [contador, setContador] = useState(0)


    const addToCart = (item) =>{   
        console.log("item que entra: " , item)
        
        if (isInCart(item)){
            
            (cart.find(prod=>prod.id === item.id)).cant += item.cant
           // cart.reduce(valorPrevio,valorActual)
        }else{
            setCart([...cart,item])   
        }
        
 
    }

    const isInCart=(id)=>{
        console.log("esto es id: " ,id)
        cart.some(item => item.id === id.id)
    }

    const vaciarCarrito =() =>{
        setCart ([])
        setContador(0)
    }

    const counter = (cant) =>{
        setContador(contador += cant)
    }


    return (
        <CartContext.Provider
        value={{
            cart,
            contador,
            addToCart,
            vaciarCarrito,
            counter
            
        }}
        >
            {children}
        </CartContext.Provider>
    )
}