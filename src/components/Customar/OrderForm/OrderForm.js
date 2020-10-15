import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import './OrderForm.css'

const OrderForm = () => {
    const { orderId } = useParams()
    const [services, setServices] = useState([])
    const { register, handleSubmit, errors } = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => {
                const serviceName = data.find(service => service._id === orderId)
                setServices(serviceName)
            })
    }, [])

    const onSubmit = data => {
        const orderDetails = {
            ...loggedInUser,
            name: data.name,
            email: data.email,
            service: data.service,
            details: data.details,
            price: data.price,
            time: new Date()
        }


        fetch('http://localhost:5000/singleOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Order Placed Successfully')
                    history.push(`/customar/${orderId}`)
                }
            })
            .catch((error) => {
                alert('Try Again')
            });
    }

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
            <div className='container' >
                <h2 className="pt-5">Order</h2>
                <div className='mt-3 p-5' style={{ backgroundColor: '#fff', borderRadius: '20px' }}>

                    <form className="addOrder" onSubmit={handleSubmit(onSubmit)}>

                        <input name="name" ref={register({ required: true })} placeholder="Your name / company’s name" />
                        {errors.name && <span className="error">Name is required</span>}

                        <input name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} />

                        <input name="service" ref={register({ required: true })} defaultValue={services.title} placeholder="loading..." />

                        <input name="details" className="project-details" ref={register({ required: true })} placeholder="Project Details" />
                        {errors.details && <span className="error">Project Details is required</span>}

                        <input name="price" className="mb-3" ref={register({ required: true, pattern: /^[0-9]/ })} placeholder="price" />
                        {errors.price && <span className="error">valid price is required</span>}

                        <button className="btn btn-design mt-2" type="submit">Send</button>

                    </form>
                </div>
            </div>
        </div >
    );
};

export default OrderForm;