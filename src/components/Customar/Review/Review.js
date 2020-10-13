import React from 'react';

const Review = () => {
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
            <div className='container' >
                <h2 className="pt-5">Review</h2>
                <div className='mt-3 p-5 w-75' style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
                    <form>

                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company’s name, Designation" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Description"></textarea>
                        </div>
                        <button type="submit" className="btn btn-design" >Submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Review;