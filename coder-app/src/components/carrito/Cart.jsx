import "./cart.css"
import { useCartContext } from "../../context/CartContext"
import {addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch} from "firebase/firestore"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import swal from "sweetalert"
  

function Cart() {

  const { cartList, clearCart, cantidadTotalItem, total } = useCartContext()
  
  const createOrder =
    async (e) => {
      e.preventDefault();

          
          let orden = {}      
      
          orden.buyer = { name: 'Federico', email: 'f@gmail.com', phone: '023456987' }
          orden.total = cantidadTotalItem ()
      
          orden.items = cartList.map(cartItem => {
              const id = cartItem.id
              const nombre = cartItem.name
              const precio = cartItem.price * cartItem.amount
           
              
              return {id, nombre, precio}   
          })   

          
          const db = getFirestore() 
          const queryCollection = collection(db, 'orders')
          await addDoc(queryCollection, orden)
          .then(({id}) => swal(`Gracias por tu compra!`, `Tu id de compra: ${id}`, "success"))
          .catch(err => {
            console.log(err);
            alert('No podemos mostrar los productos en este momento');
          })
          .finally (clearCart)

         
          const queryCollectionStock = collection(db, 'products')

          const queryActualizarStock = await query(
              queryCollectionStock, 
              where( documentId() , 'in', cartList.map(item => item.id) ) 
          )

          const batch = writeBatch(db)

          await getDocs(queryActualizarStock)
          .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).amount
          }) ))
          .finally(()=> console.log('actualizado'))

          batch.commit()
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


