import { useEffect, useState } from "react";

const useCollection = () =>{
    const [collection, setCollection] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/collection')
        .then(res => res.json())
        .then(data => setCollection(data));
    }, []);
    return [collection, setCollection]
}

export default useCollection;
