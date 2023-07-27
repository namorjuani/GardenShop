import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Garden Car Wash Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/category/notebook">Notebook</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/placas de video">Placas de video</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/gabinetes">Gabinetes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
