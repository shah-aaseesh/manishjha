import React, { useState, useEffect, useCallback } from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const GallerySection = ({ onViewAllGallery }) => {
  const { photoGallery } = siteData;
  const { lang } = useTheme();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const previewPhotos = photoGallery.slice(0, 6);
  const activePhoto = lightboxIndex !== null ? previewPhotos[lightboxIndex] : null;

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
      setLightboxIndex((prev) => (prev + 1) % previewPhotos.length);
    }
  }, [lightboxIndex, previewPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + previewPhotos.length) % previewPhotos.length);
    }
  }, [lightboxIndex, previewPhotos.length]);

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
    <section className="gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge-pill">
            <i className="fa-solid fa-images"></i>
            <span>{lang === 'np' ? 'दृश्य यात्रा तथा अभिलेख' : 'Visual Archives & Media'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'np' ? 'माननीय मनिष झा — तस्बिरहरूमा जनसेवा' : 'Hon. Manish Jha in Public Service — Visual Gallery'}
          </h2>
          <p className="section-subtitle">
            {lang === 'np'
              ? 'संसद्, जनसभा, अन्तर्राष्ट्रिय नीति संवाद, मैथिली संस्कृति र सातै प्रदेशका नागरिकहरूसँगको प्रत्यक्ष साक्षात्कारका क्षणहरू।'
              : 'Authentic photographic glimpses of parliamentary stewardship, massive civic rallies, policy summits, and grassroots citizen engagement.'}
          </p>
        </div>

        {/* Homepage Masonry Grid (Pure Clean Images) */}
        <div className="gallery-masonry-grid homepage-gallery-masonry">
          {previewPhotos.map((photo, index) => (
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

        {/* See All Photos Action Button */}
        <div className="gallery-see-all-container">
          <button
            className="btn-see-all-photos"
            onClick={onViewAllGallery}
            aria-label={lang === 'np' ? 'सबै तस्बिरहरू हेर्नुहोस्' : 'See All Photos'}
          >
            <span>{lang === 'np' ? 'सबै तस्बिरहरू हेर्नुहोस्' : 'See All Photos'}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Pure High-Res Lightbox Modal */}
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
    </section>
  );
};

export default GallerySection;
