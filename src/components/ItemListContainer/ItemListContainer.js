import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import {Card, ListGroup} from 'react-bootstrap'

const ItemListContainer = () => {

    const[productos, setProductos] = useState ([])
    const[cargando, setCargando] = useState(true)

    const {categoriaId} = useParams()


    useEffect(()=>{

        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        

        if (categoriaId){
       
        const queryCollectionFilter = query(queryCollection, where('marca', '==', categoriaId))
        getDocs(queryCollectionFilter)
        .then(data => setProductos (data.docs.map(item => ({id: item.id, ...item.data()}) )))
        .catch(err =>"")
        .finally(()=> setCargando(false))

        }else{
        getDocs(queryCollection)
        .then(data => setProductos (data.docs.map(item => ({id: item.id, ...item.data()}) )))
        .catch(err =>"")
        .finally(()=> setCargando(false))
        }

    }, [categoriaId])

    return (
        <>

        <div>
          {cargando ? 
            <h2>Espere mientras se carga el contenido......</h2> 
            :  
            <div className='containerHome'>
            {productos.map(productos => 
            <div key={productos.id}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productos.foto} />
            <Card.Body>
                <Card.Title>{productos.nombre}</Card.Title>
                <Card.Text>
                {productos.descripcion}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Stock: {productos.stock} unidades.</ListGroup.Item>
                <ListGroup.Item>Precio por unidad: Usd${productos.precio}.</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link className="d-flex justify-content-center btn btn-info btn-lg border border-dark"><Link to={`/detalle/${productos.id}`}>
                    Detalle</Link></Card.Link>
            </Card.Body>
            </Card>
            </div>)}
            </div>
        }

        </div>
        </> 
    )
}

export default ItemListContainer;