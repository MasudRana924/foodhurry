import React from 'react';
import { Container, FormControl, InputGroup, Button, Row } from 'react-bootstrap';
import './Subscribed.css'

const Subcribed = () => {
    return (
        <Container fluid className="subscribe pb-5 ">
            <h2 className="pt-5 text-white fs-1 pb-3 ">Subscribe to Get Our Offer</h2>

            <InputGroup className="mb-3 w-50 mx-auto mt-3"  >

                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />


                <Button variant="outline-secondary" id="button-addon2">
                    SUBMIT
                </Button>
            </InputGroup>


        </Container>
    );
};

export default Subcribed;