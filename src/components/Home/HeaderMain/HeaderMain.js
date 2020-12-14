import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../../images/logos/headerImg.png'


const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center" style={{ height: '700px' }}>
            <div className="col-md-4 offset-md-1">
                <h1>Let’s Grow Your <br /> Brand To The <br /> Next Level</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </div>
                <Link to="/hire"><button className="btn btn-design mt-3">Hire us</button></Link>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" style={{ height: '420px', width: '624' }} src={headerImg} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;