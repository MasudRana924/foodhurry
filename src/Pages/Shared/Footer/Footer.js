import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGoogle, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className="footer pt-5 pb-5">
            <p className="text-white">24/7 hours open</p>
            <div>
            <FontAwesomeIcon icon={faFacebookSquare} className="fb-icon mt-3" />
                <FontAwesomeIcon icon={faInstagramSquare} className="insta-icon ms-3 mt-3" />
                <FontAwesomeIcon icon={faYoutubeSquare} className="youtube-icon ms-3 mt-3" />
                <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />
            </div>
            <p className="text-white pt-3">Copyright © 2018 FoodHurry.com. All Rights Reserved.</p>

        </Container>
    );
};

export default Footer;