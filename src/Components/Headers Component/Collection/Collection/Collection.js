import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCollection from '../../../Hooks/UseCollection/useCollection';
import Footer from '../../../Shared/Footer/Footer';
import './Collection.css';

const Collection = () => {
    const [collection, setCollection] = useCollection();
    const navigate = useNavigate();


    const addItem = () => {
        navigate('/additems');
    }
    
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/collection/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = collection.filter(singleItem => singleItem._id !== id);
                    setCollection(remaining);
                })
        }
    }

    return (
        <div className='pb-5'>
            <div className='container mb-5'>
                <div className="row">
                    <h1 className='text-primary text-center mt-5'>Collection</h1>
                    <div className="inventory-container">
                        {
                            collection.map(item => <div key={item._id} className='singleItem'>
                                <img className='w-100' src={item.img} alt="" />
                                <h2>Name: {item.name}</h2>
                                <p>Price: {item.price} $</p>
                                <p>Quantity : {item.quantity}</p>
                                <p>Supplier Name: {item.supplierName}</p>
                                <p><small>{item.description}</small></p>
                                <div className='text-center'>
                                    <button className='btn btn-primary' onClick={() => handleDelete(item._id)}>Delete</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className='text-center mb-5'>
                    <button className='mt-4 btn btn-primary' onClick={addItem} type="submit">Add New Item</button>
                </div>
            </div>
        </div>

    );
}
export default Collection;