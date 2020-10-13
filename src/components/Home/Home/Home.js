import React from 'react';
import Client from '../Client/Client';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header/>
            <Client/>
            <Services/>
            <Works/>
            <ClientFeedback/>
            <Footer/>
        </div>
    );
};

export default Home;