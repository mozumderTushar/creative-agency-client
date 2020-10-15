import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const AddServices = () => {

    const [addService, setAddService] = useState({})
    const [file, setFile] = useState(null)
    const history = useHistory()

    const handleBlur = e => {
        const newService = { ...addService }
        newService[e.target.name] = e.target.value
        setAddService(newService)
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', addService.title);
        formData.append('description', addService.description);

        fetch('http://localhost:5000/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Service Added Successfully')
                history.push('/')

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
            <div className='container' >
                <h2 className="pt-5">Add Services</h2>
                <div className='my-5 p-5' style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Service Title</label>
                                <input type="text" name="title" onBlur={handleBlur} className="form-control" placeholder="Enter title" />
                            </div>
                            <div className="form-group">
                                <label>Icon</label>
                                <input onChange={handleFileChange} type="file" className="form-control-file" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label >Description</label>
                            <textarea className="form-control w-50" onBlur={handleBlur} name="description" rows="4" placeholder="Enter Description"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary float-right" style={{ backgroundColor: '#009444' }}>Submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddServices;