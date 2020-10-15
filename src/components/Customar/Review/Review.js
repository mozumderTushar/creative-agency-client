import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const Review = () => {
    const [review, setReview] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()

    const handleBlur = e => {
        const newReview = { ...review }
        newReview[e.target.name] = e.target.value
        setReview(newReview)
    }


    const handleSubmit = e => {
        e.preventDefault()

        const clientReview = {
            ...review, 
            img:loggedInUser.photoURL
        }
        
        fetch('http://localhost:5000/clientFeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clientReview)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Review Added Successfully')
                    history.push('/')
                }
            })
            .catch((error) => {
                alert('Try Again')
            });
    }

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
            <div className='container' >
                <h2 className="pt-5">Review</h2>
                <div className='mt-3 p-5 w-75' style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
                    <form  onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text"  onBlur={handleBlur} className="form-control" name="name" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <input type="text"  onBlur={handleBlur} className="form-control" name="position"  placeholder="Company’s name, Designation" />
                        </div>
                        <div className="form-group">
                            <textarea  onBlur={handleBlur} className="form-control" name="info" rows="5" placeholder="Description"></textarea>
                        </div>
                        <button type="submit" className="btn btn-design" >Submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Review;