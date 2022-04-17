import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services , setServices] = useState([])

    useEffect( () => {
        fetch('fake_service_data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='container mb-5' >
            <h2 className='fs-1 text-center m-4'>My Services</h2>
            <div className="services">
                {
                    services.map(service =><Service 
                        key={service.id}
                        service={service}
                        >
                    </Service> 
                      )
                }
            </div>
        </div>
    );
};

export default Services;