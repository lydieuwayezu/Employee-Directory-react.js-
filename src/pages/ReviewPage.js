import React from 'react';
import { useNavigate } from 'react-router-dom';

function ReviewPage({ formData }) {
  const navigate = useNavigate();

  const fields = [
    { label: 'Full Name', value: formData.fullName },
    { label: 'Email', value: formData.email },
    { label: 'Phone', value: formData.phone },
    { label: 'Organization', value: formData.organization || '—' },
    { label: 'Ticket Type', value: formData.ticketType },
    { label: 'Dietary Requirements', value: formData.dietary || '—' },
    { label: 'Additional Notes', value: formData.notes || '—' },
  ];

  return (
    <div className="page review-page">
      <div className="page-header">
        <h1>Review Your Registration</h1>
        <p>Please confirm your details before submitting</p>
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
        <button className="btn-secondary" onClick={() => navigate('/register')}>← Edit Details</button>
        <button className="btn-primary" onClick={() => navigate('/confirmation')}>Confirm & Submit →</button>
      </div>
    </div>
  );
}

export default ReviewPage;
