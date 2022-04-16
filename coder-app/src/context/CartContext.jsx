import React, { createContext, useContext, useEffect, useState } from 'react'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export function CartProvider({ children }) {

    const [ cartList, setCartList ] = useState([])
    const [total, setTotal] = useState()
    const [cant, setCant] = useState(0)
    

    useEffect(() => {
        var t = 0
        // Con el map obtengo el total por producto
        const totals = cartList.map( p => p.price * p.amount)
        // Sumo a t el total por producto de cada uno
        totals.map( p => t = t + p)
        // Lo guardo en el estado
        setTotal(t)
        // Calculo la cantidad de productos
        const cartCant = cartList.length
        // Las guardo en el estado
        setCant(cartCant)
    }, [cartList])

    const cantidadTotalItem = () => {
        return cartList.reduce((acum, prod) => acum += prod.amount , 0);
         // acum = acum + cantidad
    }

    

  

    function isInCart(id){
        const item = cartList.find(p => p.id === id)
        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }
    
    const addItem = (producto, cantidad, id) => {
    if (isInCart(id)){
        const oldProduct = cartList.find(p => p.id === id)
            
            const newCant = oldProduct.amount + cantidad         
           
            const newProduct = { id: oldProduct.id, name: oldProduct.name, image: oldProduct.image, price: oldProduct.price, amount: newCant}
            const cartWithoutOld = cartList.filter(producto => producto.id =! id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCartList(cartWithNew)            
        }
         else {
        const notyf = new Notyf()
        notyf.success({
            message: `Agregaste ${cantidad} ${producto.name} al carrito`,
            duration: 2000,
        })
        
        const newItem = { id: producto.id, name: producto.name, image: producto.image, price: producto.price, amount: cantidad }
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

        const newCartList = cartList.filter((producto) => producto.id !== id)
		setCartList(newCartList)
    }


    const clearCart = () => {
        setCartList([])
       
    }
	return (
		<CartContext.Provider value={{cartList, total, cant, cantidadTotalItem, addItem, removeItem, clearCart}}>
			{children}
		</CartContext.Provider>
	)
}