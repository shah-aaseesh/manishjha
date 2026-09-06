import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export const ArticleModal = ({ isOpen, onClose, article }) => {
  const { addToast } = useToast();
  const [fontSize, setFontSize] = useState(1); // rem multiplier

  if (!isOpen || !article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    addToast('Article link copied to clipboard!', 'success');
  };

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog modal-dialog-large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ background: 'rgba(230, 40, 70, 0.1)', color: 'var(--accent-crimson)', fontWeight: 700, fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>
              {article.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
              <i className="fa-regular fa-clock"></i> {article.readTime}
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="modal-body">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
            {article.title}
          </h2>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem', marginBottom: '1.25rem', fontSize: '0.85rem', color: '#64748b' }}>
            <span><i className="fa-regular fa-calendar"></i> Published: {article.date}</span>
            
            {/* Reading font size controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>Text size:</span>
              <button
                style={{ padding: '2px 8px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.8rem' }}
                onClick={() => setFontSize(prev => Math.max(0.85, prev - 0.1))}
                title="Decrease font size"
              >
                A-
              </button>
              <button
                style={{ padding: '2px 8px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.8rem' }}
                onClick={() => setFontSize(prev => Math.min(1.3, prev + 0.1))}
                title="Increase font size"
              >
                A+
              </button>
            </div>
          </div>

          <img
            src={article.image}
            alt={article.title}
            style={{ width: '100%', maxHeight: '380px', objectFit: 'cover', objectPosition: 'center 10%', borderRadius: '8px', marginBottom: '1.5rem' }}
          />

          <div style={{ fontSize: `${fontSize}rem`, color: 'var(--text-main)', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
            {article.fullContent}
          </div>

          {/* Social Share Bar */}
          <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>Share this article:</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
                style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
              >
                <i className="fa-brands fa-x-twitter" style={{ marginRight: '4px' }}></i> X / Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
                style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
              >
                <i className="fa-brands fa-facebook" style={{ marginRight: '4px' }}></i> Facebook
              </a>
              <button
                className="btn-outline-dark"
                style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
                onClick={handleCopyLink}
              >
                <i className="fa-regular fa-copy" style={{ marginRight: '4px' }}></i> Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
