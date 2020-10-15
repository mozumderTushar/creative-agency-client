import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './ServicesDetails.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServicesDetails = (props) => {
    const { img, title, description, _id } = props.service;

    const [propOne, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 3, tension: 100, friction: 26 } }))


    return (
        <div className="col-md-4 my-5" >

            <animated.div className="single-item "
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: propOne.xys.interpolate(trans) }}
            >
                <Link to={`/customar/${_id}`} style={{ textDecoration: 'none', color: '#000' }} >
                    <div className="card p-3 service-card">
                        {
                            props.service.image ? <img style={{ height: '74px', width: '74px', margin: '0 auto' }} src={`data:image/png;base64,${props.service.image.img}`} /> :
                                <img src={`http://localhost:5000/${img}`} alt="" className="card-img-top" style={{ height: '74px', width: '74px', margin: '0 auto' }} />
                        }
                        <div className="card-body">
                            <div className="card-title"><h3>{title}</h3></div>
                            <p>{description}</p>
                        </div>
                    </div>
                </Link>
            </animated.div>
        </div>
    );
};

export default ServicesDetails;