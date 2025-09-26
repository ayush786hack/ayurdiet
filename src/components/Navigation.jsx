import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">AyurDiet</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/new-patient">New Patient</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-outline">Login</Link>
          <Link to="/register" className="btn">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;