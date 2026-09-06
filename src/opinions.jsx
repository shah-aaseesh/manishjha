import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { OpinionsPage } from './pages/OpinionsPage';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ContactModal } from './components/modals/ContactModal';
import './index.css';

const OpinionsApp = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleNavigate = (page) => {
    if (page === 'home') {
      window.location.href = '/';
    } else if (page === 'opinions') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = `/#${page}`;
    }
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="app-root" id="opinions-app">
          {/* Header Navigation */}
          <Header
            currentPage="opinions"
            onNavigate={handleNavigate}
            onContactClick={() => setContactModalOpen(true)}
          />

          <main>
            <OpinionsPage
              onBackHome={() => {
                window.location.href = '/';
              }}
              onContactClick={() => setContactModalOpen(true)}
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
    <OpinionsApp />
  </React.StrictMode>
);
