import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Navbar.css';


const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1>Welcome to the Shopping App</h1>
      <Link to="/cart" className="cart-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 12.74a3 3 0 0 0 2.86 2.26h8.92a3 3 0 0 0 2.86-2.26L23 6H6"></path>
        </svg>
        
        <span className="cart-count">{cart.length}</span>
        <br></br>
        <br></br>
        
      </Link>
      <Link to="/"><button>Logout</button></Link>
    </nav>
  );
};

export default Navbar;
