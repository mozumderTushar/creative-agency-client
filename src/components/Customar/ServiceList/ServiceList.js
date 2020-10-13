import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceListDetails from '../ServiceListDetails/ServiceListDetails';

const ServiceList = () => {
    const { serviceListId } = useParams();
    const [orderedServices, setOrderedServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(response => response.json())
            .then(data => {
                setOrderedServices(data)
            })
    }, [])
    console.log(orderedServices);
    return (
        <div className="container">
            <div className="row">
                {
                    orderedServices.map(order => <ServiceListDetails key={order._id} order={order}></ServiceListDetails>)
                }
            </div>
        </div>
    );
};

export default ServiceList;