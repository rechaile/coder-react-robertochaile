import React, { useEffect, useState } from 'react'
import { listaProductos } from '../../data/data';
import Item from './Item';

import './estilos/itemList.css';
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap';



const ItemList = () => {
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true)
  const {categoriaId} = useParams()

  const getProductos = new Promise ((resolve, reject) => {
      setTimeout (()=> {
          resolve (listaProductos)
      }, 2000);
  });

  
   
useEffect (()=> {
  if (categoriaId) {
  getProductos
  .then(result => setProductos(result.filter(item => item.category === categoriaId)))
  .catch(err => {
      console.log(err);
      alert('No podemos mostrar los productos en este momento');
  })
  .finally (()=> setCargando (false))
} else {
  getProductos
  .then(result => setProductos(result))
  .catch(err => {
      console.log(err);
      alert('No podemos mostrar los productos en este momento');
  })
  .finally (()=> setCargando (false))
  }
}, [categoriaId]) 

return ( 
    <div className="product-list-container">
    {
      cargando ?       
      
      <Container>
      <Row>
          <Col>
             <Spinner animation="border" size="m" />
         </Col>
     </Row>
  </Container>
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
                    category= {producto.category}
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