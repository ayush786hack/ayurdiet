import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (!agreeTerms) {
      alert("Please agree to the terms and privacy policy");
      return;
    }
    
    // Handle registration logic here
    console.log('Registration attempted with:', { fullName, email, password });
    // Redirect to login after successful registration
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create Your Account</h1>
          <p>Join AyurDiet for personalized wellness</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label htmlFor="terms">I agree to <a href="#">Terms & Privacy Policy</a></label>
          </div>
          
          <button type="submit" className="btn">Create Account</button>
        </form>
        
        <div className="auth-divider">
          <span>OR</span>
        </div>
        
        <div className="social-login">
          <button className="social-button">
            <span className="icon">G</span>
            Continue with Google
          </button>
          <button className="social-button">
            <span className="icon">A</span>
            Continue with Apple
          </button>
        </div>
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;