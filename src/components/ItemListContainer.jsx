import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../firebase/firebase.js"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const { idcategory } = useParams()

    
    useEffect(() => {
            getProducts()
            .then((data) => {
                const productos = data.filter(prod => prod.stock > 0)
                if(idcategory) {
                    const productosFiltrados = data.filter(prod => prod.category == idcategory)
                    setProducts( productosFiltrados )
                } else {
                    setProducts( productos )
                }
            })
            .catch((error) => console.log(error))
    },[idcategory])

    return (
        <div className="container-fluid light-primary-color py-4" style={{minHeight: "100vh"}}>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-4">
                <ItemList products={products} plantilla="Item"/>
            </div>
        </div>
    );
}

export default ItemListContainer;
