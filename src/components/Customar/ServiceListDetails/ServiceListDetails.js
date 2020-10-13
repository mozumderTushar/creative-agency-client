import React from 'react';

const ServiceListDetails = ({ order }) => {
    return (
        <div className="col-md-4 my-5 text-center">
            <div className="card p-3 ">
                <img src={order.img} alt="" className="card-img-top" style={{ height: '74px', width: '74px', margin: '0 auto' }} />
                <div className="card-body">
                    <div className="card-title"><h3>{order.service}</h3></div>
                    <p>{order.details}</p>
                </div>

            </div>
        </div>
    );
};

export default ServiceListDetails;