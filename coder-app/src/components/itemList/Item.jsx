import React from 'react'
import { Link } from 'react-router-dom';

import './estilos/item.css';


const Item = ({ name, image, price, id, category}) => {

  
    return (
        <article className="product-card">
            <div>
                <img className="product-card__image" src={image} alt="" />
            </div>
            <div>
                <h3 className="product-card__name">{name}</h3>
            </div>
            <div>
                <h2 className="product-card__name">{category}</h2>
            </div>
            <p className="product-card__name">${price}</p>
            
            <div>
                <Link to={`/detalle/${id}`}>   
                    <button className='boton__principal'>Ver más</button>
                </Link>
            </div>
        </article>
  )
}

export default Item