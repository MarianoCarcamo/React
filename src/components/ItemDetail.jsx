import { useCounter } from '../hooks/useCounter'
import { useCarritoContext } from '../context/CartContext';
import { toast } from 'react-toastify'

const ItemDetail = ( {item} ) => {
    const [ count, increment, decrement, reset ] = useCounter(1,item.stock,1)
    const {addItem} = useCarritoContext()

    const handleAddToCart = () => {
        addItem(item,count)
        toast.success(`Producto agregado al carrito!`,{
            position:'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable:true,
            progress: undefined
        })
    }

    return (
        <div className='d-flex align-items-center'>
            <div>
                <img className="img-fluid" src={`${item.img}`} alt={`Imagen de ${item.title}`} />
            </div>
            <div>
                <div>
                    <h2>{item.title}</h2>
                    <h3>Precio: ${item.price}</h3>
                    <h5>Stock disponible: {item.stock}</h5>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='btn accent-color m-3 text-color-white' onClick={decrement}>-</button>
                    <span className='text-dark fs-5 align-center'>{count}</span>
                    <button className='btn accent-color m-3 text-color-white' onClick={increment}>+</button>
                    <button className='btn bg-secondary primary-text btn-outline-secondary' onClick={reset}>Reset</button>
                </div>
                <button className='btn bg-dark-primary text-color-white' onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemDetail;
