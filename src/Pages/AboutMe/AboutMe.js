import React from 'react';
import './AboutMe.css'
import picture from '../imges/ashraful.jpg'
import logo from '../imges/logo/logo.jpg'

const AboutMe = () => {
    return (
        <div className='container mt-5 mb-5'>
             <div className="row m-2 p-4">
                 <div className="col-lg-4 shadow p-4 profile m-2">
                      <h2 className='text-center text-white mb-4'>Profile</h2>
                       <div className='profile-img'>
                        <img src={picture}  alt="" />
                      </div>
                     <div className='mt-2'>
                         <h5 className='text-white mb-3'>Name : Ashraful Alam</h5>
                         <h5 className='text-white mb-3'>Work : Student</h5>
                         <h5 className='text-white mb-3'>Subject : CSE</h5>
                         <h5 className='text-white mb-3 email'>Email : ashalam@gmail.com</h5>            
                    </div>
                 </div>
                 <div className="col-lg-7 shadow p-4  m-2">
                          <h2 className='text-center'>My Goal</h2>
                        <p className='my-goal'>
                        My goal in the next three to four months is to learn as much about font and development as I can at present. For this I will work hard to correct the mistakes I have made before and to learn something new. Because after the next three to four months I want to do freelancing or a job. Because I need to help my family financially now. That is why I am determined to work hard to achieve my goal in the next three to four months. InshaAllah, I will follow the saying "work hard to get good results"
                        </p>
                        <div className='logo-div'>
                          <img src={logo} className='about-logo' alt="" />
                        </div>
                        
                 </div>
             </div>
        </div>
    );
};

export default AboutMe;