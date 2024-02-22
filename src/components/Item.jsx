import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div className="d-flex col justify-content-center">
            <div className="card" style={{width: "18rem"}}>
                <img src={`../img/${product.img}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                </div>
                <div className="card-footer text-center">
                    <Link to= {`/product/${product.id}`}>
                        <button className="btn btn-primary">Ver Producto</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;
