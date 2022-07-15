import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";




export const BotonBorrar = ({props})=>{
    return <button onClick={props}>BORRAR TODO</button>
}




export const numeroDeArticulos = (cart)=>{
    
    if (cart.length != 0){
        const mapeo = cart.map(item => (item.cant))
        const reduc = mapeo.reduce((valorI, valorA) => valorI + valorA)  
    
        return reduc;
    }
    
}


const Cart =() =>{
    const { cartList, vaciarCarrito, removerItem, precioTotal} = useCartContext()
    
    const CartArray =()=>{


        return (
        
        <>
        <div className="itemsCarrito">
            {cartList.map(item => 
            <div key ={item.id} className="card text-center" style={{ width: '18rem' }}>
                <div className="card-body">
                    <Card.Img variant="top" src={item.foto} />
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">
                    <li>{item.descripcion}</li>
                    <li>Precio Unitario:{item.precio}</li>
                    <li>Cantidad: {item.cant}</li></p>
                    <button className="btn btn-primary btn-eliminar" onClick={()=>removerItem(item)}>Eliminar item </button>

                </div>
            </div>)}
        </div>
    </>)

    }

    const Conditionalreturn1 =()=>{
        return(
        <>
        <div className="contenedorCarrito">
            <div className="textoCarritoVacio">Tu carrito esta vacio</div>
            <div className="caritaTriste">=(</div>
            <Link to="/"><button className="botonCarritoVacio d-flex justify-content-center btn btn-info btn-lg border border-dark">Volver a la tienda</button></Link>
        </div>
        </>
        )
    }

    const Conditionalreturn2 =()=>{
        return(
            <>
            <div className="contenedorCarrito">
                <CartArray />
                <div> Tienes actualmente {numeroDeArticulos(cartList)} articulos en tu carro.</div>
                <div> El costo total de los productos seleccionados asciende a la suma de USD$ {precioTotal()}</div>
                <div className="d-flex justify-content-center">
                    <button className="d-flex justify-content-center btn btn-warning btn-lg border border-dark" onClick={vaciarCarrito} >Vaciar Carrito</button>
                    <Link to='/checkout'><button className="d-flex justify-content-center btn btn-success btn-lg border border-dark">To Checkout</button></Link>
                </div>
            </div>
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