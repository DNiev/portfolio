import React from 'react';
import {Navbar, Nav, Form, Image, Button} from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href='/'><Image className='socialLink' src='https://imgur.com/ku2VU32.png'/></Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/projects'>Projects</Nav.Link>
                    <Nav.Link href='/contact'>Contact Info</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant='outline-info' href='mailto:danny.nieves411@gmail.com'>Say Hi!</Button>
                </Form>
            </Navbar>
        </div>
    )
};

export default NavBar;