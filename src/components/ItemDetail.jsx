import { useCounter } from '../hooks/useCounter'

const ItemDetail = ( {item} ) => {
    const [ count, increment, decrement, reset ] = useCounter(1,item.stock,1)
    return (
        <div>
            <img src={`../img/${item.img}`} alt={`Imagen de ${item.title}`} />
            <div>
                <h2>{item.title}</h2>
                <h3>Precio: ${item.price}</h3>
                <h5>Stock disponible: {item.stock}</h5>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn btn-secondary m-3' onClick={decrement}>-</button>
                <span className='text-dark fs-5 align-center'>{count}</span>
                <button className='btn btn-secondary m-3' onClick={increment}>+</button>
                <button className='btn btn-outline-secondary' onClick={reset}>Reset</button>
            </div>
                <button className='btn btn-primary'>Agregar al carrito</button>
        </div>
    );
}

export default ItemDetail;
