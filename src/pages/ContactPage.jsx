import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';

export const ContactPage = ({ onBackHome }) => {
  const { profile, contactLocations } = siteData;
  const { lang, toggleLang } = useTheme();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    targetOffice: 'kathmandu',
    purpose: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      showToast(lang === 'np' ? 'कृपया नाम र सन्देश भर्नुहोस्।' : 'Please enter your name and message.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast(
        lang === 'np'
          ? 'तपाईंको सन्देश सफलतापूर्वक पठाइयो। हाम्रो सचिवालयले छिट्टै सम्पर्क गर्नेछ।'
          : 'Your message has been sent successfully. Our secretariat team will be in touch shortly.',
        'success'
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        targetOffice: 'kathmandu',
        purpose: 'general',
        message: ''
      });
    }, 900);
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
              <a href="#message-desk" className="editorial-link-btn primary">
                <i className="fa-regular fa-paper-plane"></i>
                <span>{lang === 'np' ? 'सिधा सन्देश पठाउनुहोस्' : 'Send Correspondence'}</span>
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

          {/* ========================================================================= */}
          {/* 3. DIRECT CITIZEN INQUIRY & MESSAGE FORM */}
          {/* ========================================================================= */}
          <div className="contact-form-section-wrap" id="message-desk">
            <div className="contact-form-grid">
              
              {/* Form Left Side: Context & Direct Assurance */}
              <div className="form-context-col">
                <div className="section-badge-pill">
                  <i className="fa-regular fa-paper-plane"></i>
                  <span>{lang === 'np' ? 'प्रत्यक्ष नागरिक सन्देश' : 'Direct Message Desk'}</span>
                </div>
                <h3 className="form-context-title">
                  {lang === 'np' ? 'संसदीय सचिवालयमा सिधै पत्र वा सुझाव पठाउनुहोस्' : 'Send an Official Correspondence or Policy Inquiry'}
                </h3>
                <p className="form-context-desc">
                  {lang === 'np'
                    ? 'तपाईंको सन्देश सिधै काठमाडौँ वा जनकपुरधाम सचिवालयको आधिकारिक इनबक्समा दर्ता हुनेछ। प्रत्येक सन्देशको अध्ययन गरी उपयुक्त समयमा जवाफ दिइनेछ।'
                    : 'Whether you have legislative recommendations, Dhanusha–3 constituency issues, or media interview requests, submit your correspondence directly to our secretarial desks.'}
                </p>

                <div className="contact-commitments-list">
                  <div className="commitment-item">
                    <i className="fa-solid fa-circle-check text-crimson"></i>
                    <div>
                      <strong>{lang === 'np' ? 'गोपनीयता र सुरक्षा' : 'Confidential & Direct'}</strong>
                      <span>{lang === 'np' ? 'नागरिकका व्यक्तिगत विवरण पूर्ण गोप्य राखिन्छ।' : 'All citizen correspondences are handled with institutional confidentiality.'}</span>
                    </div>
                  </div>
                  <div className="commitment-item">
                    <i className="fa-solid fa-circle-check text-crimson"></i>
                    <div>
                      <strong>{lang === 'np' ? 'छिटो सम्बोधन' : 'Timely Response'}</strong>
                      <span>{lang === 'np' ? 'सम्बन्धित सचिवालय अधिकृतद्वारा २४–४८ घण्टाभित्र समीक्षा।' : 'Reviewed by designated secretariat staff within 24–48 hours.'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Right Side: Interactive Inputs */}
              <div className="form-inputs-col">
                <form className="contact-actual-form" onSubmit={handleSubmit}>
                  
                  {submitted && (
                    <div className="form-success-alert">
                      <i className="fa-solid fa-circle-check"></i>
                      <span>
                        {lang === 'np'
                          ? 'धन्यवाद! तपाईंको सन्देश सचिवालयमा दर्ता भयो।'
                          : 'Thank you! Your message has been submitted to the secretariat.'}
                      </span>
                    </div>
                  )}

                  <div className="form-row-dual">
                    <div className="form-group">
                      <label htmlFor="contact-name">
                        {lang === 'np' ? 'पूरा नाम *' : 'Full Name *'}
                      </label>
                      <div className="input-icon-wrap">
                        <i className="fa-regular fa-user"></i>
                        <input
                          type="text"
                          id="contact-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={lang === 'np' ? 'तपाईंको पूरा नाम' : 'e.g. Ram Prasad Shrestha'}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone">
                        {lang === 'np' ? 'मोबाइल नम्बर' : 'Phone Number'}
                      </label>
                      <div className="input-icon-wrap">
                        <i className="fa-solid fa-phone"></i>
                        <input
                          type="tel"
                          id="contact-phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={lang === 'np' ? '+९७७ ९८००००००००' : '+977 9800000000'}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-row-dual">
                    <div className="form-group">
                      <label htmlFor="contact-email">
                        {lang === 'np' ? 'इमेल ठेगाना' : 'Email Address'}
                      </label>
                      <div className="input-icon-wrap">
                        <i className="fa-regular fa-envelope"></i>
                        <input
                          type="email"
                          id="contact-email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-target-office">
                        {lang === 'np' ? 'सम्बन्धित कार्यालय छनोट *' : 'Target Secretariat Office *'}
                      </label>
                      <div className="input-icon-wrap">
                        <i className="fa-solid fa-building-flag"></i>
                        <select
                          id="contact-target-office"
                          value={formData.targetOffice}
                          onChange={(e) => setFormData({ ...formData, targetOffice: e.target.value })}
                        >
                          <option value="kathmandu">
                            {lang === 'np' ? 'काठमाडौँ संसद् सचिवालय (National)' : 'Kathmandu Federal Secretariat (National)'}
                          </option>
                          <option value="janakpur">
                            {lang === 'np' ? 'जनकपुर निर्वाचन क्षेत्र कार्यालय (Dhanusha-3)' : 'Janakpur Constituency Office (Dhanusha-3)'}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-purpose">
                      {lang === 'np' ? 'सरोकारको विषय / उद्देश्य' : 'Purpose of Correspondence'}
                    </label>
                    <div className="input-icon-wrap">
                      <i className="fa-solid fa-tag"></i>
                      <select
                        id="contact-purpose"
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      >
                        <option value="general">{lang === 'np' ? 'सामान्य सुझाव तथा संवाद' : 'General Inquiry & Feedback'}</option>
                        <option value="legislative">{lang === 'np' ? 'संसदीय ऐन-कानुन तथा नीतिगत सुझाव' : 'Legislative & Policy Proposal'}</option>
                        <option value="constituency">{lang === 'np' ? 'धनुषा–३ विकास तथा नागरिक समस्या' : 'Dhanusha–3 Constituency Development / Grievance'}</option>
                        <option value="media">{lang === 'np' ? 'सञ्चार माध्यम / अन्तर्वार्ता समन्वय' : 'Press & Media Interview Request'}</option>
                        <option value="youth">{lang === 'np' ? 'युवा उद्यमशीलता तथा तालिम' : 'Youth / Agritech Project Inquiry'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">
                      {lang === 'np' ? 'तपाईंको सन्देश / विवरण *' : 'Your Detailed Message *'}
                    </label>
                    <textarea
                      id="contact-message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'np'
                          ? 'कृपया आफ्नो विषय वा सुझाव स्पष्ट रूपमा लेख्नुहोस्...'
                          : 'Please describe your query, legislative idea, or constituency matter in detail...'
                      }
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-crimson btn-submit-contact-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i>
                        <span>{lang === 'np' ? 'पठाउँदै...' : 'Transmitting...'}</span>
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane"></i>
                        <span>{lang === 'np' ? 'सचिवालयमा सन्देश पठाउनुहोस्' : 'Submit Correspondence to Secretariat'}</span>
                      </>
                    )}
                  </button>

                </form>
              </div>

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
