import React from "react";
import './Navbar.css';

const NavBar = () => {
    const isLoggedIn = true;

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
                    <a href="/contact" className="navbar-link">Contact</a>
                </li>
            </ul>

            <div className="navbar-search">
                <input type="text" placeholder="Search for any Books" className="navbar-search-input" />
            </div>

            {isLoggedIn ? (
                <div className="navbar-profile">
                    <a href="/borrow" className="navbar-link">Borrow a Book</a>
                    <a href="/return" className="navbar-link">Return a Book</a>
                    <a href="/profile" className="navbar-link">Profile</a>
                </div>
            ) : (
                <div className="navbar-buttons">
                    <a href="/login" className="navbar-button">Login</a>
                    <a href="/signup" className="navbar-button">Signup</a>
                </div>
            )}
        </nav>
    );
}

export default NavBar;