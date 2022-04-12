import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

import "./itemCount.css";



export const ItemCount = ({ inicial, stock, onAdd, item, id}) => {

    

const [cantidad, setCantidad] = useState (inicial);

const [ open, setOpen ] = useState(false)

    const { addItem } = useCartContext()
    
    // Uno las funciones de agregar al carrito con la de mostrar el "Terminar compra"
    function addAndOpen(item, cantidad, id){
        addItem(item, cantidad, id);
        setOpen(true)
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
        { !open ?
        (<div>
            <button 
            className='boton__principal'
            onClick={() => { onAdd(cantidad) ; addAndOpen(item, cantidad, id)}}
            disabled= {stock === 0 ? true : null}
            >
                Añadir al <MdAddShoppingCart className="carrito"/>
            </button>
        </div>) : (
            <Container>
            <Row>
                <Col>
                
                    <Link to='/cart' >
                     <button id='terminarBtn'
                    className="boton__principal">  
                    Terminar compra</button>
                    </Link>
                
                <br></br>
                    <Link to={'/'}>   
                        <button id='seguirBtn'
                            className="boton__secundario" 
                        >Seguir comprando</button>
                    </Link>
                </Col>
            </Row>
        </Container>
        )
        }
    </div>
  )
}


