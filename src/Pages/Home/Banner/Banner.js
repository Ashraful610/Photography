import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../imges/banner/img-1.jpg'
import img2 from '../../imges/banner/img-2.jpg'
import img3 from '../../imges/banner/img-3.jpg'
import img4 from '../../imges/banner/img-4.jpg'
import img5 from '../../imges/banner/img-5.jpg'
import img6 from '../../imges/banner/img-6.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            height='500px'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Wedding Photography</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            height='500px'
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Motor Bike Stunds Photography</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            height='500px'
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>TGayer Holud Photography</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            height='500px'
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Reg Day Photography</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            height='500px'
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Travel Photography</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  
                src={img6} 
                className="d-block w-100"
                height='500px'
                alt="Third slide"  
            />
  
          <Carousel.Caption>
            <h3> BrithDay Photography</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;