import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import {FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import auth from '../../firebase.init'

const Login = () => {
    const [user , setUser] = useState({})
    const [error , setError] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()
    
    const navigate = useNavigate()

    if(user){
        navigate('/')
    }

    const handleLogIn  = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email , password)
        signInWithEmailAndPassword(auth , email , password)
        .then(result => {
            const user =result.user
            setUser(user)
            console.log(user)
        })
        .catch(error => {
            setError(error.meassge)
        })
        setError('')
    }

    // sign in google 
    const googlePrivider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth , googlePrivider)
        .then(result => {
            const user = result.user
            setUser(user)
            console.log(user)
        })
        .catch(error => {
            setError(error.meassge)
        })
        setError('')
    }

    // sign in facebook 
    const facebookProvider = new FacebookAuthProvider()
    const signInWithFacebook = () => {
        signInWithPopup(auth , facebookProvider)
        .then(result => {
            const user = result.user
            setUser(user)
            console.log(user)
        })
        .catch(error => {
            setError(error.meassge)
        })
        setError('')
    }

    return (
    <div className='w-50 mx-auto m-5 shadow p-4'>
             <h2 className='text-center'>Please Log In</h2>
            <Form onSubmit={handleLogIn}>
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
                    {error}
                </p>
                <Button variant="primary" type="submit" className='ps-5 pe-5'>
                    Log In
                </Button>
           </Form>

            <div className='row'>
                <div className='col-lg-5 col-5'> 
                    <hr />
                </div>
                <div className='col-lg-1 col-1'>
                    or
                </div>
                <div className='col-lg-5 col-5'>
                    <hr />
                </div>
            </div>

            <div>
              <button type="button" onClick={signInWithGoogle} className="btn btn-outline-success m-2 optiona-link">
                  Google
                </button>
              <button type="button" onClick={signInWithFacebook} className="btn btn-outline-primary m-2 optiona-link">
                   Facebook
                </button>
            </div>

    </div>
    );
};

export default Login;