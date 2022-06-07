import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} style={{marginTop:'95px'}} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'https://i.ibb.co/MBg3Jwy/image.png'}
            height='500px'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Wedding Photography</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'https://i.ibb.co/gjVCY6K/image.png'}
            height='500px'
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Motor Bike Stunds Photography</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'https://i.ibb.co/T4bvkS4/image.png'}
            height='500px'
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Gayer Holud Photography</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'https://i.ibb.co/CB1MN1f/image.png'}
            height='500px'
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Reg Day Photography</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'https://i.ibb.co/4PHv7bf/image.png'}
            height='500px'
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Travel Photography</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  
                src={'https://i.ibb.co/6Y1wv24/image.png'} 
                className="d-block w-100"
                height='500px'
                alt="Third slide"  
            />
  
          <Carousel.Caption>
            <h3> BrithDay Photography</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;