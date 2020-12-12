import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href='/'>Danny Nieves</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/projects'>Projects</Nav.Link>
                    <Nav.Link href='/contact'>Contact Info</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                    <Button variant='outline-info'>Search</Button>
                </Form>
            </Navbar>
        </div>
    )
};

export default NavBar;