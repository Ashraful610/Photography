import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const [user , setUser] = useState({})
    const [error , setError] = useState('')

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
   
    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value

        if(password !== confirmPassword){
            setError('must be match password and confirm pasword')
            return
        }
        setError('')

        createUserWithEmailAndPassword(auth , email , password)
        .then(result => {
            const user = result.user
            setUser(user)
            setUserName()
            verificationCode()
        })
        .catch(error => {
            setError(error.meassge)
        })
    }

    //   set user name in account
    const setUserName = () => {
        const name = nameRef.current.value
          updateProfile(auth.currentUser,{
              displayName: name
          })
          .catch(error => {
              setError(error.meassge)
          })
    }
    //  send Email verification meassge
    const verificationCode = () => {
        sendEmailVerification(auth.currentUser)
           showToast()
    }

   const showToast = () => {
      const handle = () => {
        toast('send verification')
      }   
       
       <ToastContainer></ToastContainer>
   }
    



    if(user){
        navigate('/')
    }
  
   
 
    return (
        <div className='w-50 form mx-auto m-5 shadow p-4'>
            <p className='text-center title'>Please Register</p>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>
                        Already have an account ? 
                        <Link to='/login' className='text-decoration-none ms-1'>
                            Please Log In
                        </Link>
                    </p>
                </Form.Group>
                    <p className='text-danger'>
                        {error}
                    </p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <br />
              
              
           </Form>
        </div>
    );
};

export default Register;