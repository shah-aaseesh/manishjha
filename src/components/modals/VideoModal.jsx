import React, { useEffect } from 'react';

export const VideoModal = ({ isOpen, onClose, video }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  const embedUrl =
    video.youtubeEmbed ||
    (video.youtubeId
      ? `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`
      : 'https://www.youtube-nocookie.com/embed/6X8FdGGddy0?autoplay=1');

  return (
    <div className="opinion-video-lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={video.title || "Video Player"}>
      <div className="opinion-lightbox-content pure-video-player" onClick={(e) => e.stopPropagation()}>
        <button
          className="opinion-lightbox-floating-close"
          onClick={onClose}
          aria-label="Close Lightbox"
          title="Close (ESC)"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="opinion-lightbox-video-frame">
          <iframe
            src={embedUrl}
            title={video.title || 'Video Player'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
