import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient.js';
import { useAuth } from '../AuthContext.jsx';

const PatientProgress = () => {
  const { user } = useAuth();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch patient reports for the logged-in doctor
  const fetchReports = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('patient_diet_pdfs')
        .select('*')
        .eq('doctor_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setReports(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch reports.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [user]);

  if (loading) return <p>Loading patient progress...</p>;
  if (error) return <p>{error}</p>;
  if (reports.length === 0) return <p>No patient reports found.</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <h2>Patient Progress & Reports</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {reports.map((report, index) => (
          <li
            key={report.id}
            style={{
              marginBottom: '15px',
              padding: '15px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f9f9f9',
            }}
          >
            <div>
              <strong>{report.name}</strong> <br />
              Dosha: {report.dosha} <br />
              Created At: {new Date(report.created_at).toLocaleString()}
            </div>
            <div>
              <a
                href={report.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  backgroundColor: '#007bff',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                }}
              >
                View PDF
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientProgress;
