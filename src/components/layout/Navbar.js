import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar">
            <Link className="navbar__brand" to="/"><i className="fab fa-github"></i>&nbsp;Github Finder</Link>
            <ul className="navbar__nav">
                <li className="navbar__nav-item"><Link to="/">Home</Link></li>
                <li className="navbar__nav-item"><Link to="/about">About</Link></li>
            </ul>
        </header>
    );
};

export default Navbar;
