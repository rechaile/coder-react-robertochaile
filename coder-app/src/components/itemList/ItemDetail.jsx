import React from 'react'


function ItemDetail({ producto }) {
    return (
      <>
       
                    <div>{producto.name}</div>
               
                    <div>{producto.price}</div>
               
                    <div>{producto.image}</div>
               
                    <div>{producto.detalle}</div>
              
      </>
    )
  }

  

export default ItemDetail