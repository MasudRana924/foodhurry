import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Subcribed from '../Subscribed/Subcribed';

import Foods from '../Foods/Foods';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Foods></Foods>
            <Services></Services>
            <Subcribed></Subcribed>
        </div>
    );
};

export default Home;