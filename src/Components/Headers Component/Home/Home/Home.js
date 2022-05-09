import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../../../Inventory/Inventory/Inventory';
import Video from '../Video/Video';
import Experts from '../Experts/Experts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Experts></Experts>
            <Video></Video>

        </div>
    );
};

export default Home;