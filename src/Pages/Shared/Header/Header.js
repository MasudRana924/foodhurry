import React from 'react';
import { Container, Nav, Navbar, Button, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import useFoods from '../../../Hooks/useFoods';
import Cart from '../../Cart/Cart';


const Header = () => {
    const { user, logOut } = useFirebase()
    const {cart} = useFoods();
    console.log("Header",cart);
   

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
                        <nav>
                            <input type="text" placeholder=" search here" className="input"/>
                            <Link to="/cart">                          
                              <FontAwesomeIcon className="text-warning mt-1 me-5" icon= {faShoppingCart} />
                                  {cart.lenght}                        
                            </Link>
                        </nav>
                        
                        <Navbar.Text>

                            {
                                user.email && <span className=" text-white me-3"> Signed in as: <span className="text-danger">{user.displayName}</span></span>
                            }

                            {
                                user.email ? <Button onClick={logOut} variant="danger" size="sm">Logout</Button> : <Link to="/login">
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