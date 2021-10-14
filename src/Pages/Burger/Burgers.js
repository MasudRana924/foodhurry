import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Burger from './Burger';

const Burgers = () => {
    const [burgers,setBurgers]=useState([])
    useEffect(()=>{
        fetch('./burgers.json')
        .then(res=>res.json())
        .then(data=>setBurgers(data))
    },[])
    return (
        <Container fluid  style={{backgroundColor:' #121618'}}>

            <Row xs={1} md={3}>
                {
                    burgers.map(burger=><Burger
                    key={burger.id}
                    burger={burger}
                    ></Burger>)
                }

            </Row>

        </Container>
    );
};

export default Burgers;