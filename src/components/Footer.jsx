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
    <footer className="site-footer">
      <div className="container">
        
        {/* Top Civic Commitment Strip */}
        <div className="footer-top-strip">
          <div className="footer-top-brand">
            <div className="parliament-emblem-badge">
              <i className="fa-solid fa-landmark-dome"></i>
            </div>
            <div>
              <h4 className="footer-top-name">
                {lang === 'np' ? 'माननीय मनिष झा' : 'Hon. Manish Jha, MP'}
              </h4>
              <span className="footer-top-role">
                {lang === 'np'
                  ? 'प्रतिनिधिसभा सदस्य • सङ्घीय संसद, नेपाल'
                  : 'Member of the Federal Parliament of Nepal (House of Representatives)'}
              </span>
            </div>
          </div>

          <div className="footer-top-quote">
            <i className="fa-solid fa-quote-left quote-icon"></i>
            <span>
              {lang === 'np'
                ? 'संसार बदल्न पहिला आफूलाई बदल्न र राजनीतिलाई कार्यमुखी बनाउन जरुरी छ।'
                : '"Need to Change Yourself to Change Our World."'}
            </span>
          </div>
        </div>

        {/* 4-Column Main Grid */}
        <div className="footer-main-grid-v2">
          
          {/* Col 1: Parliamentary Secretariat & Constituency Office */}
          <div className="footer-col-block">
            <h3 className="footer-col-title-v2">
              <i className="fa-solid fa-building-columns"></i>
              <span>{lang === 'np' ? 'संसदीय तथा सम्पर्क कार्यालय' : 'Secretariat & Offices'}</span>
            </h3>
            
            <div className="footer-offices-list">
              <div className="footer-office-card">
                <span className="office-tag">
                  {lang === 'np' ? 'सङ्घीय संसद् सचिवालय' : 'Federal Parliament Secretariat'}
                </span>
                <p className="office-address">
                  <i className="fa-solid fa-location-dot"></i> {profile.officeParliament}
                </p>
              </div>

              <div className="footer-office-card">
                <span className="office-tag">
                  {lang === 'np' ? 'मधेश निर्वाचन क्षेत्र सम्पर्क कार्यालय' : 'Constituency Civic Secretariat'}
                </span>
                <p className="office-address">
                  <i className="fa-solid fa-location-dot"></i> {profile.officeConstituency}
                </p>
              </div>

              <div className="footer-direct-contact">
                <a href={`tel:${profile.phone.split('/')[0].trim()}`} className="direct-contact-item">
                  <i className="fa-solid fa-phone"></i>
                  <span>{profile.phone}</span>
                </a>
                <a href={`mailto:${profile.email}`} className="direct-contact-item">
                  <i className="fa-regular fa-envelope"></i>
                  <span>{profile.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Navigation Portals */}
          <div className="footer-col-block">
            <h3 className="footer-col-title-v2">
              <i className="fa-solid fa-compass"></i>
              <span>{lang === 'np' ? 'मुख्य पृष्ठहरू' : 'Official Portals'}</span>
            </h3>
            
            <ul className="footer-nav-links-v2">
              <li>
                <a href="#home" onClick={(e) => handleNav(e, 'home')}>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>{lang === 'np' ? 'गृहपृष्ठ' : 'Home'}</span>
                </a>
              </li>
              <li>
                <a href="#biography" onClick={(e) => handleNav(e, 'biography')}>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>{lang === 'np' ? 'जीवनी तथा सार्वजनिक अभिलेख' : 'Biography & Public Record'}</span>
                </a>
              </li>
              <li>
                <a href="#mission-vision" onClick={(e) => handleNav(e, 'mission-vision')}>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>{lang === 'np' ? 'ध्येय र दृष्टिकोण' : 'Mission, Vision & Priorities'}</span>
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleNav(e, 'programs')}>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>{lang === 'np' ? 'नागरिक नीति संवाद तथा सम्मेलन' : 'Civic Conclaves & Townhalls'}</span>
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNav(e, 'gallery')}>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>{lang === 'np' ? 'तस्बिर अभिलेख तथा मिडिया' : 'Visual Archives & Gallery'}</span>
                </a>
              </li>
              <li>
                <a href="#articles" onClick={(e) => handleNav(e, 'articles')}>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>{lang === 'np' ? 'सञ्चार आलेख तथा अन्तर्वार्ता' : 'Media Articles & Press Coverage'}</span>
                </a>
              </li>
              <li>
                <a href="#opinions" onClick={(e) => handleNav(e, 'opinions')}>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>{lang === 'np' ? 'संसदीय मन्तव्य तथा भिडियो' : 'Opinions, Speeches & Shorts'}</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNav(e, 'contact')}>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>{lang === 'np' ? 'सम्पर्क तथा सचिवालय' : 'Contact & Secretariat'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legislative Focus Areas */}
          <div className="footer-col-block">
            <h3 className="footer-col-title-v2">
              <i className="fa-solid fa-scale-balanced"></i>
              <span>{lang === 'np' ? 'संसदीय प्राथमिकता' : 'Legislative Priorities'}</span>
            </h3>

            <div className="footer-priorities-list">
              <div className="priority-mini-pill">
                <i className="fa-solid fa-laptop-code"></i>
                <span>{lang === 'np' ? 'डिजिटल नेपाल र आईटी निर्यात' : 'Digital Public Infrastructure & Tech'}</span>
              </div>
              <div className="priority-mini-pill">
                <i className="fa-solid fa-wheat-awn"></i>
                <span>{lang === 'np' ? 'मधेश कृषि-औद्योगिक करिडोर' : 'Madhesh Agro-Industrial Corridors'}</span>
              </div>
              <div className="priority-mini-pill">
                <i className="fa-solid fa-gavel"></i>
                <span>{lang === 'np' ? 'सार्वजनिक खरिद र सुशासन' : 'Transparent Governance & Open Data'}</span>
              </div>
              <div className="priority-mini-pill">
                <i className="fa-solid fa-user-graduate"></i>
                <span>{lang === 'np' ? 'युवा उद्यमशीलता र रोजगारी' : 'Youth Apprenticeship & Employment'}</span>
              </div>
              <div className="priority-mini-pill">
                <i className="fa-solid fa-archway"></i>
                <span>{lang === 'np' ? 'मिथिला सम्पदा र पर्यटन' : 'Mithila Heritage & Cultural Tourism'}</span>
              </div>
              <div className="priority-mini-pill">
                <i className="fa-solid fa-globe"></i>
                <span>{lang === 'np' ? 'नेपाली डायस्पोरा ज्ञान सञ्जाल' : 'Diaspora Knowledge & Investment'}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Official Social Presence & Verified Handles */}
          <div className="footer-col-block">
            <h3 className="footer-col-title-v2">
              <i className="fa-solid fa-circle-check"></i>
              <span>{lang === 'np' ? 'आधिकारिक नागरिक सञ्जाल' : 'Verified Social Presence'}</span>
            </h3>

            <p className="footer-social-intro">
              {lang === 'np'
                ? 'संसदीय गतिविधि, नागरिक संवाद र ताजा नीतिगत सूचनाहरूका लागि आधिकारिक सञ्जालहरूमा जोडिनुहोस्।'
                : 'Follow official parliamentary debates, citizen townhall updates, and public initiatives across verified channels.'}
            </p>

            <div className="footer-social-grid-v2">
              <a
                href={profile.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-link fb"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-link x-tw"
                aria-label="X / Twitter"
              >
                <i className="fa-brands fa-x-twitter"></i>
                <span>X / Twitter</span>
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-link insta"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-link yt"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
                <span>YouTube</span>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-link in"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="parliament-seal-badge">
              <i className="fa-solid fa-shield-halved"></i>
              <span>
                {lang === 'np'
                  ? 'सङ्घीय संसद् सचिवालय • आधिकारिक नागरिक पोर्टल'
                  : 'Federal Parliament of Nepal • Official Citizen Portal'}
              </span>
            </div>
          </div>

        </div>

        {/* Copyright & Dignified Bottom Bar */}
        <div className="footer-bottom-bar-v2">
          <div className="footer-copy-text">
            © {new Date().getFullYear()} <strong>Hon. Manish Jha, MP</strong> | House of Representatives, Federal Parliament of Nepal.
          </div>
          
          <div className="footer-principles-tag">
            <span className="dot-sep">•</span> Evidence-Driven Policy
            <span className="dot-sep">•</span> Good Governance
            <span className="dot-sep">•</span> Citizen Empowerment
          </div>

          <div className="footer-sub-links">
            <a href="#home" onClick={(e) => handleNav(e, 'home')}>Home</a>
            <a href="#biography" onClick={(e) => handleNav(e, 'biography')}>Biography</a>
            <a href="#mission-vision" onClick={(e) => handleNav(e, 'mission-vision')}>Manifesto</a>
            <a href="#articles" onClick={(e) => handleNav(e, 'articles')}>Press</a>
            <a href="#gallery" onClick={(e) => handleNav(e, 'gallery')}>Gallery</a>
            <a href="#contact" onClick={(e) => handleNav(e, 'contact')}>Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
