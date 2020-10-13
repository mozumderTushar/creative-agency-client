import React from 'react';
import './ServicesDetails.css'

const ServicesDetails = (props) => {
    console.log(props.service);
    const { img, title, description } = props.service;
    return (
        <div className="col-md-4 my-5">
            <div className="single-item ">
                <div className="card p-3 service-card">
                    <img src={img} alt="" className="card-img-top" style={{ height: '74px', width: '74px', margin: '0 auto' }} />
                    <div className="card-body">
                        <div className="card-title"><h3>{title}</h3></div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;