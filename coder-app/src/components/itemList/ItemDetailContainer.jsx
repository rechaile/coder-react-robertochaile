import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { productOne } from "../../data/data";

import ItemDetail from "./ItemDetail";



const ItemDetailContainer= () => {
    
        const [producto, setProducto] = useState([]);
        const [cargando, setCargando] = useState(true)

        
        const getProducto = new Promise ((resolve, reject) => {
            setTimeout (()=> {
                resolve (productOne)
            }, 2000);
        });
        
        useEffect (()=> {
            
            getProducto
            .then(result => setProducto(result))
            .catch(err => {
                console.log(err);
                alert('No podemos mostrar el producto en este momento');
            })
            .finally (()=> setCargando (false))
          } , [])
         
        
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
                <ItemDetail producto={producto}/>
            </>
                )
        )}

  
       
export default ItemDetailContainer