import React from 'react';
import {   removeFromDb } from '../../Hooks/fakeDb';
import './Review.css'
const ReviewItem = (props) => {
    const { name, img, price, quantity } = props.food
    const{cart,setCart}=props
    const handleRemove = name => {
        console.log('clicked')
        const newCart = cart.filter(food =>food.name !== name)
        setCart(newCart)
        removeFromDb(name)


    }
    return (
        <div className="d-flex mt-3">
            <img src={img} className="image-review w-75" alt="" />
            <div className="ms-5 text-start text-white w-100">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={handleRemove} className="btn bg-dark text-secondary w-50 fs-4">Remove</button>
            </div>

        </div>
    );
};

export default ReviewItem;