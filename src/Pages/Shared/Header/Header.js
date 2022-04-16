import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand className='fs-3'>
                World Class Photography
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Link  className='link' to='/'>Home</Link>
                <Link  className='link' to='/blogs'>Blogs</Link>
                <Link  className='link' to='/aboutme'>About Me</Link>
                <Link  className='link' to='/login'>Log In</Link>
                <Link  className='link' to='/register'>Register</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;