import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesDetails.css'

const ServicesDetails = (props) => {
    const { img, title, description,_id } = props.service;
    return (
        <div className="col-md-4 my-5">
            <div className="single-item ">
               <Link to={`/customar/${_id}`} style={{ textDecoration: 'none', color: '#000'}} >
               <div className="card p-3 service-card">
                    <img src={`http://localhost:5000/${img}`} alt="" className="card-img-top" style={{ height: '74px', width: '74px', margin: '0 auto' }} />
                    <div className="card-body">
                        <div className="card-title"><h3>{title}</h3></div>
                        <p>{description}</p>
                    </div>
                </div>
               </Link>
            </div>
        </div>
    );
};

export default ServicesDetails;