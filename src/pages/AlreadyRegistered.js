import React from 'react';
import { useNavigate } from 'react-router-dom';

function AlreadyRegistered({ data, onCancel, setFormData }) {
  const navigate = useNavigate();

  const fields = [
    { label: 'Full Name', value: data.fullName },
    { label: 'Email', value: data.email },
    { label: 'Phone', value: data.phone },
    { label: 'Organization', value: data.organization || '—' },
    { label: 'Ticket Type', value: data.ticketType },
    { label: 'Dietary Requirements', value: data.dietary || '—' },
    { label: 'Additional Notes', value: data.notes || '—' },
  ];

  const handleEdit = () => {
    setFormData(data);
    navigate('/register');
  };

  return (
    <div className="page already-registered">
      <div className="page-header">
        <div className="already-badge">🎟️ Already Registered</div>
        <h1>Welcome back, {data.fullName.split(' ')[0]}!</h1>
        <p>You have already registered for the Tech Innovation Conference 2025.</p>
      </div>

      <div className="review-card">
        {fields.map(({ label, value }) => (
          <div className="review-row" key={label}>
            <span className="review-label">{label}</span>
            <span className="review-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="form-actions">
        <button className="btn-danger" onClick={onCancel}>Cancel Registration</button>
        <button className="btn-primary" onClick={handleEdit}>Edit Registration →</button>
      </div>
    </div>
  );
}

export default AlreadyRegistered;
