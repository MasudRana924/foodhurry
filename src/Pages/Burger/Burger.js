import React from 'react';
import { Col,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Burger.css'

const Burger = (props) => {
    const {name,price,desc,img}=props.burger
    const history = useHistory();
    const handleOrder = () => {
        // history.push('/order')
    }
    return (
        <Col className="mt-3">
         <div className="card-style">
         <img src={img} className="image" alt="" />
         <p className="text-white fs-4">{name}</p>
         <small className="text-white ">{desc.slice(0,100)}</small> <br />
         <p className="text-white fs-4">{price}</p>
         <Button onClick={handleOrder} className="bg-dark text-secondary btn-outline-secondary w-100 fs-4">Order Now</Button>
         </div>
         
        </Col>
    );
};

export default Burger;