import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Item from '../Item/Item';
import './Inventory.css';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])

    const manageInventories = () => {
        navigate('/collection');
    }

    return (
        <div>
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
                <div className='text-center mb-5'>
                    <button className='mt-4 btn btn-primary' onClick={manageInventories} type="submit">Manage Inventories</button>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Inventory;