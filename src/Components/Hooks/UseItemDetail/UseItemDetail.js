import { useEffect, useState } from "react";

const useItemDetail = itemId => {
    const [item, setItem] = useState({});
    const [reload, setIsReload] =useState(true)

    useEffect(() => {
        const url = `https://thawing-badlands-17734.herokuapp.com/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            setIsReload(!reload);
            });

    }, [itemId, reload]);


    return [item, setItem];
}

export default useItemDetail;