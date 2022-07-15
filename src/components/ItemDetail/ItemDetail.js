import { useContext} from "react"
import { CartContext } from "../../context/cartContext"
import ItemCount from "../ItemCount/ItemCount"
import {Card, ListGroup} from 'react-bootstrap'


const ItemDetail = ({productos}) => {

    const {addToCart} = useContext(CartContext)

    

    const onAdd = (cantidad) =>{
        addToCart({...productos, cant: cantidad})
    }


    return (
        <>
        <div className="contenedorDetail">
            <div className="contenedorDetail__Card">
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={productos.foto} />
                    <Card.Body>
                        <Card.Title>{productos.nombre}</Card.Title>
                        <Card.Text>{productos.descripcion}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Stock: {productos.stock} unidades.</ListGroup.Item>
                        <ListGroup.Item>Precio por unidad: Usd${productos.precio}.</ListGroup.Item>
                    </ListGroup> 
                </Card>
            </div>
            <div className="contenedorDetail__Add">
                <ItemCount stock={productos.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>

        </>
        
    )
}

export default ItemDetail