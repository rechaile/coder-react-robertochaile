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
        
        setCant(cartCant)
    }, [cartList])

    function isInCart(id){
        const item = cartList.find(p => p.id === id)
        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }
    
    const addItem = (product, counter, id) => {
    if (isInCart(id)){
        const oldProduct = cartList.find(p => p.id === id)
            
            const newCant = oldProduct.amount + counter           
           
            const newProduct = { id: oldProduct.id, name: oldProduct.name, image: oldProduct.image, price: oldProduct.price, amount: newCant}
            const cartWithoutOld = cartList.filter(product => product.id =! id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCartList(cartWithNew)            
        }
         else {
        const notyf = new Notyf()
        notyf.success({
            message: `Agregaste ${product.cantidad} ${product.name} al carrito`,
            duration: 2000,
        })
        
        const newItem = { id: product.id, name: product.name, image: product.image, price: product.price, amount: counter }
        setCartList([
                ...cartList,
                newItem ])
        }
    }

    const removeItem = (id) => {

        const notyf = new Notyf()
        notyf.error({
            message: `Producto Eliminado`,
            duration: 2000,
        }) 

        const newCartList = cartList.filter((product) => product.id !== id)
		setCartList(newCartList)
    }


    const clearCart = () => {
        setCartList([])
        setCant(0)
    }
	return (
		<CartContext.Provider value={{cartList, cant, total, addItem, removeItem, clearCart}}>
			{children}
		</CartContext.Provider>
	)
}