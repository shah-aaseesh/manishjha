import React, { useEffect } from 'react';
import { biographyData } from '../data/biographyData';
import { useTheme } from '../context/ThemeContext';

export const BiographyPage = ({ onBackHome, onContactClick }) => {
  const { lang, toggleLang } = useTheme();

  const {
    narrative,
    milestonesTimeline,
    academicJourney,
    professionalCareer,
    mediaCareer,
    socialCareer,
    politicalCareer
  } = biographyData;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="human-bio-page">
      {/* Leader's Hero Profile */}
      <header className="human-hero-section">
        <div className="container">
          <div className="human-hero-grid">
            
            {/* Portrait Column with Authentic High-Res Photo */}
            <div className="human-portrait-col">
              <div className="human-portrait-frame">
                <img
                  src="/assets/images/photos/manish-portrait-parliament.jpeg"
                  alt="Hon. Manish Jha"
                  className="human-portrait-img"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/profile.jpg';
                  }}
                />
                <div className="human-portrait-caption">
                  <strong>{lang === 'np' ? 'माननीय मनिष झा' : 'Hon. Manish Jha, MP'}</strong>
                  <span>{lang === 'np' ? 'प्रतिनिधिसभा सदस्य (धनुषा–३)' : 'House of Representatives, Nepal (Dhanusha–3)'}</span>
                </div>
              </div>
            </div>

            {/* Biography Summary Column */}
            <div className="human-hero-text-col">
              <span className="human-kicker">
                {lang === 'np' ? 'आधिकारिक जीवनवृत्त र सार्वजनिक अभिलेख' : 'Official Biography & Public Record'}
              </span>

              <h1 className="human-title">
                {lang === 'np' ? 'मनिष झा' : 'Manish Jha'}
              </h1>

              <p className="human-subtitle">
                {lang === 'np'
                  ? 'प्रतिनिधिसभा सदस्य (धनुषा–३) • केन्द्रीय प्रवक्ता, राष्ट्रिय स्वतन्त्र पार्टी • संस्थापक, फ्याक्ट्स नेपाल'
                  : 'Member of the Federal Parliament (Dhanusha–3) • Central Spokesperson, Rastriya Swatantra Party • Founder & CEO, FACTS Nepal'}
              </p>

              <div className="human-intro-prose">
                <p>
                  {lang === 'np'
                    ? 'मनिष झाको सार्वजनिक जीवन उद्यमशीलता, तथ्याङ्कमा आधारित अनुसन्धान, सञ्चार विमर्श र प्रत्यक्ष जनउत्तरदायी राजनीतिको प्रेरणादायी संगम हो। जनकपुरको माटोमा प्रारम्भिक शिक्षा सुरु गरी काठमाडौँ र अन्तर्राष्ट्रिय मञ्चहरूमा ज्ञान र उद्यम विस्तार गर्दै उहाँ आज राष्ट्रिय राजनीतिको अग्रपंक्तिमा हुनुहुन्छ।'
                    : 'Manish Jha’s career spans enterprise building, empirical research, prime-time public discourse, and democratic parliamentary leadership. His public engagement unites three enduring commitments: building civic and research institutions, communicating evidence-based knowledge, and representing citizens in public office with relentless integrity.'}
                </p>
                <p>
                  {lang === 'np'
                    ? 'सन् २०१२ मा नेपालकै पहिलो जनमत अनुसन्धान संस्था "फ्याक्ट्स नेपाल" को स्थापना गरी पहिलो राष्ट्रिय एक्जिट पोल सञ्चालन गर्नुभएका झाले सन् २०२२ मा समानुपातिक सांसद र सन् २०२६ मा धनुषा–३ बाट ४३,९८८ मतसहित प्रत्यक्ष निर्वाचित भई जनअनुमोदित नेतृत्व स्थापित गर्नुभयो।'
                    : 'In 2012, he founded FACTS Nepal, pioneering data journalism and conducting Nepal’s first-ever national election exit poll. In 2022, he entered Parliament under proportional representation, and in 2026, he secured a decisive First-Past-The-Post victory in Dhanusha–3 with 43,988 votes.'}
                </p>
              </div>

              {/* Authentic Pullquote */}
              <blockquote className="human-quote">
                <p>
                  {lang === 'np'
                    ? '“राजनीति जीवनको अवकाश योजना हुनुहुँदैन; यो त सक्रिय उमेरमै नागरिकका जल्दाबल्दा समस्याहरू तथ्य, इमानदारी र समर्पणका साथ समाधान गर्ने प्रत्यक्ष जनसेवा हो।”'
                    : '“Politics must never become a retirement plan. It must be an active, evidence-driven public duty undertaken while we possess the vigor, intellect, and courage to make a lasting difference.”'}
                </p>
                <cite>— Hon. Manish Jha, MP</cite>
              </blockquote>
            </div>

          </div>
        </div>
      </header>

      {/* 3. Quick Stats Ribbon */}
      <section className="human-stats-ribbon">
        <div className="container">
          <div className="human-stats-grid">
            <div className="human-stat-item">
              <span className="human-stat-val">43,988</span>
              <span className="human-stat-lbl">{lang === 'np' ? 'धनुषा–३ प्रत्यक्ष मत (२०२६)' : 'Direct FPTP Mandate (Dhanusha–3)'}</span>
            </div>
            <div className="human-stat-item">
              <span className="human-stat-val">FACTS Nepal</span>
              <span className="human-stat-lbl">{lang === 'np' ? 'संस्थापक (नेपालको पहिलो एक्जिट पोल)' : 'Founder & 1st Exit Poll Pioneer'}</span>
            </div>
            <div className="human-stat-item">
              <span className="human-stat-val">3 Masters</span>
              <span className="human-stat-lbl">{lang === 'np' ? 'साहित्य • राजनीति • EMBA' : 'Maithili Lit, Politics & EMBA'}</span>
            </div>
            <div className="human-stat-item">
              <span className="human-stat-val">USA • DE • JP</span>
              <span className="human-stat-lbl">{lang === 'np' ? 'ओक्लाहोमा • आइएफ • एओटीएस तालिम' : 'Oklahoma, IAF & AOTS Fellowships'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Career Journey Timeline */}
      <section className="human-section">
        <div className="container">
          
          <div className="human-section-header">
            <span className="section-eyebrow">{lang === 'np' ? 'करियर यात्रा' : 'Chronology (2003–2026)'}</span>
            <h2 className="section-main-heading">
              {lang === 'np' ? 'करियर समयरेखा र प्रमुख कोशेढुङ्गाहरू' : 'Career Journey & Milestones'}
            </h2>
            <p className="section-main-sub">
              {lang === 'np'
                ? 'निजी क्षेत्रको उद्यमशीलताबाट सुरु भई विकास, सञ्चार, अनुसन्धान र संसदीय राजनीतिसम्मको २३ वर्षे अविच्छिन्न यात्रा।'
                : 'A 23-year chronicle moving from early enterprise and development to data innovation, media broadcasting, and parliamentary stewardship.'}
            </p>
          </div>

          {/* Clean, Perfectly Aligned Vertical Timeline */}
          <div className="human-vertical-timeline">
            {milestonesTimeline.map((item, idx) => {
              const isMajor = item.year.includes('2026') || item.year.includes('2012') || item.year.includes('2025');
              return (
                <div key={idx} className={`human-timeline-row ${isMajor ? 'major-highlight' : ''}`}>
                  
                  {/* Desktop Year Column (Right Aligned) */}
                  <div className="timeline-year-col">
                    <span className="timeline-year-text">{item.year}</span>
                    <span className={`timeline-tag-pill ${item.category}`}>
                      {item.category === 'political' && (lang === 'np' ? 'राजनीतिक' : 'Political')}
                      {item.category === 'professional' && (lang === 'np' ? 'व्यवसाय' : 'Business')}
                      {item.category === 'media' && (lang === 'np' ? 'सञ्चार' : 'Media')}
                      {item.category === 'academic' && (lang === 'np' ? 'शैक्षिक' : 'Academic')}
                      {item.category === 'social' && (lang === 'np' ? 'सामाजिक' : 'Social')}
                    </span>
                  </div>

                  {/* Continuous Spine Column */}
                  <div className="timeline-spine-col">
                    <div className="spine-dot" />
                  </div>

                  {/* Content Column with Card */}
                  <div className="timeline-content-col">
                    <div className="timeline-card">
                      {/* Mobile Header with Year & Category */}
                      <div className="timeline-card-mobile-meta">
                        <span className="mobile-year-pill">{item.year}</span>
                        <span className={`timeline-tag-pill ${item.category}`}>
                          {item.category === 'political' && (lang === 'np' ? 'राजनीतिक' : 'Political')}
                          {item.category === 'professional' && (lang === 'np' ? 'व्यवसाय' : 'Business')}
                          {item.category === 'media' && (lang === 'np' ? 'सञ्चार' : 'Media')}
                          {item.category === 'academic' && (lang === 'np' ? 'शैक्षिक' : 'Academic')}
                          {item.category === 'social' && (lang === 'np' ? 'सामाजिक' : 'Social')}
                        </span>
                      </div>

                      <h3 className="timeline-item-title">
                        {lang === 'np' ? item.titleNp || item.title : item.title}
                      </h3>

                      <div className="timeline-item-org">
                        <i className="fa-regular fa-building"></i>
                        <span>{item.org}</span>
                        <span className="meta-sep">•</span>
                        <span>{item.location}</span>
                      </div>

                      <p className="timeline-item-desc">{item.highlight}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Authentic Visual Highlights Strip */}
      <section className="human-section bio-photo-highlights-section">
        <div className="container">
          <div className="human-section-header">
            <span className="section-eyebrow">{lang === 'np' ? 'दृश्य अभिलेख' : 'Visual Archives'}</span>
            <h2 className="section-main-heading">
              {lang === 'np' ? 'सार्वजनिक जीवनका महत्वपूर्ण तस्बिरहरू' : 'Public Life & Leadership in Pictures'}
            </h2>
            <p className="section-main-sub">
              {lang === 'np'
                ? 'संसद्, अनुसन्धान, निर्वाचन र नागरिक संवादका प्रत्यक्ष क्षणहरू।'
                : 'Documented moments of policy debates, civic rallies, literary research, and democratic engagement.'}
            </p>
          </div>

          <div className="bio-photo-grid">
            <div className="bio-photo-card">
              <img src="/assets/images/photos/manish-academic-library.jpeg" alt="Academic & Research" className="bio-photo-card-img" />
              <div className="bio-photo-card-caption">
                <strong>{lang === 'np' ? 'अध्ययन र अनुसन्धान' : 'Academic Rigor & Research'}</strong>
                <span>{lang === 'np' ? '३ स्नातकोत्तर र फ्याक्ट्स नेपालको जग' : '3 Masters & Foundation of FACTS Nepal'}</span>
              </div>
            </div>

            <div className="bio-photo-card">
              <img src="/assets/images/photos/manish-ndtv-dialogue.jpeg" alt="NDTV World Conclave" className="bio-photo-card-img" />
              <div className="bio-photo-card-caption">
                <strong>{lang === 'np' ? 'अन्तर्राष्ट्रिय नीति संवाद' : 'International Media Dialogue'}</strong>
                <span>{lang === 'np' ? 'एनडिटिभी वर्ल्डमा ब्रेन ड्रेन विमर्श' : 'NDTV World Keynote on Brain Gain'}</span>
              </div>
            </div>

            <div className="bio-photo-card">
              <img src="/assets/images/photos/manish-voting-ballot.jpeg" alt="Democratic Franchise" className="bio-photo-card-img" />
              <div className="bio-photo-card-caption">
                <strong>{lang === 'np' ? 'लोकतन्त्र र मतदान' : 'Democratic Franchise'}</strong>
                <span>{lang === 'np' ? 'निर्वाचन आयोगमा मतदान अभ्यास' : 'Exercising Vote in National Elections'}</span>
              </div>
            </div>

            <div className="bio-photo-card">
              <img src="/assets/images/photos/manish-stadium-rally-crowd.jpeg" alt="Massive Rally Support" className="bio-photo-card-img" />
              <div className="bio-photo-card-caption">
                <strong>{lang === 'np' ? 'नागरिक ऐक्यबद्धता' : 'Grassroots Solidarity'}</strong>
                <span>{lang === 'np' ? 'हजारौं नागरिकको उत्साहजनक सहभागिता' : 'Historic Stadium Rally with RSP Flags'}</span>
              </div>
            </div>

            <div className="bio-photo-card">
              <img src="/assets/images/photos/manish-cultural-maithili.jpeg" alt="Mithila Heritage" className="bio-photo-card-img" />
              <div className="bio-photo-card-caption">
                <strong>{lang === 'np' ? 'मैथिली संस्कृति र पहिचान' : 'Mithila Cultural Heritage'}</strong>
                <span>{lang === 'np' ? 'जनकपुरधाममा स्थानीय संवाद' : 'Janakpurdham Community Dialogue'}</span>
              </div>
            </div>

            <div className="bio-photo-card">
              <img src="/assets/images/photos/manish-hrm-awards-keynote.jpeg" alt="Corporate Excellence Keynote" className="bio-photo-card-img" />
              <div className="bio-photo-card-caption">
                <strong>{lang === 'np' ? 'उद्यमशीलता र सुशासन' : 'Enterprise & Governance'}</strong>
                <span>{lang === 'np' ? 'एचआरएम अवार्ड्स विशेष मन्तव्य' : 'HRM Awards for Corporate Excellence'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Academic Background & Global Executive Fellowships */}
      <section className="human-section bg-subtle">
        <div className="container">
          
          <div className="human-section-header">
            <span className="section-eyebrow">{lang === 'np' ? 'शैक्षिक पृष्ठभूमि' : 'Academic Rigor'}</span>
            <h2 className="section-main-heading">
              {lang === 'np' ? 'विश्वविद्यालय उपाधिहरू र अन्तर्राष्ट्रिय तालिम' : 'Academic Qualifications & Global Fellowships'}
            </h2>
            <p className="section-main-sub">
              {lang === 'np'
                ? 'मैथिली साहित्य, राजनीतिशास्त्र र व्यवसाय प्रशासनमा ३ स्नातकोत्तर उपाधि तथा अमेरिका, जर्मनी र जापानबाट विशेष तालिम।'
                : 'Holding 3 Master’s degrees in Maithili Literature, Political Science, and Business Administration, supplemented by executive fellowships in the United States, Germany, and Japan.'}
            </p>
          </div>

          <div className="human-academic-grid">
            
            {/* Left: Degrees */}
            <div className="academic-column">
              <h3 className="academic-col-title">
                <i className="fa-solid fa-graduation-cap"></i>
                <span>{lang === 'np' ? 'विश्वविद्यालय उपाधिहरू' : 'University Degrees & Foundational Education'}</span>
              </h3>

              <div className="academic-cards-list">
                {academicJourney.degrees.map((deg, idx) => (
                  <div key={idx} className="human-academic-card">
                    <div className="academic-card-header">
                      <h4 className="deg-title">{lang === 'np' ? deg.degreeNp || deg.degree : deg.degree}</h4>
                      <span className="deg-inst">{lang === 'np' ? deg.institutionNp || deg.institution : deg.institution} • {deg.location}</span>
                    </div>
                    <p className="deg-desc">{lang === 'np' ? deg.descNp || deg.desc : deg.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Short Executive Courses */}
            <div className="academic-column">
              <h3 className="academic-col-title">
                <i className="fa-solid fa-earth-americas"></i>
                <span>{lang === 'np' ? 'अन्तर्राष्ट्रिय विशेष कार्यकारी तालिम' : 'Specialised International Executive Training'}</span>
              </h3>

              <div className="academic-cards-list">
                {academicJourney.shortCourses.map((crs, idx) => (
                  <div key={idx} className="human-academic-card fellowship-card">
                    <div className="academic-card-header">
                      <div className="fellowship-top-line">
                        <span className="fellowship-year">{crs.year}</span>
                        <span className="fellowship-country">{crs.location}</span>
                      </div>
                      <h4 className="deg-title">{lang === 'np' ? crs.courseNp || crs.course : crs.course}</h4>
                      <span className="deg-inst">{crs.institution}</span>
                    </div>
                    <p className="deg-desc">{lang === 'np' ? crs.descNp || crs.desc : crs.desc}</p>
                  </div>
                ))}

                {/* FACTS Nepal & Research Box */}
                <div className="human-facts-feature-card">
                  <div className="facts-feature-header">
                    <i className="fa-solid fa-chart-pie"></i>
                    <h4>FACTS Nepal (2012–Present)</h4>
                  </div>
                  <p>
                    {lang === 'np'
                      ? 'मनिष झाले स्थापना गर्नुभएको फ्याक्ट्स नेपालले नेपालको इतिहासमै पहिलोपटक आमनिर्वाचनमा वैज्ञानिक "एक्जिट पोल" (Exit Poll) सञ्चालन गरी तथ्याङ्क पत्रकारिताको नयाँ मानक स्थापना गर्‍यो।'
                      : 'Founded by Manish Jha in 2012, FACTS Nepal pioneered data journalism, socioeconomic infographics, and conducted Nepal’s first-ever national election exit poll.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Parliamentary Representation & Dhanusha–3 Focus */}
      <section className="human-section">
        <div className="container">
          
          <div className="human-section-header">
            <span className="section-eyebrow">{lang === 'np' ? 'संसदीय उत्तरदायित्व' : 'Dhanusha–3 & National Vision'}</span>
            <h2 className="section-main-heading">
              {lang === 'np' ? 'संसदीय प्राथमिकताका ४ प्रमुख स्तम्भहरू' : '4 Pillars of Parliamentary Representation'}
            </h2>
            <p className="section-main-sub">
              {lang === 'np'
                ? 'जनकपुरधाम र धनुषा–३ का नागरिकको प्रत्यक्ष जनमतको सम्मान गर्दै राष्ट्रिय नीति निर्माण र स्थानीय विकासमा सक्रिय प्रतिबद्धता।'
                : 'Honoring the direct 43,988-vote mandate of Dhanusha–3 through principled legislation, regional agritech growth, youth empowerment, and cultural preservation.'}
            </p>
          </div>

          <div className="human-pillars-grid">
            
            <div className="human-pillar-card">
              <div className="pillar-num-badge">01</div>
              <h3 className="pillar-heading">
                {lang === 'np' ? 'विधायी सुशासन र संसद्' : 'Legislative Rigor & Good Governance'}
              </h3>
              <p>
                {lang === 'np'
                  ? 'संसद्को रोस्ट्रममा तथ्य, तथ्याङ्क र प्रमाणमा आधारित कानुन निर्माण तथा राष्ट्रिय बजेट विनियोजनको प्रभावकारी अनुगमन।'
                  : 'Ensuring evidence-driven legislation, stringent budgetary scrutiny, and relentless accountability in parliamentary committees.'}
              </p>
            </div>

            <div className="human-pillar-card">
              <div className="pillar-num-badge">02</div>
              <h3 className="pillar-heading">
                {lang === 'np' ? 'कृषि र मधेश आर्थिक विकास' : 'Agritech & Madhesh Economic Growth'}
              </h3>
              <p>
                {lang === 'np'
                  ? 'धनुषाका किसानहरूको सिँचाइ, मलखाद र बजार व्यवस्थापनका साथै आधुनिक कृषि प्रविधिको विस्तारमा नीतिगत पहल।'
                  : 'Empowering Dhanusha farmers with reliable irrigation infrastructure, direct market linkages, and precision agricultural technology.'}
              </p>
            </div>

            <div className="human-pillar-card">
              <div className="pillar-num-badge">03</div>
              <h3 className="pillar-heading">
                {lang === 'np' ? 'युवा रोजगारी र प्रविधि हब' : 'Youth Employment & Regional Tech Hub'}
              </h3>
              <p>
                {lang === 'np'
                  ? 'जनकपुरलाई डिजिटल सेवा र सूचना प्रविधिको क्षेत्रीय हब बनाउँदै युवाहरूलाई स्थानीय तहमै मर्यादित रोजगारीको सिर्जना।'
                  : 'Developing Janakpur into an IT and digital services center, curbing forced youth migration through local high-value skill creation.'}
              </p>
            </div>

            <div className="human-pillar-card">
              <div className="pillar-num-badge">04</div>
              <h3 className="pillar-heading">
                {lang === 'np' ? 'मिथिला कला र सांस्कृतिक पर्यटन' : 'Mithila Heritage & Cultural Tourism'}
              </h3>
              <p>
                {lang === 'np'
                  ? 'मैथिली भाषा, मिथिला चित्रकला र जानकी मन्दिरको धार्मिक-सांस्कृतिक पर्यटनलाई अन्तर्राष्ट्रिय बजारसँग जोड्ने पूर्वाधार।'
                  : 'Elevating Mithila art, Maithili literature, and Janakpurdham pilgrimage circuits onto global cultural tourism maps.'}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. Media Career & Social Initiatives */}
      <section className="human-section bg-subtle">
        <div className="container">
          
          <div className="human-section-header">
            <span className="section-eyebrow">{lang === 'np' ? 'सार्वजनिक विमर्श' : 'Media & Public Service'}</span>
            <h2 className="section-main-heading">
              {lang === 'np' ? 'सञ्चार माध्यम र सामाजिक अभियान' : 'Media Broadcasting & Civic Leadership'}
            </h2>
          </div>

          <div className="human-media-social-grid">
            
            {/* Tathya ra Tarka */}
            <div className="human-media-card">
              <div className="media-card-icon">
                <i className="fa-solid fa-tv"></i>
              </div>
              <div className="media-card-body">
                <span className="media-kicker">Weekly Television Show</span>
                <h3>Tathya ra Tarka (तथ्य र तर्क)</h3>
                <p>
                  {lang === 'np'
                    ? 'तथ्याङ्क र अनुसन्धानमा आधारित टेलिभिजन कार्यक्रम "तथ्य र तर्क" को प्रस्तोताका रूपमा राजनीति, अर्थतन्त्र र सुशासनका मुद्दाहरूमा प्रमाणमा आधारित विश्लेषणात्मक बहस सञ्चालन गर्नुभयो।'
                    : 'Hosted the weekly television show Tathya ra Tarka (Facts & Logic), setting a standard for evidence-based broadcast journalism on public policy, national economy, and governance.'}
                </p>
              </div>
            </div>

            {/* Youth & Mentorship */}
            <div className="human-media-card">
              <div className="media-card-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="media-card-body">
                <span className="media-kicker">Youth & Entrepreneurship</span>
                <h3>Entrepreneurs for Nepal & Last Thursdays</h3>
                <p>
                  {lang === 'np'
                    ? 'समृद्धि फाउन्डेसन र "लास्ट थर्सडेज" शृङ्खलामार्फत स्थापित उद्यमीहरूको अनुभव, चुनौती र सिकाइलाई नयाँ पुस्ताका युवाहरूसँग प्रत्यक्ष छलफल गराउने अभियानको सफल संयोजन।'
                    : 'Coordinated the celebrated Last Thursdays mentorship forums and Entrepreneurs for Nepal, connecting seasoned business leaders directly with young innovators.'}
                </p>
              </div>
            </div>

            {/* Bharosa Scholarship */}
            <div className="human-media-card">
              <div className="media-card-icon">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <div className="media-card-body">
                <span className="media-kicker">Education Campaign</span>
                <h3>Bharosa Scholarship Campaign</h3>
                <p>
                  {lang === 'np'
                    ? 'अभिभावक गुमाएका असहाय बालबालिकाहरूको शिक्षा निरन्तरताका लागि छात्रवृत्ति सहयोग प्रदान गर्ने मानवीय अभियानमा बोर्ड सदस्यको रूपमा सक्रिय सेवा।'
                    : 'Serves on the Board of the Bharosa Scholarship Campaign, enabling educational continuity for underprivileged children who have lost their parents.'}
                </p>
              </div>
            </div>

            {/* Sports Administration */}
            <div className="human-media-card">
              <div className="media-card-icon">
                <i className="fa-solid fa-medal"></i>
              </div>
              <div className="media-card-body">
                <span className="media-kicker">Sports Development</span>
                <h3>Nepal Hockey Association</h3>
                <p>
                  {lang === 'np'
                    ? 'नेपाल हक्की संघको केन्द्रीय उपाध्यक्षका रूपमा खेलकुदको संस्थागत विकास, खेलाडीहरूको प्रवर्द्धन र व्यवस्थापनमा सक्रिय संलग्नता।'
                    : 'Serves as Vice-President of the Nepal Hockey Association, promoting grassroots sports development and athlete training across the country.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. Parliamentary Office Contact Banner */}
      <section className="human-contact-banner">
        <div className="container">
          <div className="human-contact-box">
            <div className="contact-box-left">
              <span className="contact-kicker">
                <i className="fa-solid fa-landmark"></i>
                {lang === 'np' ? 'संसदीय कार्यालय सम्पर्क' : 'Parliamentary Office & Public Dialogue'}
              </span>
              <h3 className="contact-heading">
                {lang === 'np'
                  ? 'धनुषा–३ विकास, संसदीय सुझाव वा सार्वजनिक सरोकारका लागि'
                  : 'Connect with the Office of Hon. Manish Jha, MP'}
              </h3>
              <p className="contact-desc">
                {lang === 'np'
                  ? 'धनुषा–३ का विकास योजना, नीतिगत सुझाव वा सार्वजनिक सरोकारका विषयमा माननीय मनिष झाको संसदीय कार्यालय (काठमाडौँ तथा जनकपुरधाम) सँग सम्पर्क गर्नुहोस्।'
                  : 'For legislative inquiries, constituency development in Dhanusha–3, or policy dialogues, our office welcomes your correspondence.'}
              </p>
            </div>

            <div className="contact-box-actions">
              <button className="btn-contact-action-primary" onClick={onContactClick}>
                <i className="fa-regular fa-envelope"></i>
                <span>{lang === 'np' ? 'सम्पर्क गर्नुहोस्' : 'Contact Office'}</span>
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

export default BiographyPage;
