import React from 'react';
import { useState } from 'react';

import "./itemCount.css";


const ItemCount = ({ onAdd }) => {
const inicial = 1 ;
const stock = 10 ;

const [cantidad, setCantidad] = useState (inicial);

const agregarProd = (num)=> {
    setCantidad(cantidad + num)
};
  return (
    <div className='contadorContainer'>
        <div className='numContainer'>
            <button 
            className='numContainer__boton'
            onClick={() => agregarProd(-1)}
            disabled= {cantidad === inicial ? true : null}
            >
                -
            </button>
            <span className='numContainer__cantidad'>{ cantidad }</span>
            <button 
            className='numContainer__boton'
            onClick={()=> agregarProd(+1)}
            disabled= {cantidad === stock ? true : null}
            >
                +
            </button>
        </div>

        <button 
        className='boton__principal'
        onClick={() => onAdd(cantidad)}
        disabled= {stock === 0 ? true : null}
        >
            Añadir
        </button>
    </div>
  )
}

export default ItemCount