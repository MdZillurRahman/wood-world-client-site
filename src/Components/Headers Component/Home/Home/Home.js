import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../../../Inventory/Inventory/Inventory';
import Video from '../Video/Video';
import Workers from '../Workers/Workers';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Workers></Workers>
            <Reviews></Reviews>
            <Video></Video>

        </div>
    );
};

export default Home;