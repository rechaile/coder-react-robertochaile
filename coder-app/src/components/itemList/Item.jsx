import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../contador/ItemCount';
import './estilos/item.css';


const Item = ({ name, image, price, stock, id}) => {
    const cantAgregada = (cantidad) => {
        alert(`Agregaste ${cantidad} productos`);
      };
  
    return (
        <article className="product-card">
            <div>
                <img className="product-card__image" src={image} alt="" />
            </div>
            <div>
                <h3 className="product-card__name">{name}</h3>
            </div>
            <p className="product-card__name">${price}</p>
            
            <div>
                <Link to={`/detalle/${id}`}>   
                    <button className='boton__principal'>Ver más</button>
                </Link>
                <ItemCount stock={stock} onAdd={cantAgregada} inicial={1} />
            </div>
        </article>
  )
}

export default Item