import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/review');
  };

  return (
    <div className="page form-page">
      <div className="page-header">
        <h1>Event Registration</h1>
        <p>Fill in your details to reserve your spot</p>
      </div>

      <form className="reg-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name *</label>
          <input name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="e.g. Jane Doe" />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="e.g. jane@example.com" />
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="e.g. +250 788 000 000" />
        </div>

        <div className="form-group">
          <label>Organization / Institution</label>
          <input name="organization" value={formData.organization} onChange={handleChange} placeholder="e.g. University of Rwanda" />
        </div>

        <div className="form-group">
          <label>Ticket Type *</label>
          <select name="ticketType" value={formData.ticketType} onChange={handleChange}>
            <option value="Standard">Standard</option>
            <option value="VIP">VIP</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div className="form-group">
          <label>Dietary Requirements</label>
          <input name="dietary" value={formData.dietary} onChange={handleChange} placeholder="e.g. Vegetarian, Halal, None" />
        </div>

        <div className="form-group">
          <label>Additional Notes</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} placeholder="Anything else you'd like us to know?" />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/')}>← Back</button>
          <button type="submit" className="btn-primary">Review Registration →</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
