import {useState, useEffect} from 'react';
import {getFetch} from "../helpers/getFetch";
import itemList from './itemList/itemList';



function ItemListContainer( {greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    return (
        <div>
            {greeting}
            {loading ?
                <h2>Cargando...</h2>
                :      
                <itemList productos= {productos}/>
                }
        </div>

    )
}



export default ItemListContainer
