import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const BotonCarrito =()=>{
    return (
        <Link to='/cart'>
            <button >
                IR AL CARRITO
            </button>
        </Link>

    )
}

const BotonComprar =({props})=>{
    return(
    <button onClick={props} >AGREGAR AL CARRO</button>

    )
}



function ItemCount({stock, initial, onAdd}) {

    const[count, modificarCount] = useState(initial)
    const [checker, setChecker] = useState(true)

    function agregar (){
        count < stock &&  modificarCount(count + 1);
    }
    function quitar (){
        count > initial && modificarCount(count - 1);
    }

    const add = () =>{         
        onAdd(count)
        setChecker(false)       
    }


    return(
        <>
        <div>
            <h2>{count}</h2>
            <button onClick={agregar}>+</button>
            <button onClick={quitar}>-</button>            
            
            {
                checker=== true ?
                <BotonComprar props={add} />
                :
                <BotonCarrito/>
            }
        </div>
        {console.log(checker)}
        
        </>
    )
}

export default ItemCount;