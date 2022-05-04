import React from 'react';
import './cart.css';
import { MdAddShoppingCart } from 'react-icons/md';
import { useCartContext } from '../../context/CartContext';

function CartWidget() {
    const { amountTotalItem } = useCartContext()
    
    return (
        <div className="cartWidget">
            <MdAddShoppingCart className="cart"/>
            {
             (amountTotalItem()) > 0 && 
                <span className='carritoNum'>{amountTotalItem()}</span> 
            }
        </div>
    )
}

export default CartWidget