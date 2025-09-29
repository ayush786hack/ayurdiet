import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate email sending API like EmailJS, or store messages in Supabase
    console.log('Contact form submitted:', formData);
    setStatus('Thank you! Your message has been received.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '20px', backgroundColor: '#fdf6e3', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#d35400', marginBottom: '20px' }}>Contact Us</h1>
      <p>Have questions, suggestions, or feedback? Reach out to us using the form below:</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Name:</label><br/>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
        </div>

        <div>
          <label>Email:</label><br/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
        </div>

        <div>
          <label>Message:</label><br/>
          <textarea name="message" value={formData.message} onChange={handleChange} required style={{ width: '100%', padding: '8px', borderRadius: '4px', height: '120px' }} />
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#d35400', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Send Message</button>
      </form>

      {status && <p style={{ marginTop: '15px', fontWeight: 'bold', color: 'green' }}>{status}</p>}
    </div>
  );
};

export default ContactPage;
