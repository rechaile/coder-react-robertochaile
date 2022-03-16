import React from 'react'

function Greetings(props) {
    return <p>Hola, soy {props.mensaje} </p>;
}

function ItemListContainer() {
  return (
    <Greetings mensaje="soy tu lista de productos"/>
  )
}

export default ItemListContainer