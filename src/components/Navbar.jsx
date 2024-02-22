import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'}>
                    <a className="navbar-brand" href="#">F&C Beauty</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/category/maquillaje'}>
                                <button className="nav-link">Maquillaje</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/category/perfume'}>
                                <button className="nav-link">Perfumería</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/category/cosmetica'}>
                                <button className="nav-link">Cosmética</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/category/hogar'}>
                                <button className="nav-link">Hogar</button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <CartWidget/>
            
            </div>
        </nav>
    );
}

export default Navbar;
