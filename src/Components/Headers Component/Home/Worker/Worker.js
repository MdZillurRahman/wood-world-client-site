import React from 'react';
import './Worker.css';

const Worker = ({ worker }) => {
    const { name, img, Experience, Section } = worker;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt=''/>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text"><b>Experience :</b> {Experience}</p>
                    <p className="card-text"><b>Working Section :</b> {Section}</p>
                </div>
            </div>
        </div>

    );
};

export default Worker;