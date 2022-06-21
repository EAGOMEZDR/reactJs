import { useState } from "react";
import { useCartContext } from "../../context/cartContext";



export const BotonBorrar = ({props})=>{
    return <button onClick={props}>BORRAR TODO</button>
}



const Cart =() =>{
    const { cart } = useCartContext()



    let contador = 0

    const BotonBorrar =({props})=>{
        return <button onClick={props}>VACIAR CARRITO</button>
    }
    

    const ingresado =()=>{
        return alert("Ya ha ingresado este producto")
    }

    return (
        <>
        <div>
            
            <ul>
            {cart.map(item => 
         
         <ul key ={item.id}> 

             <p>Producto Nº{contador+=1}</p>
             <li> Articulo: {item.nombre}</li>
             <li>Precio Unitario:{item.precio}</li>
             <li>Cantidad: {item.cant}</li>
             <li>--------------------------</li>
         </ul>)}
            </ul>
        </div>
        <BotonBorrar/>

        </>
    )
}

export default Cart;