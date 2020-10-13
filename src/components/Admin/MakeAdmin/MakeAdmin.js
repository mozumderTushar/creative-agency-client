import React from 'react';

const MakeAdmin = () => {
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
            <div className='container' >
                <h2 className="pt-5">Add Admin</h2>
                <div className='mt-3 p-5 ' style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
                    <form className="form-inline">
                        <label className="sr-only">Email</label>
                        <input type="email" className="form-control mb-2 mr-sm-2" style={{width:"450px"}} placeholder="jon@gamil.com" />
                        <button type="submit" className="btn mb-2" style={{ backgroundColor: '#009444', color: '#fff'}}>Submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default MakeAdmin;