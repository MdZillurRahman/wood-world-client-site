import React from 'react';

const Review = ({ reviewer }) => {
    const { name, img, review, location, description } = reviewer;

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 rounded'>

            <div className="card p-2" style={{ width: "23rem" }}>
                <h4 className='text-center text-primary mb-4'>{review}</h4>
                <div className='d-flex justify-content-center'>
                    <img src={img} style={{width:"4rem", height:"4rem"}} alt='' />
                    <div className='pt-2 '>
                    <h5>{name}</h5>
                    <h6>{location}</h6>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>"{description}"</p>
                </div>
            </div>
        </div>

    );
};

export default Review;