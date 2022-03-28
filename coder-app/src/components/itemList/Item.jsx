import React from 'react'
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
                <button className='boton__principal'>Ver más</button>
                <ItemCount stock={stock} onAdd={cantAgregada} inicial={1} />
            </div>
        </article>
  )
}

export default Item