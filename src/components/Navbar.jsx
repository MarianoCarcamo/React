import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary p-0">
            <div className="container-fluid bg-dark-primary p-2">
                <Link className="text-decoration-none" to={'/'}>
                    <span className="navbar-brand text-color-white p-4 fs-2" style={{fontFamily: "Lora"}}>F&C Beauty</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="d-flex w-100 navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                        <li className="nav-item">
                            <Link className="text-decoration-none" to={'/category/maquillaje'}>
                                <button className="nav-link text-color-white">Maquillaje</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-decoration-none" to={'/category/perfume'}>
                                <button className="nav-link text-color-white">Perfumería</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-decoration-none"  to={'/category/cosmetica'}>
                                <button className="nav-link text-color-white">Cosmética</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-decoration-none"  to={'/category/hogar'}>
                                <button className="nav-link text-color-white">Hogar</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
