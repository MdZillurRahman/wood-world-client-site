import { useEffect, useState } from "react";

const useInventory = itemId =>{
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://thawing-badlands-17734.herokuapp.com//inventory')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])
    return [inventory, setInventory];
}

export default useInventory;