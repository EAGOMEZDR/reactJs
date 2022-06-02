import React, { useState } from 'react';

function ItemCount({stock, initial, onAdd}) {

    const[count, modificarCount] = useState(initial)

    function agregar (){
        count < stock &&  modificarCount(count + 1);
    }
    function quitar (){
        count > initial && modificarCount(count - 1);
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={agregar}>+</button>
            <button onClick={quitar}>-</button>
        </div>
    )
}

export default ItemCount;