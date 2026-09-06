import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { useTheme } from '../context/ThemeContext';

export const NewsletterSection = () => {
  const { addToast } = useToast();
  const { lang } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    addToast(`Thank you ${formData.name}! You are now subscribed to MP Manish Jha's weekly parliamentary policy bulletin.`, 'success');
    setFormData({ name: '', email: '' });
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card-container">
          
          <div className="newsletter-brand-side">
            <div className="newsletter-subscriber-badge">
              <i className="fa-solid fa-users"></i>
              <span>24,500+ Weekly Citizens Subscribed</span>
            </div>
            <div className="newsletter-art-icon">
              <i className="fa-regular fa-envelope"></i>
              <i className="fa-solid fa-paper-plane plane-accent"></i>
            </div>
            <h2 className="newsletter-title">
              {lang === 'np' ? 'साप्ताहिक संसदीय बुलेटिन' : 'Parliamentary Weekly Bulletin'}
            </h2>
            <p className="newsletter-desc">
              {lang === 'np'
                ? 'संसदमा भएका बहसहरू, विधेयक संशोधनहरू र आगामी नागरिक कार्यक्रमहरूको नियमित ताजा जानकारी प्राप्त गर्नुहोस्।'
                : 'Direct legislative updates, policy summaries, upcoming citizen townhall dates, and op-eds delivered to your inbox.'}
            </p>
          </div>

          <div className="newsletter-form-card">
            <p className="newsletter-form-note">
              {lang === 'np'
                ? 'आफ्नो नाम र इमेल दर्ता गरी प्रत्यक्ष रूपमा नीति संवादमा जोडिनुहोस्। (कुनै स्पाम छैन)'
                : 'Enter your name and email to receive transparent, unfiltered parliamentary briefings. Zero spam.'}
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="newsletter-input"
                placeholder={lang === 'np' ? 'तपाईंको नाम (Full Name)' : 'Your Full Name'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                className="newsletter-input"
                placeholder={lang === 'np' ? 'इमेल ठेगाना (Email Address)' : 'Your Email Address'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <button type="submit" className="btn-crimson newsletter-btn">
                <i className="fa-solid fa-paper-plane"></i>
                <span>{lang === 'np' ? 'सदस्यता लिनुहोस्' : 'SUBSCRIBE NOW'}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
