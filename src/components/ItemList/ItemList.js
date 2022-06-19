import {productos} from '../Item/Item';



export const ItemList = (id) =>{

    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(prod => prod.id === id))              
            } else {
                resolve(productos)          
            }
        }, 2000)
    })
}






