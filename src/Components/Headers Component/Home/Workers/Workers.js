import React, { useEffect, useState } from 'react';
import Worker from '../Worker/Worker';
import './Workers.css';

const Workers = () => {
    const [workers, setWorkers] = useState([]);

    useEffect(() => {
        fetch('https://thawing-badlands-17734.herokuapp.com/workers')
            .then(res => res.json())
            .then(data => setWorkers(data));
    }, [])

    return (
        <div className='container mb-5'>
                <div className="row">
                    <h1 className='text-primary text-center mt-5 mb-5'>Workers</h1>
                    <div className="worker-container">
                        {
                            workers.map(worker => <Worker
                                key={worker._id}
                                worker={worker}>
                            </Worker>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default Workers;