import React from 'react';
import useCollection from '../../Hooks/UseCollection/useCollection';

const ManageItems = () => {
    const [collection, setCollection] = useCollection();


    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/collection/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = collection.filter(item => item._id !== id);
                setCollection(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your Inventory</h2>
            {
                collection.map(item => <div key={item._id}>
                    <h5>{item.name} <button onClick={() => handleDelete(item._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageItems;