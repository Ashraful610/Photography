import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';
import './CheckedOutPage.css'

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
      if(name ==='' && email === '' && address === '' && phone === ''){
          setError('name ,email ,address and phone is required')
      }
       else if(name ===''){
           setError('name is required')
       }
       else if(email === ''){
           setError('email is required')
       }
       else if(address === ''){
           setError('address is required')
       }
       else if(phone === ''){
           setError('phone is required')
       }
       else if(phone.length < 10){
            setError('phone number must be at least 10 characters')
       }     
       else{
        toast.success('Successfully booking')
        setError('')
       }  
       
  }
    return (
          <div className='checkedOut'>
               <div className=' form mx-auto m-5 shadow p-4'>
            <p className='text-center title'>Please Booking</p>
            <Form onSubmit={handleCheckedOut}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control ref={addressRef} type="text" placeholder="Enter Your Address"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control ref={phoneRef} type="number" placeholder="Enter Your Phone Number"  />
                </Form.Group>
                    <p className='text-danger'>
                        {error}
                    </p>
                <Button  className="btn btn-primary w-50 mx-auto" type="submit">
                    Booking
                </Button>
               
           </Form>
        </div>
     </div>
    );
};

export default CheckedOutPage;