import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFoods from '../../../Hooks/useFoods';
import './Food.css'

const Food = (props) => {
    const {handleCart}=useFoods()
    const { id, name, img, price, desc } = props.food
    return (
        <Col className="mt-3">
            <div className="card-style">
                <Link to={`/details/${id}`}>
                    <img src={img} className="image" alt="" />
                </Link>
                <Link to={`/details/${id}`}>
                    <p className="text-white fs-4">{name}</p></Link>
                <small className="text-white ">{desc.slice(0, 100)}</small> <br />
                <p className="text-white fs-4">{price}</p>
                <Button onClick={()=>handleCart(props.food)} className="bg-dark text-secondary btn-outline-secondary w-100 fs-4">Order Now</Button>
            </div>
        </Col>
    );
};

export default Food;
