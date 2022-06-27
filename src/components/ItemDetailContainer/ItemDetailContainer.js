import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { ItemList } from '../ItemList/ItemList';



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    
    const {id} = useParams()

    const db = getFirestore()
    const queryItem = doc(db, 'productos', id)
    getDoc(queryItem) 
    .then(resp =>setProducto( {id:resp.id, ...resp.data()}))



    // useEffect(() => {
    //     ItemList(id)
    //         .then((resp) => setProducto(resp)) 
    //         .catch(err => console.log(err))            
    // }, [])
    

  
    return <ItemDetail productos={producto} />
}
export default ItemDetailContainer;
    