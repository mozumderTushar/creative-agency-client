import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AllServicesInfo from '../AllServicesInfo/AllServicesInfo';

const AllServices = () => {
    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('https://agile-cove-78620.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 p-4 pr-5">
                    <h5>Services List</h5>
                    <AllServicesInfo allServices={allServices}></AllServicesInfo>
                </div>
            </div>
        </div>
    );
};

export default AllServices;