import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';


const Customar = () => {
    const { serviceId } = useParams()

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (

        <div className="container-fluid row mt-5">
            <div className="col-md-2">
                <Sidebar serviceId={serviceId} loggedInUser={loggedInUser}></Sidebar>
            </div>

            <div className="col-md-10">
                <img className='img-fluid' src="https://i.ibb.co/41CL3JF/Frame.png" alt="" />
            </div>
        </div>

    );
};

export default Customar;