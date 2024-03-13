import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "../styles/cartWidgetStyles.css"
import { useCarritoContext } from '../context/CartContext';
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    
    return (
        <div className="cart">
            <div className="items-in-cart">
                <p>{getItemQuantity()}</p>
            </div>
            <Link to={'/cart'}>
                <button className='btn cart-hover fs-2 accent-text-color'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </Link>
        </div>
    );
}

export default CartWidget;
