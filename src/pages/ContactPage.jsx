import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Here you can integrate email sending API like EmailJS, or store messages in Supabase
    console.log('Contact form submitted:', formData);
    setStatus('Thank you! Your message has been received. We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    title: {
      fontSize: '2.8rem',
      color: '#d35400',
      marginBottom: '15px',
      fontWeight: '700'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    contentWrapper: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      marginBottom: '60px'
    },
    formSection: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
    },
    formTitle: {
      fontSize: '1.8rem',
      color: '#2c3e50',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: '2px solid #f1c40f'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      color: '#555'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    inputFocus: {
      borderColor: '#d35400',
      outline: 'none'
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
      transition: 'border-color 0.3s ease'
    },
    button: {
      backgroundColor: '#d35400',
      color: '#fff',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '5px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    buttonHover: {
      backgroundColor: '#c0392b'
    },
    error: {
      color: '#e74c3c',
      fontSize: '0.9rem',
      marginTop: '5px'
    },
    success: {
      color: '#27ae60',
      fontWeight: 'bold',
      padding: '15px',
      backgroundColor: '#f8fff8',
      borderRadius: '5px',
      marginTop: '20px',
      textAlign: 'center'
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px'
    },
    infoCard: {
      backgroundColor: '#fff',
      padding: '25px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
    },
    infoTitle: {
      fontSize: '1.5rem',
      color: '#2c3e50',
      marginBottom: '15px'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '15px'
    },
    infoIcon: {
      color: '#d35400',
      fontSize: '1.5rem',
      marginRight: '15px',
      flexShrink: '0'
    },
    infoContent: {
      flex: '1'
    },
    infoLabel: {
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '5px'
    },
    infoText: {
      color: '#666',
      lineHeight: '1.5'
    },
    mapSection: {
      marginBottom: '60px'
    },
    mapTitle: {
      fontSize: '1.8rem',
      color: '#2c3e50',
      marginBottom: '20px',
      textAlign: 'center'
    },
    mapContainer: {
      height: '400px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    },
    faqSection: {
      backgroundColor: '#f8f9fa',
      padding: '40px',
      borderRadius: '10px',
      marginBottom: '40px'
    },
    faqTitle: {
      fontSize: '1.8rem',
      color: '#2c3e50',
      marginBottom: '30px',
      textAlign: 'center'
    },
    faqItem: {
      marginBottom: '25px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 3px 10px rgba(0,0,0,0.05)'
    },
    faqQuestion: {
      fontSize: '1.2rem',
      color: '#d35400',
      fontWeight: '600',
      marginBottom: '10px'
    },
    faqAnswer: {
      color: '#666',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          Have questions, suggestions, or feedback? We'd love to hear from you. Reach out to us using the form below or through our contact information.
        </p>
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.formSection}>
          <h2 style={styles.formTitle}>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#d35400'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
              {errors.name && <div style={styles.error}>{errors.name}</div>}
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#d35400'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
              {errors.email && <div style={styles.error}>{errors.email}</div>}
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="subject" style={styles.label}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#d35400'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
              {errors.subject && <div style={styles.error}>{errors.subject}</div>}
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                onFocus={(e) => e.target.style.borderColor = '#d35400'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              ></textarea>
              {errors.message && <div style={styles.error}>{errors.message}</div>}
            </div>

            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#d35400'}
            >
              Send Message
            </button>
          </form>

          {status && <div style={styles.success}>{status}</div>}
        </div>

        <div style={styles.infoSection}>
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>Contact Information</h3>
            
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>📍</div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Our Location</div>
                <div style={styles.infoText}>123 Wellness Street, Ayurville, India 560001</div>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>📞</div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Phone Number</div>
                <div style={styles.infoText}>+91 98765 43210</div>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>✉️</div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Email Address</div>
                <div style={styles.infoText}>contact@ayurdiet.com</div>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>🕒</div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Working Hours</div>
                <div style={styles.infoText}>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div style={styles.infoText}>Saturday: 10:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>

          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>Follow Us</h3>
            <div style={styles.infoText}>
              Stay connected with us on social media for the latest updates, health tips, and Ayurvedic insights.
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
              <a href="#" style={{ color: '#d35400', fontSize: '1.5rem' }}>📘</a>
              <a href="#" style={{ color: '#d35400', fontSize: '1.5rem' }}>🐦</a>
              <a href="#" style={{ color: '#d35400', fontSize: '1.5rem' }}>📷</a>
              <a href="#" style={{ color: '#d35400', fontSize: '1.5rem' }}>📺</a>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.mapSection}>
        <h2 style={styles.mapTitle}>Find Us Here</h2>
        <div style={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985986645984!2d77.59456331482042!3d12.971598990855194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1629889456789!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: '0' }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>

      <div style={styles.faqSection}>
        <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
        
        <div style={styles.faqItem}>
          <div style={styles.faqQuestion}>How do I create a personalized diet plan?</div>
          <div style={styles.faqAnswer}>
            Simply sign up for an account, complete our dosha assessment questionnaire, and our system will generate a personalized diet plan based on your unique body constitution and health goals.
          </div>
        </div>
        
        <div style={styles.faqItem}>
          <div style={styles.faqQuestion}>Is AyurDiet suitable for specific health conditions?</div>
          <div style={styles.faqAnswer}>
            While our diet plans are designed to promote general wellness, we recommend consulting with your healthcare provider before making significant dietary changes, especially if you have specific health conditions.
          </div>
        </div>
        
        <div style={styles.faqItem}>
          <div style={styles.faqQuestion}>How long does it take to see results?</div>
          <div style={styles.faqAnswer}>
            Results vary depending on individual factors, but most users report feeling more energetic within 2-3 weeks. Noticeable changes in weight and overall wellness typically appear within 4-8 weeks of consistent adherence to the plan.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;