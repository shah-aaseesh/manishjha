import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';

export const ContactPage = ({ onBackHome }) => {
  const { profile, contactLocations } = siteData;
  const { lang, toggleLang } = useTheme();
  const { showToast } = useToast();

  const [copiedItem, setCopiedItem] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    showToast(lang === 'np' ? `प्रतिलिपि गरियो: ${text}` : `Copied to clipboard: ${text}`, 'info');
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const { kathmandu, janakpur } = contactLocations;

  return (
    <div className="human-bio-page contact-clean-page">
      
      {/* 1. Official Secretariat Header */}
      <section className="contact-editorial-header">
        <div className="container">
          <div className="editorial-header-inner">
            <div className="parliament-sub-badge">
              <i className="fa-solid fa-landmark-dome"></i>
              <span>{lang === 'np' ? 'सङ्घीय संसद् सचिवालय तथा निर्वाचन क्षेत्र' : 'Federal Parliament of Nepal • Official Citizen Portal'}</span>
            </div>
            <h1 className="editorial-page-title">
              {lang === 'np' ? 'सम्पर्क तथा नागरिक सचिवालय' : 'Contact & Secretariat'}
            </h1>
            <p className="editorial-page-sub">
              {lang === 'np'
                ? 'केन्द्रीय संसदीय सचिवालय (सिंहदरबार, काठमाडौँ) तथा धनुषा–३ निर्वाचन क्षेत्र कार्यालय (जनकपुरधाम) सँगको प्रत्यक्ष नागरिक संवाद।'
                : 'Direct communication channels for legislative proposals, public policy consultations, and on-ground citizen services in Dhanusha–3.'}
            </p>

            <div className="contact-editorial-links">
              <a href="#kathmandu-office" className="editorial-link-btn">
                <i className="fa-solid fa-building-columns"></i>
                <span>{lang === 'np' ? 'काठमाडौँ सचिवालय' : 'Kathmandu Secretariat'}</span>
              </a>
              <a href="#janakpur-office" className="editorial-link-btn">
                <i className="fa-solid fa-location-dot"></i>
                <span>{lang === 'np' ? 'जनकपुर क्षेत्र कार्यालय (४ सम्पर्क)' : 'Janakpur Office (4 Contacts)'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dual Locations Master Section */}
      <section className="human-section contact-locations-section">
        <div className="container">
          
          {/* ========================================================================= */}
          {/* LOCATION 1: KATHMANDU CENTRAL SECRETARIAT (With Phone, Email, & Map) */}
          {/* ========================================================================= */}
          <div className="contact-location-block" id="kathmandu-office">
            <div className="location-block-header">
              <div className="location-badge-pill kathmandu-badge">
                <i className="fa-solid fa-landmark-dome"></i>
                <span>{lang === 'np' ? 'केन्द्रीय संसदीय कार्यालय' : 'Central Parliamentary Secretariat'}</span>
              </div>
              <h2 className="location-block-title">
                {lang === 'np' ? kathmandu.titleNp : kathmandu.title}
              </h2>
              <p className="location-block-subtitle">
                {lang === 'np' ? kathmandu.taglineNp : kathmandu.tagline}
              </p>
            </div>

            <div className="kathmandu-location-grid">
              
              {/* Left Column: Contact Details & Info */}
              <div className="kathmandu-info-card">
                
                <div className="contact-info-list">
                  
                  {/* Address */}
                  <div className="contact-info-item">
                    <div className="info-icon-box crimson-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="info-content">
                      <span className="info-label">{lang === 'np' ? 'कार्यालयको ठेगाना' : 'Physical Address'}</span>
                      <p className="info-val">{lang === 'np' ? kathmandu.addressNp : kathmandu.address}</p>
                      <a
                        href={kathmandu.mapDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-sub-link"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        <span>{lang === 'np' ? 'गुगल म्यापमा हेर्नुहोस्' : 'Open in Google Maps'}</span>
                      </a>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="contact-info-item">
                    <div className="info-icon-box navy-icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="info-content">
                      <span className="info-label">{lang === 'np' ? 'सम्पर्क टेलिफोन' : 'Direct Phone Lines'}</span>
                      <div className="info-val-links">
                        {kathmandu.phones.map((phone, idx) => (
                          <div key={idx} className="phone-line-wrap">
                            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="phone-clickable">
                              <i className="fa-solid fa-phone"></i>
                              <span>{phone}</span>
                            </a>
                            <button
                              className="btn-copy-small"
                              onClick={() => handleCopy(phone, `ktm-phone-${idx}`)}
                              title="Copy Phone"
                            >
                              <i className={copiedItem === `ktm-phone-${idx}` ? "fa-solid fa-check text-green" : "fa-regular fa-copy"}></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="contact-info-item">
                    <div className="info-icon-box emerald-icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="info-content">
                      <span className="info-label">{lang === 'np' ? 'आधिकारिक इमेल ठेगाना' : 'Official Contact Email'}</span>
                      <div className="info-val-links">
                        <div className="email-line-wrap">
                          <a href={`mailto:${kathmandu.email}`} className="email-clickable">
                            <i className="fa-solid fa-envelope"></i>
                            <span>{kathmandu.email}</span>
                          </a>
                          <button
                            className="btn-copy-small"
                            onClick={() => handleCopy(kathmandu.email, 'ktm-email-1')}
                            title="Copy Email"
                          >
                            <i className={copiedItem === 'ktm-email-1' ? "fa-solid fa-check text-green" : "fa-regular fa-copy"}></i>
                          </button>
                        </div>
                        {kathmandu.emailAlt && (
                          <div className="email-line-wrap">
                            <a href={`mailto:${kathmandu.emailAlt}`} className="email-clickable">
                              <i className="fa-regular fa-paper-plane"></i>
                              <span>{kathmandu.emailAlt}</span>
                            </a>
                            <button
                              className="btn-copy-small"
                              onClick={() => handleCopy(kathmandu.emailAlt, 'ktm-email-2')}
                              title="Copy Email"
                            >
                              <i className={copiedItem === 'ktm-email-2' ? "fa-solid fa-check text-green" : "fa-regular fa-copy"}></i>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column: High-Res Interactive Map Embed */}
              <div className="kathmandu-map-card">
                <div className="map-iframe-container">
                  <iframe
                    src={kathmandu.mapEmbedUrl}
                    title="Kathmandu Office Location - Ram Chandra Marg, Battisputali"
                    className="kathmandu-map-iframe"
                    loading="lazy"
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>


          {/* ========================================================================= */}
          {/* LOCATION 2: JANAKPUR CONSTITUENCY CIVIC OFFICE (With 4 Working Staff) */}
          {/* ========================================================================= */}
          <div className="contact-location-block" id="janakpur-office">
            <div className="location-block-header">
              <div className="location-badge-pill janakpur-badge">
                <i className="fa-solid fa-wheat-awn"></i>
                <span>{lang === 'np' ? 'धनुषा–३ निर्वाचन क्षेत्र' : 'Dhanusha–3 Constituency'}</span>
              </div>
              <h2 className="location-block-title">
                {lang === 'np' ? janakpur.titleNp : janakpur.title}
              </h2>
              <p className="location-block-subtitle">
                {lang === 'np' ? janakpur.taglineNp : janakpur.tagline}
              </p>
            </div>

            {/* 4 Dedicated Staff Contacts Grid */}
            <div className="staff-roster-grid">
              {janakpur.staff.map((member) => (
                <div key={member.id} className="staff-roster-card">
                  <div className="staff-roster-top">
                    <div className="staff-monogram">
                      <span>{member.initials || member.index}</span>
                    </div>
                    <div className="staff-meta-col">
                      <h3 className="staff-roster-name">
                        {lang === 'np' ? member.nameNp || member.name : member.name}
                      </h3>
                      <span className="staff-roster-role">
                        {lang === 'np' ? member.roleNp || member.role : member.role}
                      </span>
                    </div>
                  </div>

                  <div className="staff-roster-footer">
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, '')}`}
                      className="staff-roster-phone-link"
                      title={`Call ${lang === 'np' ? member.nameNp : member.name}`}
                    >
                      <i className="fa-solid fa-phone"></i>
                      <span>{member.phone}</span>
                    </a>
                    <button
                      className="btn-roster-copy"
                      onClick={() => handleCopy(member.phone, `staff-phone-${member.id}`)}
                      title={lang === 'np' ? 'नम्बर कपी गर्नुहोस्' : 'Copy Phone Number'}
                      aria-label={`Copy phone for ${member.name}`}
                    >
                      <i className={copiedItem === `staff-phone-${member.id}` ? "fa-solid fa-check text-green" : "fa-regular fa-copy"}></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. Bottom Return / Emergency Help Banner */}
      <section className="human-contact-banner">
        <div className="container">
          <div className="human-contact-box">
            <div className="contact-box-left">
              <span className="contact-kicker">
                <i className="fa-solid fa-phone-volume"></i>
                {lang === 'np' ? 'सिधा हेल्पलाइन' : 'Direct Parliamentary Hotline'}
              </span>
              <h3 className="contact-heading">
                {lang === 'np'
                  ? 'तत्काल सहयोग वा प्रत्यक्ष संवादका लागि'
                  : 'Need Immediate Parliamentary Assistance?'}
              </h3>
              <p className="contact-desc">
                {lang === 'np'
                  ? 'सचिवालय टेलिफोन लाइन वा आधिकारिक इमेलमार्फत सम्पर्क गर्नुहोस्।'
                  : 'Reach our Federal Parliament secretariat directly via official hotlines or return to the homepage.'}
              </p>
            </div>

            <div className="contact-box-actions">
              <a href={`tel:${kathmandu.phones[0].replace(/\s+/g, '')}`} className="btn-contact-action-primary">
                <i className="fa-solid fa-phone"></i>
                <span>{lang === 'np' ? `कल गर्नुहोस्: ${kathmandu.phones[0]}` : `Call: ${kathmandu.phones[0]}`}</span>
              </a>
              <button className="btn-contact-action-secondary" onClick={onBackHome}>
                <i className="fa-solid fa-arrow-left"></i>
                <span>{lang === 'np' ? 'गृहपृष्ठमा फर्कनुहोस्' : 'Return to Home'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
