import React, { useEffect, useState } from 'react'

import Item from './Item';

import './estilos/itemList.css';
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


const ItemList = () => {
  
  
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true)
    const {categoriaId} = useParams()
  
    
  
    const queryDb = getFirestore()
    const queryCollection = collection(queryDb, 'products')
   
     
  useEffect (()=> {
    if (categoriaId === undefined) {
     return getDocs(queryCollection)
    .then(resp => setProductos( resp.docs.map(item => ({ id: item.id, ...item.data()})) ))
    .catch(err => {
        console.log(err);
        alert('No podemos mostrar los productos en este momento');
    })
    .finally (()=> setCargando (false))
    } else {
    const queryFilter = query(queryCollection, where('category', '==', categoriaId))
    return getDocs(queryFilter)
    .then(resp => setProductos( resp.docs.map(item => ({ id: item.id, ...item.data()})) ))
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