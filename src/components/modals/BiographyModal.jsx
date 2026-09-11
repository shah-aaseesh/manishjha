import React from 'react';
import { siteData } from '../../data/siteData';
import { useTheme } from '../../context/ThemeContext';

export const BiographyModal = ({ isOpen, onClose }) => {
  const { profile } = siteData;
  const { lang } = useTheme();

  if (!isOpen) return null;

  const bioParagraphs = lang === 'np' ? profile.fullBioNp : profile.fullBio;

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog modal-dialog-large bio-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn bio-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Modal Header */}
        <div className="bio-modal-header">
          <div className="bio-modal-avatar-wrap">
            <img
              src="/assets/images/profile.jpg"
              alt={profile.name}
              className="bio-modal-avatar"
              decoding="async"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/images/photos/manish-portrait-parliament.jpeg';
              }}
            />
          </div>
          <div className="bio-modal-meta">
            <span className="bio-badge-founder">
              <i className="fa-solid fa-award"></i>
              {lang === 'np' ? profile.titleNp : profile.title}
            </span>
            <h2 className="bio-modal-name">
              {lang === 'np' ? profile.nameNp : profile.name}
            </h2>
            <p className="bio-modal-role">
              {lang === 'np' ? profile.roleNp : profile.role}
            </p>
            <span className="bio-party-pill">
              <i className="fa-solid fa-shield-halved"></i>
              {profile.party}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="bio-modal-body">
          {/* Section: Official Biography */}
          <div className="bio-section-block">
            <h3 className="bio-section-title">
              <i className="fa-solid fa-feather-pointed"></i>
              <span>{lang === 'np' ? 'आधिकारिक जीवनी' : 'Official Biography'}</span>
            </h3>
            <div className="bio-paragraphs-list">
              {bioParagraphs.map((para, idx) => (
                <p key={idx} className="bio-paragraph">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Section: Academic Background & Degrees */}
          <div className="bio-section-block">
            <h3 className="bio-section-title">
              <i className="fa-solid fa-graduation-cap"></i>
              <span>{lang === 'np' ? 'शैक्षिक योग्यता र उपाधि' : 'Academic Background & Degrees'}</span>
            </h3>
            <div className="bio-edu-grid">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="bio-edu-card">
                  <div className="bio-edu-icon">
                    <i className="fa-solid fa-certificate"></i>
                  </div>
                  <div className="bio-edu-info">
                    <h4>{edu.degree}</h4>
                    <span>{edu.field}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Key Leadership & Entrepreneurship */}
          <div className="bio-section-block">
            <h3 className="bio-section-title">
              <i className="fa-solid fa-briefcase"></i>
              <span>{lang === 'np' ? 'प्रमुख नेतृत्व तथा संलग्नता' : 'Key Leadership & Entrepreneurship'}</span>
            </h3>
            <div className="bio-positions-list">
              {profile.positions.map((pos, idx) => (
                <div key={idx} className="bio-position-item">
                  <div className="bio-pos-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="bio-pos-content">
                    <strong>{pos.role}</strong> — <span>{pos.org}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bio-modal-footer">
          <div className="bio-socials-row">
            <a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="Facebook" title="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href={profile.socials.messenger} target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="Messenger" title="Messenger Channel">
              <i className="fa-brands fa-facebook-messenger"></i>
            </a>
            <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="WhatsApp" title="WhatsApp Community">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="Instagram" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href={profile.socials.youtube} target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="YouTube" title="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
          <button className="btn-crimson" onClick={onClose}>
            {lang === 'np' ? 'बन्द गर्नुहोस्' : 'Close Biography'}
          </button>
        </div>
      </div>
    </div>
  );
};
