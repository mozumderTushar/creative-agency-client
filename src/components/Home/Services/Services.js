import React, { useEffect, useState } from 'react';
import fakeData from '../../../../src/fakeData/services'
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const Services = () => {
    const [services, setService] = useState([])

    // useEffect(() => {
    //     const serviceType = fakeData;
    //     setService(serviceType)
    // }, [])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(response => response.json())
        .then(result => setService(result))
    },[])
    return (
        <section className='container text-center'>
            <h1>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            <div className='row'>
                {
                    services.map(service => <ServicesDetails key={service._id} service={service}></ServicesDetails>)
                }
            </div>
        </section>
    );
};

export default Services;