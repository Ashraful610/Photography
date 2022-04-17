import React from 'react';
import {  Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../imges/logo/logo.jpg'
import auth from '../../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user ] = useAuthState(auth)
    const handleLogOut = () => {
       signOut(auth)
    }
    return (
    <Navbar className='navbar' expand="lg">
            <Navbar.Brand>
              <div className='logo-site-name'>
                  <div>
                     <img src={logo} className='logo'  alt="" />
                  </div>
                  <div className='site-name'>
                     <p> World Class Photography</p>
                  </div>
             </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                    <Link  className='link' to='/'>Home</Link>
                    <Link  className='link' to='/blogs'>Blogs</Link>
                    <Link  className='link' to='/aboutme'>About Me</Link>
                  { 
                    user?.uid ? 
                     <button className='link logOut' onClick={handleLogOut}>Log Out</button> :
                   <Link  className='link' to='/login'>Log In</Link>}

                    <Link  className='link' to='/register'>Register</Link>
              </Nav>
            </Navbar.Collapse>
    
    </Navbar>
    );
};

export default Header;