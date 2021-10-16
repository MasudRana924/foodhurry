import React from 'react';
import { Container } from 'react-bootstrap';

import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Order.css'

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useAuth()
    const onSubmit = data => {
        
        console.log(data)
    };
    return (
        <Container fluid className="booking-card ">
        <div>

        
        <form className="shipping-form " onSubmit={handleSubmit(onSubmit)}>
        
            <input defaultValue={user.displayName} {...register("name")} placeholder="your name" />
            
            <input defaultValue={user.email} {...register("email", { required: true })} />
          
            {errors.email && <span className="error">This field is required</span>}
            <input defaultValue="" {...register("phone")} placeholder="your phone number" />
            <input defaultValue="" {...register("address")} placeholder="your present address" />
            <input defaultValue="" {...register("city")} placeholder="your city " />

            <input type="submit" className="bg-success" />
        </form>
        </div>
    </Container>
    );
};

export default Order;