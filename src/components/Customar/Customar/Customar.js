import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';


const Customar = () => {
    const { serviceId } = useParams()

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (

        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar serviceId={serviceId} loggedInUser={loggedInUser}></Sidebar>
            </div>
        </div>

    );
};

export default Customar;