import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar/NavBar';
import ItemListContainer from '../components/itemList/ItemListContainer';

function RoutesApp() {
  return (
    <div>
      <NavBar />
      <ItemListContainer /> 
      
    </div>
  )
}

export default RoutesApp