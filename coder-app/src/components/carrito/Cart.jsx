import "./cart.css"
import { useCartContext } from "../../context/CartContext"

import { Link } from "react-router-dom"
import CartItem from "./CartItem"
  

function Cart() {

  const { cartList, clearCart, total } = useCartContext()
  
 

  return ( 
  
  <div>  
    { cartList.length > 0 ? (
      <h1>Todavía no compraste?</h1>
      )    
      :
      ( <>
      <p>Aún no elegiste tus productos</p>
          <Link to={"/"}>
          <button className="boton__primario" onClick={clearCart} >
              Empezar a comprar!
          </button>
      </Link>
      </>)}

      <div className="cartItems">
          { cartList.length > 0 && cartList.map( product => <CartItem key={product.id} 
          id={product.id} name={product.name} image={product.image} price={product.price} 
          amount={product.cantidad} />)}
      </div>


      { cartList.length > 0 &&
      <>
      <h2>${total}</h2>
      <div className="cartItems__buttons">
          <button onClick={clearCart} variant="contained" color="primary">
              Saca todo del carrito che
          </button>
          
      </div>
      </>}
    
    </div>

  )

  
}

export default Cart


