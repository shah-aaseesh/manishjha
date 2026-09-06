import React, { useState, useMemo } from 'react';
import { biographyData } from '../data/biographyData';
import { useTheme } from '../context/ThemeContext';

export const BiographySection = () => {
  const { lang } = useTheme();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState(null);

  const {
    narrative,
    milestonesTimeline,
    categories,
    academicJourney,
    professionalCareer,
    mediaCareer,
    socialCareer,
    politicalCareer
  } = biographyData;

  // Filtered timeline milestones
  const filteredMilestones = useMemo(() => {
    return milestonesTimeline.filter((item) => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        (item.titleNp && item.titleNp.toLowerCase().includes(query)) ||
        item.org.toLowerCase().includes(query) ||
        item.year.toLowerCase().includes(query) ||
        item.highlight.toLowerCase().includes(query);
      const matchesYear = !selectedYear || item.year.includes(selectedYear);
      return matchesTab && matchesSearch && matchesYear;
    });
  }, [milestonesTimeline, activeTab, searchTerm, selectedYear]);

  return (
    <section className="biography-page-section" id="biography">
      {/* Decorative ambient lighting */}
      <div className="bio-ambient-glow-1" />
      <div className="bio-ambient-glow-2" />

      <div className="container">
        {/* Section Header */}
        <div className="bio-page-header">
          <div className="bio-page-badge">
            <i className="fa-solid fa-compass"></i>
            <span>{lang === 'np' ? 'आधिकारिक जीवनवृत्त तथा कार्यदिशा' : 'Official Career Journey & Biography'}</span>
          </div>
          <h2 className="bio-page-title">
            {lang === 'np' ? 'मनिष झा — जीवन यात्रा र नेतृत्व' : 'Hon. Manish Jha — Career Journey & Leadership'}
          </h2>
          <p className="bio-page-lead">
            {lang === 'np' ? narrative.subtitleNp : narrative.subtitle}
          </p>
        </div>

        {/* 1. Career at a Glance Quick Stat Cards */}
        <div className="bio-stat-grid">
          <div className="bio-stat-card">
            <div className="bio-stat-icon-wrap crimson">
              <i className="fa-solid fa-landmark-dome"></i>
            </div>
            <div className="bio-stat-content">
              <span className="bio-stat-number">43,988</span>
              <span className="bio-stat-label">
                {lang === 'np' ? 'धनुषा–३ प्रत्यक्ष मत (२०२६)' : 'Direct Votes in Dhanusha–3 (2026)'}
              </span>
            </div>
          </div>

          <div className="bio-stat-card">
            <div className="bio-stat-icon-wrap navy">
              <i className="fa-solid fa-chart-pie"></i>
            </div>
            <div className="bio-stat-content">
              <span className="bio-stat-number">FACTS Nepal</span>
              <span className="bio-stat-label">
                {lang === 'np' ? 'संस्थापक (पहिलो एक्जिट पोल)' : 'Founder & First Exit Poll in Nepal'}
              </span>
            </div>
          </div>

          <div className="bio-stat-card">
            <div className="bio-stat-icon-wrap emerald">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="bio-stat-content">
              <span className="bio-stat-number">3 Masters</span>
              <span className="bio-stat-label">
                {lang === 'np' ? 'मार्केटिङ • राजनीति • मैथिली' : 'Marketing • Politics • Maithili'}
              </span>
            </div>
          </div>

          <div className="bio-stat-card">
            <div className="bio-stat-icon-wrap amber">
              <i className="fa-solid fa-earth-americas"></i>
            </div>
            <div className="bio-stat-content">
              <span className="bio-stat-number">USA • DE • JP</span>
              <span className="bio-stat-label">
                {lang === 'np' ? 'अन्तर्राष्ट्रिय कार्यकारी प्रशिक्षण' : 'Executive Training (Oklahoma, IAF, AOTS)'}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Interactive Category Tabs & Real-Time Search */}
        <div className="bio-controls-bar">
          <div className="bio-tabs-scroll-wrap">
            <div className="bio-tabs-list">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`bio-tab-pill ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setSelectedYear(null);
                  }}
                >
                  <i className={cat.icon}></i>
                  <span>{lang === 'np' ? cat.nameNp : cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Search */}
          <div className="bio-search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder={lang === 'np' ? 'माइलस्टोन, संस्था वा विषय खोज्नुहोस्...' : 'Search milestones, roles, institutions...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bio-search-input"
            />
            {searchTerm && (
              <button
                className="bio-search-clear"
                onClick={() => setSearchTerm('')}
                title="Clear Search"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>

        {/* 3. Main Content Display Area */}
        <div className="bio-content-container">
          {/* TAB 1: ALL MILESTONES / TIMELINE */}
          {activeTab === 'all' && (
            <div className="bio-timeline-view">
              <div className="bio-timeline-intro">
                <div className="bio-view-heading">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                  <h3>{lang === 'np' ? 'करियर माइलस्टोन यात्रा (२००३ – हालसम्म)' : 'Career Journey at a Glance (2003 – Present)'}</h3>
                </div>
                <span className="bio-count-pill">
                  {filteredMilestones.length} {lang === 'np' ? 'उपलब्धिहरू' : 'Milestones'}
                </span>
              </div>

              {filteredMilestones.length === 0 ? (
                <div className="bio-empty-search">
                  <i className="fa-regular fa-folder-open"></i>
                  <p>{lang === 'np' ? 'कुनै नतिजा फेला परेन। कृपया अर्को शब्द प्रयोग गर्नुहोस्।' : 'No matching milestones found. Try searching a different keyword.'}</p>
                  <button className="btn-my-biography" onClick={() => { setSearchTerm(''); setSelectedYear(null); }}>
                    {lang === 'np' ? 'सबै देखाउनुहोस्' : 'Reset Filters'}
                  </button>
                </div>
              ) : (
                <div className="bio-timeline-vertical">
                  {filteredMilestones.map((item, idx) => (
                    <div key={idx} className={`bio-timeline-node ${item.category}`}>
                      <div className="bio-node-year-badge">
                        <span>{item.year}</span>
                      </div>
                      <div className="bio-node-card">
                        <div className="bio-node-header">
                          <span className={`bio-node-cat-tag ${item.category}`}>
                            {item.category.toUpperCase()}
                          </span>
                          <span className="bio-node-location">
                            <i className="fa-solid fa-location-dot"></i> {item.location}
                          </span>
                        </div>
                        <h4 className="bio-node-title">
                          {lang === 'np' ? item.titleNp : item.title}
                        </h4>
                        <div className="bio-node-org">
                          <i className="fa-regular fa-building"></i>
                          <span>{item.org}</span>
                        </div>
                        <p className="bio-node-highlight">
                          {item.highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: POLITICAL CAREER */}
          {activeTab === 'political' && (
            <div className="bio-domain-view">
              <div className="bio-view-heading">
                <i className="fa-solid fa-landmark-dome"></i>
                <h3>{lang === 'np' ? 'राजनीतिक यात्रा र संसदीय नेतृत्व' : 'Political Career & Parliamentary Representation'}</h3>
              </div>
              <div className="bio-cards-grid">
                {politicalCareer.map((pol, idx) => (
                  <div key={idx} className="bio-editorial-card featured-border">
                    <div className="bio-card-top-strip">
                      <span className="bio-period-badge">
                        <i className="fa-regular fa-calendar-check"></i> {pol.period}
                      </span>
                      <span className="bio-badge-accent">{pol.badge}</span>
                    </div>
                    <h4 className="bio-card-title">
                      {lang === 'np' ? pol.roleNp : pol.role}
                    </h4>
                    <span className="bio-card-sub">
                      {lang === 'np' ? pol.phaseNp : pol.phase}
                    </span>
                    <p className="bio-card-body-text">
                      {lang === 'np' ? pol.detailsNp : pol.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PROFESSIONAL CAREER & FACTS NEPAL */}
          {activeTab === 'professional' && (
            <div className="bio-domain-view">
              <div className="bio-view-heading">
                <i className="fa-solid fa-chart-line"></i>
                <h3>{lang === 'np' ? 'व्यावसायिक नेतृत्व तथा फ्याक्ट्स नेपाल' : 'Professional Career & FACTS Nepal Leadership'}</h3>
              </div>
              <div className="bio-cards-grid">
                {professionalCareer.map((prof, idx) => (
                  <div key={idx} className="bio-editorial-card">
                    <div className="bio-card-top-strip">
                      <span className="bio-period-badge">{prof.period}</span>
                      <span className="bio-tag-chip">{prof.tag}</span>
                    </div>
                    <h4 className="bio-card-title">
                      {lang === 'np' ? prof.roleNp : prof.role}
                    </h4>
                    <span className="bio-card-sub">
                      {lang === 'np' ? prof.companyNp : prof.company}
                    </span>
                    <p className="bio-card-body-text">
                      {lang === 'np' ? prof.detailsNp : prof.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MEDIA & COMMENTARY */}
          {activeTab === 'media' && (
            <div className="bio-domain-view">
              <div className="bio-view-heading">
                <i className="fa-solid fa-microphone-lines"></i>
                <h3>{lang === 'np' ? 'सञ्चार माध्यम, टेलिभिजन र सार्वजनिक बहस' : 'Media Career, Broadcasting & Public Commentary'}</h3>
              </div>
              <div className="bio-media-grid">
                {mediaCareer.map((med, idx) => (
                  <div key={idx} className="bio-media-card">
                    <div className="bio-media-icon">
                      <i className={med.icon}></i>
                    </div>
                    <div className="bio-media-info">
                      <h4 className="bio-media-title">
                        {lang === 'np' ? med.titleNp : med.title}
                      </h4>
                      <span className="bio-media-platform">
                        {lang === 'np' ? med.platformNp : med.platform}
                      </span>
                      <p className="bio-media-desc">
                        {lang === 'np' ? med.descNp : med.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SOCIAL & YOUTH DEVELOPMENT */}
          {activeTab === 'social' && (
            <div className="bio-domain-view">
              <div className="bio-view-heading">
                <i className="fa-solid fa-users"></i>
                <h3>{lang === 'np' ? 'सामाजिक अभियान, युवा उद्यमशीलता र खेलकुद' : 'Social Initiatives, Youth Mentorship & Sports'}</h3>
              </div>
              <div className="bio-cards-grid">
                {socialCareer.map((soc, idx) => (
                  <div key={idx} className="bio-editorial-card">
                    <div className="bio-card-top-strip">
                      <span className="bio-tag-chip">{soc.org}</span>
                    </div>
                    <h4 className="bio-card-title">
                      {lang === 'np' ? soc.titleNp : soc.title}
                    </h4>
                    <p className="bio-card-body-text">
                      {lang === 'np' ? soc.descNp : soc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: ACADEMIC JOURNEY */}
          {activeTab === 'academic' && (
            <div className="bio-domain-view">
              <div className="bio-view-heading">
                <i className="fa-solid fa-graduation-cap"></i>
                <h3>{lang === 'np' ? 'शैक्षिक पृष्ठभूमि तथा अन्तर्राष्ट्रिय तालिम' : 'Academic Career, Degrees & International Executive Courses'}</h3>
              </div>

              {/* Degrees Section */}
              <div className="bio-sub-section">
                <h4 className="bio-sub-title">
                  <i className="fa-solid fa-award"></i>
                  <span>{lang === 'np' ? 'विश्वविद्यालय उपाधिहरू (Degrees)' : 'Higher Education Degrees'}</span>
                </h4>
                <div className="bio-degrees-list">
                  {academicJourney.degrees.map((deg, idx) => (
                    <div key={idx} className="bio-degree-card">
                      <div className="bio-deg-icon-box">
                        <i className="fa-solid fa-building-columns"></i>
                      </div>
                      <div className="bio-deg-details">
                        <h5 className="bio-deg-name">{lang === 'np' ? deg.degreeNp : deg.degree}</h5>
                        <span className="bio-deg-inst">
                          {lang === 'np' ? deg.institutionNp : deg.institution} • {deg.location}
                        </span>
                        <p className="bio-deg-desc">{lang === 'np' ? deg.descNp : deg.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Short Courses Section */}
              <div className="bio-sub-section mt-4">
                <h4 className="bio-sub-title">
                  <i className="fa-solid fa-globe"></i>
                  <span>{lang === 'np' ? 'अन्तर्राष्ट्रिय कार्यकारी तालिम (Specialised Short Courses)' : 'Specialised International Courses'}</span>
                </h4>
                <div className="bio-courses-grid">
                  {academicJourney.shortCourses.map((crs, idx) => (
                    <div key={idx} className="bio-course-card">
                      <div className="bio-course-header">
                        <span className="bio-course-year">{crs.year}</span>
                        <span className="bio-course-loc">{crs.location}</span>
                      </div>
                      <h5 className="bio-course-name">{lang === 'np' ? crs.courseNp : crs.course}</h5>
                      <span className="bio-course-inst">{crs.institution}</span>
                      <p className="bio-course-desc">{lang === 'np' ? crs.descNp : crs.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4. "From Business to Public Service" Editorial Narrative Banner */}
        <div className="bio-narrative-banner">
          <div className="bio-narrative-header">
            <span className="bio-narrative-badge">
              <i className="fa-solid fa-quote-left"></i>
              {lang === 'np' ? 'संक्षिप्त संश्लेषण' : 'Leadership Synthesis'}
            </span>
            <h3 className="bio-narrative-title">
              {lang === 'np' ? narrative.titleNp : narrative.title}
            </h3>
          </div>
          <div className="bio-narrative-body">
            {(lang === 'np' ? narrative.paragraphsNp : narrative.paragraphs).map((p, idx) => (
              <p key={idx} className="bio-narrative-p">
                {p}
              </p>
            ))}
          </div>
          <div className="bio-narrative-footer">
            <div className="bio-quote-callout">
              <i className="fa-solid fa-quote-left"></i>
              <span>
                {lang === 'np'
                  ? 'संस्था निर्माण, ज्ञानको सम्प्रेषण र जनताको विश्वास जितेर सार्वजनिक पदमा इमानदार सेवा।'
                  : 'Building businesses and institutions, generating and communicating knowledge, and representing people in public office.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
