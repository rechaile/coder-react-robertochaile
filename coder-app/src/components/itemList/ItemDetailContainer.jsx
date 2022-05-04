import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";


import ItemDetail from "./ItemDetail";



const ItemDetailContainer= () => {
        
        const [product, setProduct] = useState([]);
        const [loading, setLoading] = useState(true)
        const {detailId} = useParams()
        
        const queryDb = getFirestore()
        const queryProduct = doc(queryDb, 'products', detailId)
       
        useEffect (()=> {
           
            getDoc(queryProduct)
            .then(resp => setProduct( { id: resp.id, ...resp.data()})) 
            .catch(err => {
              console.log(err);
              alert('No podemos mostrar los productos en este momento');
          })
          .finally (()=> setLoading(false))
            
            
          }, [detailId]) 
        
        return ( 
             loading ? 
             <Container>
                 <Row>
                     <Col>
                        <div>
                            <Spinner animation="border" size="m" />
                        </div>
                    </Col>
                </Row>
             </Container> 
             :
                ( 
                    <>
                        <ItemDetail product={product}/>
                    </>
                )
        )
    }

  
       
export default ItemDetailContainer