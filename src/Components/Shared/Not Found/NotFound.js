import React from 'react';
import notFound from '../../../Images/404.png';

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;