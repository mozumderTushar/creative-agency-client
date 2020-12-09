import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCommentAlt, faPlus, faUserPlus, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import OrderForm from '../../Customar/OrderForm/OrderForm';
import AllServices from '../../Admin/AllServices/AllServices';


const Sidebar = ({ serviceId }) => {

    window.scrollTo(0, 0);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://agile-cove-78620.herokuapp.com/allAdmin')
            .then(response => response.json())
            .then(data => {
                const isAdmin = data.find(admin => admin.email === loggedInUser.email);
                if (isAdmin) {
                    setIsAdmin(true)
                }
            })
    }, [])

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('https://agile-cove-78620.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    return (

        <div>
            <div className='d-flex container'>
                <div className="sidebar mt-5 my-5" style={{ height: "100vh" }}>
                    <ul className="list-unstyled">
                        <img className="img-fluid mb-5 mr-5" style={{ height: '40px' }} src="https://i.ibb.co/8dS73kw/logo.png" alt="" />


                        {!isAdmin && <div className='d-flex'>

                            <div className='mr-2'>

                                <li>
                                    <Link to={`/order/${serviceId}`} className="text-dark">
                                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                    </Link>
                                </li>

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
                            </div>

                        </div>}

                        {isAdmin && <div className='d-flex'>
                            <div className='mr-5' >
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
                            </div>

                            <div>
                                {window.location.pathname === '/sidebar' && <div className='service-data'>
                                    <img className='img-fluid' src="https://i.ibb.co/41CL3JF/Frame.png" alt="" style={{background: 'white'}}/>
                                </div>}
                            </div>

                        </div>}

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Sidebar;