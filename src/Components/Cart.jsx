//this is all import statenment
import React from 'react';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import { FaShoppingBag } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleOrderNow = () => {
    // Show toast notification
    toast.success('Order placed successfully! Please download the details.', {
      position: 'top-center',
      autoClose: 3000, // Adjust auto-close time if needed
      onClose: () => {
        // Navigate to checkout page after the toast closes
        navigate('/checkout');
      }
    });
  };

  if (cart.length === 0) {
    return <Navigate to="/products" />;
  }

  return (
    <div className="cart-container">
      <Navbar />
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-info">
              <img src={process.env.PUBLIC_URL + item.imageUrl} alt={item.name} />
              <div>
                <div>{item.name}</div>
                <div>${item.price}</div>
                <div>{item.description}</div>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">
              <TiDelete /> Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleOrderNow} className="order-btn">
        <FaShoppingBag /> Buy now
      </button>
      <ToastContainer />
    </div>
  );
};

export default Cart;
