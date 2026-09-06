import React from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const ArticlesPage = ({ onBackHome, onContactClick }) => {
  const { articles } = siteData;
  const { lang } = useTheme();

  return (
    <div className="articles-page-root">
      <div className="container articles-page-container">
        
        {/* Clean Header Title */}
        <div className="articles-page-title-wrap">
          <h1 className="articles-clean-heading">
            {lang === 'np' ? 'सञ्चारमाध्यममा प्रकाशित लेख तथा विचारहरू' : 'Articles & Media Coverage'}
          </h1>
          <p className="articles-clean-subtitle">
            {lang === 'np'
              ? 'कान्तिपुर, द काठमाडौँ पोस्ट, रातोपाटी, खबरहब लगायतका प्रमुख सञ्चारमाध्यममा प्रकाशित प्रमाणित सामग्रीहरू।'
              : 'Verified news reports, interviews, and policy articles published in leading national news portals.'}
          </p>
        </div>

        {/* All Articles Grid (Clean 3-Column Editorial Grid) */}
        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card press-article-card">
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="article-media-wrap"
                title={`Open article on ${article.publication}`}
              >
                <img src={article.image} alt={article.title} className="article-img" />
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

        {/* Bottom Back Button */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <button className="btn-crimson" onClick={onBackHome} style={{ padding: '0.85rem 2.2rem', fontSize: '0.95rem' }}>
            <i className="fa-solid fa-arrow-left" style={{ marginRight: '8px' }}></i>
            {lang === 'np' ? 'गृहपृष्ठमा फर्कनुहोस्' : 'Back to Homepage'}
          </button>
        </div>

      </div>
    </div>
  );
};
