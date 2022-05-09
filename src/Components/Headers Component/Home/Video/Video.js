import React from 'react';

const Video = () => {
    return (
        <div className='pb-5 mb-5 mt-4'>
            <h1 className='text-center mb-3'>Our Warehouse</h1>
            <div className='d-flex align-items-center justify-content-around'>
                <div className=' mx-5'>
                    <h3>In this section you can see our warehouse. Anyone can visit us in that location. Feel free to come and check products on your own hand.</h3>
                </div>
                <div className='mx-4'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/q0dncveB8-o?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Video;