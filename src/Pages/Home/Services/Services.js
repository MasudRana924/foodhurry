import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger,faTruck,faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <Container fluid className="services-container">
            <h2 className="text-warning pt-5 fs-1">Our Services</h2>
            <Row xs={1}md={3} className="w-75 mx-auto mt-5">
                <Col className="mt-3 mb-5">
                <p><FontAwesomeIcon icon={faHamburger} className="icon" /> 
                </p>
                <p className="text-warning fs-4">QUALITY FOODS</p>
                <p className="text-white">Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.</p>
                </Col>
                <Col className="mt-3 mb-5">
                <p><FontAwesomeIcon icon={faTruck} className="icon" /> 
                </p>
                <p className="text-warning fs-4">FASTEST DELIVERY</p>
                <p className="text-white">Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.</p>
                </Col>
                <Col className="mt-3 mb-5">
                <p><FontAwesomeIcon icon={faPizzaSlice} className="icon" /> 
                </p >
                <p className="text-warning fs-4">ORIGINAL RECIPES</p>
                <p className="text-white">Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.</p>
                </Col>
            </Row>

        </Container>
    );
};

export default Services;