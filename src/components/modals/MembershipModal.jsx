import React from 'react';

export const MembershipModal = ({ isOpen, onClose, memberData }) => {
  if (!isOpen || !memberData) return null;

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Official Supporter Digital Card</h3>
            <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>Election 2084 Citizen Movement</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
        <div className="modal-body" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', color: '#10b981', marginBottom: '0.25rem' }}>
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <h3 style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-main)' }}>Official Supporter Registered</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
            Your digital pass has been activated in the Election 2084 citizen network database.
          </p>

          {/* High Fidelity Supporter Digital Card */}
          <div className="membership-card-preview" id="supporter-pass-card">
            <div className="member-card-header">
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.08em', display: 'block' }}>HON. MANISH JHA</span>
                <span style={{ fontSize: '0.65rem', opacity: 0.8, letterSpacing: '0.05em' }}>MEMBER OF FEDERAL PARLIAMENT</span>
              </div>
              <span className="member-badge-pill">OFFICIAL SUPPORTER</span>
            </div>

            <div className="member-card-body">
              <div className="member-avatar-placeholder">
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                  {memberData.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                </span>
              </div>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>{memberData.name}</div>
                <div style={{ fontSize: '0.78rem', color: '#ffd6de', fontFamily: 'monospace', marginTop: '2px' }}>
                  ID: {memberData.id}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>
                  <i className="fa-solid fa-location-dot" style={{ marginRight: '4px' }}></i>
                  {memberData.province || 'National Supporter'}
                </div>
              </div>
              <div className="member-card-qr">
                <i className="fa-solid fa-qrcode" style={{ fontSize: '2.5rem', color: '#ffffff', opacity: 0.9 }}></i>
              </div>
            </div>

            <div className="member-card-footer-strip">
              <span>Issued: {memberData.issueDate || '2026'}</span>
              <span>Vision: <strong>Election 2084</strong></span>
              <span>Status: <strong>Active</strong></span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button className="btn-crimson" onClick={() => window.print()}>
              <i className="fa-solid fa-print" style={{ marginRight: '6px' }}></i> Print Pass
            </button>
            <button className="btn-outline-dark" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
