import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";


import ItemDetail from "./ItemDetail";



const ItemDetailContainer= () => {
        
        const [producto, setProducto] = useState([]);
        const [cargando, setCargando] = useState(true)
        const {detalleId} = useParams()
        
        const queryDb = getFirestore()
        const queryProduct = doc(queryDb, 'products', detalleId)
       
        useEffect (()=> {
           
           
            getDoc(queryProduct)
            .then(resp => setProducto( { id: resp.id, ...resp.data()})) 
            .catch(err => {
              console.log(err);
              alert('No podemos mostrar los productos en este momento');
          })
          .finally (()=> setCargando (false))
            
            
          }, [detalleId]) 
        
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