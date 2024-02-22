import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { idproduct } = useParams()

    useEffect(() => {
        fetch('../data/productos.json')
            .then( response => response.json())
            .then( data => {
                const prod = data.find( producto => producto.id == idproduct)
                if(prod)
                    setItem(prod)
            })
    }, [])

    return (
        <div className='container text-center vh-100'>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailsContainer;
