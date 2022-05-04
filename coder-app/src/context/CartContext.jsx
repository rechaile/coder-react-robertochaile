import React, { createContext, useContext, useEffect, useState } from 'react'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export function CartProvider({ children }) {

    const [ cartList, setCartList ] = useState([])
    const [total, setTotal] = useState()
    const [quantity, setQuantity] = useState(0)
    

    useEffect(() => {
        var t = 0
        
        const totals = cartList.map( product => product.price * product.amount)
        
        totals.map( product => t = t + product)
       
        setTotal(t)
        
        const cartQuantity = cartList.length
       
        setQuantity(cartQuantity)
    }, [cartList])

    const amountTotalItem = () => {
        return cartList.reduce((acumulate, product) => acumulate += product.amount , 0);
         
    }

    

  

    function isInCart(id){
        const item = cartList.find(product => product.id === id)
        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }
    
    const addItem = (product, amount, id) => {
    if (isInCart(id)){
        const oldProduct = cartList.find(product => product.id === id)
            
            const newAmount = oldProduct.amount + amount        
           
            const newProduct = { id: oldProduct.id, name: oldProduct.name, image: oldProduct.image, price: oldProduct.price, amount: newAmount}
            const cartWithoutOld = cartList.filter(product => product.id =! id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCartList(cartWithNew)            
        }
         else {
        const notyf = new Notyf()
        notyf.success({
            message: `Agregaste ${amount} ${product.name} al carrito`,
            duration: 2000,
        })
        
        const newItem = { id: product.id, name: product.name, image: product.image, price: product.price, amount: amount }
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
       
    }
	return (
		<CartContext.Provider value={{cartList, total, quantity, amountTotalItem, addItem, removeItem, clearCart}}>
			{children}
		</CartContext.Provider>
	)
}