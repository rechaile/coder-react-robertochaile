import "./cart.css"
 
import { useCartContext } from "../../context/CartContext"
  

function Cart() {

  const { cartList, removeCart } = useCartContext()
  console.log(cartList)
  return (
    <div>
      {cartList.map(producto => <li key={producto.id} > nombre: {producto.name} - cantidad: {producto.cantidad} </li>)}
      <button className="boton__principal" onClick={removeCart}>Vaciar Carrito</button>
    </div>
  )

  
}

export default Cart


