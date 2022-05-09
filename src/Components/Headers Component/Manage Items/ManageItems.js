import React from 'react';
import useCollection from '../../Hooks/UseCollection/useCollection';

const ManageItems = () => {
    const [collection, setCollection] = useCollection();


    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://thawing-badlands-17734.herokuapp.com//collection/${id}`;
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
        <div className='w-50 mx-auto pb-5 mb-5'>
            <h2>Manage your Collections</h2>
            {
                collection.map(item => <div key={item._id}>
                    <h5>{item.name} <button onClick={() => handleDelete(item._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageItems;