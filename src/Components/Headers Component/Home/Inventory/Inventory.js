import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Inventory.css';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventory(data));
    }, [])

    return (
        <div className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'>Inventory</h1>
            <div className="inventory-container">
            {
                inventory.map(item => <Item
                    key={item._id}
                    item={item}>
                </Item>)
            }
            </div>
            </div>
        </div>
    );
};

export default Inventory;