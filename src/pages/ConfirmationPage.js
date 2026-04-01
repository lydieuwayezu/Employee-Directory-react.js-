import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmationPage({ formData, onConfirm }) {
  const navigate = useNavigate();
  const confirmed = useRef(false);

  useEffect(() => {
    if (!confirmed.current) {
      confirmed.current = true;
      onConfirm();
    }
  }, [onConfirm]);

  return (
    <div className="page confirmation-page">
      <div className="confirmation-box">
        <div className="check-icon">✅</div>
        <h1>Registration Confirmed!</h1>
        <p>
          Thank you, <strong>{formData.fullName}</strong>! Your seat at the
          Tech Innovation Conference 2025 has been reserved.
        </p>
        <p className="ticket-badge">{formData.ticketType} Ticket</p>
        <p className="sub-text">
          A confirmation has been saved to your browser. You can view your
          registration details anytime you return to this site.
        </p>
        <button className="btn-primary" onClick={() => navigate('/registered')}>
          View My Registration →
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
