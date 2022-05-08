import React from 'react';
import './Item.css';

const Item = ({item}) => {
    const {name, price, description, img, _id} = item;

    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price} $</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Details</button>
        
        </div>
    );
};

export default Item;