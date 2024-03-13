import { useCarritoContext } from "../context/CartContext";
import { useCounter } from '../hooks/useCounter';
import { useEffect } from "react";

const ItemCart = ( { product } ) => {
    const { removeItem, addItem } = useCarritoContext()
    const [ count, increment, decrement ] = useCounter(product.quantity,product.stock,1)

    useEffect(() => {
        addItem(product,count)
    }, [count])

    return (
        <div className="d-flex border-item rounded justify-content-between m-3 p-1 bg-white">
            <div className="d-flex align-items-center">
                <div>
                    <img className="img-fluid" src={`${product.img}`} alt={`Imagen de ${product.title}`} style={{width:"150px"}}/>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <div>
                    <h3 className="fs-5">{product.title}</h3>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button className='btn accent-color m-3 text-color-white' onClick={decrement}>-</button>
                    <span className='text-dark fs-5 align-center'>{count}</span>
                    <button className='btn accent-color m-3 text-color-white' onClick={increment}>+</button>
                    <h4 className="fs-6">Subtotal: ${product.price * product.quantity}</h4>
                </div>
            </div>
            <div className="d-flex align-items-end">
                <button className='btn bg-secondary primary-text btn-outline-secondary' onClick={ () => removeItem(product.id)}>
                    Eliminar Producto
                </button>
            </div>
        </div>
    );
}

export default ItemCart;
