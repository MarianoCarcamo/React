import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./data/productos.json')
            .then((response) => response.json())
            .then((data) => {
                setProducts( data )
            })
            .catch((error) => console.log(error))
    },[])

    return (
        <>
            <div className="container text-center">
                <h1>{greeting}</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-4">
                <ItemList products={products}/>
            </div>
        </>
    );
}

export default ItemListContainer;
