import React, { useEffect, useRef, useState } from 'react';
import useItemDetail from '../../Hooks/UseItemDetail/UseItemDetail';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);
    const { _id, name, quantity, price, description, img, supplierName } = item;
    const navigate = useNavigate();
    const [inputQty, setInputQty] = useState();
    const { register } = useForm();


    const manageInventories = () => {
        navigate('/collection');
    }


    const handleDelivered = event => {
        event.preventDefault();

        const updateQuantity = quantity - 1;

        fetch(`https://thawing-badlands-17734.herokuapp.com/inventory/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity: updateQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })

            toast('Product Delivered!!');

    }


    const handleAdd = event => {
        event.preventDefault();

        const updateQuantity = parseInt(inputQty) + parseInt(quantity);


        fetch(`https://thawing-badlands-17734.herokuapp.com/inventory/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({newQuantity: updateQuantity})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const handleQuantity = event =>{
        const inputQuantity = event.target.value;
        setInputQty(inputQuantity);

    }

    return (
        <div className='mb-4 pb-4'>
            <div>
                <form onSubmit={handleDelivered}>
                    <div className='w-50 my-5 mx-auto'>
                        <img className='w-75' src={img} alt="" />
                        <h2>Name: {name}</h2>
                        <p>Price: {price} $</p>
                        <p>Quantity : <input type="text" value={quantity} /></p>
                        <p>Supplier Name: {supplierName}</p>
                        <p><small><b>Description :</b> {description}</small></p>
                        <button type='submit' className='btn btn-primary'>Delivered</button>
                    </div>
                </form>
            </div>
            <form onSubmit={handleAdd}>
                <div className='w-50 mb-4 mx-auto' onChange={handleQuantity}>
                    <input  className='w-75 mb-2' type="inputQuantity" name="inputQuantity" placeholder='Add Your Quantity'
                        {...register("phoneNumber", {
                            pattern: {
                                value: /[0-9]/
                            }
                        })}
                    /> <br />
                    <input className='w-75 btn btn-primary mb-4' type="submit" value="Add" />
                    <input className='w-75 btn btn-primary mt-4' onClick={manageInventories} type="submit" value="Manage Inventories" />
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};


export default ItemDetail;