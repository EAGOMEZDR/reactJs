import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

const ItemListContainer = () => {

    const[productos, setProductos] = useState ([])
    const[cargando, setCargando] = useState(true)

    const {categoriaId} = useParams()

    console.log("categoria Id: ", categoriaId)

    useEffect(()=>{

        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        

        if (categoriaId){
       
        const queryCollectionFilter = query(queryCollection, where('marca', '==', categoriaId))
        getDocs(queryCollectionFilter)
        .then(data => setProductos (data.docs.map(item => ({id: item.id, ...item.data()}) )))
        .catch(err =>console.log(err))
        .finally(()=> setCargando(false))

        }else{
        getDocs(queryCollection)
        .then(data => setProductos (data.docs.map(item => ({id: item.id, ...item.data()}) )))
        .catch(err =>console.log(err))
        .finally(()=> setCargando(false))
        }

    }, [categoriaId])

    // console.log(productos)

    // useEffect(()=>{
    //     if (categoriaId){
    //         ItemList()
    //         .then((resp) =>{
    //             setProductos(resp.filter(productos => productos.marca === categoriaId))
    //             console.log(productos + "asd")
    //             setCargando(false)
    //         })
    //         .catch(err => console.log("error"))
    //         .finally(()=> console.log())            
    //     }else {
    //         ItemList()
    //         .then((resp) =>{
    //             setProductos(resp)
    //             setCargando(false)
    //         })
    //         .catch(err => console.log("error"))
    //         .finally(()=> console.log())
    //     }


    // }, [categoriaId])


    return (
        <>

        <div className="main">
          {cargando ? 
            <h2>Espere mientras se carga el contenido......</h2> 
            :  
            <div className="cuadrados">{productos.map(productos => <div className="cuadradito" key={productos.id}> <li> Modelo: {productos.nombre}. </li><li>Descripcion: {productos.descripcion}. </li><li> Stock: {productos.stock}. </li><li> <Link to={`/detalle/${productos.id}`}><button>Detalle</button></Link></li></div>)}</div>
        }

        </div>
        </> 
    )
}

export default ItemListContainer;