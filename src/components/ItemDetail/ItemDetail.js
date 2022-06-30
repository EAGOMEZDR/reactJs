import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({productos}) => {

    const {cartList, addToCart} = useContext(CartContext)
    

    const onAdd = (cantidad) =>{
        addToCart({...productos, cant: cantidad})
        // console.log(cantidad)
    }




    // console.log(cart)
    return (
        <>
        <h2>Nombre: {productos.nombre}</h2>
        <h3>Precio: {productos.precio}</h3>
        <h3>Stock: {productos.stock}</h3>

        <ItemCount stock={productos.stock} initial={1} onAdd={onAdd} />

        </>
        
    )
}

export default ItemDetail