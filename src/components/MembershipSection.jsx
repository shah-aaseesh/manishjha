import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { useTheme } from '../context/ThemeContext';

export const MembershipSection = ({ onRegisterSuccess }) => {
  const { addToast } = useToast();
  const { lang } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    province: 'Madhesh Province'
  });

  const provinces = [
    'Koshi Province',
    'Madhesh Province',
    'Bagmati Province',
    'Gandaki Province',
    'Lumbini Province',
    'Karnali Province',
    'Sudurpashchim Province',
    'Nepali Diaspora (Global)'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    const randomId = Math.floor(1000 + Math.random() * 9000);
    const memberData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || 'N/A',
      province: formData.province,
      id: `MJ-2084-${randomId}`,
      issueDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };

    if (onRegisterSuccess) {
      onRegisterSuccess(memberData);
    }

    addToast(`Welcome to the movement, ${formData.name}! Your Digital Supporter ID has been issued.`, 'success');
  };

  return (
    <section className="membership-section" id="membership">
      <div className="container membership-grid-wrap">
        
        {/* Left: Interactive Registration Form */}
        <div className="membership-box-wrap">
          <div className="membership-subtitle">
            <i className="fa-solid fa-id-card"></i>
            <span>{lang === 'np' ? 'नागरिक सहभागिता' : 'Citizen Movement'}</span>
          </div>
          <h2 className="membership-heading">
            {lang === 'np' ? 'डिजिटल समर्थक सदस्यता लिनुहोस्' : 'Become an Official Supporter'}
          </h2>
          <p className="membership-description">
            {lang === 'np'
              ? 'सुशासन, पारदर्शिता र नेपालको आर्थिक रूपान्तरणको यस ऐतिहासिक अभियानमा जोडिनुहोस् र आफ्नो डिजिटल सदस्यता प्राप्त गर्नुहोस्।'
              : 'Join tens of thousands of active citizens shaping evidence-based policies, community monitoring, and Election 2084 grassroots momentum.'}
          </p>

          <form className="membership-form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <input
                type="text"
                className="membership-input"
                placeholder={lang === 'np' ? 'पूरा नाम (Full Name)' : 'Your Full Name'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                className="membership-input"
                placeholder={lang === 'np' ? 'इमेल (Email Address)' : 'Email Address'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group-row">
              <input
                type="tel"
                className="membership-input"
                placeholder={lang === 'np' ? 'मोबाइल नम्बर (Phone Number)' : 'Mobile Phone (Optional)'}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <select
                className="membership-input membership-select"
                value={formData.province}
                onChange={(e) => setFormData({ ...formData, province: e.target.value })}
              >
                {provinces.map((prov) => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-crimson membership-btn">
              <i className="fa-solid fa-sparkles"></i>
              <span>{lang === 'np' ? 'सदस्यता कार्ड प्राप्त गर्नुहोस्' : 'GENERATE SUPPORTER CARD'}</span>
            </button>
          </form>
        </div>

        {/* Right: Real-time Live Supporter Card Preview */}
        <div className="membership-live-preview-box">
          <div className="preview-heading-label">
            <i className="fa-solid fa-eye"></i>
            <span>Live Digital Card Preview</span>
          </div>
          
          <div className="supporter-live-card">
            <div className="card-top-strip">
              <div className="card-brand">
                <span className="card-brand-name">MANISH JHA</span>
                <span className="card-brand-sub">CITIZEN MOVEMENT</span>
              </div>
              <span className="card-type-badge">OFFICIAL SUPPORTER</span>
            </div>

            <div className="card-center-row">
              <div className="card-user-avatar">
                {formData.name ? (
                  <span className="avatar-initials">
                    {formData.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                  </span>
                ) : (
                  <i className="fa-solid fa-user"></i>
                )}
              </div>
              <div className="card-user-info">
                <div className="card-name-display">
                  {formData.name || 'Your Full Name'}
                </div>
                <div className="card-meta-text">
                  <span>ID: <strong>MJ-2084-PREVIEW</strong></span>
                </div>
                <div className="card-province-tag">
                  <i className="fa-solid fa-location-dot"></i> {formData.province}
                </div>
              </div>
            </div>

            <div className="card-bottom-strip">
              <div className="card-validity">Election 2084 Grassroots Network</div>
              <div className="card-qr-dummy">
                <i className="fa-solid fa-qrcode"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
