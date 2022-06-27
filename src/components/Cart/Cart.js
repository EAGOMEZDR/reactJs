import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";



export const BotonBorrar = ({props})=>{
    return <button onClick={props}>BORRAR TODO</button>
}



export const numeroDeArticulos = (cart)=>{
    
    if (cart.length != 0){
        const mapeo = cart.map(item => (item.cant))
        const reduc = mapeo.reduce((valorI, valorA) => valorI + valorA)
            console.log("mapeo cart cantidad", mapeo)
        console.log("reduce de cart", reduc)
    
    
        return reduc;
    }
    
}

const Cart =() =>{
    const { cart, vaciarCarrito} = useCartContext()



    console.log(cart.length)

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

    const Conditionalreturn1 =()=>{
        return(
        <>
        <div>El carrito esta vacio</div>
        <Link to="/"><button>Volver a la tienda</button></Link>
        </>
        )
    }

    const Conditionalreturn2 =()=>{
        return(
            <>
            <CartArray />
            <div> Tienes actualmente {numeroDeArticulos(cart)} articulos en tu carro.</div>
            <button onClick={vaciarCarrito} >Vaciar Carrito</button>
            <button >Continuar con la Compra</button>
            </>
        )
    }


    return (
        <>
        <div>
        { cart.length ===0 ?
        <Conditionalreturn1 />
        :
        <Conditionalreturn2 />
        }
        
        </div>

        





        </>
    )
}

export default Cart;