import React, { useEffect, useState } from 'react';
import useItemDetail from '../../Hooks/UseItemDetail/useItemDetail';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);
    const { name, price, description, _id, img, supplierName } = item;



    return (
        <div>
            <form>
                <div className='w-50 mb-5 mx-auto'>
                    <img className='w-100' src={img} alt="" />
                    <h2>Name: {name}</h2>
                    <p>Price: {price} $</p>
                    <p>Quantity : {item.quantity}</p>
                    <p>Supplier Name: {supplierName}</p>
                    <p><small>{description}</small></p>
                    <button className='btn btn-primary'>Delivered</button>
                </div>
            </form>
            <form>
                <div className='w-50 mb-4 mx-auto'>
                    <input className='w-75 mb-2' type="number" name="quantity" placeholder='Add Your Quantity' /> <br />
                    <input className='w-75 btn btn-primary' type="submit" value="Add" />
                </div>
            </form>

            <Footer></Footer>
        </div>
    );
};

export default ItemDetail;