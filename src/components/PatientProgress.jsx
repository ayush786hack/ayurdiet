import React from 'react';

const PatientProgress = () => {
  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Patient Progress & History</h1>
          <p>Tracking your wellness journey</p>
        </div>
      </div>
      
      <div className="dosha-balance">
        <div className="dosha-chart"></div>
        <div className="dosha-label">Current Dosha Balance: Pitta - Kapha</div>
      </div>
      
      <div className="progress-grid">
        <div className="progress-card">
          <h3>Weight Trend (Last 6 Months)</h3>
          <div className="chart-container">
            {/* Chart would be implemented with a library like Chart.js */}
            <div style={{ height: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Weight Chart Visualization
            </div>
          </div>
        </div>
        
        <div className="progress-card">
          <h3>Energy Levels (Last 4 Weeks)</h3>
          <div className="chart-container">
            {/* Chart would be implemented with a library like Chart.js */}
            <div style={{ height: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Energy Chart Visualization
            </div>
          </div>
        </div>
      </div>
      
      <div className="progress-card">
        <h3>Symptoms Improvement</h3>
        <ul className="symptom-list">
          <li>Reduced Acidity</li>
          <li>Better Digestion</li>
          <li>Improved Sleep Quality</li>
          <li>Reduced Joint Pain</li>
          <li>Increased Energy Levels</li>
        </ul>
      </div>
      
      <div className="notes-section">
        <h3>Practitioner Notes & Follow-up</h3>
        <div className="notes-content">
          <p>Patient shows significant improvement in digestion and energy levels. Continue with current diet plan and follow up in 2 weeks.</p>
        </div>
        <div className="action-buttons">
          <button className="btn">Update My Health Data</button>
          <button className="btn btn-secondary">Download Full History (PDF)</button>
        </div>
      </div>
    </div>
  );
};

export default PatientProgress;