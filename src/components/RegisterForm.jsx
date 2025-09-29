import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
const RegisterForm = () => {
  
  const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
     const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/callback` 
        
      }
    });

    if (error) return alert("Login failed: " + error.message);

    
    // Supabase automatically redirects user
    
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create Your Account</h1>
          <p>Join AyurDiet for personalized wellness</p>
        </div>

        <div className="auth-divider">
          <span>Continue with</span>
        </div>

       <div className="social-login">
  <button
    className="social-button"
    onClick={handleSubmit}
    style={{
      backgroundColor: '#4285F4', // Google blue
      color: 'white',             // Text color
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}
  >
    <span className="icon">G</span>
    Continue with Google
  </button>
</div>

        <div className="auth-footer">
          
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;