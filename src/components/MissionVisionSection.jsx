import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const MissionVisionSection = ({ onReadMissionVision, onContactClick }) => {
  const { lang } = useTheme();

  return (
    <section className="mission-vision-section" id="mission-vision">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge-pill">
            <i className="fa-solid fa-landmark"></i>
            <span>{lang === 'np' ? 'ध्येय र दृष्टिकोण' : 'Mission & Vision'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'np' ? 'जनकपुर र नेपालको लागि मेरो दृष्टिकोण' : 'My Vision for Janakpur and Nepal'}
          </h2>
          <p className="section-subtitle">
            {lang === 'np'
              ? 'आफ्नो सम्पदाको संरक्षण गर्ने, अवसर सिर्जना गर्ने र भविष्य निर्माण गर्ने जनकपुर।'
              : 'A Janakpur that protects its heritage, creates opportunity and builds for the future.'}
          </p>
        </div>

        {/* 2-Column Split Feature Card */}
        <div className="mv-feature-wrapper">
          <div className="mv-feature-grid">
            
            {/* Left Column: Authentic Photography & Caption Frame */}
            <div className="mv-feature-media-col">
              <div className="mv-media-frame">
                <img
                  src="/assets/images/photos/manish-cultural-maithili.jpeg"
                  alt="Hon. Manish Jha in Janakpur"
                  className="mv-media-img"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/profile.jpg';
                  }}
                />
                <div className="mv-media-caption">
                  <div className="mv-caption-name">
                    {lang === 'np' ? 'माननीय मनिष झा' : 'Hon. Manish Jha, MP'}
                  </div>
                  <div className="mv-caption-role">
                    {lang === 'np'
                      ? 'प्रतिनिधिसभा सदस्य (धनुषा–३) • जनकपुरधाम'
                      : 'Member of Parliament (Dhanusha–3) • Janakpurdham'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Prose & Mission Quote */}
            <div className="mv-feature-content-col">
              <span className="mv-content-kicker">
                {lang === 'np' ? 'सार्वजनिक संकल्प' : 'Public Commitment'}
              </span>

              <h3 className="mv-content-lead">
                {lang === 'np'
                  ? 'आफ्नो सम्पदाको संरक्षण गर्ने, अवसर सिर्जना गर्ने र भविष्य निर्माण गर्ने जनकपुर।'
                  : 'A Janakpur that protects its heritage, creates opportunity and builds for the future.'}
              </h3>

              <p className="mv-content-prose">
                {lang === 'np'
                  ? 'मेरो दृष्टिकोण भनेको जनकपुरलाई संस्कृति, पर्यटन, शिक्षा र आर्थिक अवसरको केन्द्रका रूपमा विकास गर्नु हो, जहाँ नागरिकहरूले राम्रो पूर्वाधार, स्वास्थ्य सेवा र सार्वजनिक सेवाहरूको लाभ लिन सकून्।'
                  : 'My vision is to see Janakpur grow as a centre of culture, tourism, education and economic opportunity, while ensuring that its people benefit from better infrastructure, healthcare and public services.'}
              </p>

              {/* Prestigious Quote Body */}
              <div className="mv-quote-container">
                <div className="mv-quote-icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <blockquote className="mv-quote-text">
                  {lang === 'np'
                    ? 'मेरो ध्येय सरल छ: जनप्रतिनिधित्वलाई अर्थपूर्ण काम र मापनयोग्य परिणाममा रूपान्तरण गर्नु।'
                    : 'My mission is simple: to turn public representation into meaningful work and measurable results.'}
                </blockquote>
              </div>

              {/* Action Buttons */}
              <div className="mv-actions-row">
                <button
                  className="btn-crimson mv-btn-primary"
                  onClick={onReadMissionVision}
                  aria-label="Read My Mission & Vision"
                >
                  <span>{lang === 'np' ? 'मेरो ध्येय र दृष्टिकोण पढ्नुहोस्' : 'Read My Mission & Vision'}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>

                <button
                  className="btn-outline-dark mv-btn-secondary"
                  onClick={onContactClick}
                  aria-label="Contact Office"
                >
                  <i className="fa-regular fa-envelope"></i>
                  <span>{lang === 'np' ? 'सुझाव पठाउनुहोस्' : 'Share Suggestion'}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVisionSection;
