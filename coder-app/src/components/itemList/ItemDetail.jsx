import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import { ItemCount } from '../counter/ItemCount';


import './styles/item.css';




function ItemDetail({ product }) {

  const {addItem} = useCartContext()
  
  const amountInCart = (amount) => {
     
    addItem({...product, amount: amount, id: product.id} )

  };
  
    

  return (
      
    <Container>
        <Row>          
          <Col>
            <div className="detail-card">
              <div className="product-detail__name">{product.name}</div>
                  
              <div className="product-detail__price">${product.price}</div>  

              <div className="product-detail">
                <p>{product.detail}</p>
              </div> 
            </div>
          </Col>
          <Col>
            <div className="detail-card" >
                <img className='product-detail__image' src={product.image} alt='' />
            </div>
          </Col>
        </Row>
        <Row>
          <ItemCount initial={1} stock={product.stock} onAdd = {amountInCart} item= {product} id={product.id} />
        </Row>
    </Container>        
      
  )
}

  

export default ItemDetail