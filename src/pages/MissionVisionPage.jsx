import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { missionVisionData } from '../data/missionVisionData';

export const MissionVisionPage = ({ onBackHome, onContactClick }) => {
  const { lang, toggleLang } = useTheme();
  const { hero, vision, mission, representativeRole, futureVision } = missionVisionData;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="human-bio-page mv-full-page">
      
      {/* Leader's Vision Manifesto Hero */}
      <header className="human-hero-section">
        <div className="container">
          <div className="human-hero-grid">
            
            {/* Portrait Frame with Authentic Photo */}
            <div className="human-portrait-col">
              <div className="human-portrait-frame">
                <img
                  src="/assets/images/photos/manish-cultural-maithili.jpeg"
                  alt="Hon. Manish Jha in Janakpur"
                  className="human-portrait-img"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/photos/manish-portrait-parliament.jpeg';
                  }}
                />
                <div className="human-portrait-caption">
                  <strong>{lang === 'np' ? 'माननीय मनिष झा' : 'Hon. Manish Jha, MP'}</strong>
                  <span>{lang === 'np' ? 'प्रतिनिधिसभा सदस्य (धनुषा–३)' : 'House of Representatives, Nepal (Dhanusha–3)'}</span>
                </div>
              </div>
            </div>

            {/* Vision Manifesto Intro */}
            <div className="human-hero-text-col">
              <span className="human-kicker">
                {lang === 'np' ? 'आधिकारिक दृष्टिकोण तथा कार्ययोजना' : 'Official Manifesto & Public Record'}
              </span>

              <h1 className="human-title">
                {lang === 'np' ? 'ध्येय र दृष्टिकोण' : 'Mission & Vision'}
              </h1>

              <p className="human-subtitle">
                {lang === 'np' ? hero.taglineNp : hero.tagline}
              </p>

              <div className="human-intro-prose">
                {hero.intro.map((item, idx) => (
                  <p key={idx}>{lang === 'np' ? item.np : item.en}</p>
                ))}
              </div>

              {/* Core Commitment Pullquote */}
              <blockquote className="human-quote">
                <p>
                  {lang === 'np'
                    ? '“मेरो ध्येय स्पष्ट छ: जन–प्रतिनिधित्वलाई अर्थपूर्ण काम र प्रत्यक्ष परिणाममा रूपान्तरण गर्नु।”'
                    : '“My mission is simple: to turn public representation into meaningful work and measurable results.”'}
                </p>
                <cite>— Hon. Manish Jha, MP (Dhanusha–3)</cite>
              </blockquote>
            </div>

          </div>
        </div>
      </header>

      {/* 3. 4-Pillar Summary Ribbon */}
      <section className="human-stats-ribbon">
        <div className="container">
          <div className="human-stats-grid">
            <div className="human-stat-item">
              <span className="human-stat-val">{lang === 'np' ? 'मैथिली सम्पदा' : 'Mithila Heritage'}</span>
              <span className="human-stat-lbl">{lang === 'np' ? 'कला, संस्कृति, ऐतिहासिक स्थल र पोखरी संरक्षण' : 'Art, Culture, Historic Ponds & Monuments'}</span>
            </div>
            <div className="human-stat-item">
              <span className="human-stat-val">{lang === 'np' ? 'पर्यटन र पूर्वाधार' : 'Tourism & Transit'}</span>
              <span className="human-stat-lbl">{lang === 'np' ? 'आधुनिक कनेक्टिभिटी र सहरी विकास' : 'Regional Hub, Connectivity & Facilities'}</span>
            </div>
            <div className="human-stat-item">
              <span className="human-stat-val">{lang === 'np' ? 'युवा र अवसर' : 'Youth & Opportunity'}</span>
              <span className="human-stat-lbl">{lang === 'np' ? 'स्मार्ट शिक्षा, आधुनिक कृषि र उद्यमशीलता' : 'Smart Education, Agritech & Enterprise'}</span>
            </div>
            <div className="human-stat-item">
              <span className="human-stat-val">{lang === 'np' ? 'सुशासन र निष्ठा' : 'Good Governance'}</span>
              <span className="human-stat-lbl">{lang === 'np' ? 'जनताप्रति पूर्ण जवाफदेहिता र परिणाम' : 'Relentless Accountability & Oversight'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 1: My Vision for Janakpur & Nepal */}
      <section className="human-section" id="vision">
        <div className="container">
          
          <div className="human-section-header">
            <span className="section-eyebrow">
              {lang === 'np' ? 'मेरो दृष्टिकोण' : 'Strategic Vision'}
            </span>
            <h2 className="section-main-heading">
              {lang === 'np' ? 'सशक्त जनकपुर, समुन्नत भविष्य' : 'A Stronger Janakpur. A Better Future.'}
            </h2>
            <p className="section-main-sub">
              {lang === 'np' ? vision.leadNp : vision.lead}
            </p>
          </div>

          {/* 7 Vision Pillars Grid */}
          <div className="mv-vision-grid">
            {vision.points.map((pt, idx) => (
              <div key={pt.id} className="mv-vision-card">
                <div className="mv-card-top-row">
                  <span className="mv-vision-badge">0{idx + 1}</span>
                  <div className="mv-vision-icon-wrap">
                    <i className={pt.icon}></i>
                  </div>
                </div>
                <h3 className="mv-vision-card-title">
                  {lang === 'np' ? pt.titleNp : pt.title}
                </h3>
                <p className="mv-vision-card-desc">
                  {lang === 'np' ? pt.descNp : pt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Editorial Vision Takeaway Quote */}
          <div className="mv-takeaway-banner">
            <div className="mv-takeaway-inner">
              <span className="mv-takeaway-quote-mark">“</span>
              <p className="mv-takeaway-text">
                {lang === 'np' ? vision.takeawayNp : vision.takeaway}
              </p>
              <cite className="mv-takeaway-cite">— Hon. Manish Jha, MP</cite>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Section 2: My Mission — 7 Action Pillars */}
      <section className="human-section bg-subtle" id="mission">
        <div className="container">
          
          <div className="human-section-header">
            <span className="section-eyebrow">
              {lang === 'np' ? 'मेरो ध्येय' : 'Actionable Policy Pillars'}
            </span>
            <h2 className="section-main-heading">
              {lang === 'np' ? 'प्रतिनिधित्वलाई परिणाममा बदल्ने ७ स्तम्भ' : '7 Action Pillars: Turning Representation into Results'}
            </h2>
            <p className="section-main-sub">
              {lang === 'np' ? mission.introNp : mission.intro}
            </p>
          </div>

          {/* 7 Action Pillar Cards Grid */}
          <div className="mv-mission-grid">
            {mission.pillars.map((pillar) => (
              <div key={pillar.number} className="mv-mission-card">
                
                <div className="mv-mission-card-header">
                  <div className="mv-mission-num-badge">{pillar.number}</div>
                  <div className="mv-mission-header-info">
                    <span className="mv-mission-cat-pill">
                      {lang === 'np' ? pillar.categoryNp : pillar.category}
                    </span>
                    <h3 className="mv-mission-card-title">
                      {lang === 'np' ? pillar.titleNp : pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="mv-mission-lead-desc">
                  {lang === 'np' ? pillar.descNp : pillar.desc}
                </p>

                {pillar.extendedDesc && (
                  <p className="mv-mission-extended-desc">
                    {lang === 'np' ? pillar.extendedDescNp : pillar.extendedDesc}
                  </p>
                )}

                {pillar.items && pillar.items.length > 0 && (
                  <div className="mv-mission-list-block">
                    <h4 className="mv-mission-list-heading">
                      {lang === 'np' ? 'प्रमुख कार्ययोजना र प्राथमिकताहरू:' : 'Key Initiatives & Commitments:'}
                    </h4>
                    <ul className="mv-mission-bullet-list">
                      {pillar.items.map((item, idx) => (
                        <li key={idx} className="mv-mission-bullet-item">
                          <span className="mv-bullet-dot"></span>
                          <span>{lang === 'np' ? item.np : item.en}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Section 3: The Role of a Representative */}
      <section className="human-section" id="role">
        <div className="container">
          
          <div className="human-section-header">
            <span className="section-eyebrow">
              {lang === 'np' ? 'जनप्रतिनिधिको भूमिका' : 'The Role of a Representative'}
            </span>
            <h2 className="section-main-heading">
              {lang === 'np' ? 'सुन्ने • प्रश्न गर्ने • काम गर्ने • जवाफदेही बन्ने' : 'Listen. Question. Work. Report.'}
            </h2>
            <p className="section-main-sub">
              {lang === 'np' ? representativeRole.prose[0].np : representativeRole.prose[0].en}
            </p>
          </div>

          <div className="mv-rep-intro-prose">
            <p>{lang === 'np' ? representativeRole.prose[1].np : representativeRole.prose[1].en}</p>
          </div>

          {/* 4 Stewardship Pillars */}
          <div className="mv-rep-process-grid">
            <div className="mv-process-card">
              <div className="mv-process-num">01</div>
              <div className="mv-process-icon"><i className="fa-solid fa-ear-listen"></i></div>
              <h3 className="mv-process-title">{lang === 'np' ? 'सुन्ने (Listen)' : 'Listen'}</h3>
              <p className="mv-process-desc">
                {lang === 'np'
                  ? 'धनुषा–३ का टोल-टोलमा पुगेर नागरिकका दैनिक समस्या, गुनासा र सुझावहरू प्रत्यक्ष सुन्ने र संवाद कायम राख्ने।'
                  : 'Maintaining regular, unmediated grassroots engagement, listening to citizen grievances, and conducting constituency listening tours.'}
              </p>
            </div>

            <div className="mv-process-card">
              <div className="mv-process-num">02</div>
              <div className="mv-process-icon"><i className="fa-solid fa-clipboard-question"></i></div>
              <h3 className="mv-process-title">{lang === 'np' ? 'प्रश्न गर्ने (Question)' : 'Question'}</h3>
              <p className="mv-process-desc">
                {lang === 'np'
                  ? 'संसद् र समितिहरूमा तथ्य, प्रमाण र अध्ययनसहित सरकारलाई जवाफदेही बनाउने र नागरिकका हकमा कडा प्रश्न उठाउने।'
                  : 'Active participation in parliamentary debates and committee hearings, bringing rigorous evidence and data to hold government accountable.'}
              </p>
            </div>

            <div className="mv-process-card">
              <div className="mv-process-num">03</div>
              <div className="mv-process-icon"><i className="fa-solid fa-gears"></i></div>
              <h3 className="mv-process-title">{lang === 'np' ? 'काम गर्ने (Work)' : 'Work'}</h3>
              <p className="mv-process-desc">
                {lang === 'np'
                  ? 'अल्झिएका विकास आयोजनाहरू, कृषि, स्वास्थ्य र शिक्षाका नीतिगत सुधारहरू समयमै सम्पन्न गराउन निरन्तर खट्ने।'
                  : 'Tenacious follow-through on delayed infrastructure, agritech solutions, youth skill development, and health improvements.'}
              </p>
            </div>

            <div className="mv-process-card">
              <div className="mv-process-num">04</div>
              <div className="mv-process-icon"><i className="fa-solid fa-file-lines"></i></div>
              <h3 className="mv-process-title">{lang === 'np' ? 'जवाफदेही बन्ने (Report)' : 'Report'}</h3>
              <p className="mv-process-desc">
                {lang === 'np'
                  ? 'संसदीय काम, बजेट विनियोजन र विकास प्रयासहरूबारे नागरिकलाई नियमित प्रतिवेदनमार्फत पारदर्शी जानकारी दिने।'
                  : 'Publishing regular public accountability reports, parliamentary voting records, and development updates for citizens.'}
              </p>
            </div>
          </div>

          {/* Stewardship Quote Box */}
          <div className="mv-stewardship-quote-box">
            <p className="mv-stewardship-quote-text">
              {lang === 'np' ? representativeRole.highlightQuoteNp : representativeRole.highlightQuote}
            </p>
            <cite className="mv-stewardship-quote-cite">— Hon. Manish Jha, MP</cite>
          </div>

        </div>
      </section>

      {/* 7. Section 4: The Future We Are Working Towards */}
      <section className="human-contact-banner">
        <div className="container">
          <div className="human-contact-box">
            <div className="contact-box-left">
              <span className="contact-kicker">
                <i className="fa-solid fa-landmark"></i>
                {lang === 'np' ? futureVision.titleNp : futureVision.title}
              </span>
              <h3 className="contact-heading">
                {lang === 'np' ? futureVision.leadNp : futureVision.lead}
              </h3>
              <p className="contact-desc">
                {lang === 'np' ? futureVision.pointsSummaryNp : futureVision.pointsSummary}
              </p>
              <div className="mv-banner-punchline">
                <strong>{lang === 'np' ? futureVision.closingTaglineNp : futureVision.closingTagline}</strong>
              </div>
            </div>

            <div className="contact-box-actions">
              <button className="btn-contact-action-primary" onClick={onContactClick}>
                <i className="fa-regular fa-envelope"></i>
                <span>{lang === 'np' ? 'सुझाव पठाउनुहोस्' : 'Share Suggestion / Contact'}</span>
              </button>
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

export default MissionVisionPage;
