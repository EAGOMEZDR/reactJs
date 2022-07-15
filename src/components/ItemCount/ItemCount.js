import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';



const BotonCarrito =()=>{
    return (
        <>
        <Link to='/cart'>
        <Button variant="success">IR AL CARRITO</Button>
        </Link>
                <Link to='/'>
                <Button variant="warning">SEGUIR COMPRANDO</Button>
            </Link>
        </>
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
            <h2 className='contadorItem d-flex justify-content-center'>{count}</h2>
            <div className='quitarAgregar d-flex justify-content-center btn btn-lg'>
                <Button onClick={quitar} className="btn btn-lg" variant="secondary">-</Button>   
                <Button onClick={agregar} className="btn btn-lg" variant="info">+</Button>
            </div>
            
            {
                checker=== true ?
                <Button className='btn btn-info btn-lg border border-dark'onClick={add} variant="primary">Agregar al carrito</Button>
                :
                <BotonCarrito/>
            }
        </div>
       
        </>
    )
}

export default ItemCount;