import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./itemCount.css";

export const FinCompra= ()=> {

    return (
        <Container>
            <Row>
                <Col>
                
                    <Link to='/cart' >
                     <button id='terminarBtn'
                    className="boton__secundario__hidden">  
                    Terminar compra</button>
                    </Link>
                
                <br></br>
                    <Link to={'/'}>   
                        <button id='seguirBtn'
                            className="boton__secundario__hidden" 
                        >Seguir comprando</button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export const ItemCount = ({ inicial, stock, onAdd }) => {

    

const [cantidad, setCantidad] = useState (inicial);

const cambioBtn = () => {
    document.getElementById('terminarBtn').classList.add('boton__principal')
    document.getElementById('seguirBtn').classList.add('boton__secundario')
}

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
        onClick={() => { onAdd(cantidad); cambioBtn()}}
        disabled= {stock === 0 ? true : null}
        >
            Añadir
        </button>
    </div>
  )
}


