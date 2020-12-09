import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Login/firebase.config';
import { UserContext } from '../../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Navbar = () => {

    var user = firebase.auth().currentUser;
    const [loggedIn, setLoggedIn] = useState(user ? true : false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(loggedInUser.name);

    return (

        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light" >
                <a className="navbar-brand" href="#">
                    <img className="img-fluid" style={{ height: '47px' }} src="https://i.ibb.co/8dS73kw/logo.png" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Our Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/team">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>

                    {
                        !loggedIn ? <Link className="btn btn-design" to="/login">Login</Link> : <div>
                            <div className="d-flex">
                                <img src={loggedInUser.photoURL} alt="" style={{ height: '30px', width: '30px', borderRadius: '50%', marginRight: '5px' }} />
                                <h6>{loggedInUser.name}</h6>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;