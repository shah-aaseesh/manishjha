import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export const DonationModal = ({ isOpen, onClose, amount }) => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    method: 'eSewa'
  });
  const [showQR, setShowQR] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showQR) {
      setShowQR(true);
      return;
    }
    onClose();
    addToast(`Thank you, ${formData.name}! Your contribution of NRs ${parseInt(amount, 10).toLocaleString()} via ${formData.method} has been registered with official tax acknowledgment.`, 'success');
    setFormData({ name: '', email: '', phone: '', address: '', method: 'eSewa' });
    setShowQR(false);
  };

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Contribute to the Citizen Movement</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
        <div className="modal-body">
          <div style={{ background: 'rgba(230, 40, 70, 0.08)', borderRadius: '8px', padding: '1.25rem', textAlign: 'center', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Selected Contribution</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--accent-crimson)', margin: '0.2rem 0' }}>
              NRs {parseInt(amount, 10).toLocaleString()}
            </div>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
              100% transparent grassroots funding for parliamentary policy studies and youth leadership conclaves.
            </p>
          </div>

          {!showQR ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <input
                type="text"
                placeholder="Full Name (पूरा नाम)"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email Address for Official Receipt"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="City (e.g. Kathmandu, Janakpur)"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.25rem' }}>
                Select Preferred Nepali Payment Gateway:
              </label>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {['eSewa', 'Khalti', 'ConnectIPS', 'Fonepay'].map((method) => (
                  <label
                    key={method}
                    style={{
                      border: formData.method === method ? '2px solid var(--accent-crimson)' : '1px solid #cbd5e1',
                      background: formData.method === method ? 'rgba(230, 40, 70, 0.05)' : '#ffffff',
                      borderRadius: '6px',
                      padding: '0.6rem 0.25rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: formData.method === method ? 'var(--accent-crimson)' : '#334155'
                    }}
                  >
                    <input
                      type="radio"
                      name="payment-method"
                      value={method}
                      checked={formData.method === method}
                      onChange={() => setFormData({ ...formData, method })}
                      style={{ display: 'none' }}
                    />
                    {method}
                  </label>
                ))}
              </div>

              <button type="submit" className="btn-crimson" style={{ width: '100%', marginTop: '0.5rem' }}>
                Proceed to Payment Verification
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.25rem', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Scan & Pay via {formData.method} QR
                </div>
                <div style={{ background: '#ffffff', width: '160px', height: '160px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #e2e8f0', borderRadius: '8px' }}>
                  <i className="fa-solid fa-qrcode" style={{ fontSize: '7rem', color: '#1e293b' }}></i>
                </div>
                <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#64748b' }}>
                  Account: <strong>Manish Jha Parliamentary Research Fund</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-crimson)', fontWeight: 700, marginTop: '2px' }}>
                  Reference: MJ-DON-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>

              <button className="btn-crimson" onClick={handleSubmit} style={{ width: '100%', marginBottom: '0.5rem' }}>
                Confirm Payment Completed
              </button>
              <button className="btn-outline-dark" onClick={() => setShowQR(false)} style={{ width: '100%' }}>
                Back to Donor Info
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
