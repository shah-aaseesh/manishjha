const fs = require('fs');

const humanCss = `/* --------------------------------------------------
   16. Clean, Dignified & Human-Crafted Biography Layout
   -------------------------------------------------- */
.human-bio-page {
  background: var(--bg-body);
  color: var(--text-main);
  min-height: 100vh;
}

/* 16.1 Top Nav Strip */
.human-top-nav {
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-light);
  padding: 0.85rem 0;
  position: sticky;
  top: 80px;
  z-index: 920;
}

.human-top-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.human-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid var(--border-light);
  color: var(--text-heading);
  padding: 0.45rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 0.86rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.human-back-btn:hover {
  background: var(--bg-muted);
  border-color: var(--text-heading);
}

.human-nav-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.human-lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: transparent;
  border: 1px solid var(--border-light);
  color: var(--text-heading);
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-sm);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.human-lang-btn:hover {
  background: var(--bg-muted);
}

.human-contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--primary-navy);
  color: #ffffff;
  border: none;
  padding: 0.45rem 1.15rem;
  border-radius: var(--radius-sm);
  font-size: 0.86rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.human-contact-btn:hover {
  background: var(--accent-crimson);
}

/* 16.2 Hero Section */
.human-hero-section {
  padding: 4.5rem 0 3.5rem;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-light);
}

.human-hero-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 4rem;
  align-items: start;
}

.human-portrait-frame {
  background: var(--bg-muted);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.human-portrait-img {
  width: 100%;
  aspect-ratio: 4 / 4.8;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.human-portrait-caption {
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--border-light);
  background: var(--bg-card);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.human-portrait-caption strong {
  font-size: 0.95rem;
  color: var(--text-heading);
}

.human-portrait-caption span {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.human-kicker {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-crimson);
  display: block;
  margin-bottom: 0.75rem;
}

.human-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3.4rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 0.85rem 0;
}

.human-subtitle {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--text-muted);
  font-weight: 500;
  margin: 0 0 1.75rem 0;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-light);
}

.human-intro-prose {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-main);
  margin-bottom: 2rem;
}

.human-intro-prose p {
  margin-bottom: 1.1rem;
}

.human-quote {
  border-left: 3px solid var(--accent-crimson);
  padding: 1.25rem 1.75rem;
  background: var(--bg-muted);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin: 0;
}

.human-quote p {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.6;
  color: var(--text-heading);
  margin: 0 0 0.5rem 0;
}

.human-quote cite {
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--accent-crimson);
  font-style: normal;
  display: block;
}

/* 16.3 Quick Stats Ribbon */
.human-stats-ribbon {
  background: var(--primary-navy);
  color: #ffffff;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.human-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.human-stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.human-stat-val {
  font-family: var(--font-heading);
  font-size: 1.65rem;
  font-weight: 800;
  color: #ffffff;
}

.human-stat-lbl {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
}

/* 16.4 Common Human Section */
.human-section {
  padding: 4.5rem 0;
}

.human-section.bg-subtle {
  background: var(--bg-card);
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}

.human-section-header {
  max-width: 760px;
  margin-bottom: 3rem;
}

.section-eyebrow {
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-crimson);
  display: block;
  margin-bottom: 0.5rem;
}

.section-main-heading {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-heading);
  letter-spacing: -0.01em;
  margin: 0 0 0.75rem 0;
}

.section-main-sub {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0;
}

/* 16.5 Timeline Filter & Vertical Timeline */
.human-timeline-filter-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.75rem;
  flex-wrap: wrap;
}

.human-filter-pill {
  padding: 0.45rem 1rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-light);
  background: var(--bg-card);
  color: var(--text-muted);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.human-filter-pill:hover {
  border-color: var(--text-heading);
  color: var(--text-heading);
}

.human-filter-pill.active {
  background: var(--primary-navy);
  color: #ffffff;
  border-color: var(--primary-navy);
}

[data-theme='dark'] .human-filter-pill.active {
  background: var(--accent-crimson);
  border-color: var(--accent-crimson);
}

.human-vertical-timeline {
  display: flex;
  flex-direction: column;
  max-width: 860px;
}

.human-timeline-row {
  display: grid;
  grid-template-columns: 140px 32px 1fr;
  gap: 1.5rem;
  align-items: start;
}

.timeline-year-col {
  text-align: right;
  padding-top: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.35rem;
}

.timeline-year-text {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-heading);
}

.timeline-tag-pill {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-sm);
  background: var(--bg-muted);
  color: var(--text-muted);
}

.timeline-tag-pill.political {
  color: var(--accent-crimson);
  background: rgba(220, 38, 38, 0.08);
}

.timeline-spine-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.spine-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent-crimson);
  border: 2px solid var(--bg-body);
  margin-top: 0.5rem;
  z-index: 2;
}

.human-timeline-row.major-highlight .spine-dot {
  width: 16px;
  height: 16px;
  background: var(--accent-crimson);
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.25);
}

.spine-line {
  flex-grow: 1;
  width: 2px;
  background: var(--border-light);
  min-height: 45px;
}

.human-timeline-row:last-child .spine-line {
  display: none;
}

.timeline-content-col {
  padding-bottom: 2.25rem;
}

.timeline-item-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.3;
  margin: 0 0 0.35rem 0;
}

.timeline-item-org {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.86rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 0.65rem;
}

.timeline-item-org i {
  color: var(--accent-crimson);
}

.meta-sep {
  opacity: 0.4;
}

.timeline-item-desc {
  font-size: 0.96rem;
  line-height: 1.65;
  color: var(--text-main);
  margin: 0;
}

/* 16.6 Academic & Fellowships */
.human-academic-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.academic-col-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-heading);
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--border-light);
}

.academic-col-title i {
  color: var(--accent-crimson);
}

.academic-cards-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.human-academic-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  padding: 1.35rem;
  transition: border-color var(--transition-fast);
}

.human-academic-card:hover {
  border-color: var(--text-heading);
}

.academic-card-header {
  margin-bottom: 0.5rem;
}

.deg-title {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0 0 0.25rem 0;
}

.deg-inst {
  font-size: 0.84rem;
  color: var(--text-muted);
  display: block;
}

.deg-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-main);
  margin: 0;
}

.fellowship-top-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.fellowship-year {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--accent-crimson);
}

.fellowship-country {
  font-size: 0.74rem;
  font-weight: 700;
  background: var(--bg-muted);
  color: var(--text-heading);
  padding: 0.1rem 0.45rem;
  border-radius: var(--radius-sm);
}

.human-facts-feature-card {
  margin-top: 1.5rem;
  background: var(--bg-muted);
  border-left: 4px solid var(--primary-navy);
  padding: 1.25rem 1.5rem;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

.facts-feature-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.facts-feature-header i {
  color: var(--primary-navy);
}

.facts-feature-header h4 {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0;
}

.human-facts-feature-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-main);
  margin: 0;
}

/* 16.7 4 Pillars Grid */
.human-pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
}

.human-pillar-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all var(--transition-fast);
}

.human-pillar-card:hover {
  border-color: var(--accent-crimson);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.pillar-num-badge {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--accent-crimson);
  line-height: 1;
}

.pillar-heading {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0;
}

.human-pillar-card p {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-main);
  margin: 0;
}

/* 16.8 Media & Social Grid */
.human-media-social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
}

.human-media-card {
  background: var(--bg-body);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.media-card-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--bg-muted);
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  color: var(--accent-crimson);
  flex-shrink: 0;
}

.media-card-body {
  display: flex;
  flex-direction: column;
}

.media-kicker {
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.media-card-body h3 {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0 0 0.5rem 0;
}

.media-card-body p {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-main);
  margin: 0;
}

/* 16.9 Contact Banner */
.human-contact-banner {
  padding: 4rem 0;
  background: var(--bg-card);
}

.human-contact-box {
  background: var(--primary-navy);
  color: #ffffff;
  border-radius: var(--radius-lg);
  padding: 3rem 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
}

.contact-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #f87171;
  margin-bottom: 0.5rem;
}

.contact-heading {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  color: #ffffff;
}

.contact-desc {
  font-size: 0.98rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0;
}

.contact-box-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-shrink: 0;
}

.btn-contact-action-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--accent-crimson);
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.65rem;
  border-radius: var(--radius-sm);
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-contact-action-primary:hover {
  background: #b91c1c;
}

.btn-contact-action-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem 1.65rem;
  border-radius: var(--radius-sm);
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-contact-action-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #ffffff;
}

/* 16.10 Responsive Rules */
@media (max-width: 1024px) {
  .human-hero-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .human-portrait-frame {
    max-width: 300px;
  }

  .human-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .human-academic-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .human-pillars-grid,
  .human-media-social-grid {
    grid-template-columns: 1fr;
  }

  .human-contact-box {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2rem;
  }

  .contact-box-actions {
    width: 100%;
  }

  .btn-contact-action-primary,
  .btn-contact-action-secondary {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .human-title {
    font-size: 2.5rem;
  }

  .human-subtitle {
    font-size: 1.05rem;
  }

  .human-stats-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .human-timeline-row {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }

  .timeline-year-col {
    text-align: left;
    align-items: flex-start;
    flex-direction: row;
    gap: 0.75rem;
    margin-bottom: 0.25rem;
  }

  .timeline-spine-col {
    display: none;
  }

  .timeline-content-col {
    padding-bottom: 1.75rem;
    border-bottom: 1px solid var(--border-light);
    margin-bottom: 1.5rem;
  }
}

`;

const css = fs.readFileSync('src/index.css', 'utf8');
const idx1 = css.indexOf('/* --------------------------------------------------\n   16. Modern');
const idx2 = css.indexOf('/* --------------------------------------------------\n   17. Responsive');

if (idx1 !== -1 && idx2 !== -1) {
  const newCss = css.substring(0, idx1) + humanCss + css.substring(idx2);
  fs.writeFileSync('src/index.css', newCss, 'utf8');
  console.log('Successfully updated index.css with human styling!');
} else {
  console.error('Indices not found:', idx1, idx2);
}
