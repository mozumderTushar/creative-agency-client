import React from 'react';

const OrderForm = () => {
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
            <div className='container' >
                <h2 className="pt-5">Order</h2>
                <div className='mt-3 p-5 w-75' style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
                    <form>

                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your name / company’s name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Service Name" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Project Details"></textarea>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" className="form-control" id="inputEmail4" placeholder="price" />
                            </div>
                            <div class="form-group">
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-design" >Send</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default OrderForm;