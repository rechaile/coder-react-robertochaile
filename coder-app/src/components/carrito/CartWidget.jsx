import React from 'react';
import './cart.css';
import { MdAddShoppingCart } from 'react-icons/md';
import { useCartContext } from '../../context/CartContext';
import { Container, Row } from 'react-bootstrap';

function CartWidget() {
    const { cantidadTotalItem } = useCartContext()

    
    
    return (
        <div className="cartWidget">
           
            {
             (cantidadTotalItem()) > 0 && 
            
            <Container>
                <Row>
                    <div >
                    
                    <MdAddShoppingCart className="carrito"/>
                    <span className='carritoNum'>{cantidadTotalItem()}</span> 
                    </div>
                </Row>
            </Container>
            }

        
        </div>
    )
}

export default CartWidget