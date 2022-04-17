import React from 'react';
import './Footer.css'
import logo from '../../imges/logo/logo.jpg'
import event1 from '../../imges/events/event-1.jpg'
import event2 from '../../imges/events/event-2.jpg'


const Footer = () => {
    return (
        <footer className='footer row'>
              <div className='p-4 col-lg-3 col-12'>
                 <div className='logo-div'>
                    <img src={logo} className='footer-logo' alt="" />
                 </div>
                 <div className='p-2'>
                     <p className='text-white'>I am a young photographer always looking for new and creative ideas. So that we can make pictures and videos of your best moments
                     </p>
                 </div>
              </div>
                {/* latest event ares */}
              <div className='col-lg-5 col-12 p-4'>
                  <h3 className='text-white  text-center'>Latest Events</h3>
                  <div className='mt-4'>
                      <div className='event'>
                          <div className='event-img '>
                              <img src={event1} alt="" />
                          </div>
                            <div className="event-details text-white mt-2">
                                    <h6>One Day Wedding Event</h6>
                                    <p>Gulshan , Dhaka , Bangladesh</p>
                            </div> 
                      </div>
                      <div className='event'>
                          <div className='event-img'>
                              <img src={event2} alt="" />
                          </div>
                            <div className="event-details text-white mt-2">
                                    <h6>Night Gaye Holud Event</h6>
                                    <p>Banani, Dhaka , Bangladesh</p>
                            </div> 
                      </div>
                     
                  </div>
              </div>
              {/* contact area */}
            <div className='col-lg-4 col-12 p-4'>
                  <h3 className='text-white text-center'>Contact Me</h3>
                  <div className='p-4'>
                     <a href="https://web.facebook.com/?_rdc=1&_rdr" className='facebook-link'>
                        <small>Facebook</small>
                      </a>
                      <br />
                    <a href="https://www.instagram.com/ashrafulalam10/"
                      className='facebook-link'>
                        <small>Instrgram</small>
                    </a>
                    <h6 className='text-white'>Email : ashalam610@gmail.com</h6>
                    <h6 className='text-white'>Address : Ashugang , Brahmanbaria</h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;