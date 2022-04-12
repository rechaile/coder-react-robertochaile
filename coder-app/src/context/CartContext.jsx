import React, { createContext, useContext, useEffect, useState } from 'react'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export function CartProvider({ children }) {

    const [ cartList, setCartList ] = useState([])
    const [ cant, setCant ] = useState(0)
    const [ total, setTotal ] = useState()

    useEffect(() => {
        var t = 0
        const totals = cartList.map( p => p.price * p.amount)
        
        totals.map( p => t = t + p)
       
        setTotal(t)
        const cartCant = cartList.length
        // Las guardo en el estado
        setCant(cartCant)
    }, [cartList])

    const addItem = (item, cantidad) => {

        const notyf = new Notyf()
        notyf.success({
            message: `Agregaste ${item.cantidad} ${item.name} al carrito`,
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

        const newCartList = cartList.filter(({ item }) => item.id !== id)
		setCartList(newCartList)
    }


    const clearCart = () => setCartList([])

	return (
		<CartContext.Provider value={{cartList, addItem, removeItem, clearCart}}>
			{children}
		</CartContext.Provider>
	)
}