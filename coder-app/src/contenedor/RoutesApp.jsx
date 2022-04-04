import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import ItemListContainer from '../components/itemList/ItemListContainer';
import ItemDetailContainer from '../components/itemList/ItemDetailContainer';
import Cart from '../components/carrito/Cart'

function RoutesApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
        path="/" 
        element={
          <ItemListContainer />
        }/> 
        <Route 
          path="/categoria/:categoriaId" 
          element={
            <ItemListContainer/>
          } 
        />    

        <Route
        path="/detalle/:detalleId"
        element={<ItemDetailContainer />}/>
        <Route
        path="/cart"
        element={
          <Cart/>
        }
        />
        <Route path='/*' element={<Navigate to='/' replace />} />
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default RoutesApp