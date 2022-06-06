import { useEffect, useState } from 'react';
import { productos } from '../Item/Item';


const ItemList = () =>{

    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}

export default ItemList;




