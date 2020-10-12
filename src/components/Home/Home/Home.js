import React from 'react';
import Client from '../Client/Client';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Client/>
            <Services/>
            <ClientFeedback/>
        </div>
    );
};

export default Home;