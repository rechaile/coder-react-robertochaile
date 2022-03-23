import React, { useEffect, useState } from 'react'
import { listaProductos } from '../../data/data';
import Item from './Item';

import './estilos/itemList.css';


const ItemList = () => {
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true)

  const getProductos = new Promise ((resolve, reject) => {
      setTimeout (()=> {
          resolve (listaProductos)
      }, 2000);
  });

  const getProductosBD = () => {
    getProductos
    .then(result => setProductos(result))
    .catch(err => {
        console.log(err);
        alert('No podemos mostrar los productos en este momento');
    })
    .finally (()=> setCargando (false))
  }
useEffect (()=> {
    getProductosBD();
},[]) 

return ( 
    <div className="product-list-container">
    {
      cargando ? <p>Cargando productos...</p> 
      : ( <>
          {
            productos.map((producto) => {
              return (
                <div key={producto.id}>
                  <Item
                    name={producto.name}
                    image={producto.image}
                    price={producto.price}
                    stock={producto.stock}
                    id={producto.id}
                  />
                </div>
              );
            })
          }
        </>) 
      }
  </div>
);
};

export default ItemList