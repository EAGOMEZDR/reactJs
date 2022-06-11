import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';

const ItemListContainer = () => {

    const[productos, setProductos] = useState ([])

    useEffect(()=>{
        ItemList()
        .then((resp) =>{
            setProductos(resp)
        })
        .catch(err => console.log("error"))
        .finally(()=> console.log())

    }, [])


    return (
        <>
        <div className="main">
        {productos.map(productos => <div className="cuadradito" key={productos.id}> <li> Modelo: {productos.nombre}. </li><li>Descripcion: {productos.descripcion}. </li><li> Stock: {productos.stock}. </li><li>        <button>Detalle</button></li></div>)}

        </div>
        </>
    )
}

export default ItemListContainer;