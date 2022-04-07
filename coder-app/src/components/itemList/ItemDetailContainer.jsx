import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listaProductos } from "../../data/data";

import ItemDetail from "./ItemDetail";



const ItemDetailContainer= () => {
    
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true)
    const {detalleId} = useParams()
    const prodId = parseInt(detalleId)
    

     

        const getProducto = new Promise ((resolve, reject) => {
            setTimeout (()=> {
                resolve (listaProductos)
            }, 2000);
        });
        
        useEffect (()=> {
            if (detalleId) {
            getProducto
            .then(result => setProducto(result.find(item => item.id === prodId)))
            .catch(err => {
                console.log(err);
                alert('No podemos mostrar el producto en este momento');
            })
            .finally (()=> setCargando (false))
          } else {
              return (
                  <p>No hemos podido cargar este producto</p>
              )
          }
        }, [detalleId])
         
        
        return ( 
             cargando ? <p>Cargando producto...</p> :
                ( 
            <>
                <ItemDetail producto={producto}/>
            </>
                )
        )}

  
       
export default ItemDetailContainer