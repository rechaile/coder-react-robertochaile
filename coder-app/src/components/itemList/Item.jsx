import React from 'react'
import { Link } from 'react-router-dom';

import './styles/item.css';


const Item = ({ name, image, price, id, category}) => {

  
    return (
        <article className="product-card">
            <div>
                <img className="product-card__image" src={image} alt="foto de producto" />
            </div>
            <div className="product-name__container">
                <p className="product-card__name">{name}</p>
            </div>
            <div>
                <p className="product-card__category">{category}</p>
            </div>
            <p className="product-card__price">${price}</p>
            
            <div>
                <Link to={`/detalle/${id}`}>   
                    <button className='boton__card'>Ver más</button>
                </Link>
            </div>
        </article>
  )
}

export default Item