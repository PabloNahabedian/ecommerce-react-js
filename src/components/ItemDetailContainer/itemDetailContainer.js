import { useState, useEffect } from "react";
import getOneProduct from "../../getOneProduct";
import itemDetail from "../itemDetail/itemDetail";


const itemDetailContainer = () => {
    const [item, setItem] = useState({});
    console.log("item", item);

    useEffect(() => {
        getOneProduct
        .then((res) => setItem(res));
    }, [id]);
    return <itemDetail item={item}/>;
};

export default itemDetailContainer;

