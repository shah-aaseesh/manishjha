import React from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const Footer = ({ onNavigate, onContactClick }) => {
  const { profile } = siteData;
  const { lang } = useTheme();

  const handleNav = (e, target) => {
    e.preventDefault();
    if (target === 'biography') {
      if (onNavigate) onNavigate('biography');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'mission-vision') {
      if (onNavigate) onNavigate('mission-vision');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'articles' || target === 'articles-page') {
      if (onNavigate) onNavigate('articles');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'opinions' || target === 'opinions-page') {
      if (onNavigate) onNavigate('opinions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'gallery' || target === 'gallery-page') {
      if (onNavigate) onNavigate('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'contact' || target === 'contact-page' || target === 'secretariat') {
      if (onNavigate) onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'home') {
      if (onNavigate) onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="site-footer minimal-footer">
      <div className="container">
        <div className="minimal-footer-main">
          
          {/* Brand & Parliamentary Identity */}
          <div className="minimal-footer-brand">
            <div className="minimal-footer-emblem">
              <i className="fa-solid fa-landmark-dome"></i>
            </div>
            <div className="minimal-footer-titles">
              <h4 className="minimal-footer-name">
                {lang === 'np' ? 'माननीय मनिष झा' : 'Hon. Manish Jha'}
                <span className="minimal-footer-badge">{lang === 'np' ? 'सांसद' : 'MP'}</span>
              </h4>
              <p className="minimal-footer-role">
                {lang === 'np'
                  ? 'प्रतिनिधिसभा सदस्य • सङ्घीय संसद, नेपाल'
                  : 'Member of the Federal Parliament of Nepal'}
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="minimal-footer-nav" aria-label="Footer Navigation">
            <a href="#home" onClick={(e) => handleNav(e, 'home')}>
              {lang === 'np' ? 'गृहपृष्ठ' : 'Home'}
            </a>
            <a href="#biography" onClick={(e) => handleNav(e, 'biography')}>
              {lang === 'np' ? 'जीवनी' : 'Biography'}
            </a>
            <a href="#mission-vision" onClick={(e) => handleNav(e, 'mission-vision')}>
              {lang === 'np' ? 'ध्येय र दृष्टिकोण' : 'Mission & Vision'}
            </a>
            <a href="#articles" onClick={(e) => handleNav(e, 'articles')}>
              {lang === 'np' ? 'आलेख तथा मिडिया' : 'Press'}
            </a>
            <a href="#opinions" onClick={(e) => handleNav(e, 'opinions')}>
              {lang === 'np' ? 'संसदीय विचार' : 'Opinions'}
            </a>
            <a href="#gallery" onClick={(e) => handleNav(e, 'gallery')}>
              {lang === 'np' ? 'तस्बिरहरू' : 'Gallery'}
            </a>
            <a href="#contact" onClick={(e) => handleNav(e, 'contact')}>
              {lang === 'np' ? 'सम्पर्क' : 'Contact'}
            </a>
          </nav>

          {/* Clean Social Icons */}
          <div className="minimal-footer-socials">
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-social-icon fb"
              aria-label="Facebook"
              title="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-social-icon x-tw"
              aria-label="X (Twitter)"
              title="X (Twitter)"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-social-icon insta"
              aria-label="Instagram"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href={profile.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-social-icon yt"
              aria-label="YouTube"
              title="YouTube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-social-icon in"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="minimal-footer-bottom">
          <p className="minimal-copyright">
            © {new Date().getFullYear()} {lang === 'np' ? 'माननीय मनिष झा' : 'Hon. Manish Jha, MP'}. {lang === 'np' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
          </p>
          <div className="minimal-footer-contacts">
            <a href={`tel:${profile.phone.split('/')[0].trim()}`} className="minimal-contact-link">
              <i className="fa-solid fa-phone"></i>
              <span>{profile.phone.split('/')[0].trim()}</span>
            </a>
            <span className="dot-sep">•</span>
            <a href={`mailto:${profile.email}`} className="minimal-contact-link">
              <i className="fa-regular fa-envelope"></i>
              <span>{profile.email}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
