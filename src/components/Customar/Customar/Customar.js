import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Shared/Sidebar/Sidebar';


const Customar = () => {
    const {serviceId} = useParams()
    return (

        <div className="container-fluid row">
            <div className="col-md-2">
                <img className="img-fluid mt-3" style={{ height: '47px' }} src="https://i.ibb.co/8dS73kw/logo.png" alt="" />
                <Sidebar serviceId={serviceId}></Sidebar>
            </div>
        </div>

    );
};

export default Customar;