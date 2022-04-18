import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const CheckedOutPage = () => {
   const [user] = useAuthState(auth)
   const [error , setError] = useState()

  const nameRef = useRef()
  const emailRef = useRef()
  const addressRef = useRef()
  const phoneRef = useRef()

  const handleCheckedOut = event => {
      event.preventDefault()
      const name = nameRef.current.value
      const email = emailRef.current.value
      const address = addressRef.current.value
      const phone = phoneRef.current.value

  }
    return (
           <div className='w-50 form mx-auto m-5 shadow p-4'>
            <p className='text-center title'>Please Booking</p>
            <Form onSubmit={handleCheckedOut}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control ref={addressRef} type="text" placeholder="Enter Your Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control ref={phoneRef} type="number" placeholder="Enter Your Phone Number" required />
                </Form.Group>
                    <p className='text-danger'>
                        {error}
                    </p>
                <Button variant="primary" type="submit">
                    Booking
                </Button>
               
           </Form>
        </div>
    );
};

export default CheckedOutPage;