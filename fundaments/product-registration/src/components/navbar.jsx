import React from 'react'

import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">product</a>
            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">

                        <Link  className="nav-link" >Home<span className="sr-only">(current)</span>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to="/register-products" className="nav-link" href="#">register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/query" className="nav-link" href="#">query</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false">Dropdown
                        </Link>                     
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;