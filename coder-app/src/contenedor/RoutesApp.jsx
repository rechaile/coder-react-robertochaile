import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar/NavBar';
import ItemListContainer from '../components/itemList/ItemListContainer';
import ItemDetailContainer from '../components/itemList/ItemDetailContainer';
function RoutesApp() {
  return (
    <div>
      <NavBar />
      <ItemListContainer /> 
      <ItemDetailContainer />
    </div>
  )
}

export default RoutesApp