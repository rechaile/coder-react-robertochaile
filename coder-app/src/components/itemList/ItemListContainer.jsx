import React from 'react'
import ItemCount from '../contador/ItemCount';

function Greetings(props) {
    return <p>Hola, soy {props.mensaje} </p>;
}
const cantAgregada = (cantidad) => {
  alert(`Agregaste ${cantidad} productos`);
};

function ItemListContainer() {
  return (
    <>
      <Greetings mensaje="tu lista de productos"/>
      <ItemCount onAdd={cantAgregada}/>
    </>
    
  )
}

export default ItemListContainer