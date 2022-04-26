import "./cart.css"
import { useCartContext } from "../../context/CartContext"

import { Link } from "react-router-dom"
import CartItem from "./CartItem"
  

function Cart() {

  const { cartList, clearCart, total } = useCartContext()
  
  const createOrder = (e) => {
    console.log('funciona crear orden')
  }

  return ( 
  
  <div>  
    { cartList.length > 0 ? (
      <h1>Todavía no compraste?</h1>
      )    
      :
      ( <>
      <p>Aún no elegiste tus productos</p>
          <Link to={"/"}>
          <button className="boton__principal" onClick={clearCart} >
              ¡Vamos a comprar!
          </button>
      </Link>
      </>)}

      <div className="cartItems">
          { cartList.length > 0 && cartList.map( product => <CartItem key={product.id} 
          id={product.id} name={product.name} image={product.image} price={product.price} 
          cantidad={product.amount} />)}  
          
          
      </div>


      { cartList.length > 0 &&
      <>
      <h2>${total}</h2>
      <div >
          <button className="boton__principal" onClick={createOrder}>
            Terminar compra
          </button>
          <button className="boton__secundario" onClick={clearCart}>
              Vaciar carrito
          </button>
          
      </div>
      </>}
    
    </div>

  )

  
}

export default Cart


