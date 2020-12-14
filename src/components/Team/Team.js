import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import Navbar from '../Home/Navbar/Navbar';

const options = {
    rewind: true,
    autoplay: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
};


const Team = () => {
    return (
        <div style={{ height: '100vh', backgroundColor: '#FBD062' }}>
            <section>
                       <Navbar />
                <div className="container text-center" >
                    <h1 className="p-5" style={{ color: '#fff' }}>Team <span style={{ color: '#7AB259' }}>Players</span></h1>
                    <div>
                        <OwlCarousel options={options}  >
                            <div><img className="img-fluid p-3" src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" style={{ height: '334px', width: '465px' }} /></div>
                            <div><img className="img-fluid p-3" src='https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" style={{ height: '336px', width: '468px' }} /></div>
                            <div><img className="img-fluid p-3" src='https://images.unsplash.com/photo-1541855492-581f618f69a0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" style={{ height: '336px', width: '468px' }} /></div>
                            <div><img className="img-fluid p-3" src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" style={{ height: '334px', width: '465px' }} /></div>
                            <div><img className="img-fluid p-3" src='https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" style={{ height: '336px', width: '468px' }} /></div>
                            <div><img className="img-fluid p-3" src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" style={{ height: '336px', width: '468px' }} /></div>
                            <div><img className="img-fluid p-3" src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" style={{ height: '334px', width: '465px' }} /></div>
                            <div><img className="img-fluid p-3" src='https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" style={{ height: '336px', width: '468px' }} /></div>
                            <div><img className="img-fluid p-3" src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" style={{ height: '336px', width: '468px' }} /></div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;