import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Components/CartContext';  // Correct path to CartContext
import Navbar from './Components/Navbar';  // Correct path to Navbar
import Products from './Components/Products';  // Correct path to Products
import Cart from './Components/Cart';  // Correct path to Cart
import Login from './Components/Login';
import Signup from './Components/Signup';
import Checkout from './Components/Checkout'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewFooter from './Components/NewFooter';

function App() {
  return (
    <CartProvider>
      
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
       
      
      <ToastContainer /> {/* Add ToastContainer here */}
    </CartProvider>
  );
}

export default App;

