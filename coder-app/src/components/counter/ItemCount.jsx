import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

import "./itemCount.css";



export const ItemCount = ({ initial, stock, onAdd, item, id}) => {

    

const [amount, setAmount] = useState (initial);

const [ open, setOpen ] = useState(false)

    const { addItem } = useCartContext()
    
    // Uno las funciones de agregar al carrito con la de mostrar el "Terminar compra"
    function addAndOpen(item, amount, id){
        addItem(item, amount, id);
        setOpen(true)
    }

const addProd = (num)=> {
    setAmount(amount + num)
};
  return (
    <div className='counterContainer'>
        <div className='numContainer'>
            <button 
            className='numContainer__button'
            onClick={() => addProd(-1)}
            disabled= {amount === initial ? true : null}
            >
                -
            </button>
            <span className='numContainer__amount'>{ amount }</span>
            <button 
            className='numContainer__button'
            onClick={()=> addProd(+1)}
            disabled= {amount === stock ? true : null}
            >
                +
            </button>
        </div>
        { !open ?
            (
                <div>
                    <button 
                    className='button__main'
                    onClick={() => { onAdd(amount) ; addAndOpen(item, amount, id)}}
                    disabled= {stock === 0 ? true : null}
                    >
                        Añadir al <MdAddShoppingCart className="cart"/>
                    </button>
                </div>
            ) : 
            (
                <Container>
                    <Row>
                        <Col>
                        
                            <Link to='/cart' >
                                <button 
                                className="button__main">  
                                    Terminar compra
                                </button>
                            </Link>
                            <br></br>
                            <Link to={'/'}>   
                                <button 
                                className="button__secondary">
                                    Seguir comprando
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            )
        }
    </div>
  )
}


