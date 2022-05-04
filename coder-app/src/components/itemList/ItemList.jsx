import React, { useEffect, useState } from 'react'

import Item from './Item';

import './styles/itemList.css';
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


const ItemList = () => {
  
  
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
  
    const queryDb = getFirestore()
    const queryCollection = collection(queryDb, 'products')
   
     
  useEffect (()=> {
    if (categoryId === undefined) {
     return getDocs(queryCollection)
    .then(resp => setProducts( resp.docs.map(item => ({ id: item.id, ...item.data()})) ))
    .catch(err => {
        console.log(err);
        alert('No podemos mostrar los productos en este momento');
    })
    .finally (()=> setLoading (false))
    } else {
    const queryFilter = query(queryCollection, where('category', '==', categoryId))
    return getDocs(queryFilter)
    .then(resp => setProducts( resp.docs.map(item => ({ id: item.id, ...item.data()})) ))
  .catch(err => {
      console.log(err);
      alert('No podemos mostrar los productos en este momento');
  })
  .finally (()=> setLoading (false))
    
    }
  }, [categoryId]) 

return ( 
    <div className="product-list-container">
    {
      loading ?       
      
      <Container>
        <Row>
            <Col>
              <Spinner animation="border" size="m" />
          </Col>
        </Row>
       </Container>
      : ( <>
            {
              products.map((product) => {
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                      category= {product.category}
                    />
                  </div>
                );
              })
            }
          </>
        ) 
    }
  </div>
);
};

export default ItemList