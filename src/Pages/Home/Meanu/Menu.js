import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <Container fluid className="menu">
            <h2 className="text-white pt-5">DISCOVER OUR MENU</h2>
            <Row xs={1} md={2} className="link  ">

                <Col md={6} className="text-center ">
                    <Link to="/burger" className="fs-3 ">Burger</Link>
                    <Link to="/pasta" className="fs-3 ">Pasta</Link>
                    <Link to="/pizza" className="fs-3 ">Pizza</Link></Col>
                <Col md={6}  className="text-center">
                    <Link to="/drinks" className="fs-3 ">Drinks</Link>
                    <Link to="/salad" className="fs-3 ">Salad</Link>
                    <Link to="/desert" className="fs-3 ">Dessert</Link></Col>

            </Row>
            <Row xs={1} md={3} className="w-75 mx-auto">
                <Col className="mt-5 image-style">
                    <img className="image" src="https://image.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg" alt="" />
                    <p className="text-white mt-3 fs-4">VINCENT</p>
                    <p className="text-white">Classic marinara sauce, authentic old-world pepperoni, all-natural Ita</p>
                    <p className="text-white fs-4">$2.60</p>

                </Col>
                <Col className="mt-5 image-style">
                    <img className=" image" src="https://image.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-8727.jpg" alt="" />
                    <p className="text-white mt-3 fs-4">CASUNZIEI</p>
                    <p className="text-white">Classic marinara sauce, authentic old-world pepperoni, all-natural Ita</p>
                    <p className="text-white fs-4">$2.90</p>
                </Col>
                <Col className="mt-5 image-style">
                    <img className="image" src="https://image.freepik.com/free-photo/pizza-with-meat-stuffing-tomato-slices_114579-3532.jpg" alt="" />
                    <p className="text-white mt-3 fs-4">MARGHERITA</p>
                    <p className="text-white">Classic marinara sauce, authentic old-world pepperoni, all-natural Ita</p>

                    <p className="text-white fs-4">$3.60</p>
                </Col>
                <Col className="mt-5 image-style mb-3">
                    <img className="image" src="https://image.freepik.com/free-photo/trendy-tropical-basil-seed-drinks_114579-43289.jpg" alt="" />
                    <p className="text-white mt-3 fs-4">MOHITO</p>
                    <p className="text-white">Classic marinara sauce, authentic old-world pepperoni, all-natural Ita</p>
                    <p className="text-white fs-4">$3.60</p>
                </Col>
                <Col className="mt-5 image-style mb-3">
                    <img src="https://image.freepik.com/free-photo/ice-cream-cone-stand_169016-6345.jpg" className="image" alt="" />
                    <p className="text-white mt-3 fs-4">AMARETTI</p>
                    <p className="text-white">Classic marinara sauce, authentic old-world pepperoni, all-natural Ita</p>
                    <p className="text-white fs-4">$1.60</p>
                </Col>
                <Col className="mt-5 image-style mb-3">
                    <img src="https://image.freepik.com/free-photo/side-view-rice-pouring-delicious-salad-meal-plate-with-chopsticks-wooden-black-background-space-text_176474-3898.jpg" alt="" className="image" />
                    <p className="text-white mt-3 fs-4">INSALATA DI CARCIOFI</p>
                    <p className="text-white">Classic marinara sauce, authentic old-world pepperoni, all-natural Ita</p>
                    <p className="text-white fs-4">$1.00</p>
                </Col>
            </Row>

        </Container>
    );
};

export default Menu;