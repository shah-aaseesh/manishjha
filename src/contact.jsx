import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ContactModal } from './components/modals/ContactModal';
import './index.css';

const ContactApp = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleNavigate = (page) => {
    if (page === 'home') {
      window.location.href = '/';
    } else if (page === 'biography') {
      window.location.href = '/#biography';
    } else if (page === 'mission-vision') {
      window.location.href = '/#mission-vision';
    } else if (page === 'articles') {
      window.location.href = '/#articles';
    } else if (page === 'opinions') {
      window.location.href = '/#opinions';
    } else if (page === 'gallery') {
      window.location.href = '/#gallery';
    } else if (page === 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="app-root" id="contact-app">
          {/* Header Navigation */}
          <Header
            currentPage="contact"
            onNavigate={handleNavigate}
            onContactClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <main>
            <ContactPage
              onBackHome={() => {
                window.location.href = '/';
              }}
            />
          </main>

          {/* Mega Footer */}
          <Footer onNavigate={handleNavigate} />

          {/* Floating Scroll To Top */}
          <ScrollToTop />

          {/* Contact Modal */}
          <ContactModal
            isOpen={contactModalOpen}
            onClose={() => setContactModalOpen(false)}
          />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactApp />
  </React.StrictMode>
);
