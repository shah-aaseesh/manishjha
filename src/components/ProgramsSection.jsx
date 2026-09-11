import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const ProgramsSection = ({ onViewProgram, onContactClick }) => {
  const { programs = [], pastPrograms = [] } = siteData;
  const { lang } = useTheme();
  
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'past'
  const featuredProgram = programs[0] || null;
  const gridPrograms = programs.slice(1);

  const parseDateBadge = (dateStr) => {
    const parts = dateStr.split(' ');
    if (parts.length >= 2) {
      const day = parts[0];
      const month = parts[1].replace(',', '').substring(0, 3).toUpperCase();
      const year = parts[2] || '2026';
      return { day, month, year };
    }
    return { day: '18', month: 'SEP', year: '2026' };
  };

  return (
    <section className="programs-section" id="programs">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge-pill">
            <i className="fa-solid fa-calendar-check"></i>
            <span>{lang === 'np' ? 'नागरिक संवाद तथा नीति मञ्च' : 'Civic Conclaves & Townhalls'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'np' ? (
              <>संसदीय संवाद र <span className="text-crimson">नागरिक अन्तरक्रिया</span></>
            ) : (
              <>Direct Parliamentary & <span className="text-crimson">Civic Dialogues</span></>
            )}
          </h2>
          <p className="section-subtitle">
            {lang === 'np'
              ? 'संसदीय नीति निर्माण, पारदर्शी सुशासन, युवा उद्यमशीलता र स्थानीय विकासका लागि सातै प्रदेशमा सञ्चालन हुने प्रत्यक्ष नागरिक संवाद कार्यक्रमहरू।'
              : 'Empowering communities through evidence-based policymaking, transparent governance townhalls, and youth development forums across Nepal.'}
          </p>

          {/* Main Tab Switcher */}
          <div className="programs-nav-tabs">
            <button
              className={`programs-tab-item ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              <i className="fa-regular fa-calendar-plus"></i>
              <span>{lang === 'np' ? 'आगामी संवाद कार्यक्रमहरू' : 'Upcoming Townhalls'}</span>
              <span className="programs-tab-count">{programs.length}</span>
            </button>
            <button
              className={`programs-tab-item ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>{lang === 'np' ? 'सम्पन्न कार्यक्रम अभिलेख' : 'Past Conclaves Archive'}</span>
              <span className="programs-tab-count">{pastPrograms.length}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: UPCOMING PROGRAMS */}
        {activeTab === 'upcoming' && (
          <div className="programs-content-wrap">
            
            {/* Featured Flagship Card */}
            {featuredProgram && (
              <div className="program-spotlight-card">
                <div className="spotlight-media-wrap">
                  <img
                    src={featuredProgram.image}
                    alt={featuredProgram.title}
                    className="spotlight-img"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/images/photos/manish-panel-speaking.jpeg';
                    }}
                  />
                  <div className="spotlight-badge-overlay">
                    <span className="live-pulse-dot"></span>
                    <span>{lang === 'np' ? 'विशेष मुख्य संवाद' : 'Flagship National Conclave'}</span>
                  </div>
                  <div className="spotlight-date-badge">
                    {(() => {
                      const d = parseDateBadge(featuredProgram.date);
                      return (
                        <>
                          <span className="date-day">{d.day}</span>
                          <span className="date-month">{d.month}</span>
                          <span className="date-year">{d.year}</span>
                        </>
                      );
                    })()}
                  </div>
                </div>

                <div className="spotlight-info-wrap">
                  <div className="spotlight-meta-top">
                    <span className="spotlight-province-pill">
                      <i className="fa-solid fa-map-pin"></i> {featuredProgram.province}
                    </span>
                    <span className="spotlight-category-pill">
                      <i className="fa-solid fa-landmark-dome"></i> {lang === 'np' ? 'संसदीय संवाद' : 'Civic Policy Dialogue'}
                    </span>
                  </div>

                  <h3
                    className="spotlight-title"
                    onClick={() => onViewProgram && onViewProgram(featuredProgram)}
                  >
                    {lang === 'np' && featuredProgram.titleNp ? featuredProgram.titleNp : featuredProgram.title}
                  </h3>

                  <p className="spotlight-desc">
                    {featuredProgram.description}
                  </p>

                  <div className="spotlight-specs-grid">
                    <div className="spec-item">
                      <div className="spec-icon"><i className="fa-regular fa-clock"></i></div>
                      <div className="spec-text">
                        <span className="spec-label">{lang === 'np' ? 'समय' : 'Time'}</span>
                        <span className="spec-val">{featuredProgram.time}</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-icon"><i className="fa-solid fa-location-dot"></i></div>
                      <div className="spec-text">
                        <span className="spec-label">{lang === 'np' ? 'स्थान' : 'Venue'}</span>
                        <span className="spec-val">{featuredProgram.venue || featuredProgram.location}</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-icon"><i className="fa-solid fa-microphone-lines"></i></div>
                      <div className="spec-text">
                        <span className="spec-label">{lang === 'np' ? 'प्रमुख वक्ता' : 'Speaker'}</span>
                        <span className="spec-val">{featuredProgram.speaker || 'Hon. Manish Jha, MP'}</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-icon"><i className="fa-solid fa-users-line"></i></div>
                      <div className="spec-text">
                        <span className="spec-label">{lang === 'np' ? 'प्रकृति' : 'Format'}</span>
                        <span className="spec-val">{lang === 'np' ? 'प्रत्यक्ष नागरिक संवाद' : 'Public Civic Dialogue'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="spotlight-actions-row">
                    <button
                      className="btn-crimson btn-spotlight-details-main"
                      onClick={() => onViewProgram && onViewProgram(featuredProgram)}
                    >
                      <i className="fa-solid fa-circle-info"></i>
                      <span>{lang === 'np' ? 'कार्यक्रम विवरण हेर्नुहोस्' : 'View Program Details'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Grid of Other Upcoming Programs */}
            <div className="programs-cards-grid">
              {gridPrograms.map((prog) => {
                const dateBadge = parseDateBadge(prog.date);

                return (
                  <div key={prog.id} className="program-card">
                    {/* Card Media */}
                    <div
                      className="program-card-media"
                      onClick={() => onViewProgram && onViewProgram(prog)}
                    >
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="card-media-img"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/assets/images/photos/manish-panel-speaking.jpeg';
                        }}
                      />
                      <div className="card-date-badge">
                        <span className="card-date-day">{dateBadge.day}</span>
                        <span className="card-date-month">{dateBadge.month}</span>
                      </div>
                      <span className="card-province-tag">
                        <i className="fa-solid fa-location-dot"></i> {prog.province}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="program-card-body">
                      <div className="card-meta-row">
                        <span className="card-time-pill">
                          <i className="fa-regular fa-clock"></i> {prog.time}
                        </span>
                        <span className="card-format-pill">
                          <i className="fa-solid fa-landmark-dome"></i> {lang === 'np' ? 'नीति संवाद' : 'Policy Dialogue'}
                        </span>
                      </div>

                      <h4
                        className="program-card-title"
                        onClick={() => onViewProgram && onViewProgram(prog)}
                      >
                        {lang === 'np' && prog.titleNp ? prog.titleNp : prog.title}
                      </h4>

                      <p className="program-card-desc">
                        {prog.description}
                      </p>

                      <div className="card-venue-info">
                        <i className="fa-solid fa-building-columns"></i>
                        <span>{prog.venue || prog.location}</span>
                      </div>

                      <div className="program-card-footer">
                        <button
                          className="btn-crimson btn-card-details-full"
                          onClick={() => onViewProgram && onViewProgram(prog)}
                        >
                          <i className="fa-solid fa-circle-info"></i>
                          <span>{lang === 'np' ? 'विवरण हेर्नुहोस्' : 'View Details'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: PAST TOWNHALLS ARCHIVE */}
        {activeTab === 'past' && (
          <div className="programs-content-wrap">
            <div className="past-programs-grid">
              {pastPrograms.map((past) => (
                <div key={past.id} className="past-program-card">
                  <div className="past-card-media">
                    <img
                      src={past.image}
                      alt={past.title}
                      className="past-img"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/assets/images/photos/manish-panel-speaking.jpeg';
                      }}
                    />
                    <span className="past-status-badge">
                      <i className="fa-solid fa-circle-check"></i> {lang === 'np' ? 'सम्पन्न' : 'Concluded'}
                    </span>
                    <span className="past-attendee-badge">
                      <i className="fa-solid fa-users-viewfinder"></i> {past.attendees}
                    </span>
                  </div>

                  <div className="past-card-body">
                    <div className="past-meta-top">
                      <span className="past-date"><i className="fa-regular fa-calendar"></i> {past.date}</span>
                      <span className="past-location"><i className="fa-solid fa-location-dot"></i> {past.location}</span>
                    </div>

                    <h4 className="past-title">
                      {lang === 'np' && past.titleNp ? past.titleNp : past.title}
                    </h4>

                    <div className="past-outcome-box">
                      <div className="outcome-header">
                        <i className="fa-solid fa-bullhorn"></i>
                        <span>{lang === 'np' ? 'संवाद निष्कर्ष तथा उपलब्धि' : 'Key Outcome & Impact'}</span>
                      </div>
                      <p className="outcome-text">
                        {lang === 'np' && past.outcomeNp ? past.outcomeNp : past.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProgramsSection;
