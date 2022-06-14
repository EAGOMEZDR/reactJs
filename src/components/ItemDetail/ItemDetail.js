

const ItemDetail = ({productos}) => {

    console.log(productos)
    return (
        <>
        <h2>Nombre: {productos.nombre}</h2>
        <h3>Precio: {productos.precio}</h3>
        <h3>Stock: {productos.stock}</h3>
        </>
    )
}

export default ItemDetail