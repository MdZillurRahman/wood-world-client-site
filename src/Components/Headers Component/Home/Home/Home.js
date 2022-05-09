import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../../../Inventory/Inventory/Inventory';
import Video from '../Video/Video';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Video></Video>
        </div>
    );
};

export default Home;