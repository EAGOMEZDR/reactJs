import { createContext, useState, useContext} from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {

    const [cartList, setCart] = useState ([])

    

    const addToCart = (item) =>{
        
        if (isInCart(item)){
            
            (cartList.find(prod=>prod.id === item.id)).cant += item.cant
        }else{
            setCart([...cartList,item])
        }      
 
    }

    const removerItem =({id})=>{
        const eliminar = setCart(cartList.filter(item => item.id !== id))
       
    }

    const precioTotal =()=>{
        const calcularPrecio2= cartList.reduce((acum, item) => acum + item.cant * item.precio, 0 )
        return calcularPrecio2

    }


    const isInCart=(id)=>{
        return cartList.some(item => item.id === id.id)
    }

    const vaciarCarrito =() =>{
        
        setCart ([])
    }


    return (
        <CartContext.Provider
        value={{
            cartList,
            addToCart,
            vaciarCarrito,
            removerItem,
            precioTotal,

            
        }}
        >
            {children}
        </CartContext.Provider>
    )
}