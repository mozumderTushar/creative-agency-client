import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({})

    const handleBlur = e => {
        const newAdmin = { ...admin }
        newAdmin[e.target.name] = e.target.value
        setAdmin(newAdmin)
    }

    const handleSubmit= e => {
       
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Admin Added Successfully')
                    
                }
            })
            .catch((error) => {
                alert('Try Again')
                
            });
    }

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
            <div className='container' >
                <h2 className="pt-5">Add Admin</h2>                
                <div className='mt-3 p-5 ' style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
                    <form onSubmit={handleSubmit} className="form-inline">
                        <label className="sr-only">Email</label>
                        <input type="email" name="email" onBlur={handleBlur} className="form-control mb-2 mr-sm-2" style={{width:"450px"}} placeholder="jon@gamil.com" required/>
                        <button type="submit" className="btn mb-2" style={{ backgroundColor: '#009444', color: '#fff'}}>Submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default MakeAdmin;