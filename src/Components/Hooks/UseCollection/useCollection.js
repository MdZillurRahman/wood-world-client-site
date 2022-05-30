import { useEffect, useState } from "react";

const useCollection = () =>{
    const [collection, setCollection] = useState([]);

    useEffect( ()=>{
        fetch('https://thawing-badlands-17734.herokuapp.com/collection')
        .then(res => res.json())
        .then(data => setCollection(data));
    }, []);
    return [collection, setCollection]
}

export default useCollection;
