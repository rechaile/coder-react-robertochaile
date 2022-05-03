import React from 'react';
import './cart.css';
import { MdAddShoppingCart } from 'react-icons/md';
import { useCartContext } from '../../context/CartContext';

function CartWidget() {
    const { cantidadTotalItem } = useCartContext()

    
    
    return (
        <div className="cartWidget">
            <MdAddShoppingCart className="cart"/>
            {
             (cantidadTotalItem()) > 0 && 
                <span className='carritoNum'>{cantidadTotalItem()}</span> 
            }

        
        </div>
    )
}

export default CartWidget