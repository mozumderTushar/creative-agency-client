import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'



const Header = () => {
    return (
        <div className="header-bg" style={{ backgroundColor: '#FBD062' }}>
            <Navbar />
            <HeaderMain />
        </div>
    );
};

export default Header;