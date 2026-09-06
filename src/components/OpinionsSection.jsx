import React from 'react';
import { opinionsData } from '../data/opinionsData';
import { useTheme } from '../context/ThemeContext';

export const OpinionsSection = () => {
  const { lang } = useTheme();

  return (
    <section className="opinions-section" id="opinions">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge-pill">
            <i className="fa-solid fa-microphone-lines"></i>
            <span>{lang === 'np' ? 'विचार तथा अन्तरवार्ता' : 'Interviews & Discourse'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'np' ? 'विचार, अन्तर्वार्ता तथा सञ्चार विमर्श' : 'Opinions, Interviews & Video Conclaves'}
          </h2>
          <p className="section-subtitle">
            {lang === 'np'
              ? 'संसद्, अर्थतन्त्र, वैकल्पिक राजनीति, मधेश विकास र युवा सशक्तिकरणबारे राष्ट्रिय तथा अन्तर्राष्ट्रिय सञ्चार माध्यमहरूमा प्रस्तुत दृष्टिकोण।'
              : 'Television conclaves, prime-time dialogues, diaspora podcasts, and ground-zero policy debates with Hon. Manish Jha.'}
          </p>
        </div>

        {/* Opinions & Video Grid */}
        <div className="opinions-grid">
          {opinionsData.map((item) => {
            const isPodcast = item.platformType === 'podcast';
            const isVideo = item.platformType === 'tv-show' || item.platformType === 'video-portal';

            return (
              <article key={item.id} className="opinion-card">
                
                {/* Media Image / Visual Frame */}
                <div className="opinion-media-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="opinion-media-img"
                    onError={(e) => {
                      if (e.currentTarget.src.includes('maxresdefault')) {
                        e.currentTarget.src = `https://i.ytimg.com/vi/${item.youtubeId}/mqdefault.jpg`;
                      } else {
                        e.currentTarget.src = item.fallbackImage || '/assets/images/photos/manish-portrait-parliament.jpeg';
                      }
                    }}
                  />
                  <div className="opinion-media-overlay"></div>
                  
                  {/* Top Badges */}
                  <div className="opinion-top-meta">
                    <span className="opinion-platform-badge">
                      <i className={item.platformIcon}></i>
                      <span>{lang === 'np' ? item.platformNp || item.platform : item.platform}</span>
                    </span>
                    <span className="opinion-year-badge">{item.year}</span>
                  </div>

                  {/* Center Play / Listen / Read Button */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opinion-center-play-btn"
                    aria-label={`Open ${item.title}`}
                  >
                    <i className={`fa-solid ${isPodcast ? 'fa-podcast' : isVideo ? 'fa-play' : 'fa-arrow-up-right-from-square'}`}></i>
                  </a>

                  {/* Bottom Category Tag */}
                  <div className="opinion-bottom-tag">
                    <span>{lang === 'np' ? item.categoryLabelNp || item.categoryLabel : item.categoryLabel}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="opinion-card-body">
                  <div className="opinion-number-tag">#{item.number}</div>
                  
                  <h3 className="opinion-title">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {lang === 'np' ? item.titleNp || item.title : item.title}
                    </a>
                  </h3>

                  <p className="opinion-summary">
                    {lang === 'np' ? item.summaryNp : item.summary}
                  </p>

                  {/* Card Action Link */}
                  <div className="opinion-card-footer">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opinion-action-link"
                    >
                      <span>{lang === 'np' ? item.sourceLabelNp || item.sourceLabel : item.sourceLabel}</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OpinionsSection;
