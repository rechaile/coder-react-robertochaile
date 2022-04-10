import "./cart.css"
 
import { useCartContext } from "../../context/CartContext"
import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
  

function Cart() {

  const { cartList, clearCart, removeItem } = useCartContext()
  
  return (
    <div>
      {cartList.map(producto => <div key={producto.id} > 
      <Row>
        <Col> 
          <img className='product-card__image' src={producto.image} alt=""/> 
        </Col>
      
      
        <Col>
        <p>Nombre: {producto.name}</p>
        <p>Cantidad: {producto.cantidad}</p>
        <button onClick={removeItem}> Eliminar
        <FontAwesomeIcon icon="fa-regular fa-trash-can" />
        </button>
        </Col>
      </Row>
      </div>)}

      <button className="boton__principal" onClick={clearCart}>Vaciar Carrito</button>
    
    </div>
      
  )

  
}

export default Cart


