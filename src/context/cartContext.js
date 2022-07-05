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

    const removeItem =({id})=>{
        const eliminar = setCart(cartList.filter(item => item.id !== id))
        //  console.log("cartList de context", cartList)
        // console.log("id de context",id)
        // console.log("eliminar:", eliminar)
        
    }

    const precioTotal =({precio,cant})=>{
        const calcularPrecio1 = cartList.map(item => (item.precio*item.cant))
        const calcularPrecio2 = calcularPrecio1.reduce((valorA, valorN) => valorA + valorN)
        return calcularPrecio2

    }


    const isInCart=(id)=>{
        console.log("esto es id: " ,id)
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
            removeItem,
            precioTotal,

            
        }}
        >
            {children}
        </CartContext.Provider>
    )
}