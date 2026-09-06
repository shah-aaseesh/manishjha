import React from 'react';

export const ProgramModal = ({ isOpen, onClose, program }) => {
  if (!isOpen || !program) return null;

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog modal-dialog-large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">{program.title}</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-crimson)', fontWeight: 700 }}>
              <i className="fa-solid fa-location-dot" style={{ marginRight: '4px' }}></i> {program.province}
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="modal-body">
          <img
            src={program.image}
            alt={program.title}
            style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', objectPosition: 'center 10%', borderRadius: '12px', marginBottom: '1.25rem' }}
          />

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', fontSize: '0.9rem' }}>
            <div><i className="fa-regular fa-calendar" style={{ width: '22px', color: 'var(--accent-crimson)' }}></i> <strong>{program.date}</strong></div>
            <div><i className="fa-regular fa-clock" style={{ width: '22px', color: 'var(--accent-crimson)' }}></i> {program.time}</div>
            <div><i className="fa-solid fa-building-columns" style={{ width: '22px', color: 'var(--accent-crimson)' }}></i> {program.venue || program.location}</div>
            <div><i className="fa-solid fa-microphone-lines" style={{ width: '22px', color: 'var(--accent-crimson)' }}></i> {program.speaker || 'Hon. Manish Jha, MP'}</div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading, #0f172a)', marginBottom: '0.5rem' }}>
              Program Agenda & Objectives
            </h4>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
              {program.description}
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
            <button
              className="btn-crimson"
              onClick={onClose}
              style={{ minWidth: '130px' }}
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;
