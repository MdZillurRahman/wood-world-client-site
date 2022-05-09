import React from 'react';
import useItemDetail from '../../Hooks/UseItemDetail/useItemDetail';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import useCollection from '../../Hooks/UseCollection/useCollection';
import useInventory from '../../Hooks/UseInventory/useInventory';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);
    const { name, price, description, img, supplierName } = item;
    const navigate = useNavigate();
    const [inventory, setInventory] = useInventory();

    const manageInventories = () => {
        navigate('/collection');
    }

    const delivered = id => {
        // const url = `https://thawing-badlands-17734.herokuapp.com//inventory/${id}`;
        //     fetch(url, {
        //         method: 'PUT'
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         const newQuantity = data.quantity - 1;
        //         item.quantity = newQuantity;
        //         setInventory(item.quantity);
        //     })
        
}

    return (
        <div className='mb-4 pb-4'>
            <div>
                <div className='w-50 mb-5 mx-auto'>
                    <img className='w-100' src={img} alt="" />
                    <h2>Name: {name}</h2>
                    <p>Price: {price} $</p>
                    <p>Quantity : {item.quantity}</p>
                    <p>Supplier Name: {supplierName}</p>
                    <p><small>Description : {description}</small></p>
                    <button onClick={() => delivered(item.id)} className='btn btn-primary'>Delivered</button>
                </div>
            </div>
            <form>
                <div className='w-50 mb-4 mx-auto'>
                    <input className='w-75 mb-2' type="number" name="quantity" placeholder='Add Your Quantity' /> <br />
                    <input className='w-75 btn btn-primary mb-4' type="submit" value="Add" />
                    <input className='w-75 btn btn-primary mt-4' onClick={manageInventories} type="submit" value="Manage Inventories" />
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};


export default ItemDetail;