import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const { idcategory } = useParams()

    
    useEffect(() => {
        fetch('../data/productos.json')
            .then((response) => response.json())
            .then((data) => {
                if(idcategory) {
                    const productos = data.filter(prod => prod.category == idcategory)
                    setProducts( productos )
                } else {
                    setProducts (data)
                }
            })
            .catch((error) => console.log(error))
    },[idcategory])

    return (
        <>
            <div className="container text-center">
                <h1>{greeting}</h1>
            </div>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-4">
                    <ItemList products={products}/>
                </div>
            </div>
        </>
    );
}

export default ItemListContainer;
