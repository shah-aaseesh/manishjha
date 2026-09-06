import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const FloatingContactBox = () => {
  const { lang } = useTheme();

  const socialLinks = [
    {
      id: 'messenger',
      title: lang === 'np' ? 'मेसेन्जर च्यानल' : 'Messenger Channel',
      url: 'https://www.messenger.com/channel/ManishJhaNepal1',
      icon: 'fa-brands fa-facebook-messenger',
      colorClass: 'social-messenger'
    },
    {
      id: 'whatsapp',
      title: lang === 'np' ? 'ह्वाट्सएप समूह' : 'WhatsApp Community',
      url: 'https://chat.whatsapp.com/EZTOlVV4vJGLN0y1a2RQOq?s=qt&p=a&mlu=4&ilr=4',
      icon: 'fa-brands fa-whatsapp',
      colorClass: 'social-whatsapp'
    },
    {
      id: 'facebook',
      title: lang === 'np' ? 'फेसबुक' : 'Facebook Page',
      url: 'https://www.facebook.com/share/1DiGTNw6aK/',
      icon: 'fa-brands fa-facebook-f',
      colorClass: 'social-facebook'
    },
    {
      id: 'instagram',
      title: lang === 'np' ? 'इन्स्टाग्राम' : 'Instagram',
      url: 'https://www.instagram.com/manishjha_nepal?stkn=MTN4NWcxOTk5M3FsZA==',
      icon: 'fa-brands fa-instagram',
      colorClass: 'social-instagram'
    },
    {
      id: 'email',
      title: lang === 'np' ? 'इमेल सचिवालय' : 'Email Secretariat',
      url: 'mailto:office.manishjha@gmail.com',
      icon: 'fa-solid fa-envelope',
      colorClass: 'social-email'
    }
  ];

  return (
    <aside className="floating-social-box" aria-label="Quick Connect Social Links">
      <div className="floating-social-inner">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target={item.id === 'email' ? '_self' : '_blank'}
            rel={item.id === 'email' ? undefined : 'noopener noreferrer'}
            className={`floating-social-btn ${item.colorClass}`}
            aria-label={item.title}
            title={item.title}
          >
            <i className={item.icon}></i>
            <span className="floating-tooltip">{item.title}</span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default FloatingContactBox;
