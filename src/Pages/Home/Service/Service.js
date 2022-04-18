import React from 'react';
import { Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {name,price , img , description} = service
    const navigate = useNavigate()
    const handleUser = event => {
        event.preventDefault()
            navigate('/checkedOutPage')
    }
    return (
        <div className='shadow card'>
           <Card>
              <Card.Img variant="top" src={img} width='100' height='300px' />
                <Card.Body>
                    <Card.Title className='fs-5 fw-bold'> {name}</Card.Title>
                     <h5>Price : $ {price}</h5>
                    <Card.Text>
                         <span className='fs-6 fw-bold'> Description </span> :  {description}
                    </Card.Text>
                    <div className='button-div'>
                        <button className='booking-btn' onClick={handleUser}>Booking Now</button>
                    </div>
                </Card.Body>
         </Card>
        </div>
    );
};

export default Service;  