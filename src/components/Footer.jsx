import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="powered-by">
          Powered by Ayurveda + AI
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} AyurDiet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;