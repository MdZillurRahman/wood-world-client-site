import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/wood-world-icon.png';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='me-2' height={40} src={logo} alt="" /> Pet Care
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="collection">Collection</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {/* { 
                                user ?
                                    <NavDropdown title={<img src={UserIcon} style={{ width: '30px' }} alt="" />} id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="profile" onClick={showProfile}>Profile
                                        </NavDropdown.Item>
                                        <button className='btn btn-link text-black text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    </NavDropdown>
                                    : }*/}
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;