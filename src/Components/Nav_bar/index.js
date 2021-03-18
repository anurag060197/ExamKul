import React from 'react';
import { Container, FormControl, Nav, Navbar, NavDropdown, Button, Form} from 'react-bootstrap';
import "./styles.css";
const Nav_bar = () => {
    return (
        <header>
            {/* <a href="#" class="logo"><span><img src="https://www.graphicsprings.com/filestorage/stencils/9f2ebf8b33cd9c545eb7170be3c2f1fa.svg" height="85px" /></span></a> */}
            <ul class="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#experts">Experts</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
};

export default Nav_bar;