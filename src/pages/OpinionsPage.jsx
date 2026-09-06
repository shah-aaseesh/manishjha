import React, { useState, useEffect, useCallback } from 'react';
import { opinionsData, shortVideosData } from '../data/opinionsData';
import { useTheme } from '../context/ThemeContext';

export const OpinionsPage = ({ onBackHome, onContactClick }) => {
  const { lang, toggleLang } = useTheme();
  const [modalState, setModalState] = useState(null); // { type: 'main' | 'short', index: number } | null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const currentList = modalState ? (modalState.type === 'short' ? shortVideosData : opinionsData) : [];
  const activeVideo = modalState !== null ? currentList[modalState.index] : null;

  const handlePrevVideo = useCallback(() => {
    if (modalState) {
      const list = modalState.type === 'short' ? shortVideosData : opinionsData;
      const nextIdx = modalState.index > 0 ? modalState.index - 1 : list.length - 1;
      setModalState({ ...modalState, index: nextIdx });
    }
  }, [modalState]);

  const handleNextVideo = useCallback(() => {
    if (modalState) {
      const list = modalState.type === 'short' ? shortVideosData : opinionsData;
      const nextIdx = modalState.index < list.length - 1 ? modalState.index + 1 : 0;
      setModalState({ ...modalState, index: nextIdx });
    }
  }, [modalState]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalState) return;
      if (e.key === 'Escape') setModalState(null);
      if (e.key === 'ArrowLeft') handlePrevVideo();
      if (e.key === 'ArrowRight') handleNextVideo();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalState, handlePrevVideo, handleNextVideo]);

  return (
    <div className="human-bio-page opinions-full-page">
      
      {/* Leader's Media & Opinions Hero Profile */}
      <header className="human-hero-section">
        <div className="container">
          <div className="human-hero-grid">
            
            {/* Portrait Column */}
            <div className="human-portrait-col">
              <div className="human-portrait-frame">
                <img
                  src="/assets/images/photos/manish-studio-portrait-dark.jpeg"
                  alt="Hon. Manish Jha in Media Conclave"
                  className="human-portrait-img"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/photos/manish-portrait-parliament.jpeg';
                  }}
                />
                <div className="human-portrait-caption">
                  <strong>{lang === 'np' ? 'माननीय मनिष झा' : 'Hon. Manish Jha, MP'}</strong>
                  <span>{lang === 'np' ? 'सञ्चार विमर्श, अन्तर्वार्ता र पोडकास्ट' : 'Public Discourse, TV Conclaves & Podcasts'}</span>
                </div>
              </div>
            </div>

            {/* Header Text Column */}
            <div className="human-hero-text-col">
              <span className="human-kicker">
                {lang === 'np' ? 'आधिकारिक सञ्चार विमर्श तथा दृष्टिकोण' : 'Official Media & Video Archive'}
              </span>

              <h1 className="human-title">
                {lang === 'np' ? 'विचार र अन्तर्वार्ता' : 'Opinions & Interviews'}
              </h1>

              <p className="human-subtitle">
                {lang === 'np'
                  ? 'संसद्, अर्थतन्त्र, वैकल्पिक राजनीति र जनसरोकारका मुद्दाहरूमा प्रस्तुत विश्लेषणात्मक विचारहरू'
                  : 'Television Conclaves, National Debates, Podcasts & Policy Dialogues with Hon. Manish Jha'}
              </p>

              <div className="human-intro-prose">
                <p>
                  {lang === 'np'
                    ? 'लोकतन्त्रमा नीतिगत बहस र विचारको खुला मन्थन अत्यावश्यक हुन्छ। सञ्चार माध्यम, पोडकास्ट र टेलिभिजन विमर्शमार्फत संसद्का कामकारबाही, पार्टीको नीतिगत अडान र जनकपुर तथा समग्र नेपालको विकासबारे माननीय मनिष झाका दृष्टिकोणहरू यहाँ प्रत्यक्ष हेर्न सक्नुहुन्छ।'
                    : 'Democratic stewardship demands open, evidence-driven public discourse. Explore Hon. Manish Jha’s television conclaves, national debates, and podcasts. Click any video below to watch directly in full-screen lightbox.'}
                </p>
              </div>

              {/* Editorial Pullquote */}
              <blockquote className="human-quote">
                <p>
                  {lang === 'np'
                    ? '“लोकतन्त्रमा सार्वजनिक उत्तरदायित्व केवल चुनावमा मात्र होइन, निरन्तर प्रमाण र तथ्यमा आधारित खुला संवादमार्फत प्रमाणित हुनुपर्छ।”'
                    : '“Democratic accountability is not proven only during elections. It must be demonstrated daily through transparent, evidence-based public dialogue.”'}
                </p>
                <cite>— Hon. Manish Jha, MP</cite>
              </blockquote>
            </div>

          </div>
        </div>
      </header>

      {/* 3. Main Full-Length Video Showcase */}
      <section className="human-section">
        <div className="container">
          
          <div className="human-section-header">
            <span className="section-eyebrow">
              {lang === 'np' ? 'भिडियो अभिलेख' : 'Featured Media & Dialogues'}
            </span>
            <h2 className="section-main-heading">
              {lang === 'np' ? 'प्रमुख अन्तर्वार्ता, पोडकास्ट तथा भिडियो संवाद' : 'Interviews, Podcasts & Video Conclaves'}
            </h2>
            <p className="section-main-sub">
              {lang === 'np'
                ? 'भिडियोमा क्लिक गरी सिधै लाइटबक्समा हेर्नुहोस्।'
                : 'Click any video card to play directly in full-screen embedded video lightbox.'}
            </p>
          </div>

          {/* Pure Clean Video Thumbnail Grid */}
          <div className="opinions-video-grid">
            {opinionsData.map((item, idx) => {
              const itemTitle = lang === 'np' ? item.titleNp || item.title : item.title;
              return (
                <div
                  key={item.id}
                  className="opinion-video-card"
                  onClick={() => setModalState({ type: 'main', index: idx })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setModalState({ type: 'main', index: idx });
                    }
                  }}
                  aria-label={itemTitle}
                  title={itemTitle}
                >
                  <div className="opinion-video-thumb-frame">
                    <img
                      src={item.image}
                      alt={itemTitle}
                      className="opinion-video-thumb-img"
                      onError={(e) => {
                        e.currentTarget.src = item.fallbackImage || '/assets/images/photos/manish-portrait-parliament.jpeg';
                      }}
                    />
                    <div className="opinion-video-play-btn" aria-hidden="true">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Short-Form Parliamentary Speeches & Statements Carousel */}
      <section className="human-section opinions-shorts-section">
        <div className="container">
          


          {/* Ever-Looping Infinite Carousel Track */}
          <div className="opinions-shorts-marquee-container">
            <div className="opinions-shorts-marquee-track">
              {[...shortVideosData, ...shortVideosData].map((item, loopIdx) => {
                const realIdx = loopIdx % shortVideosData.length;
                const itemTitle = lang === 'np' ? item.titleNp || item.title : item.title;
                return (
                  <div
                    key={`${item.id}-loop-${loopIdx}`}
                    className="opinion-vertical-short-card"
                    onClick={() => setModalState({ type: 'short', index: realIdx })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setModalState({ type: 'short', index: realIdx });
                      }
                    }}
                    aria-label={itemTitle}
                    title={itemTitle}
                  >
                    <div className="opinion-vertical-thumb-wrap">
                      <img
                        src={item.image}
                        alt={itemTitle}
                        className="opinion-vertical-thumb-img"
                        onError={(e) => {
                          e.currentTarget.src = item.fallbackImage || '/assets/images/photos/manish-speaking-mic.jpeg';
                        }}
                      />

                      {/* Top Gradient Overlay & Badge */}
                      <div className="opinion-vertical-overlay-top">
                        <span className="opinion-vertical-duration-pill">
                          {item.length === 'Short' ? (
                            <>
                              <i className="fa-solid fa-bolt"></i>
                              <span>Short</span>
                            </>
                          ) : (
                            <>
                              <i className="fa-regular fa-clock"></i>
                              <span>{item.length}</span>
                            </>
                          )}
                        </span>
                      </div>

                      {/* Center Glowing Play Icon */}
                      <div className="opinion-vertical-play-icon" aria-hidden="true">
                        <i className="fa-solid fa-play"></i>
                      </div>

                      {/* Bottom Gradient Overlay & Title Strip */}
                      <div className="opinion-vertical-overlay-bottom">
                        <span className="opinion-vertical-channel">
                          <i className="fa-brands fa-youtube"></i>
                          <span>{lang === 'np' ? item.platformNp || item.platform : item.platform}</span>
                        </span>
                        <h4 className="opinion-vertical-title">{itemTitle}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Pure Cinematic Video Lightbox Modal */}
      {activeVideo && (
        <div
          className="opinion-video-lightbox"
          onClick={() => setModalState(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div
            className="opinion-lightbox-content pure-video-player"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button
              className="opinion-lightbox-floating-close"
              onClick={() => setModalState(null)}
              aria-label="Close Lightbox"
              title="Close (ESC)"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Embedded Video Player */}
            <div className="opinion-lightbox-video-frame">
              <iframe
                src={activeVideo.youtubeEmbed || "https://www.youtube-nocookie.com/embed/6X8FdGGddy0?autoplay=1"}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* 6. Press Office / Media Inquiries Banner */}
      <section className="human-contact-banner">
        <div className="container">
          <div className="human-contact-box">
            <div className="contact-box-left">
              <span className="contact-kicker">
                <i className="fa-solid fa-bullhorn"></i>
                {lang === 'np' ? 'सञ्चार समन्वय तथा अन्तर्वार्ता' : 'Press & Media Inquiries'}
              </span>
              <h3 className="contact-heading">
                {lang === 'np'
                  ? 'सञ्चार विमर्श, अन्तर्वार्ता वा पोडकास्टका लागि सम्पर्क'
                  : 'Connect with the Media & Press Office'}
              </h3>
              <p className="contact-desc">
                {lang === 'np'
                  ? 'माननीय मनिष झासँग टेलिभिजन संवाद, नीतिगत विमर्श, पोडकास्ट वा सञ्चार समन्वयका लागि हाम्रो संसदीय सचिवालयसँग सम्पर्क गर्नुहोस्।'
                  : 'For television broadcasts, policy conclaves, podcast recordings, or press queries, our communications team welcomes your correspondence.'}
              </p>
            </div>

            <div className="contact-box-actions">
              <button className="btn-contact-action-primary" onClick={onContactClick}>
                <i className="fa-regular fa-envelope"></i>
                <span>{lang === 'np' ? 'सम्पर्क गर्नुहोस्' : 'Contact Press Office'}</span>
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

export default OpinionsPage;
