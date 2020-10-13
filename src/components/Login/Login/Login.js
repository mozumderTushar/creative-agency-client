import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { UserContext } from '../../../App';
import { Card } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser)


        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            alert('Please try again')
        });
    }
    return (
        <div>
            <img className="icon-img" src="https://i.ibb.co/8dS73kw/logo.png" alt="" />
            <Card className="card-style" >
                <div className="my-5">
                    <h3>Login With</h3>
                    <button className="google-button my-3" onClick={handleGoogleSignIn}>Continue with Google</button>
                    <p>Don't have account? <a href="/login">Create a account</a></p>
                </div>
            </Card>
        </div>
    );
};

export default Login;