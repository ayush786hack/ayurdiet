import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx'; // Corrected import path
import { supabase } from '../supabaseClient.js'; // Corrected import path

// Basic styling
const styles = {
    container: { maxWidth: '800px', margin: '40px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
    form: { display: 'flex', flexDirection: 'column', gap: '20px' },
    formGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
    formGroup: { display: 'flex', flexDirection: 'column' },
    label: { marginBottom: '5px', fontWeight: 'bold', color: '#333' },
    input: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' },
    button: { padding: '12px 20px', fontSize: '1rem', color: 'white', backgroundColor: '#007bff', border: 'none', borderRadius: '4px', cursor: 'pointer', alignSelf: 'flex-start' },
    status: { marginTop: '15px', fontWeight: 'bold' }
};

const NewPatientForm = () => {
  const { user } = useAuth(); // Get the currently logged-in user
  const [formData, setFormData] = useState({
    name: '', age: '', height: '', weight: '', BP: '', sugar: '',
    aim: '', exercise: '', waterIntake: '', dosha: ''
  });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const saveReportToSupabase = async (pdfUrl) => {
      if (!user) throw new Error("User not authenticated.");

      const { error } = await supabase.from('patient_diet_pdfs').insert({
          name: formData.name,
          doctor_id: user.id,
          dosha: formData.dosha,
          url: pdfUrl
      });

      if (error) {
          throw new Error(`Failed to save report to database: ${error.message}`);
      }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus('Step 1/3: Generating PDF on server...');
    try {
      // Step 1: Call backend to generate PDF and get Cloudinary URL
      const response = await fetch("http://localhost:3000/generate-diet-pdf", { 
          method: "POST",
          headers: {
    "Content-Type": "application/json", // important to tell server you're sending JSON
    "Authorization": `Bearer ${user?.access_token}` // optional, if you want to send Supabase auth token
  },
          body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
          throw new Error(result.error || 'PDF generation failed on the server.');
      }
      
      const pdfUrl = result.pdfUrl;

      // Step 2: Save the received URL to Supabase
      setStatus('Step 2/3: Saving report to your database...');
      await saveReportToSupabase(pdfUrl);

      // Step 3: Trigger the download for the user using the Cloudinary URL
      setStatus('Step 3/3: Finalizing download...');
      const a = document.createElement("a");
      a.href = pdfUrl;
      // The 'download' attribute is a hint to the browser to download the linked URL
      a.download = `${formData.name || 'patient'}_diet_report.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      setStatus('Process complete! PDF downloaded and saved. 🎉');
      
    } catch (err) {
      console.error("Error during the process:", err);
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1>New Patient Form</h1>
      <p>Please fill out the following information to create and save a personalized health plan.</p>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGrid}>
          {Object.keys(formData).map(key => (
            <div key={key} style={styles.formGroup}>
              <label htmlFor={key} style={styles.label}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
              <input
                type={['age', 'height', 'weight', 'BP', 'sugar', 'exercise', 'waterIntake'].includes(key) ? 'number' : 'text'}
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          ))}
        </div>
        
        <button type="submit" style={styles.button}>Save & Generate Diet Plan</button>
        {status && <p style={styles.status}>{status}</p>}
      </form>
    </div>
  );
};

export default NewPatientForm;
