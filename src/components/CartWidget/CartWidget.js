import { Link } from 'react-router-dom';
import cart from '../../cart.svg';


function CartWidget (){
    return(
        <>
        <Link to="/cart">
        <button className="carritoHolder" onClick={()=>console.log("ir a cart")}>
         <img src={cart} className="carrito" alt="#" />
        </button>
        </Link>
        </>
    )
}

export default CartWidget;