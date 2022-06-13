import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { ItemList } from '../ItemList/ItemList';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    
    useEffect(() => {
        ItemList("1")
            .then((resp) => setProducto(resp)) 
            .catch(err => console.log(err))            
    }, [])
    

  
    return <ItemDetail productos={producto} />

}
export default ItemDetailContainer;
    