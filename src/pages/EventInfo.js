import React from 'react';
import { useNavigate } from 'react-router-dom';

const speakers = [
  { name: 'Dr. Amara Nwosu', topic: 'AI & The Future of Work' },
  { name: 'Liam Chen', topic: 'Building Scalable Cloud Systems' },
  { name: 'Sofia Martins', topic: 'UX Design for Emerging Tech' },
];

function EventInfo() {
  const navigate = useNavigate();

  return (
    <div className="page event-info">
      <div className="hero">
        <div className="hero-badge">Annual Event · 2025</div>
        <h1>Tech Innovation Conference</h1>
        <p className="hero-tagline">Where ideas meet execution</p>
        <button className="btn-primary" onClick={() => navigate('/register')}>
          Register Now →
        </button>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <span className="info-icon">📅</span>
          <h3>Date & Time</h3>
          <p>August 15–16, 2025</p>
          <p>9:00 AM – 6:00 PM</p>
        </div>
        <div className="info-card">
          <span className="info-icon">📍</span>
          <h3>Venue</h3>
          <p>Kigali Convention Centre</p>
          <p>Kigali, Rwanda</p>
        </div>
        <div className="info-card">
          <span className="info-icon">🎟️</span>
          <h3>Tickets</h3>
          <p>Standard · VIP · Student</p>
          <p>Limited seats available</p>
        </div>
      </div>

      <div className="section">
        <h2>About the Conference</h2>
        <p>
          The Tech Innovation Conference brings together developers, designers, entrepreneurs,
          and technology enthusiasts for two days of inspiring talks, hands-on workshops,
          and meaningful networking. Whether you're building the next startup or leveling up
          your skills, this is the event for you.
        </p>
      </div>

      <div className="section">
        <h2>Featured Speakers</h2>
        <div className="speakers-grid">
          {speakers.map((s) => (
            <div className="speaker-card" key={s.name}>
              <div className="speaker-avatar">{s.name.charAt(0)}</div>
              <h4>{s.name}</h4>
              <p>{s.topic}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to join us?</h2>
        <p>Secure your spot before seats run out.</p>
        <button className="btn-primary" onClick={() => navigate('/register')}>
          Register Now →
        </button>
      </div>
    </div>
  );
}

export default EventInfo;
