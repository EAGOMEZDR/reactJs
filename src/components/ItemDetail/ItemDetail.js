const ItemDetail = ({producto}) => {
    console.log(producto)
    console.log(producto.nombre)

    return (
        <div>
           <h2>Nombre: {producto.nombre}</h2>
           <h2>Stock: {producto.stock}</h2>
           <h2>Precio: {producto.precio}</h2>
        </div>
    )
}

export default ItemDetail