import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', backgroundColor: '#fdf6e3', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#d35400', marginBottom: '20px' }}>About AyurDiet</h1>
      <p>
        Welcome to <strong>AyurDiet</strong>! Our platform combines traditional Ayurvedic principles 
        with modern nutrition science to create personalized diet plans for individuals based on 
        their unique body constitution (dosha), health goals, and lifestyle.
      </p>
      <p>
        Using Ayurvedic insights, we provide:
      </p>
      <ul>
        <li>Personalized diet charts for fat loss, wellness, and energy balance</li>
        <li>Daily recommendations aligned with your dosha</li>
        <li>Home remedies and lifestyle guidance for holistic health</li>
        <li>PDF reports for easy tracking and sharing with doctors</li>
      </ul>
      <p>
        Our mission is to make Ayurveda accessible, actionable, and integrated with modern nutrition, so that 
        everyone can achieve optimal health naturally.
      </p>
    </div>
  );
};

export default AboutPage;
