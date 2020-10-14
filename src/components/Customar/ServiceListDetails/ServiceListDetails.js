import React, { useEffect, useState } from 'react';

const ServiceListDetails = (props) => {
    const { img,service,details } = props.order;

    const [placedOrder, setPlacedOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(response => response.json())
        .then(data => {
            const orderItems = data.find(order => order.title.toLowerCase() === service.toLowerCase())
            setPlacedOrder(orderItems)
        })
    },[])
    console.log(placedOrder);

    return (
        <div className="col-md-4 my-5 text-center">
            <div className="card p-3 ">
                <img src={placedOrder.img} alt="" className="card-img-top" style={{ height: '74px', width: '74px', margin: '0 auto' }} />
                <div className="card-body">
                    <div className="card-title"><h3>{service}</h3></div>
                    <p>{placedOrder.description}</p>
                </div>
            </div>
        </div>
        
    );
};

export default ServiceListDetails;
