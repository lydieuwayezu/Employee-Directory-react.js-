import React from 'react';
import './EmployeeCard.css';

// Reusable EmployeeCard Component
// This component receives employee data through props and displays it
function EmployeeCard({ employee }) {
  // Destructuring - Extract specific properties from employee object
  // This makes the code cleaner and easier to read
  const { id, name, email, phone, website, company } = employee;

  // Function to download card as text file
  // This creates a simple text file with employee information
  const handleDownload = () => {
    // Create text content with employee details
    const content = `
EMPLOYEE CARD
=============

ID: ${id}
Name: ${name}
Email: ${email}
Phone: ${phone}
Website: ${website}
Company: ${company.name}

Generated from Employee Directory App
    `.trim();

    // Create a Blob (Binary Large Object) - a file-like object
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Create a temporary URL for the blob
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name.replace(/\s+/g, '_')}_card.txt`; // Filename
    
    // Trigger download by clicking the link
    document.body.appendChild(link);
    link.click();
    
    // Clean up - remove the link and revoke the URL
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="employee-card">
      {/* Card Header - Name and ID */}
      <div className="card-header">
        <h2 className="employee-name">{name}</h2>
        <span className="employee-id">ID: {id}</span>
      </div>

      {/* Card Body - Contact Information */}
      <div className="card-body">
        {/* Email */}
        <div className="info-item">
          <span className="info-label">📧 Email:</span>
          <span className="info-value">{email}</span>
        </div>

        {/* Phone */}
        <div className="info-item">
          <span className="info-label">📱 Phone:</span>
          <span className="info-value">{phone}</span>
        </div>

        {/* Website */}
        <div className="info-item">
          <span className="info-label">🌐 Website:</span>
          <span className="info-value">{website}</span>
        </div>
      </div>

      {/* Company Section */}
      <div className="company-section">
        <div className="company-title">Company</div>
        <div className="company-name">{company.name}</div>
      </div>

      {/* Download Button */}
      <button onClick={handleDownload} className="download-button">
        ⬇️ Download Card
      </button>
    </div>
  );
}

export default EmployeeCard;
