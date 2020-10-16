import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AllServicesInfo from '../AllServicesInfo/AllServicesInfo';

const AllServices = () => {
    const [allServices, setAllServices] = useState([])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://agile-cove-78620.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2" style={{ marginBottom: '300px' }}>
                    <Sidebar />
                </div>
                <div className="col-md-10 p-4 pr-5 col-12" style={{ backgroundColor: 'aliceblue' }}>
                    <div className="d-flex justify-content-between">
                        <h5>Services List</h5>
                        <div className="d-flex">
                            <img src={loggedInUser.photoURL} alt="" style={{ height: '30px', width: '30px', borderRadius: '50%' }} />
                            <h5>{loggedInUser.name}</h5>
                        </div>
                    </div>
                    <AllServicesInfo allServices={allServices}></AllServicesInfo>
                </div>
            </div>
        </div>
    );
};

export default AllServices;