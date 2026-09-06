import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const PrioritiesSection = ({ onContactClick }) => {
  const { priorities } = siteData;
  const { lang } = useTheme();
  const [selectedPriority, setSelectedPriority] = useState(null);

  return (
    <section className="priorities-section" id="priorities">
      <div className="container">
        <div className="section-header">
          <div className="section-badge-pill">
            <i className="fa-solid fa-landmark-dome"></i>
            <span>{lang === 'np' ? 'संसदीय दृष्टिकोण' : 'Legislative Roadmap'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'np' ? 'मुख्य नीतिगत प्राथमिकताहरू' : 'Key Legislative Priorities'}
          </h2>
          <p className="section-subtitle">
            {lang === 'np'
              ? 'प्रमाणमा आधारित नीति निर्माण, पारदर्शिता र नेपालको समावेशी आर्थिक समृद्धिको लागि रणनीतिक पहलहरू।'
              : 'Evidence-driven policy frameworks designed to accelerate good governance, youth employment, and regional economic prosperity.'}
          </p>
        </div>

        <div className="priorities-grid">
          {priorities.map((item, idx) => (
            <div
              key={item.id}
              className={`priority-card ${selectedPriority === item.id ? 'active' : ''}`}
              onClick={() => setSelectedPriority(selectedPriority === item.id ? null : item.id)}
            >
              <div className="priority-card-top">
                <div className="priority-icon-wrap">
                  <i className={item.icon}></i>
                </div>
                <span className="priority-badge-tag">{item.badge}</span>
              </div>

              <h3 className="priority-card-title">
                {lang === 'np' ? item.titleNp : item.title}
              </h3>

              <p className="priority-card-summary">{item.summary}</p>

              <div className="priority-expand-body">
                <div className="priority-details-box">
                  <p>{item.details}</p>
                </div>
              </div>

              <div className="priority-card-footer">
                <span className="priority-read-more">
                  {selectedPriority === item.id
                    ? (lang === 'np' ? 'कम देखाउनुहोस्' : 'Show Less')
                    : (lang === 'np' ? 'थप विवरण' : 'View Action Plan')}
                  <i className={`fa-solid ${selectedPriority === item.id ? 'fa-chevron-up' : 'fa-arrow-right'}`}></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="priorities-cta-banner">
          <div className="priorities-cta-content">
            <div className="cta-icon">
              <i className="fa-solid fa-comments"></i>
            </div>
            <div>
              <h4 className="cta-title">
                {lang === 'np' ? 'के तपाईंसँग कुनै नीतिगत सुझाव छ?' : 'Have a Legislative or Policy Suggestion?'}
              </h4>
              <p className="cta-desc">
                {lang === 'np'
                  ? 'संसदमा उठाउनुपर्ने विषयहरू र तपाईंको क्षेत्रका समस्याहरू हामीलाई पठाउनुहोस्।'
                  : 'Submit your ideas directly for upcoming parliamentary questions, private bills, and policy committees.'}
              </p>
            </div>
          </div>
          <button className="btn-crimson" onClick={onContactClick}>
            {lang === 'np' ? 'सुझाव पठाउनुहोस्' : 'Submit Policy Idea'}
          </button>
        </div>
      </div>
    </section>
  );
};
