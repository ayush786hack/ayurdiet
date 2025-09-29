import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../AuthContext";
import { supabase } from "../supabaseClient";
const Navigation = () => {
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">AyurDiet</Link>
        <ul className="nav-links">
           {!user && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
         {user &&( <> <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/new-patient">New Patient</Link></li>
            <li> <button
                  onClick={handleLogout}
                  
                ><Link to="/">logout </Link></button></li>
                 </>)}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
       {!user && (
          <Link to="/register" className="btn">Sign Up</Link>)}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;