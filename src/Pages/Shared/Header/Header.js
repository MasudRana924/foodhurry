import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'



const Header = (props) => {
    const { user, logOut } = useFirebase()
    // const {cart} = useFoods();
   
    // console.log("Header",cart);
   const {cart,handleSearch}=props
   let totalQuantity = 0
   
   for (const product of cart) {
    if (!product.quantity) {
        product.quantity = 1;
    }
    totalQuantity = totalQuantity + product.quantity;

}

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
                            <input type="text"onChange={handleSearch} placeholder=" search here" className="input text-dark me-1"/>
                            <Link to="/cart">                          
                              
                              <span className="pe-5 mt-3"><FontAwesomeIcon className="text-warning" icon= {faShoppingCart} />
                                 <span className="text-white cart-item">{totalQuantity}</span> </span>                      
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