import React from 'react';
import {  Nav, Navbar} from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
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
    <Navbar className='navbar mb-4' fixed='top' expand="lg">
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
                    <CustomLink className='link' to='/'>Home</CustomLink>
                    <CustomLink className='link' to='/blogs'>Blogs</CustomLink>
                    <CustomLink className='link' to='/aboutme'>About Me</CustomLink>
                  { 
                    user?.uid ? 
                     <button className='link  logOut' onClick={handleLogOut}>Log Out</button> :
                   <CustomLink className='link' to='/login'>Log In</CustomLink>
                   }

                    <CustomLink className='link' to='/register'>Register</CustomLink>
              </Nav>
            </Navbar.Collapse>
    
    </Navbar>
    );
};

export default Header;