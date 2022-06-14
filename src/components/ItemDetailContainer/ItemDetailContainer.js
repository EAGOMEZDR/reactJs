import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { ItemList } from '../ItemList/ItemList';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    
    const {id} = useParams()

    useEffect(() => {
        ItemList(id)
            .then((resp) => setProducto(resp)) 
            .catch(err => console.log(err))            
    }, [])
    

  
    return <ItemDetail productos={producto} />

}
export default ItemDetailContainer;
    