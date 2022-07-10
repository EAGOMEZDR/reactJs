import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando]=useState(true)

    
    const {id} = useParams()

    const db = getFirestore()
    const queryItem = doc(db, 'productos', id)
    getDoc(queryItem) 
    .then(resp =>setProducto( {id:resp.id, ...resp.data()}))
    .finally(()=> setCargando(false))


  
    return (
        <>
        {cargando?
        <div>Cargando contenido....</div>
        :
        <ItemDetail productos={producto}/>
        }
        </>
    )
}
export default ItemDetailContainer;
    