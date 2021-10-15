import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Food from '../food/Food';
import useFoods from './../../../Hooks/useFoods';

const Foods = () => {
    // const [foods,setFoods]=useState([])
    // useEffect(()=>{
    //     fetch('./burgers.json')
    //     .then(res=>res.json())
    //     .then(data=>setFoods(data))
    // },[])
    const {foods}=useFoods()
    return (
        <Container fluid style={{backgroundColor:' #121618'}} className="pb-5">
            <Row xs={1} md={3}>
                {
                    foods.map(food=><Food
                    key={food.id}
                    food={food}
                    
                    ></Food>)
                }

            </Row>
        </Container>
    );
};

export default Foods;