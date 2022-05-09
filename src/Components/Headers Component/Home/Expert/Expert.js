import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img, Experience } = expert;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Experience : {Experience}</p>
                </div>
            </div>
        </div>

    );
};

export default Expert;