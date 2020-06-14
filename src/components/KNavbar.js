import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function KNavbar(props) {
    return (
        <Container>
            <Navbar bg="transparent" variant={props.theme==='DARK'?'dark':'light'} expand="lg" style={navText}>
                <Navbar.Brand style={{ letterSpacing: -10, fontSize: 35 }} href="/">ƎK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/proj">projects</Nav.Link>
                        <Nav.Link href="/about">about</Nav.Link>
                        <Nav.Link href="/cont">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}
const navText = {
    padding: '2%',
    fontSize: '25px'
};