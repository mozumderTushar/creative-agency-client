import React from 'react';

const AddServices = () => {
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
        <div className='container' >
            <h2 className="pt-5">Add Services</h2>
            <div className='my-5 p-5' style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Service Title</label>
                            <input type="text" className="form-control" placeholder="Enter title" />
                        </div>
                        <div className="form-group">
                            <label>Icon</label>
                            <input type="file" className="form-control-file" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <textarea className="form-control w-50"  rows="4" placeholder="Enter Description"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary float-right" style={{backgroundColor:'#009444'}}>Submit</button>
                </form>
            </div>
        </div>
    </div >
    );
};

export default AddServices;