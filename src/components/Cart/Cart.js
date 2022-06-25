import { useState } from "react";
import { useCartContext } from "../../context/cartContext";



export const BotonBorrar = ({props})=>{
    return <button onClick={props}>BORRAR TODO</button>
}



const Cart =() =>{
    const { cart, vaciarCarrito, contador, counter } = useCartContext()

    
    console.log(cart)

    const CartArray =()=>{

        return (<ul>
        {cart.map(item => 
     
     <ul key ={item.id}> 
    
         {/* <p>Producto Nº{}</p> */}
         <li> Articulo: {item.nombre}</li>
         <li>Precio Unitario:{item.precio}</li>
         <li>Cantidad: {item.cant}</li>
         <li>--------------------------</li>
     </ul>)}
        </ul>)
    }




    return (
        <>
        <div>
        {cart.lenght === 0? 
            <div>El carrito esta vacio</div>
        :
        <CartArray />}
        </div>
        <p>asd</p>
        <button onClick={vaciarCarrito} >Vaciar Carrito</button>



        </>
    )
}

export default Cart;