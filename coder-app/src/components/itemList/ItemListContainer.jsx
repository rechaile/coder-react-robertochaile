import React from 'react'
import ItemList from './ItemList';

function Greetings(props) {
    return <p>Hola, soy {props.mensaje} </p>;
}


function ItemListContainer() {
  return (
    <>
      <Greetings mensaje="tu lista de productos"/>
      <ItemList/>
    </>
    
  )
}

export default ItemListContainer