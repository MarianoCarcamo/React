import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div className="d-flex col justify-content-center">
            <div className="card border-item shadow" style={{width: "18rem"}}>
                <img src={`${product.img}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                </div>
                <div className="card-footer text-center">
                    <div className="d-flex justify-content-between">
                        <p className="card-text">${product.price}</p>
                        <p className="card-text">Stock: {product.stock}</p>
                    </div>
                    <Link to= {`/product/${product.id}`}>
                        <button className="btn btn-hover bg-primary text-color-white">Ver Producto</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;
