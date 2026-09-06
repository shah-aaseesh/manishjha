import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export const ContactModal = ({ isOpen, onClose }) => {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('grievance');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    province: 'Madhesh Province',
    category: 'Parliamentary Question',
    subject: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    const typeLabel = activeTab === 'grievance'
      ? 'Constituency Grievance / जनगुनासो'
      : activeTab === 'parliament'
      ? 'Parliamentary Policy Proposal'
      : 'Message';

    addToast(`Thank you ${formData.name}, your ${typeLabel} has been submitted directly to Hon. Manish Jha's parliamentary team.`, 'success');
    setFormData({ name: '', email: '', phone: '', province: 'Madhesh Province', category: 'Parliamentary Question', subject: '', message: '' });
  };

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog modal-dialog-large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Citizen Connect & Policy Inquiry Portal</h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>नागरिक संवाद तथा संसदीय सुझाव केन्द्र</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="modal-body">
          {/* Tab Selector */}
          <div className="modal-tab-bar" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
            <button
              type="button"
              className={`modal-tab-btn ${activeTab === 'grievance' ? 'active' : ''}`}
              onClick={() => setActiveTab('grievance')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: activeTab === 'grievance' ? 'var(--accent-crimson)' : 'transparent',
                color: activeTab === 'grievance' ? '#ffffff' : '#64748b'
              }}
            >
              <i className="fa-solid fa-bullhorn" style={{ marginRight: '6px' }}></i>
              Constituency Grievance (जनगुनासो)
            </button>
            <button
              type="button"
              className={`modal-tab-btn ${activeTab === 'parliament' ? 'active' : ''}`}
              onClick={() => setActiveTab('parliament')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: activeTab === 'parliament' ? 'var(--accent-crimson)' : 'transparent',
                color: activeTab === 'parliament' ? '#ffffff' : '#64748b'
              }}
            >
              <i className="fa-solid fa-landmark-dome" style={{ marginRight: '6px' }}></i>
              Parliamentary Question Suggestion
            </button>
            <button
              type="button"
              className={`modal-tab-btn ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: activeTab === 'general' ? 'var(--accent-crimson)' : 'transparent',
                color: activeTab === 'general' ? '#ffffff' : '#64748b'
              }}
            >
              <i className="fa-solid fa-envelope" style={{ marginRight: '6px' }}></i>
              General Inquiry / Meeting
            </button>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <input
                type="text"
                placeholder="Full Name (पूरा नाम)"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email Address (इमेल)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <input
                type="tel"
                placeholder="Phone / WhatsApp Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <select
                value={formData.province}
                onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                style={{ background: '#ffffff', border: '1px solid #cbd5e1' }}
              >
                <option value="Koshi Province">Koshi Province</option>
                <option value="Madhesh Province">Madhesh Province (Janakpur / Mithila)</option>
                <option value="Bagmati Province">Bagmati Province (Kathmandu Valley)</option>
                <option value="Gandaki Province">Gandaki Province</option>
                <option value="Lumbini Province">Lumbini Province</option>
                <option value="Karnali Province">Karnali Province</option>
                <option value="Sudurpashchim Province">Sudurpashchim Province</option>
                <option value="Nepali Diaspora">Non-Resident Nepali (Diaspora)</option>
              </select>
            </div>

            <input
              type="text"
              placeholder={activeTab === 'grievance' ? "Subject / Local Issue (e.g., Road repair, Irrigation canal, School infra)" : "Subject / Topic for Parliamentary Question"}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />

            <textarea
              rows="4"
              placeholder={activeTab === 'grievance' ? "Describe the constituency issue with exact location details..." : "Provide policy details or background context for MP Manish Jha..."}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>

            <button type="submit" className="btn-crimson" style={{ width: '100%', marginTop: '0.25rem' }}>
              <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }}></i>
              Submit to Parliamentary Office
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
