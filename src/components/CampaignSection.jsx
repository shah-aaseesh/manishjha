import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { useTheme } from '../context/ThemeContext';

export const CampaignSection = ({ onViewDetailsClick }) => {
  const { days, hours, minutes, seconds } = useCountdown(23, 7, 37, 14);
  const { lang } = useTheme();

  return (
    <section className="campaign-section" id="campaign">
      <div className="container campaign-layout-grid">
        
        {/* Left / Center: Campaign Content Box */}
        <div className="campaign-content-box">
          <div className="campaign-tagline">
            <i className="fa-solid fa-flag"></i>
            <span>{lang === 'np' ? 'आगामी राष्ट्रिय अभियान' : 'National Vision & Mission'}</span>
          </div>
          <h2 className="campaign-headline">
            {lang === 'np' ? 'निर्वाचन २०८४ : समृद्ध नेपालको मार्गचित्र' : 'Election 2084 : Roadmap for Prosperity'}
          </h2>
          <p className="campaign-intro">
            {lang === 'np'
              ? 'पारदर्शिता, सुशासन, डिजिटल अर्थतन्त्र र युवा रोजगारीको सुनिश्चिततासहित समृद्ध नेपाल निर्माणको लागि नागरिक अभियान।'
              : 'Uniting citizens across all 7 provinces for transparent governance, youth leadership, and economic self-reliance.'}
          </p>

          {/* Diamond Countdown Badges */}
          <div className="countdown-diamonds-row">
            <div className="countdown-diamond-item">
              <div className="countdown-diamond-inner">
                <span className="countdown-val">{days}</span>
                <span className="countdown-lbl">{lang === 'np' ? 'दिन' : 'DAYS'}</span>
              </div>
            </div>
            <div className="countdown-diamond-item">
              <div className="countdown-diamond-inner">
                <span className="countdown-val">{hours}</span>
                <span className="countdown-lbl">{lang === 'np' ? 'घण्टा' : 'HOURS'}</span>
              </div>
            </div>
            <div className="countdown-diamond-item">
              <div className="countdown-diamond-inner">
                <span className="countdown-val">{minutes}</span>
                <span className="countdown-lbl">{lang === 'np' ? 'मिनेट' : 'MIN'}</span>
              </div>
            </div>
            <div className="countdown-diamond-item">
              <div className="countdown-diamond-inner">
                <span className="countdown-val">{seconds}</span>
                <span className="countdown-lbl">{lang === 'np' ? 'सेकेन्ड' : 'SEC'}</span>
              </div>
            </div>
          </div>

          {/* Vision Pillars Pill Row */}
          <div className="campaign-pillars-row">
            <span className="campaign-pillar-pill"><i className="fa-solid fa-check"></i> 100% Digital Procurement</span>
            <span className="campaign-pillar-pill"><i className="fa-solid fa-check"></i> 500,000 Tech & TVET Jobs</span>
            <span className="campaign-pillar-pill"><i className="fa-solid fa-check"></i> Solar Cold Chains</span>
            <span className="campaign-pillar-pill"><i className="fa-solid fa-check"></i> Clean Energy Export</span>
          </div>

          <div className="campaign-actions-row">
            <button className="btn-outline-white" onClick={onViewDetailsClick}>
              <i className="fa-solid fa-book-open" style={{ marginRight: '8px' }}></i>
              {lang === 'np' ? 'घोषणापत्र तथा विस्तृत विवरण' : 'VIEW MANIFESTO & DETAILS'}
            </button>
          </div>
        </div>

        {/* Right: Authentic Campaign Visual Showcase */}
        <div className="campaign-visual-showcase">
          <div className="campaign-poster-card">
            <img
              src="/assets/images/photos/manish-campaign-poster.jpeg"
              alt="Hon. Manish Jha Dhanusha-3 Mandate"
              className="campaign-poster-img"
            />
            <div className="campaign-poster-badge">
              <i className="fa-solid fa-bell"></i>
              <span>{lang === 'np' ? 'धनुषा क्षेत्र नं ३ — ४३,९८८ मत' : 'Dhanusha-3 • 43,988 Votes'}</span>
            </div>
          </div>

          <div className="campaign-rally-subcard">
            <img
              src="/assets/images/photos/manish-stadium-rally-crowd.jpeg"
              alt="Massive Civic Rally with Manish Jha"
              className="campaign-rally-img"
            />
            <div className="campaign-rally-badge">
              <i className="fa-solid fa-users"></i>
              <span>{lang === 'np' ? 'नागरिक ऐक्यबद्धता' : 'Grassroots Wave'}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CampaignSection;
