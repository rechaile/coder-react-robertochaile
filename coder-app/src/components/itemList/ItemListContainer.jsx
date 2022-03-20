import React from 'react'

function Greetings(props) {
    return <p>Hola, soy {props.mensaje} </p>;
}

function ItemListContainer() {
  return (
    <Greetings mensaje="tu lista de productos"/>
  )
}

export default ItemListContainer