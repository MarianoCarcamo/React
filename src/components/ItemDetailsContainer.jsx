import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProduct } from "../firebase/firebase.js"

const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { idproduct } = useParams()

    useEffect(() => {
        getProduct(idproduct)
            .then( prod => setItem(prod))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='d-flex justify-content-center text-center light-primary-color' style={{minHeight: "100vh"}}>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailsContainer;
