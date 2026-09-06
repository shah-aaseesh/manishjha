/**
 * Manish Jha Official Website - Main Application Script
 * Features: Live Countdown, Media Player, Donation System, Modals, Dynamic Forms
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initCountdown();
  initVideoShowcase();
  initArticles();
  initDonationModule();
  initPrograms();
  initMembership();
  initNewsletter();
  initContactModal();
  initUniversalModals();
});

/* --------------------------------------------------
   1. Header, Scroll & Mobile Navigation
   -------------------------------------------------- */
function initHeader() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy
    const scrollPos = window.scrollY + 100;
    document.querySelectorAll('section[id]').forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }
}

/* --------------------------------------------------
   2. Live Countdown Timer to Election 2084
   -------------------------------------------------- */
function initCountdown() {
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minsEl = document.getElementById('count-minutes');
  const secsEl = document.getElementById('count-seconds');
  const btnCampaignDetails = document.getElementById('btn-campaign-details');
  const campaignModal = document.getElementById('campaign-modal');

  // Realistic target for Election 2084 BS
  let targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 23);
  targetDate.setHours(targetDate.getHours() + 7);
  targetDate.setMinutes(targetDate.getMinutes() + 37);
  targetDate.setSeconds(targetDate.getSeconds() + 14);

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);

  if (btnCampaignDetails && campaignModal) {
    btnCampaignDetails.addEventListener('click', () => {
      openModal('campaign-modal');
    });
  }
}

/* --------------------------------------------------
   3. Video Showcase & Modal Player
   -------------------------------------------------- */
function initVideoShowcase() {
  const mainVideoCard = document.getElementById('featured-main-video');
  const thumbCards = document.querySelectorAll('.video-thumb-card');
  const btnMoreVideos = document.getElementById('btn-more-videos');
  const videoModal = document.getElementById('video-modal');
  const videoIframe = document.getElementById('video-iframe');
  const videoTitle = document.getElementById('video-modal-headline');
  const videoDesc = document.getElementById('video-modal-desc');

  // Play main video
  if (mainVideoCard) {
    mainVideoCard.addEventListener('click', () => {
      openVideoModal(siteData.videos[0]);
    });
  }

  // Thumbnails click
  thumbCards.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => {
      thumbCards.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const video = siteData.videos[idx + 1] || siteData.videos[0];
      openVideoModal(video);
    });
  });

  if (btnMoreVideos) {
    btnMoreVideos.addEventListener('click', (e) => {
      e.preventDefault();
      openVideoModal(siteData.videos[0]);
    });
  }

  function openVideoModal(video) {
    if (!video) return;
    if (videoTitle) videoTitle.textContent = `${video.show}: ${video.title}`;
    if (videoDesc) videoDesc.textContent = video.description;
    if (videoIframe) {
      // Clean high-definition embed placeholder
      videoIframe.src = `https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&enablejsapi=1`;
    }
    openModal('video-modal');
  }
}

/* --------------------------------------------------
   4. Articles Module & Modal Reader
   -------------------------------------------------- */
function initArticles() {
  const readButtons = document.querySelectorAll('.btn-read-article');
  const articleModal = document.getElementById('article-modal');
  const modalTitle = document.getElementById('article-modal-title');
  const modalCategory = document.getElementById('article-modal-category');
  const modalDate = document.getElementById('article-modal-date');
  const modalImg = document.getElementById('article-modal-img');
  const modalBody = document.getElementById('article-modal-body');

  readButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-article-id');
      const article = siteData.articles.find(a => a.id === id) || siteData.articles[0];
      
      if (article) {
        if (modalTitle) modalTitle.textContent = article.title;
        if (modalCategory) modalCategory.textContent = article.category;
        if (modalDate) modalDate.innerHTML = `<i class="fa-regular fa-calendar"></i> ${article.date} &nbsp;•&nbsp; <i class="fa-regular fa-clock"></i> ${article.readTime}`;
        if (modalImg) modalImg.src = article.image;
        if (modalBody) modalBody.innerHTML = article.fullContent;
        openModal('article-modal');
      }
    });
  });
}

/* --------------------------------------------------
   5. Donation Module
   -------------------------------------------------- */
