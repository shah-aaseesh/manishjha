import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Header = ({ onContactClick, currentPage = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { lang, toggleLang } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (currentPage === 'home') {
        const scrollPos = window.scrollY + 120;
        const sections = ['home', 'mission-vision', 'articles', 'programs', 'gallery'];
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(id);
              break;
            }
          }
        }
      } else if (currentPage === 'biography') {
        setActiveSection('biography');
      } else if (currentPage === 'mission-vision') {
        setActiveSection('mission-vision');
      } else if (currentPage === 'articles') {
        setActiveSection('articles');
      } else if (currentPage === 'opinions') {
        setActiveSection('opinions');
      } else if (currentPage === 'gallery') {
        setActiveSection('gallery');
      } else if (currentPage === 'contact') {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (link, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.id === 'biography') {
      if (onNavigate) onNavigate('biography');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.id === 'mission-vision') {
      if (onNavigate) onNavigate('mission-vision');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.id === 'articles') {
      if (onNavigate) onNavigate('articles');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.id === 'opinions') {
      if (onNavigate) onNavigate('opinions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.id === 'gallery') {
      if (onNavigate) onNavigate('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.id === 'contact') {
      if (onNavigate) onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.id === 'home') {
      if (onNavigate) onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If on sub-page and clicking a home section link
    if (currentPage !== 'home') {
      if (onNavigate) {
        onNavigate('home');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: lang === 'np' ? 'गृहपृष्ठ' : 'Home', href: '#home', id: 'home' },
    { name: lang === 'np' ? 'जीवनी' : 'Biography', href: '#biography', id: 'biography' },
    { name: lang === 'np' ? 'ध्येय र दृष्टिकोण' : 'Mission & Vision', href: '#mission-vision', id: 'mission-vision' },
    { name: lang === 'np' ? 'लेखहरू' : 'Articles', href: '#articles', id: 'articles' },
    { name: lang === 'np' ? 'विचार / भिडियो' : 'Opinions', href: '#opinions', id: 'opinions' },
    { name: lang === 'np' ? 'ग्यालरी' : 'Gallery', href: '#gallery', id: 'gallery' }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="site-header">
      <div className="container navbar">
        <a
          href="#home"
          className="brand-logo-link"
          aria-label="Manish Jha Home"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/assets/images/logo.png"
            alt="Manish Jha - Member of the Federal Parliament"
            className="site-logo-img site-logo-header"
            decoding="async"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/images/manish-logo.png';
            }}
          />
        </a>

        <nav aria-label="Main Navigation">
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
            {navLinks.map((link) => {
              const isCurrentActive =
                currentPage === 'biography'
                  ? link.id === 'biography'
                  : currentPage === 'mission-vision'
                  ? link.id === 'mission-vision'
                  : currentPage === 'articles'
                  ? link.id === 'articles'
                  : currentPage === 'opinions'
                  ? link.id === 'opinions'
                  : currentPage === 'gallery'
                  ? link.id === 'gallery'
                  : currentPage === 'contact'
                  ? link.id === 'contact'
                  : activeSection === link.id;

              return (
                <li key={link.id + link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${isCurrentActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(link, e)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            {/* Mobile Drawer Quick Contact CTA */}
            <li className="mobile-nav-cta-item">
              <button
                className="btn-crimson mobile-drawer-contact-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onContactClick) onContactClick();
                }}
                aria-label="Contact Manish Jha"
              >
                <i className="fa-solid fa-paper-plane"></i>
                <span>{lang === 'np' ? 'सम्पर्क गर्नुहोस्' : 'Contact Manish Jha'}</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Action Button: CONTACT ME */}
          <button className="btn-crimson btn-contact-header" onClick={onContactClick} aria-label="Contact Manish Jha">
            {lang === 'np' ? 'सम्पर्क गर्नुहोस्' : 'CONTACT ME'}
          </button>

          {/* Page Translation (at the end) */}
          <button
            className="theme-lang-btn header-lang-toggle"
            onClick={toggleLang}
            title={lang === 'en' ? 'नेपालीमा हेर्नुहोस्' : 'Switch to English'}
            aria-label="Toggle Language"
          >
            <i className="fa-solid fa-language"></i>
            <span>{lang === 'en' ? 'नेपाली' : 'EN'}</span>
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};
