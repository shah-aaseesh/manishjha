import React from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const ArticlesSection = ({ onViewAllArticles }) => {
  const { articles } = siteData;
  const { lang } = useTheme();

  // Exactly 3 featured articles for the homepage
  const homepageArticles = articles.slice(0, 3);

  return (
    <section className="articles-section" id="articles">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge-pill">
            <i className="fa-solid fa-newspaper"></i>
            <span>{lang === 'np' ? 'सञ्चार कभरेज तथा पत्रपत्रिका' : 'Media Coverage & Press'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'np' ? 'प्रमुख राष्ट्रिय सञ्चारमाध्यममा मनिष झा' : 'Top Media Coverage & Articles'}
          </h2>
          <p className="section-subtitle">
            {lang === 'np'
              ? 'कान्तिपुर, द काठमाडौँ पोस्ट, रातोपाटी लगायतका प्रतिष्ठित राष्ट्रिय दैनिकमा प्रकाशित विचार, अन्तर्वार्ता र समाचारहरू।'
              : 'Direct links to major op-eds, in-depth interviews, and policy reports published across leading national dailies and broadcast portals.'}
          </p>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="articles-grid">
          {homepageArticles.map((article) => (
            <article key={article.id} className="article-card press-article-card">
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="article-media-wrap"
                title={`Read on ${article.publication}`}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-img"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/images/photos/manish-speaking-mic.jpeg';
                  }}
                />
                <span className="article-category-badge">
                  <i className={article.publicationLogo || 'fa-solid fa-newspaper'} style={{ marginRight: '5px' }}></i>
                  {article.publication}
                </span>
              </a>

              <div className="article-content-body">
                <div className="article-meta-info">
                  <span><i className="fa-regular fa-calendar"></i> {article.date}</span>
                  <span><i className="fa-solid fa-tag"></i> {lang === 'np' ? (article.categoryNp || article.category) : article.category}</span>
                </div>

                <h3 className="article-heading-title">
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-source-link-title"
                  >
                    {lang === 'np' ? (article.titleNp || article.title) : article.title}
                  </a>
                </h3>

                <p className="article-summary-snippet">
                  {lang === 'np' ? (article.summaryNp || article.summary) : article.summary}
                </p>

                <div className="article-card-footer">
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-read-newspaper-source"
                  >
                    <span>{lang === 'np' ? `${article.publicationNp || article.publication} मा पढ्नुहोस्` : `Read on ${article.publication}`}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Action Button: See All Articles */}
        <div className="articles-view-all-wrap">
          <button
            className="btn-view-all-articles"
            onClick={onViewAllArticles}
            aria-label={lang === 'np' ? 'सबै लेखहरू हेर्नुहोस्' : 'See All Articles'}
          >
            <span>
              {lang === 'np'
                ? 'सबै लेखहरू हेर्नुहोस्'
                : 'See All Articles'}
            </span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
