import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({productos}) => {

    const onAdd = (cantidad) =>{
        console.log(cantidad)
    }


    console.log(productos)
    return (
        <>
        <h2>Nombre: {productos.nombre}</h2>
        <h3>Precio: {productos.precio}</h3>
        <h3>Stock: {productos.stock}</h3>

        <ItemCount stock={15} initial={1} onAdd={onAdd} />
        </>
    )
}

export default ItemDetail