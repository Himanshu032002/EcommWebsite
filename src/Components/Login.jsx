import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; // Import your CSS file


const Login = () => {
  const [formData, setFormData] = useState({
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
    const userData = JSON.parse(localStorage.getItem('userData'));
    setTimeout(() => {
      if (userData && userData.email === formData.email && userData.password === formData.password) {
        navigate('/products');
      } else {
        toast.error('Invalid email or password. Please try again.');
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="cont">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        <div className="link">
          <p>Don't have an account? Go to <Link to="/signup">Signup</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
