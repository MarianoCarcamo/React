import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CartContext";
import ItemList from './ItemList'

const Cart = () => {
    const {carrito, totalPrice, emptyCart} = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0?
                <div className="d-flex flex-column justify-content-center align-items-center light-primary-color" style={{minHeight: "100vh"}}>
                    <h2 className="fs-1">Carrito Vacio</h2>
                    <Link to={'/'}>
                        <button className="btn bg-dark-primary m-3 text-color-white">
                            Volver al inicio
                        </button>
                    </Link>
                </div>
                :
                <div className="d-flex flex-column light-primary-color justify-content-between" style={{minHeight: "100vh"}}>
                    <div>
                        <ItemList products={carrito} plantilla="ItemCart"/>
                    </div>
                    <div className="ms-2">
                        <h3 className="fs-4">Resumen de compra: $ {totalPrice()}</h3>
                        <button className="btn bg-secondary primary-text btn-outline-secondary" onClick={emptyCart}>
                            Vaciar Carrito
                        </button>
                        <Link to={'/'}>
                            <button className="btn bg-dark-primary m-3 text-color-white btn-hover">
                                Continuar Comprando
                            </button>
                        </Link>
                        <Link to={'/checkout'}>
                            <button className="btn bg-dark-primary text-color-white m-3 btn-hover">
                                Finalizar Compra
                            </button>
                        </Link>
                    </div>
                </div>
            }
        </>
    );
}

export default Cart;
