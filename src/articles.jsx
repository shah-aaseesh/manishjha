import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { ArticlesPage } from './pages/ArticlesPage';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ContactModal } from './components/modals/ContactModal';
import './index.css';

const StandaloneArticlesApp = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleNavigate = (page) => {
    if (page === 'home') {
      window.location.href = '/';
    } else if (page === 'biography') {
      window.location.href = '/biography.html';
    } else if (page === 'articles') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="app-root" id="articles-app">
          {/* Header Navigation */}
          <Header
            currentPage="articles"
            onNavigate={handleNavigate}
            onContactClick={() => setContactModalOpen(true)}
          />

          <main>
            <ArticlesPage
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
    <StandaloneArticlesApp />
  </React.StrictMode>
);
