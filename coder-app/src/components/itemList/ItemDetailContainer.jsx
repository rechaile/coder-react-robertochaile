import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProductos } from "../../data/data";

import ItemDetail from "./ItemDetail";



const ItemDetailContainer= () => {
        
        const [productos, setProductos] = useState([]);
        const [cargando, setCargando] = useState(true)
        const {detalleId} = useParams()
        const prodId = parseInt(detalleId)
        useEffect (()=> {
            
            getProductos
            .then(result => setProductos(result))
            .catch(err => {
                console.log(err);
                alert('No podemos mostrar el producto en este momento');
            })
            .finally (()=> setCargando (false))
          } , [detalleId])
         
        

        const producto = productos.find(item => item.id === prodId ) 
        console.log (producto) 
        return ( 
             cargando ? 
             <Container>
                 <Row>
                     <Col>
                        <div>
                            <Spinner animation="border" size="m" />
                        </div>
                    </Col>
                </Row>
             </Container> :
                ( 
            <>
                <ItemDetail 
                producto={producto}/>
            </>
                )
        )}

  
       
export default ItemDetailContainer