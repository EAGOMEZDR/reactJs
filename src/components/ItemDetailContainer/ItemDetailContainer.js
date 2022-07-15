import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {  useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando]= useState(true)

    
    const {id} = useParams()

    
    useEffect(()=>{

        const db = getFirestore()
        const queryItem = doc(db, 'productos', id)
        getDoc(queryItem) 
            .then(resp =>setProducto( {id:resp.id, ...resp.data()}))
            .finally(()=> setCargando(false))

    }, [id])



    return (
        <>
        {cargando?
        <div>Cargando contenido....</div>
        :

        <ItemDetail productos={producto}/> }
        
        </>
    )
}
export default ItemDetailContainer;
    