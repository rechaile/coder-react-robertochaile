import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import { ItemCount } from '../contador/ItemCount';


import './estilos/item.css';




function ItemDetail({ producto }) {

  const {addItem} = useCartContext()
  
  

  const cantAgregada = (cantidad) => {
     
    addItem({...producto, cantidad: cantidad, id: producto.id} )

    };
  
    

  return (
      
      <Container>
          <Row>          
            <Col>
              <div>{producto.name}</div>
                  
              <div>{producto.price}</div>  

              <div>{producto.detalle}</div> 
            </Col>
            <Col>
              <div>
                  <img className='product-card__image' src={producto.image} alt='' />
              </div>
            </Col>
          </Row>
          <Row>
            <ItemCount inicial={1} stock={producto.stock} onAdd = {cantAgregada} item= {producto} id={producto.id} />
             
          </Row>
      </Container>        
      
    )
  }

  

export default ItemDetail