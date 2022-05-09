import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import SingleItem from '../Single Item/SingleItem';

const Collection = () => {
    const [collection, setcollection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/collection')
            .then(res => res.json())
            .then(data => setcollection(data));
    }, [])

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <h1 className='text-primary text-center mt-5'>Collection</h1>
                    <div className="inventory-container">
                        {
                            collection.map(singleItem =>
                                <SingleItem
                                key={singleItem._id}
                                singleItem={singleItem}>
                                </SingleItem>)
                        }
                    </div>
                </div>
                {/* <div className='text-center mb-5'>
                    <button className='mt-4 btn btn-primary' onClick={manageInventories} type="submit">Manage Inventories</button>
                </div> */}
            </div>
            <Footer></Footer>
        </div>

    );
}
export default Collection;