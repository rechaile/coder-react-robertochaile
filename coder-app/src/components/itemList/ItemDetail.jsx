import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ContinuarCompra from '../contador/ItemCount';

import './estilos/item.css';

function ItemDetail({ name, price, image, stock, detalle }) {

 
  
  return (
      
      <Container>
          <Row>          
            <Col>
              <div>{name}</div>
                  
              <div>{price}</div>  

              <div>{detalle}</div> 
            </Col>
            <Col>
              <div>
                  <img className='product-card__image' src={image} alt='' />
              </div>
            </Col>
          </Row>
          <Row>
            <ContinuarCompra stock={stock} />
          </Row>
      </Container>        
      
    )
  }

  

export default ItemDetail