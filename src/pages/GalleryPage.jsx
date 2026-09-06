import React, { useState, useEffect, useCallback } from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const GalleryPage = ({ onBackHome, onContactClick }) => {
  const { photoGallery } = siteData;
  const { lang, toggleLang } = useTheme();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const activePhoto = lightboxIndex !== null ? photoGallery[lightboxIndex] : null;

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const nextPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % photoGallery.length);
    }
  }, [lightboxIndex, photoGallery.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + photoGallery.length) % photoGallery.length);
    }
  }, [lightboxIndex, photoGallery.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextPhoto, prevPhoto]);

  return (
    <div className="human-bio-page gallery-full-page">
      
      {/* Main Gallery Section with Clean Masonry Grid */}
      <section className="human-section gallery-main-section">
        <div className="container">
          
          {/* Masonry Grid (Pure Images, No Text Captions) */}
          <div className="gallery-masonry-grid">
            {photoGallery.map((photo, index) => (
              <div
                key={photo.id}
                className="gallery-masonry-card"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`View photo ${index + 1}`}
              >
                <div className="gallery-masonry-img-wrap">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="gallery-masonry-img"
                    loading="lazy"
                  />
                  <div className="gallery-masonry-zoom-overlay">
                    <div className="gallery-masonry-zoom-btn">
                      <i className="fa-solid fa-expand"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Pure Cinematic Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && activePhoto && (
        <div
          className="opinion-video-lightbox photo-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          <div
            className="opinion-lightbox-content pure-image-player"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button
              className="opinion-lightbox-floating-close"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              title="Close (ESC)"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Prev/Next Controls */}
            <button
              className="floating-lightbox-nav prev"
              onClick={prevPhoto}
              aria-label="Previous photo"
              title="Previous Photo (Left Arrow)"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              className="floating-lightbox-nav next"
              onClick={nextPhoto}
              aria-label="Next photo"
              title="Next Photo (Right Arrow)"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {/* Main High-Res Image */}
            <div className="pure-lightbox-image-wrap">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="pure-lightbox-img"
              />
            </div>
          </div>
        </div>
      )}

      {/* 5. Press Office / Media Inquiries Banner */}
      <section className="human-contact-banner">
        <div className="container">
          <div className="human-contact-box">
            <div className="contact-box-left">
              <span className="contact-kicker">
                <i className="fa-solid fa-images"></i>
                {lang === 'np' ? 'सञ्चार माध्यमका लागि तस्बिर अनुरोध' : 'High-Resolution Media Inquiries'}
              </span>
              <h3 className="contact-heading">
                {lang === 'np'
                  ? 'सञ्चारमाध्यम तथा प्रकाशनका लागि आधिकारिक तस्बिरहरू'
                  : 'Official Press & Publication Photography'}
              </h3>
              <p className="contact-desc">
                {lang === 'np'
                  ? 'राष्ट्रिय तथा अन्तर्राष्ट्रिय सञ्चारमाध्यम, प्रकाशन तथा समाचार पोर्टलहरूका लागि आधिकारिक उच्च गुणस्तरका तस्बिरहरू उपलब्ध छन्।'
                  : 'High-resolution press kit photographs and publication-ready imagery of Hon. Manish Jha are available upon correspondence with our communications secretariat.'}
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

export default GalleryPage;
