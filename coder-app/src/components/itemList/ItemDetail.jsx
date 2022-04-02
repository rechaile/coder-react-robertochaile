import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './estilos/item.css';

function ItemDetail({ producto }) {
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
      </Container>        
      
    )
  }

  

export default ItemDetail