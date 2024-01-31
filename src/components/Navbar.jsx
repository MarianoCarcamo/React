import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">F&C Beauty</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>{
                                console.log("Diste click en Maquillaje")
                            }}>Maquillaje</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>{
                                console.log("Diste click en Perfumeria")
                            }}>Perfumería</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>{
                                console.log("Diste click en Cosmetica")
                            }}>Cosmética</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>{
                                console.log("Diste click en Hogar")
                            }}>Hogar</button>
                        </li>
                    </ul>
                </div>

                <CartWidget/>
            
            </div>
        </nav>
    );
}

export default Navbar;
