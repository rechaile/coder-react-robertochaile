import { collection, getDoc, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";


import ItemDetail from "./ItemDetail";



const ItemDetailContainer= () => {
        
        const [producto, setProducto] = useState([]);
        const [cargando, setCargando] = useState(true)
        const {detalleId} = useParams()
       
        const queryDb = getFirestore()
        const queryCollection = collection(queryDb, 'products')
        const queryFilter = query(queryCollection, where('id', '==', detalleId )

        useEffect (()=> {
            
            getDoc(queryFilter)
            .then(resp => setProducto( resp.docs.map(item => ({ id: item.id, ...item.data()})) ))
            .catch(err => {
                console.log(err);
                alert('No podemos mostrar el producto en este momento');
            })
            .finally (()=> setCargando (false))
          } , [detalleId])
         
        

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