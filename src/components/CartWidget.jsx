import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "../styles/items_in_cart.css"

const CartWidget = () => {
    return (
        <div className="d-flex fs-3">
            <div className="items-in-cart">
                <p>0</p>
            </div>
            <button className='btn fs-4 p-0 m-2'>
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
}

export default CartWidget;
