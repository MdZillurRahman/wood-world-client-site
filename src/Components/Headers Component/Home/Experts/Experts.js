import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css';

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/experts')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, [])

    return (
        <div className='container mb-5'>
                <div className="row">
                    <h1 className='text-primary text-center mt-5 mb-5'>Experts</h1>
                    <div className="expert-container">
                        {
                            experts.map(expert => <Expert
                                key={expert._id}
                                expert={expert}>
                            </Expert>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default Experts;