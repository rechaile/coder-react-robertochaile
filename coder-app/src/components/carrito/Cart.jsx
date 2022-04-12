import "./cart.css"
import { BsFillTrashFill} from "react-icons/bs"; 
import { useCartContext } from "../../context/CartContext"
import { Card, Col, Container, Row } from "react-bootstrap"
  

function Cart() {

  const { cartList, clearCart, removeItem } = useCartContext()
  
 

  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '640px' }}>
            {cartList.map(producto => <div key={producto.id} > 
            <Row>
              <Col> 
                <img className='product-card__image__cart' src={producto.image} alt=""/> 
              </Col>
              
              <Col>
                <p>Nombre: {producto.name}</p>
                <p>Cantidad: {producto.cantidad}</p>
              </Col>
              <Col>
              <button className="boton__principal__short" onClick={removeItem}> <BsFillTrashFill/>
              </button>
              </Col>
            </Row>
            </div>)}
            <Row>  
              <Col>
                <button className="boton__principal" onClick={clearCart}>Vaciar Carrito</button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )

  
}

export default Cart


