import React from 'react';
import { Container } from 'react-bootstrap';
import { clearTheCart } from '../../Hooks/fakeDb';
import useCart from '../../Hooks/useCart';
import Foods from '../Home/Foods/Foods';
import ReviewItem from '../ReviewItem/ReviewItem';
import {useHistory} from 'react-router'
import './Cart.css'

const Cart = (props) => {
    const { cart,setCart} = props
    // const{cart}=useCart()
    let totalQuantity = 0

    let total = 0

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;

    }
    const delivery = total > 0 ? 15 : 0

    const tax = (total + delivery / 100) * 0.05
    total = total + delivery + tax

   const history=useHistory()

    const handePlaceOrder = () => {
        // placeorder page ejawa hoiche histry diye 
     history.push('/order')
    //  acrt ta k call kore clear kore dewa hoilo 
    setCart([])
    // localstorage theke clear kora hoilo call kore
    clearTheCart()

    }

    return (
        <Container fluid style={{ backgroundColor: '#121618' }} className="pb-5 pt-5">
            <div className="d-flex">
                <div className="w-75 food-side">
                    <h2 className="text-white pb-3">Your Order Details!!!</h2>
                    <div className="">
                        {
                            cart.map(food => <ReviewItem
                        
                            food={food}
                            cart={cart}
                            setCart={setCart}
                            ></ReviewItem>)
                        }
                    </div>

                </div>

                <div>
                    <h2 className="text-white text-center">Order Summary </h2>
                    <p className="text-white text-start">Total Order : <span className="text-danger " >
                        {totalQuantity} </span> </p>
                    <p className="text-white text-start">Shipping Cost : <span className="text-danger" >
                        {delivery} </span> </p>
                    <p className="text-white text-start">Tax : <span className="text-danger" >
                        {tax.toFixed(2)} </span> </p>
                    <p className="text-white text-start">Total Price : <span className="text-danger " >
                        {total.toFixed(2)} </span> </p>
                        <button className="btn bg-dark text-secondary w-100 fs-4" onClick={handePlaceOrder} >Confirm Order</button>
                </div>
            </div>

        </Container>
    );
};

export default Cart;