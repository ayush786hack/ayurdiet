import React from 'react';


import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom';
import {  useAuth } from "./AuthContext";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Callback from './components/Callback';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import NewPatientPage from './pages/NewPatientPage';
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ProtectedRoute from "./ProtectedRoute";

import './styles.css';

function App() { 
   const { user } = useAuth(); 
  return (
   
       <Router>
 
    
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
             <Route
            path="/"
            element={user ? <Navigate to="/new-patient" replace /> : <HomePage />}
          />
           <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={  <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>} />
            <Route path="/new-patient" element={<ProtectedRoute>
                  <NewPatientPage />
                </ProtectedRoute>} />
                
                <Route path="/callback" element={<Callback />} />
                 <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
          </Routes>
          
        </main>
        <Footer />
      </div>

   
    </Router>
  );
}

export default App;