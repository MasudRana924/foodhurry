import React from 'react';
import Banner from '../Banner/Banner';
import Menu from '../Meanu/Menu';
import Services from '../Services/Services';
import Subcribed from '../Subscribed/Subcribed';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Menu></Menu>
            <Services></Services>
            <Subcribed></Subcribed>
        </div>
    );
};

export default Home;