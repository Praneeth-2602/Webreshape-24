import React from "react";
import './Navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="/" className="navbar-link">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="/about" className="navbar-link">About</a>
                </li>
                <li className="navbar-item">
                    <a href="/services" className="navbar-link">Services</a>
                </li>
                <li className="navbar-item">
                    <a href="/contact" className="navbar-link">Contact</a>
                </li>
            </ul>
            <div className="navbar-buttons">
                <a href="/login" className="navbar-button">Login</a>
                <a href="/signup" className="navbar-button">Signup</a>
            </div>
        </nav>
    );
}

export default NavBar;