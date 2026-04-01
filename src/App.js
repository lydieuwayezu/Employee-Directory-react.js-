import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import EventInfo from './pages/EventInfo';
import RegistrationForm from './pages/RegistrationForm';
import ReviewPage from './pages/ReviewPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AlreadyRegistered from './pages/AlreadyRegistered';

const STORAGE_KEY = 'conferenceRegistration';

function App() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', organization: '',
    ticketType: 'Standard', dietary: '', notes: ''
  });

  const [registered, setRegistered] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
  });

  const handleConfirm = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    setRegistered(formData);
  };

  const handleCancel = () => {
    localStorage.removeItem(STORAGE_KEY);
    setRegistered(null);
    setFormData({ fullName: '', email: '', phone: '', organization: '', ticketType: 'Standard', dietary: '', notes: '' });
  };

  return (
    <Routes>
      <Route path="/" element={registered ? <Navigate to="/registered" /> : <EventInfo />} />
      <Route path="/register" element={registered ? <Navigate to="/registered" /> : <RegistrationForm formData={formData} setFormData={setFormData} />} />
      <Route path="/review" element={registered ? <Navigate to="/registered" /> : <ReviewPage formData={formData} />} />
      <Route path="/confirmation" element={<ConfirmationPage formData={formData} onConfirm={handleConfirm} />} />
      <Route path="/registered" element={registered ? <AlreadyRegistered data={registered} onCancel={handleCancel} setFormData={setFormData} /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;
