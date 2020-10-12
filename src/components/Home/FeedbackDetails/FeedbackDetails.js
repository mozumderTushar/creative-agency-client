import React from 'react';

const FeedbackDetails = (props) => {
    console.log(props.feedback)
    const { img, name, position, info } = props.feedback;
    return (
        <div className="col-md-4 mt-5">
            <div className="single-item">
                <div className="card p-3">
                    <div className="card-body">
                        <div className='d-flex'>
                            <img src={img} alt="" className="card-img-top " style={{ height: '64px', width: '64px' }} />
                            <div className=' ml-3'>
                                <div className="card-title"><h3>{name}</h3></div>
                                <p>{position}</p>
                            </div>
                        </div>
                        <p>{info}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackDetails;