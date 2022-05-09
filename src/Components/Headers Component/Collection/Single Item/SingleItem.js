import React, { useEffect, useState } from 'react';
import './SingleItem.css';

const SingleItem = ({singleItem}) => {
    const {name, price, description, img, _id, quantity, supplierName} = singleItem;

    const [inventory, setInventory] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/collection')
        .then(res => res.json())
        .then(data => setInventory(data));
    }, []);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/collection/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = inventory.filter(singleItem => singleItem._id !== id);
                setInventory(remaining);
            })
        }
    }

    return (
        <div className='singleItem'>
            <img className='w-100' src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price} $</p>
            <p>Quantity : {quantity}</p>
            <p>Supplier Name: {supplierName}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleDelete(singleItem._id)} className='btn btn-primary'>Delete</button>
        
        </div>
    );
};

export default SingleItem;