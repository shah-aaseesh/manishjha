import React, { useState, useEffect } from 'react';

export const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setIsVisible(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      className="scroll-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      title="Scroll to Top"
    >
      <svg className="progress-ring" width="44" height="44">
        <circle
          className="progress-ring-bg"
          stroke="rgba(230, 40, 70, 0.18)"
          strokeWidth="3.5"
          fill="transparent"
          r="18"
          cx="22"
          cy="22"
        />
        <circle
          className="progress-ring-circle"
          stroke="var(--accent-crimson)"
          strokeWidth="3.5"
          strokeDasharray={2 * Math.PI * 18}
          strokeDashoffset={2 * Math.PI * 18 - (scrollProgress / 100) * 2 * Math.PI * 18}
          strokeLinecap="round"
          fill="transparent"
          r="18"
          cx="22"
          cy="22"
        />
      </svg>
      <i className="fa-solid fa-arrow-up scroll-arrow-icon"></i>
    </button>
  );
};
