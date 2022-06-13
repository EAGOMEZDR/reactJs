import cart from '../../cart.svg';

function CartWidget (){
    return(
        <>
        <button className="carritoHolder">
         <img src={cart} className="carrito" alt="#" />
        </button>
        </>
    )
}

export default CartWidget;