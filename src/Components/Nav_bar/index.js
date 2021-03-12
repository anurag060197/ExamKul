import React from 'react';
import { Container, FormControl, Nav, Navbar, NavDropdown, Button, Form} from 'react-bootstrap';
import "./styles.css";
const Nav_bar = () => {
    return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/home">
                <img
                    // src="https://img.icons8.com/fluent/2x/exam.png"
                    src = "https://img.icons8.com/officel/2x/test-failed.png "
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Brand href="/home">ExamKul</Navbar.Brand>
                <Navbar bg="dark">
                </Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#services">Products</Nav.Link>
                        <Nav.Link href="#services">Partners</Nav.Link>
                        <Nav.Link href="/create">Create Paper</Nav.Link>
                        <Nav.Link href="#services">Contact Us</Nav.Link>
                    </Nav>
                    
                    <Button style={{cursor:"pointer", marginRight: "2rem"}} variant="outline-light">Sign Up</Button>
                    <Button style={{cursor:"pointer", marginRight: "2rem"}} variant="outline-light">Login</Button>
                    
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Nav_bar;