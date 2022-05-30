import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://thawing-badlands-17734.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='container mb-5'>
                <div className="row">
                    <h1 className='text-primary text-center mt-5 mb-5'>Reviews</h1>
                    <div className="worker-container">
                        {
                            reviews.map(reviewer => <Review
                                key={reviewer._id}
                                reviewer={reviewer}>
                            </Review>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default Reviews;