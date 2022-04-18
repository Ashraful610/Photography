import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import {FacebookAuthProvider, GoogleAuthProvider,  signInWithPopup} from 'firebase/auth'
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
     
    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleLogIn  = event => {
        event.preventDefault()
        signInWithEmailAndPassword( email , password)
        .then(() => {
            navigate(from, { replace: true });
         
            console.log(error)
        })
    }

    // sign in google 
    const googlePrivider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth , googlePrivider)
        .then(() => {
            navigate(from, { replace: true });
        })
      
    }

    // sign in facebook 
    const facebookProvider = new FacebookAuthProvider()
    const signInWithFacebook = () => {
        signInWithPopup(auth , facebookProvider)
        .then(() => {
            navigate(from, { replace: true });
        })
    }
    console.log(user)
    return (
       <div className='login-form'>
           <div className=' logInForm mx-auto shadow p-4'>
             <h2 className='text-center'>Please Log In</h2>
            <Form onSubmit={handleLogIn} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <p>New to Booking ? 
                     <Link to='/register' className='text-decoration-none ms-1'>
                            Please Register
                     </Link>
                  </p>
                </Form.Group>
                <p className='text-danger m-2'>
                    {error }
                </p>
                <Button variant="primary" type="submit" className='w-50 mx-auto d-block m-2'>
                    Log In
                </Button>
           </Form>

            <div className='row'>
                <div className='col-lg-5 col-5 '> 
                    <hr />
                </div>
                <div className='col-lg-1 col-1 fs-5'>
                    or
                </div>
                <div className='col-lg-5 col-5 '>
                    <hr />
                </div>
            </div>

            <div>
              <button type="button" onClick={signInWithGoogle} className="btn btn-outline-success m-2 optional-link">
                  Google
                </button>
              <button type="button" onClick={signInWithFacebook} className="btn btn-outline-primary m-2 optional-link">
                   Facebook
                </button>
            </div>

    </div>
</div>
    );
};

export default Login;