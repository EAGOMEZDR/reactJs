import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"

    

export const Checkout=()=>{

    const { cartList, vaciarCarrito, removeItem, precioTotal} = useCartContext()
    const[phone, setPhone] = useState()
    const[email, setMail] = useState()
    const[names, setName] = useState()
    const checker = true

    const crearOrden =(e)=>{
        // e.preventDefault()
        let orden ={}

    
        orden.buyer = {name: names, email: email, phone:phone}
        orden.total = precioTotal()
    
        orden.items = cartList.map( cartItem =>{
            const id = cartItem.id
            const nombre = cartItem.nombre
            const cantidad=cartItem.cant
            const precio = cartItem.precio * cartItem.cant
            
            
        return {id,nombre,cantidad,precio}
        })
    
        const db = getFirestore()
        const orderCollection = collection(db,'orders')
        addDoc (orderCollection,orden)
        .then(resp => console.log(resp.data()))

           
    }


    const Input =()=>{
        return(
            <>
            <input type="text" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="telefono" maxlength="10"/>
            <input type="text" className="form-control" value={names} onChange={(e)=>setName(e.target.value)} placeholder="nombre" maxlength="10"/>
            <input type="text" className="form-control" value={email} onChange={(e)=>setMail(e.target.value)} placeholder="mail" maxlength="10"/>
            <button onClick={()=>{crearOrden()}}>Crear Orden</button>
            </>
        )
    }

    const NoInput =()=>{
        <div>prueba</div>
    }



    return(
        <>

        {checker?
        <Input/>
        :
        <NoInput/>
        }



        </>
    )
}