function initDonationModule() {
  const donationPills = document.querySelectorAll('.donation-pill-item');
  const customWrapper = document.getElementById('custom-amount-wrapper');
  const customInput = document.getElementById('custom-amount-input');
  const btnDonate = document.getElementById('btn-trigger-donation');
  const modalAmount = document.getElementById('modal-donation-amount');
  const donationForm = document.getElementById('donation-form');

  let selectedAmount = '7000';

  donationPills.forEach(pill => {
    pill.addEventListener('click', () => {
      donationPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const val = pill.getAttribute('data-amount');
      if (val === 'custom') {
        if (customWrapper) customWrapper.classList.add('active');
        if (customInput) {
          customInput.focus();
          selectedAmount = customInput.value || '5000';
        }
      } else {
        if (customWrapper) customWrapper.classList.remove('active');
        selectedAmount = val;
      }
    });
  });

  if (customInput) {
    customInput.addEventListener('input', (e) => {
      selectedAmount = e.target.value;
    });
  }

  if (btnDonate) {
    btnDonate.addEventListener('click', () => {
      let finalAmt = selectedAmount;
      if (customWrapper && customWrapper.classList.contains('active')) {
        finalAmt = customInput.value || '5000';
      }
      const formattedAmt = parseInt(finalAmt, 10).toLocaleString('en-US');
      if (modalAmount) modalAmount.textContent = `NRs ${formattedAmt}`;
      openModal('donation-modal');
    });
  }

  if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('donor-name').value;
      const method = document.querySelector('input[name="payment-method"]:checked')?.value || 'eSewa';
      closeModal('donation-modal');
      showToast(`Thank you, ${name}! Your contribution via ${method} has been received.`, 'success');
      donationForm.reset();
    });
  }
}

/* --------------------------------------------------
   6. Programs Module & RSVP
   -------------------------------------------------- */
function initPrograms() {
  const viewButtons = document.querySelectorAll('.btn-view-program');
  const progModalImg = document.getElementById('prog-modal-img');
  const progModalTitle = document.getElementById('prog-modal-title');
  const progModalDate = document.getElementById('prog-modal-date');
  const progModalTime = document.getElementById('prog-modal-time');
  const progModalLocation = document.getElementById('prog-modal-location');
  const progModalSpeaker = document.getElementById('prog-modal-speaker');
  const progModalDesc = document.getElementById('prog-modal-desc');
  const rsvpForm = document.getElementById('rsvp-form');

  viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-program-id');
      const prog = siteData.programs.find(p => p.id === id) || siteData.programs[0];

      if (prog) {
        if (progModalImg) progModalImg.src = prog.image;
        if (progModalTitle) progModalTitle.textContent = prog.title;
        if (progModalDate) progModalDate.textContent = prog.date;
        if (progModalTime) progModalTime.textContent = prog.time;
        if (progModalLocation) progModalLocation.textContent = prog.location;
        if (progModalSpeaker) progModalSpeaker.textContent = prog.speaker;
        if (progModalDesc) progModalDesc.textContent = `${prog.description} (${prog.seatsAvailable})`;
        openModal('program-modal');
      }
    });
  });

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rsvp-name').value;
      closeModal('program-modal');
      showToast(`RSVP Confirmed for ${name}! A confirmation SMS has been sent.`, 'success');
      rsvpForm.reset();
    });
  }
}

/* --------------------------------------------------
   7. Membership Registration
   -------------------------------------------------- */
function initMembership() {
  const form = document.getElementById('membership-form');
  const cardName = document.getElementById('card-preview-name');
  const cardId = document.getElementById('card-preview-id');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('member-name').value.trim();
      const emailInput = document.getElementById('member-email').value.trim();

      if (!nameInput || !emailInput) return;

      const randomId = Math.floor(1000 + Math.random() * 9000);
      if (cardName) cardName.textContent = nameInput;
      if (cardId) cardId.textContent = `ID: MJ-2084-${randomId}`;

      openModal('membership-success-modal');
      showToast(`Welcome to the movement, ${nameInput}!`, 'success');
      form.reset();
    });
  }
}

/* --------------------------------------------------
   8. Newsletter Subscription
   -------------------------------------------------- */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('news-name').value.trim();
      const email = document.getElementById('news-email').value.trim();

      if (!name || !email) return;

      showToast(`Thank you ${name}! You're subscribed to MP Manish Jha's newsletter.`, 'success');
      form.reset();
    });
  }
}

/* --------------------------------------------------
   9. Contact Modal
   -------------------------------------------------- */
function initContactModal() {
  const btnContact = document.getElementById('btn-contact-nav');
  const form = document.getElementById('contact-form');

  if (btnContact) {
    btnContact.addEventListener('click', () => {
      openModal('contact-modal');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      closeModal('contact-modal');
      showToast(`Thank you ${name}, your message has been transmitted to MP Manish Jha's office.`, 'success');
      form.reset();
    });
  }
}

/* --------------------------------------------------
   10. Universal Modal Manager & Toast System
   -------------------------------------------------- */
function initUniversalModals() {
  // Close buttons
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      closeModal(modalId);
    });
  });

  // Backdrop click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(overlay => {
        closeModal(overlay.id);
      });
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Stop video if closing video modal
    if (modalId === 'video-modal') {
      const iframe = document.getElementById('video-iframe');
      if (iframe) iframe.src = '';
    }
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
