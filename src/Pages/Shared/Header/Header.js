import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './Header.css'


const Header = () => {
    const{user,logOut}=useFirebase()
   
    return (
        <>
            <Navbar className="navbar" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className=" text-warning">FoodHurry.com</Navbar.Brand>
                    <Navbar.Toggle className=" text-warning bg-warning" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto nav">
                            <Link to="/home" className="ms-5 text-white">Home</Link>
                            <Link to="/about" className="ms-5 text-white">About Us</Link>
                            <Link to="/contact" className="ms-5 text-white">Contact Us</Link>

                        </Nav>
                        <Navbar.Text>

                            {
                                user.email && <span className=" text-white me-3"> Signed in as: <span className="text-danger">{user.displayName}</span></span>
                            }

                            {
                                user.email ? <Button onClick={logOut}variant="danger" size="sm">Logout</Button> : <Link to="/login">
                                    <Button variant="secondary" size="sm" >
                                        Login
                                    </Button>
                                </Link>
                            }

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;