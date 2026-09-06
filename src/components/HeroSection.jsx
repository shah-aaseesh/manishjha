import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const HeroSection = ({ onVideoClick, onBioClick, onOpinionsClick }) => {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const { profile, videos, impactMetrics } = siteData;
  const { lang } = useTheme();

  const currentVideo = videos[activeVideoIdx] || videos[0];

  const handleThumbSelect = (index) => {
    setActiveVideoIdx(index + 1);
  };

  const handleBioOpen = () => {
    if (onBioClick) {
      onBioClick();
    } else {
      const el = document.getElementById('about-card');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpinionsClick = (e) => {
    e.preventDefault();
    if (onOpinionsClick) {
      onOpinionsClick();
    } else {
      window.location.hash = 'opinions';
    }
  };

  return (
    <section className="hero-section" id="about">
      {/* Full-Width Background Photo extending across both Hero and Media Showcase sections */}
      <div className="hero-fullwidth-bg">
        <img
          src="/background.jpg"
          alt="Hon. Manish Jha"
          className="hero-fullwidth-bg-img"
        />
        <div className="hero-ambient-lights" />
        <div className="hero-fullwidth-bg-overlay" />
      </div>

      {/* 1. Hero Top Intro Content */}
      <div className="hero-top-white-space">
        <div className="container hero-top-container">
          <div className="hero-top-intro">
            {/* Display Headings */}
            <h1 className="hero-main-title">
              <span className="hero-title-name">
                {lang === 'np' ? profile.nameNp : profile.name}
              </span>
              <span className="hero-title-role">
                {lang === 'np' ? 'नेपाली राजनीतिज्ञ' : 'A Nepalese Politician'}
              </span>
            </h1>

            <div className="hero-parliament-tag">
              {lang === 'np' ? profile.roleNp : 'Member of the Federal Parliament'}
            </div>

            {/* Action Button */}
            <div className="hero-bio-btn-wrap">
              <button className="btn-my-biography" onClick={handleBioOpen}>
                {lang === 'np' ? 'मेरो जीवनी' : 'MY BIOGRAPHY'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Media Showcase & Parliamentary Profile Section */}
      <div className="hero-media-showcase-section" id="interviews">
        <div className="container">
          
          <div className="hero-grid">
            {/* Left: Featured Video Showcase */}
            <div className="media-showcase-box">
              <div
                className="featured-video-card"
                onClick={() => onVideoClick(currentVideo)}
                role="button"
                tabIndex={0}
                aria-label="Play Featured Interview Video"
              >
                <img
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  className="featured-video-img"
                />
                <div className="video-overlay-badge">
                  <i className="fa-solid fa-microphone-lines"></i>
                  <span>{currentVideo.show}</span>
                </div>
                <div className="video-play-btn-circle">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>

              {/* 2 Video Thumbnails */}
              <div className="video-thumbnails-row">
                {videos.slice(1, 3).map((video, idx) => (
                  <div
                    key={video.id}
                    className={`video-thumb-card ${activeVideoIdx === idx + 1 ? 'active' : ''}`}
                    onClick={() => handleThumbSelect(idx)}
                    role="button"
                    tabIndex={0}
                    title={lang === 'np' ? video.titleNp : video.title}
                  >
                    <img src={video.thumbnail} alt={video.title} className="video-thumb-img" />
                    <div className="thumb-play-icon">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#opinions"
                className="more-videos-link"
                onClick={handleOpinionsClick}
              >
                <i className="fa-regular fa-circle-play"></i>
                <span>{lang === 'np' ? 'थप अन्तर्वार्ता भिडियोहरू' : 'More Interview Videos'}</span>
              </a>
            </div>

            {/* Right: Politician Profile & Quote Card */}
            <div className="politician-card" id="about-card">
              <div className="politician-header-banner">
                <div className="politician-avatar-wrap">
                  <img
                    src="/assets/images/profile.jpg"
                    alt={profile.name}
                    className="politician-avatar-img"
                  />
                </div>
                <div className="politician-meta">
                  <h2 className="politician-name">
                    {lang === 'np' ? profile.nameNp : profile.name}
                  </h2>
                  <div className="politician-role">
                    {lang === 'np' ? `${profile.titleNp} • ${profile.roleNp}` : `${profile.title} • Member of Parliament`}
                  </div>
                  <div className="social-pills-row">
                    <a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="Facebook" title="Facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="Twitter / X" title="X (Twitter)">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="Instagram" title="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href={profile.socials.youtube} target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="YouTube" title="YouTube">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="politician-quote-body">
                <div className="quote-icon-wrap">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <h3 className="quote-text-highlight">
                  {lang === 'np' ? profile.quoteNp : profile.quote}
                </h3>
                <p className="quote-bio-text">
                  {lang === 'np' ? profile.bioNp : profile.bio}
                </p>
                <button
                  className="read-full-bio-btn"
                  onClick={handleBioOpen}
                  aria-label="Read Full Biography"
                >
                  <i className="fa-regular fa-id-card"></i>
                  <span>{lang === 'np' ? 'विस्तृत जीवनी पढ्नुहोस्' : 'Read Full Biography & Background'}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
