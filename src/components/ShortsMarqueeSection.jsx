import React from 'react';
import { shortVideosData } from '../data/opinionsData';
import { useTheme } from '../context/ThemeContext';

export const ShortsMarqueeSection = ({ onVideoClick }) => {
  const { lang } = useTheme();

  return (
    <section className="human-section opinions-shorts-section homepage-shorts-section">
      <div className="container">
        {/* Ever-Looping Infinite Carousel Track */}
        <div className="opinions-shorts-marquee-container">
          <div className="opinions-shorts-marquee-track">
            {[...shortVideosData, ...shortVideosData].map((item, loopIdx) => {
              const itemTitle = lang === 'np' ? item.titleNp || item.title : item.title;
              return (
                <div
                  key={`${item.id}-home-loop-${loopIdx}`}
                  className="opinion-vertical-short-card"
                  onClick={() => onVideoClick(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onVideoClick(item);
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
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
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
  );
};

export default ShortsMarqueeSection;
