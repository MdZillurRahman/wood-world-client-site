import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    const {name, price, description, img, _id, quantity, supplierName} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id =>{
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price} $</p>
            <p>Quantity : {quantity}</p>
            <p>Supplier Name: {supplierName}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-primary'>Details</button>
        
        </div>
    );
};

export default Item;