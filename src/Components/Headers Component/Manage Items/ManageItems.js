import React, { useEffect, useState } from 'react';

const ManageItems = () => {
    const [inventory, setInventory] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventory(data));
    }, []);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = inventory.filter(item => item._id !== id);
                setInventory(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your Inventory</h2>
            {
                inventory.map(item => <div key={item._id}>
                    <h5>{item.name} <button onClick={() => handleDelete(item._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageItems;