import React, { useState, useEffect } from 'react';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ShortsMarqueeSection } from './components/ShortsMarqueeSection';
import { MissionVisionSection } from './components/MissionVisionSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ProgramsSection } from './components/ProgramsSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BiographyPage } from './pages/BiographyPage';
import { MissionVisionPage } from './pages/MissionVisionPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { OpinionsPage } from './pages/OpinionsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

// Modals
import { VideoModal } from './components/modals/VideoModal';
import { CampaignModal } from './components/modals/CampaignModal';
import { ArticleModal } from './components/modals/ArticleModal';
import { ContactModal } from './components/modals/ContactModal';
import { ProgramModal } from './components/modals/ProgramModal';

export const App = () => {
  // Page routing state
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#biography' || hash === '#/biography') return 'biography';
      if (hash === '#mission-vision' || hash === '#/mission-vision' || hash === '#vision' || hash === '#mission') return 'mission-vision';
      if (hash === '#articles' || hash === '#articles-page' || hash === '#/articles' || hash === '#press') return 'articles';
      if (hash === '#opinions' || hash === '#opinions-page' || hash === '#/opinions' || hash === '#interviews' || hash === '#podcasts') return 'opinions';
      if (hash === '#gallery' || hash === '#gallery-page' || hash === '#/gallery' || hash === '#photos') return 'gallery';
      if (hash === '#contact' || hash === '#contact-page' || hash === '#/contact' || hash === '#secretariat') return 'contact';
    }
    return 'home';
  });

  // Modal states
  const [activeVideo, setActiveVideo] = useState(null);
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeProgram, setActiveProgram] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Sync hash with browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#biography' || hash === '#/biography') {
        setCurrentPage('biography');
      } else if (hash === '#mission-vision' || hash === '#/mission-vision' || hash === '#vision' || hash === '#mission') {
        setCurrentPage('mission-vision');
      } else if (hash === '#articles' || hash === '#articles-page' || hash === '#/articles' || hash === '#press') {
        setCurrentPage('articles');
      } else if (hash === '#opinions' || hash === '#opinions-page' || hash === '#/opinions' || hash === '#interviews' || hash === '#podcasts') {
        setCurrentPage('opinions');
      } else if (hash === '#gallery' || hash === '#gallery-page' || hash === '#/gallery' || hash === '#photos') {
        setCurrentPage('gallery');
      } else if (hash === '#contact' || hash === '#contact-page' || hash === '#/contact' || hash === '#secretariat') {
        setCurrentPage('contact');
      } else if (hash === '#home' || hash === '' || hash === '#about') {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    if (page === 'biography') {
      window.location.hash = 'biography';
    } else if (page === 'mission-vision') {
      window.location.hash = 'mission-vision';
    } else if (page === 'articles') {
      window.location.hash = 'articles';
    } else if (page === 'opinions') {
      window.location.hash = 'opinions';
    } else if (page === 'gallery') {
      window.location.hash = 'gallery';
    } else if (page === 'contact') {
      window.location.hash = 'contact';
    } else {
      window.location.hash = 'home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="app-root" id="home">
          {/* Header Navigation */}
          <Header
            currentPage={currentPage}
            onNavigate={navigate}
            onContactClick={() => navigate('contact')}
          />

          <main>
            {currentPage === 'home' ? (
              <>
                {/* Hero & Media Showcase */}
                <HeroSection
                  onVideoClick={(video) => setActiveVideo(video)}
                  onBioClick={() => navigate('biography')}
                  onOpinionsClick={() => navigate('opinions')}
                />

                {/* Vertical Shorts Ever-Looping Marquee Stream */}
                <ShortsMarqueeSection
                  onVideoClick={(video) => setActiveVideo(video)}
                />

                {/* Mission & Vision Section */}
                <MissionVisionSection
                  onReadMissionVision={() => navigate('mission-vision')}
                  onContactClick={() => navigate('contact')}
                />

                {/* Upcoming Townhalls & Civic Programs Section */}
                <ProgramsSection
                  onViewProgram={(prog) => setActiveProgram(prog)}
                  onContactClick={() => navigate('contact')}
                />

                {/* Visual Media & Photo Gallery Section */}
                <GallerySection onViewAllGallery={() => navigate('gallery')} />

                {/* 3 Featured Articles & See All Articles Section */}
                <ArticlesSection onViewAllArticles={() => navigate('articles')} />
              </>
            ) : currentPage === 'biography' ? (
              /* Dedicated Standalone Biography Page */
              <BiographyPage
                onBackHome={() => navigate('home')}
                onContactClick={() => navigate('contact')}
              />
            ) : currentPage === 'mission-vision' ? (
              /* Dedicated Standalone Mission & Vision Page */
              <MissionVisionPage
                onBackHome={() => navigate('home')}
                onContactClick={() => navigate('contact')}
              />
            ) : currentPage === 'opinions' ? (
              /* Dedicated Standalone Opinions & Interviews Page */
              <OpinionsPage
                onBackHome={() => navigate('home')}
                onContactClick={() => navigate('contact')}
              />
            ) : currentPage === 'gallery' ? (
              /* Dedicated Standalone Visual Archives & Photo Gallery Page */
              <GalleryPage
                onBackHome={() => navigate('home')}
                onContactClick={() => navigate('contact')}
              />
            ) : currentPage === 'articles' ? (
              /* Dedicated Standalone Articles & Press Coverage Page */
              <ArticlesPage
                onBackHome={() => navigate('home')}
                onContactClick={() => navigate('contact')}
              />
            ) : (
              /* Dedicated Standalone Contact Page */
              <ContactPage
                onBackHome={() => navigate('home')}
              />
            )}
          </main>

          {/* Mega Footer */}
          <Footer onNavigate={navigate} />

          {/* Floating Scroll To Top with Progress Ring */}
          <ScrollToTop />

          {/* Interactive Modals */}
          <VideoModal
            isOpen={!!activeVideo}
            onClose={() => setActiveVideo(null)}
            video={activeVideo}
          />

          <CampaignModal
            isOpen={campaignModalOpen}
            onClose={() => setCampaignModalOpen(false)}
            onJoinClick={() => setContactModalOpen(true)}
          />

          <ArticleModal
            isOpen={!!activeArticle}
            onClose={() => setActiveArticle(null)}
            article={activeArticle}
          />

          <ProgramModal
            isOpen={!!activeProgram}
            onClose={() => setActiveProgram(null)}
            program={activeProgram}
          />

          <ContactModal
            isOpen={contactModalOpen}
            onClose={() => setContactModalOpen(false)}
          />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
