import React from 'react';
import './cart.css';
import { MdAddShoppingCart } from 'react-icons/md';
import { useCartContext } from '../../context/CartContext';
import { Container, Row } from 'react-bootstrap';

function CartWidget() {
    const { cant } = useCartContext()

    return (
        <div className="cartWidget">
            { cant > 0 && 
            
            <Container>
                <Row>
                    <div >
                    <MdAddShoppingCart className="carrito"/>
                   
                    <span className='carritoNum'>{cant}</span> 
                    </div>
                </Row>
            </Container>
            }
        </div>
    )
}

export default CartWidget