import {productos, celuDetail} from '../Item/Item';



export const ItemList = () =>{

    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}

export const ItemListDetail =()=>{

    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(celuDetail)
        }, 2000)
    })
}




