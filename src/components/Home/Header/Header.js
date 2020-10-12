import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'



const Header = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }}>
            <div className="divider">
                <Navbar />
                <HeaderMain />
            </div>
        </div>
    );
};

export default Header;