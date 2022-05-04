import "./cart.css"
import { useCartContext } from "../../context/CartContext"
import {addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch} from "firebase/firestore"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import swal from "sweetalert"
import { useState } from "react"
  

function Cart() {

  const [dataForm, setDataForm] = useState(
    {
    name: '', email: '', phone: ''
    }
  )

  const { cartList, clearCart, amountTotalItem, total } = useCartContext()
  
  const createOrder =
    async (e) => {
      e.preventDefault();

        let order = {}      
    
        order.buyer = dataForm
        order.total = amountTotalItem ()
    
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price * cartItem.amount
          
            return {id, name, price}   
          }
        )   

        const db = getFirestore() 
        const queryCollection = collection(db, 'orders')
        await addDoc(queryCollection, order)
          .then(({id}) => swal(`Gracias por tu compra, ${dataForm.name}!`, `Tu id de compra: ${id}`, "success"))
          .catch(err => {
            console.log(err);
            alert('No podemos mostrar los productos en este momento');
            }
          )
          .finally (clearCart)

        
        const queryCollectionStock = collection(db, 'products')

        const queryUpdateStock = await query(
          queryCollectionStock, 
            where( documentId() , 'in', cartList.map(item => item.id) ) 
        )

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.id === res.id).amount
              }
            ) 
          )
        )
        .finally(batch.commit())
  }

  const handleChange = (e) => {
    setDataForm(
      {
        ...dataForm,
        [e.target.name]: e.target.value
      }
    )
}

  return ( 
  
  <div>  
    { cartList.length > 0 ? (
      <h1>Todavía no compraste?</h1>
      )    
      :
      ( 
        <>
          <p>Aún no elegiste tus productos</p>
          <Link to={"/"}>
            <button className="button__main" onClick={clearCart} >
                ¡Vamos a comprar!
            </button>
          </Link>
        </>
      )
    }

      <div className="cartItems">
        { cartList.length > 0 && cartList.map( product => 
          <CartItem 
            key={product.id} 
            id={product.id} 
            name={product.name} 
            image={product.image} 
            price={product.price} 
            amount={product.amount} 
          />
        )}      
      </div>

      { cartList.length > 0 &&
      <>
        <h2>${total}</h2>
        <div>
          <div>
            <form 
              className="form-data"
              onSubmit={createOrder}                 
            >
              <input 
                  className="input-compra"
                  type='text' 
                  name='name' 
                  placeholder='Ingrese su nombre' 
                  value={dataForm.name}
                  onChange={handleChange}
              />
              <br />
              <input
                  className="input-compra" 
                  type='number' 
                  name='phone'
                  placeholder='Ingrese su teléfono' 
                  value={dataForm.phone}
                  onChange={handleChange}
              />
              <br/>
              <input
                  className="input-compra" 
                  type='email' 
                  name='email'
                  placeholder='Ingrese su email' 
                  value={dataForm.email}
                  onChange={handleChange}
              />
              <br/>
              <button className="button__main" onClick={createOrder}>
                Terminar compra
              </button>
            </form>
          </div>
          <button className="button__secondary" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      </>
      }
    
  </div>
  )  
}

export default Cart


