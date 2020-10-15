import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCommentAlt, faPlus, faUserPlus, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({ serviceId, loggedInUser }) => {
    

    const [isAdmin, setIsAdmin] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allAdmin')
            .then(response => response.json())
            .then(data => {
                const adminList = data.find(admin => admin.email === loggedInUser.email)
                setIsAdmin(adminList)
            })
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                { !isAdmin && {serviceId} && <div>
                    <li>
                        <Link to={`/order/${serviceId}`} className="text-dark">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                        </Link>
                    </li>
                </div>}

                {!isAdmin && <div>

                    <li>
                        <Link to="/serviceList" className="text-dark">
                            <FontAwesomeIcon icon={faShoppingBasket} /> <span>Service list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-dark">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
                </div>}

                {isAdmin && <div>
                    <li>
                        <Link to="/allServices" className="text-dark">
                            <FontAwesomeIcon icon={faShoppingBasket} /> <span>Services List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-dark">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-dark">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>}

            </ul>
        </div>
    );
};

export default Sidebar;