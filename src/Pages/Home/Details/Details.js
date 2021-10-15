import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const{foodId}=useParams()
 
    return (
        <Container fluid className="pt-5 pb-3" style={{backgroundColor:' #121618'}}>
            <h1 className="text-white">{foodId}</h1>
          
        </Container>
    );
};

export default Details;