import React, { createContext, useContext, useState } from 'react'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export function CartProvider({ children }) {

    const [cartList, setCartList] = useState([])

    const addItem = (item, cantidad) => {

        const notyf = new Notyf()
        notyf.success({
            message: `Agregaste ${item.cantidad}${item.name} al carrito`,
            duration: 2000,
        })
        
        
        setCartList([
                ...cartList,
                item
        ])
    }

    const removeItem = (id) => {

        const notyf = new Notyf()
        notyf.error({
            message: `Producto Eliminado`,
            duration: 2000,
        })

        const newCartList = cartList.splice(({ item }) => item.id === id)
		setCartList(newCartList)
    }


    const clearCart = () => setCartList([])

	return (
		<CartContext.Provider value={{cartList, addItem, removeItem, clearCart}}>
			{children}
		</CartContext.Provider>
	)
}