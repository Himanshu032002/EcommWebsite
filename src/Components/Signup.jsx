// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Signup.css'; // Import your CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a delay of 1 second before signing up
    setTimeout(() => {
      localStorage.setItem('userData', JSON.stringify(formData));
      navigate('/');
    }, 1000);
  };

  return (
    <div className="signup-container">
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
        <div className="link">
          <p>Already have an account? Go to <Link to='/'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
