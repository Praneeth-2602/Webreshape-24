import React from "react";
import './Navbar.css';
import SearchForm from "./SearchForm";
import { useNavigate} from 'react-router-dom'
const NavBar = () => {
    const navigate = useNavigate()
 
  const handleHome = ()=>{
    localStorage.removeItem("authToken")
  
  }

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

            <ul className="navbar-nav me-auto mb-2">
        
       {
        (localStorage.getItem("authToken")) ?
        <li className="navbar-item">
                    <a href="/contact" className="navbar-link">Borrowed Books</a>
                </li>
      :""

       }
        </ul>
        { (!localStorage.getItem("authToken")) ?
        <div className='d-flex '>
       <li className="navbar-item">
                    <a href="/login" className="navbar-link">Login</a>
                </li>
                <li className="navbar-item">
                    <a href="/signup" className="navbar-link">Signup</a>
                </li>
          </div>
          :<div>
       
       <li className="navbar-item">
                    <a href="/" className="navbar-link" onClick={handleHome}>Logout</a>
                </li>
       </div>
      
       }
       
        
      

        </nav>
    );
}

export default NavBar;