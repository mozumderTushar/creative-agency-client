import React, { useEffect, useState } from 'react';
import fakeClient from '../../../../src/fakeData/clients'
import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';

const ClientFeedback = () => {
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        const feedbackInfo = fakeClient;
        setFeedback(feedbackInfo)
    },[])
    return (
        <section className='container text-center'>
            <h1 className='my-5'>Clients <span style={{color: '#7AB259'}}>Feedback</span></h1>
           <div className='row'>
           <div className='row'>
           {
                feedback.map(feedback => <FeedbackDetails key={feedback.id} feedback={feedback}></FeedbackDetails>)
            }
           </div>
           </div>
        </section>
    );
};

export default ClientFeedback;