import React, { useState } from 'react'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {

        const notyf = new Notyf()
        notyf.success({
            message: `Agregaste ${item.name} al carrito`,
            duration: 2000,
        })

        const cartFiltered = cart.filter(product => product.item.id !== item.id)
        setCart([...cartFiltered, { item, cantidad }])
    }

    const removeItem = (id) => {

        const notyf = new Notyf()
        notyf.error({
            message: `Producto Eliminado`,
            duration: 2000,
        })

        const productsFiltered = cart.filter(({ item }) => item.id !== id)
		setCart(productsFiltered)
    }

    const inCart = (id) => {
        return cart.some(({ item }) => item.id === id)
    }

    const clearCart = () => setCart([])

	return (
		<CartContext.Provider value={{ addItem, removeItem, clearCart, inCart, cart}}>
			{children}
		</CartContext.Provider>
	)
}