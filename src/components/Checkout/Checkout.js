import { addDoc, collection, getFirestore, getDoc, doc } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";





export const Checkout=()=>{

    const { cartList, precioTotal,vaciarCarrito} = useCartContext()

    const[phone, setPhone] = useState()
    const[email, setMail] = useState()
    const[names, setName] = useState()
    const[checker,setChecker] = useState(true)
    const[orden, setOrden]= useState()
    const[identi,setIdenti]= useState()
    const[fecha, setFecha]=useState()
    const[mailChecker, setMailChecker]=useState()
    const [textoCheck, setTextoCheck]=useState ()

    const[generarOrden,setGenerarOrden]=useState("Generar Orden")

    const crearOrden =(e)=>{
        e.preventDefault()
        if (mailChecker === email){
            let ordenes ={}
    
            ordenes.buyer = {names:names, email:email, phone:phone, emailChecker:checker}
            ordenes.total = precioTotal()
            setFecha(Date()) 
    
            ordenes.items = cartList.map( cartItem =>{
            const id = cartItem.id
            const nombre = cartItem.nombre
            const foto = cartItem.foto
            const cantidad=cartItem.cant
            const precioU=cartItem.precio
            const precio = cartItem.precio * cartItem.cant
                      
            
        return {id,nombre,foto,cantidad,precioU, precio}
        })
    
        const db = getFirestore()
        const orderCollection = collection(db,'orders')
        addDoc (orderCollection,ordenes)
        .then(resp => ordenManager(resp.id))

        setGenerarOrden("Estamos generando su orden. Espere por favor.")
        
        setTimeout(()=>{
            setChecker(false)
  

        }, 5000);
        clearTimeout()

        } else{
                setTextoCheck("Debe reingresar su mail correctamente.") 

        }

    }

    const ordenManager=(id)=>{
        
        const db = getFirestore()
        const prueba = id
        setIdenti(prueba)
        
        const queryItem = doc(db, 'orders', id)
        getDoc(queryItem) 
        .then(resp=>setOrden(resp.data()))

    }   

    return(
        <>

            {checker?
                <form className="formularioCheckout" onSubmit={crearOrden}>
                <div>Por favor complete los datos para continuar con la compra</div>

                <label for="telefono">Telefono:</label>
                <input type="text" name="telefono" className="form-control"  onChange={(e)=>{setPhone(e.target.value)}} placeholder="Numero de telefono sin guiones" pattern="[0-9]+" minLength="8" maxLength="11" required/>

                <label for="nombre">Nombre:</label>                
                <input type="text" className="form-control" name="nombre" onChange={(e)=>{setName(e.target.value)}} placeholder="Ingrese su nombre completo" minLength="6" maxLength="30"/>

                <label for="email">E-mail:</label>
                <input type="text" name="email"className="form-control" onChange={(e)=>{setMail(e.target.value)}} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Ingrese su mail => xxxxx@xxxxx.xxx" minLength="6" maxLength="25"/>

                <label for="emailCheck">Reingrese su mail:</label>
                <input type="text" name="emailCheck"className="form-control" onChange={(e)=>{setMailChecker(e.target.value)}} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Reingrese su mail" minLength="6" maxLength="25"/>
                <p>{textoCheck}</p>

                
                <button type="submit" className="btn btn-success btn-lg">{generarOrden}</button>
                </form>                
            :
            <>
            <div className="ordenCompra">
                <div className="ordenCompraID">
                <h2>Su orden de compra fue generada exitosamente ID:<p className="idOrden">{identi}.</p></h2>
                <h2>Fecha:{fecha}</h2>
                <h2>Nombre:{orden.buyer.names}</h2>
                <h2>Telefono:{orden.buyer.phone}</h2>
                <h2>Email:{orden.buyer.email}</h2>
                </div>
                <div className="containerMapCheckout">
                {orden.items.map(item=>
                <div key ={item.id} className="card text-right cardsCheckout" style={{ width: '18rem' }}>
                <div className="card-body">
                <Card.Img variant="top" src={item.foto} />
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text"/>
                <li>Cantidad:{item.cantidad} unidades.</li>
                <li>Precio Unitario:Usd${item.precioU}.</li>
                <li>Precio por {item.cantidad} unidades: Usd${item.precio}.</li>

                </div>    
                </div>)}
                </div>
                <p className="costoTotal">El total de tu compra es Usd${precioTotal()}</p>

                <div className="botonPagoCheckout">
                <Link to="/pagar"><button className="btn btn-success btn-lg" onClick={vaciarCarrito}>REALIZAR COMPRA</button></Link>
                </div>
            </div>    
            </>    
            }

        </>
    )
}
