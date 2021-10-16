import React from 'react';
import Services from '../Services/Services';
import Subcribed from '../Subscribed/Subcribed';

import Foods from '../Foods/Foods';
import Banner from './../Banner/Banner';

const Home = (props) => {
    const {foods,handleAddtoCart,cart,displayItems}=props
   
    return (
        <div>

           <Banner></Banner>
            <Foods displayItems={displayItems} handleAddtoCart={handleAddtoCart} cart={cart}foods={foods}></Foods>
            <Services></Services>
            <Subcribed></Subcribed>
        </div>
    );
};

export default Home;