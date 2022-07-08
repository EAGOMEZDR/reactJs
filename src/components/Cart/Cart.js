import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";




export const BotonBorrar = ({props})=>{
    return <button onClick={props}>BORRAR TODO</button>
}




export const numeroDeArticulos = (cart)=>{
    
    if (cart.length != 0){
        const mapeo = cart.map(item => (item.cant))
        const reduc = mapeo.reduce((valorI, valorA) => valorI + valorA)
        //     console.log("mapeo cart cantidad", mapeo)
        // console.log("reduce de cart", reduc)
    
    
        return reduc;
    }
    
}


const Cart =() =>{
    const { cartList, vaciarCarrito, removeItem, precioTotal} = useCartContext()
    


    // const crearOrden =(e)=>{
    //     // e.preventDefault()
    //     let orden ={}


    //     orden.buyer = {name:'asd', email:'a@gmail.com', phone:'12341234'}
    //     orden.total = precioTotal()

    //     orden.items = cartList.map( cartItem =>{
    //         const id = cartItem.id
    //         const nombre = cartItem.nombre
    //         const precio = cartItem.precio * cartItem.cant
        
        
    //     return {id,nombre,precio}
    //     })

    //    const db = getFirestore()
    //    const orderCollection = collection(db,'orders')
    //    addDoc (orderCollection,orden)
    //    .then(resp => console.log(resp))
       
    // }


    // console.log(cartList.length)


    const CartArray =()=>{


        return (
        
        <>
        {cartList.map(item => 
     <div>
     <ul key ={item.id}> 
    

         <li> Articulo: {item.nombre}</li>
         <li>Precio Unitario:{item.precio}</li>
         <li>Cantidad: {item.cant}</li>
         <li>--------------------------</li>

        </ul>
        <button onClick={()=>removeItem(item)}>Eliminar item </button>
        </div>
        )}
       </> )
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
            <div> Tienes actualmente {numeroDeArticulos(cartList)} articulos en tu carro.</div>
            <div> El costo total de los productos seleccionados asciende a la suma de USD$ {precioTotal()}</div>
            <button onClick={vaciarCarrito} >Vaciar Carrito</button>
            <Link to='/checkout'><button>To Checkout</button></Link>
            {/* <button onClick={()=> {crearOrden(cartList)}}>Continuar con la Compra</button> */}
            {/* <button onClick={()=>precioTotal(cartList)}>BOTON DE PRUEBA DE FUNCION</button>    */}
            </>
        )
    }


    return (
        <>
        
        { cartList.length ===0 ?
        <Conditionalreturn1 />
        :
        <Conditionalreturn2 />
        }
        
        </>
    )
}

export default Cart;