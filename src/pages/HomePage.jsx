import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Personalized Ayurvedic Diets for a Balanced Life</h1>
          <p>Discover your unique mind-body type and get customized diet plans tailored to your specific needs</p>
          <Link to="/register" className="btn btn-hero">Generate</Link>
        </div>
        
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Take Our Dosha Quiz</h3>
              <p>Answer simple questions to determine your unique mind-body constitution (dosha)</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Get Personalized Plan</h3>
              <p>Receive a customized diet plan based on your dosha type and health goals</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Experience Balance</h3>
              <p>Follow your plan and enjoy improved digestion, energy, and overall wellbeing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ayurveda Section */}
      <section className="section light-section">
        <div className="container">
          <h2 className="section-title">Why Ayurveda?</h2>
          <div className="ayurveda-content">
            <div className="ayurveda-text">
              <p>Ayurveda, the ancient Indian system of medicine, emphasizes balance between body, mind, and spirit. By understanding your unique constitution, we can create diet plans that help you achieve optimal health and harmony.</p>
              <p>Our AI-powered system combines traditional Ayurvedic wisdom with modern nutritional science to provide you with personalized recommendations that work.</p>
            </div>
            <div className="hero-illustration">
              <div className="image-placeholder">
           <img src="gemini.jpeg "   className="ayurveda-image-hero"  alt="image" ></img></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-container">
            <div className="testimonial">
              <p>"The personalized diet plan completely transformed my digestion. I feel lighter and more energetic throughout the day!"</p>
              <div className="testimonial-author">- Priya S.</div>
            </div>
            <div className="testimonial">
              <p>"I've struggled with weight for years. AyurDiet helped me understand my body's needs and I've finally found a sustainable way to maintain a healthy weight."</p>
              <div className="testimonial-author">- Rajesh M.</div>
            </div>
            <div className="testimonial">
              <p>"As a busy professional, I needed something simple to follow. The customized meal plans fit perfectly into my lifestyle and I've never felt better."</p>
              <div className="testimonial-author">- Ananya K.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;