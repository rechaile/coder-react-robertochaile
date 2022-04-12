
import React from 'react'
import { useCartContext } from '../../context/CartContext'

import '../carrito/cart.css'


function CartItem( { id, name, image, price, amount }) {
    const { removeItem } = useCartContext()

    return (
        <div className="cartItem">
            <div className="cartItem__title">
                <p>{name}</p>
            </div>
            <div className="cartItem__image">
                <img src={image} alt={name} />
            </div>
            <div className="cartItem__price">
                <h3>${price}</h3>
            </div>
            <div className="cartItem__amount">
                <h3>{amount}</h3>
            </div>
            <div className="cartItem__parcial">
                <h3>${amount*price}</h3>
            </div>
            <button onClick={ () => removeItem(id)} variant="contained" color="primary">
                Eliminar
            </button>
        </div>
    )
}

export default CartItem