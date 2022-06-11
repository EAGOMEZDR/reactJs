import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { ItemListDetail} from '../ItemList/ItemList';

const ItemDetailContainer = () => {

    const [celuDetail, setCeluDetail] = useState({})
    
    useEffect(() => {
        ItemListDetail()
            .then((resp) => setCeluDetail(resp))
            .catch(err => console.log(err))            
    }, [])
    
    // console.log(celuDetail)
    
        
    return <ItemDetail producto={celuDetail} />
    
}
export default ItemDetailContainer;
    