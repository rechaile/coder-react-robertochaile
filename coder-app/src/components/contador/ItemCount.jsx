import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { listaProductos } from '../../data/data';

import "./itemCount.css";

const FinCompra= ()=> {

    return (
        <Container>
            <Row>
                <Col>
                    <Link to='/cart' >
                     <button 
                    className="boton__principal">  
                    Terminar compra</button>
                    </Link>
                
                <br></br>
                    <Link to={'/'}>   
                        <button 
                            className="boton__secundario" 
                        >Seguir comprando</button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

const ItemCount = ({ inicial, stock, onAdd, handleInter }) => {

    

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
        onClick={() => { onAdd(cantidad) ; handleInter()}}
        disabled= {stock === 0 ? true : null}
        >
            Añadir
        </button>
    </div>
  )
}

const ContinuarCompra = () => {

    const cantAgregada = (cantidad) => {
        alert(`Agregaste ${cantidad} productos`);
      };
    
      
   
    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            
            
            {
                inputType === 'button' ? 
                    <ItemCount inicial={1} stock={''} onAdd = {cantAgregada} handleInter={handleInter} />
                : 
                    <FinCompra />
            }
        </div>
    )
}


export default ContinuarCompra