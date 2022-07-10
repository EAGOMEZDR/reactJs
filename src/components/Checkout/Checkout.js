import { addDoc, collection, getFirestore, query, where, getDocs, getDoc, doc } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom';




export const Checkout=()=>{

    const { cartList, vaciarCarrito, removeItem, precioTotal} = useCartContext()

    const[phone, setPhone] = useState()
    const[email, setMail] = useState()
    const[names, setName] = useState()
    const[checker,setChecker] = useState(true)
    const[orden, setOrden]= useState()
    const[identi,setIdenti]= useState()



    const crearOrden =(e)=>{
        e.preventDefault()
        console.log("funciono el crear orden")
        let ordenes ={}
    
        ordenes.buyer = {names:names, email:email, phone:phone}
        ordenes.total = precioTotal()
    
        ordenes.items = cartList.map( cartItem =>{
            const id = cartItem.id
            const nombre = cartItem.nombre
            const cantidad=cartItem.cant
            const precioU=cartItem.precio
            const precio = cartItem.precio * cartItem.cant            
            
        return {id,nombre,cantidad,precioU, precio}
        })
    
        const db = getFirestore()
        const orderCollection = collection(db,'orders')
        addDoc (orderCollection,ordenes)
        .then(resp => ordenManager(resp.id))


        
        setTimeout(()=>{
            setChecker(false)

        }, 5000);
        clearTimeout()

    }

    const ordenManager=(id)=>{
        
        const db = getFirestore()
        const prueba = id
        setIdenti(prueba)
        console.log(identi)
        
        const queryItem = doc(db, 'orders', id)
        getDoc(queryItem) 
        .then(resp=>setOrden(resp.data()))

       
        // .then(resp =>setOrden(resp.data()))
    }   

    setTimeout(()=>{
        console.log("identi ", identi)

    }, 2000);
    clearTimeout()

    return(
        <>

            {checker?
                <form onSubmit={crearOrden}>
                <input type="text" className="form-control"  value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="telefono" maxLength="10"/>
                <input type="text" className="form-control"  value={names} onChange={(e)=>{setName(e.target.value)}} placeholder="nombre" maxLength="10"/>
                <input type="text" className="form-control"  value={email} onChange={(e)=>{setMail(e.target.value)}} placeholder="mail" maxLength="10"/>
                <button type="submit">Boton Submit</button>
                </form>
            :
            <>
            <div>
                esto es una prueba

                <h2>Su orden de compra fue generada exitosamente ID:<p className="idOrden">{identi}</p>.</h2>
                <h2>Sus datos son:</h2>
                <h2>Nombre:{orden.buyer.names}</h2>
                <h2>Nombre:{orden.buyer.phone}</h2>
                <h2>Nombre:{orden.buyer.email}</h2>
                {orden.items.map(item=><ul key={item.id}>
                    <li>{item.nombre}</li>
                    <li>{item.cantidad}</li>
                    <li>{item.precioU}</li>
                    <li>{item.precio}</li>
                    <li>------o-------</li>
                </ul>)} 


            </div>
            <Link to="/pagar"><button>PAGAR</button></Link>
            </>    
            }

        </>
    )
}
