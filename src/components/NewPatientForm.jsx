import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPatientForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    gender: '',
    phone: '',
    prakriti: '',
    agni: '',
    healthGoals: []
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        healthGoals: [...formData.healthGoals, value]
      });
    } else {
      setFormData({
        ...formData,
        healthGoals: formData.healthGoals.filter(goal => goal !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Redirect to dashboard after submission
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>New Patient Form</h1>
      <p>Please fill out the following information to create your personalized health plan.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Basic Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Gender</label>
            <div className="form-row">
              <div className="checkbox-item">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleChange}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3>Ayurvedic Profile & Goals</h3>
          
          <div className="form-group">
            <label htmlFor="prakriti">Prakriti (Constitution Type)</label>
            <select
              id="prakriti"
              name="prakriti"
              value={formData.prakriti}
              onChange={handleChange}
              required
            >
              <option value="">Select your Prakriti</option>
              <option value="Vata">Vata</option>
              <option value="Pitta">Pitta</option>
              <option value="Kapha">Kapha</option>
              <option value="Vata-Pitta">Vata-Pitta</option>
              <option value="Vata-Kapha">Vata-Kapha</option>
              <option value="Pitta-Kapha">Pitta-Kapha</option>
              <option value="Tridosha">Tridosha</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="agni">Agni (Digestive Strength)</label>
            <select
              id="agni"
              name="agni"
              value={formData.agni}
              onChange={handleChange}
              required
            >
              <option value="">Select your Agni level</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="Strong">Strong</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Health Goals (Select all that apply)</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="weight-loss"
                  name="healthGoals"
                  value="Weight Loss Management"
                  checked={formData.healthGoals.includes('Weight Loss Management')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="weight-loss">Weight Loss Management</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="digestion"
                  name="healthGoals"
                  value="Improve Digestion"
                  checked={formData.healthGoals.includes('Improve Digestion')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="digestion">Improve Digestion</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="energy"
                  name="healthGoals"
                  value="Increase Energy Levels"
                  checked={formData.healthGoals.includes('Increase Energy Levels')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="energy">Increase Energy Levels</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="stress"
                  name="healthGoals"
                  value="Stress Management"
                  checked={formData.healthGoals.includes('Stress Management')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="stress">Stress Management</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="sleep"
                  name="healthGoals"
                  value="Better Sleep Quality"
                  checked={formData.healthGoals.includes('Better Sleep Quality')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="sleep">Better Sleep Quality</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="immunity"
                  name="healthGoals"
                  value="Boost Immunity"
                  checked={formData.healthGoals.includes('Boost Immunity')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="immunity">Boost Immunity</label>
              </div>
            </div>
          </div>
        </div>
        
        <button type="submit" className="btn">Save & Generate Diet Plan</button>
      </form>
    </div>
  );
};

export default NewPatientForm;