import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import caruselOne from '../../../images/carousel-1.png'
import caruselTwo from '../../../images/carousel-2.png'
import caruselThree from '../../../images/carousel-3.png'

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

const Works = () => {
    return (
        <section style={{ backgroundColor: '#111430' }}>
            <div className="container text-center" >
                <h1 className="p-5" style={{ color: '#fff' }}>Here are some of <span style={{ color: '#7AB259' }}>our work</span></h1>
                <div>
                    <OwlCarousel options={options}  >
                        <div><img className="img-fluid p-3" src={caruselOne} alt="" style={{ height: '334px', width: '465px' }} /></div>
                        <div><img className="img-fluid p-3" src={caruselTwo} alt="" style={{ height: '336px', width: '468px' }} /></div>
                        <div><img className="img-fluid p-3" src={caruselThree} alt="" style={{ height: '336px', width: '468px' }} /></div>
                        <div><img className="img-fluid p-3" src={caruselOne} alt="" style={{ height: '334px', width: '465px' }} /></div>
                        <div><img className="img-fluid p-3" src={caruselTwo} alt="" style={{ height: '336px', width: '468px' }} /></div>
                        <div><img className="img-fluid p-3" src={caruselThree} alt="" style={{ height: '336px', width: '468px' }} /></div>
                        <div><img className="img-fluid p-3" src={caruselOne} alt="" style={{ height: '334px', width: '465px' }} /></div>
                        <div><img className="img-fluid p-3" src={caruselTwo} alt="" style={{ height: '336px', width: '468px' }} /></div>
                        <div><img className="img-fluid p-3" src={caruselThree} alt="" style={{ height: '336px', width: '468px' }} /></div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default Works;