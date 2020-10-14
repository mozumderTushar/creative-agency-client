import React, { useEffect, useState } from 'react';

const ServiceListDetails = (props) => {
    const { service } = props.order;
    const [orderedServices, setOrderedServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => {
                const customerOrder = data.find(order => order.title.toLowerCase() === service.toLowerCase())
                console.log(customerOrder);
                setOrderedServices(customerOrder)
            })
    }, [])


    return (
        <div className="col-md-4 my-5 text-center">
            <div className="card p-3 ">
                <img src={orderedServices.img} alt="" className="card-img-top" style={{ height: '74px', width: '74px', margin: '0 auto' }} />
                <div className="card-body">
                    <div className="card-title"><h3>{orderedServices.title}</h3></div>
                    <p>{orderedServices.description}</p>
                </div>

            </div>
        </div>
    );
};

export default ServiceListDetails;