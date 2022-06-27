import { Link } from 'react-router-dom';
import carritoDeCompras from '../../carritoDeCompras.svg';
import { useCartContext } from '../../context/cartContext';
import {numeroDeArticulos} from '../Cart/Cart'

function CartWidget (){
    const { cart} = useCartContext()

    console.log(numeroDeArticulos)
    return(
        <>
        <Link to="/cart">
        <button className="carritoHolder" onClick={()=>console.log("ir a cart")}>
         <img src={carritoDeCompras} className="carrito" alt="#" />
         <div>{numeroDeArticulos(cart)}</div>
        </button>
        </Link>
        </>
    )
}

export default CartWidget;