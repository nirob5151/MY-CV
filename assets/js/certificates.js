/**
 * ==============================================================================
 * CERTIFICATES & ACHIEVEMENTS LOGIC (certificates.js)
 * Interactive Achievements Hero Showcase Slider & Verified Certificates Grid
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  renderAchievementsShowcase();
  renderCertificates();
});

/**
 * Renders the Interactive Achievements Hero Showcase Slider matching user reference
 */
function renderAchievementsShowcase() {
  const track = document.getElementById('achievements-slides-track');
  const thumbsGrid = document.getElementById('achievements-thumbnails-grid');
  const counterCurrent = document.getElementById('current-slide-num');
  const counterTotal = document.getElementById('total-slides-num');
  const prevBtn = document.getElementById('achievements-nav-prev');
  const nextBtn = document.getElementById('achievements-nav-next');
  const playPauseBtn = document.getElementById('achievements-play-pause-btn');
  const pauseIcon = document.getElementById('ctrl-pause-icon');
  const playIcon = document.getElementById('ctrl-play-icon');
  const progressFill = document.getElementById('achievements-progress-fill');
  const viewport = document.getElementById('achievements-hero-viewport');

  if (!track || !thumbsGrid) return;

  const achievements = PORTFOLIO_DATA.achievements || [];
  if (achievements.length === 0) return;

  const totalSlides = achievements.length;
  if (counterTotal) {
    counterTotal.textContent = String(totalSlides).padStart(2, '0');
  }

  // 1. Render Hero Slides
  track.innerHTML = achievements.map((ach, idx) => `
    <article class="achievement-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Achievement ${idx + 1} of ${totalSlides}">
      <img src="${escapeHTML(ach.image)}" alt="${escapeHTML(ach.title)}" class="achievement-slide-bg" loading="${idx === 0 ? 'eager' : 'lazy'}" />
      <div class="achievement-slide-overlay" aria-hidden="true"></div>
      
      <div class="achievement-slide-content">
        <div class="ach-meta-row">
          <span class="ach-pill-tag">
            ${ach.iconSvg || '<span class="ach-pill-dot"></span>'}
            <span>${escapeHTML(ach.categoryTag || 'ACHIEVEMENT')}</span>
          </span>
          <span class="ach-date-tag">${escapeHTML(ach.date || ach.year || '')}</span>
        </div>

        <h2 class="ach-slide-title">${escapeHTML(ach.title)}</h2>
        <p class="ach-slide-desc">${escapeHTML(ach.description)}</p>

        <div class="ach-location-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${escapeHTML(ach.location || ach.organization || 'BUBT')}</span>
        </div>
      </div>
    </article>
  `).join('');

  // 2. Render Bottom Thumbnails
  thumbsGrid.innerHTML = achievements.map((ach, idx) => `
    <div class="ach-thumb-card ${idx === 0 ? 'active' : ''}" data-index="${idx}" role="button" tabindex="0" aria-label="Slide ${idx + 1}: ${escapeHTML(ach.title)}">
      <img src="${escapeHTML(ach.image)}" alt="${escapeHTML(ach.title)}" class="ach-thumb-img" loading="lazy" />
      <div class="ach-thumb-info">
        <span class="ach-thumb-date">${escapeHTML(ach.date || ach.year || '')}</span>
        <span class="ach-thumb-title">${escapeHTML(ach.title)}</span>
      </div>
    </div>
  `).join('');

  // State Management
  let currentSlide = 0; // Start on Slide 1
  let isPlaying = true;
  let isHovered = false;
  let autoplayTimer = null;
  const AUTOPLAY_INTERVAL = 6000; // 6 seconds per slide
  let startTime = Date.now();
  let animationFrameId = null;

  const slides = track.querySelectorAll('.achievement-slide');
  const thumbs = thumbsGrid.querySelectorAll('.ach-thumb-card');

  // Update UI on slide change
  function goToSlide(index) {
    if (index === currentSlide && slides[index].classList.contains('active')) return;

    // Remove active from old
    slides[currentSlide].classList.remove('active');
    thumbs[currentSlide].classList.remove('active');

    // Set new index
    currentSlide = (index + totalSlides) % totalSlides;

    // Add active to new
    slides[currentSlide].classList.add('active');
    thumbs[currentSlide].classList.add('active');

    // Update counter
    if (counterCurrent) {
      counterCurrent.textContent = String(currentSlide + 1).padStart(2, '0');
    }

    // Reset progress bar & timer
    resetAutoplayTimer();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // Progress Bar Animation Loop
  function startProgressAnimation() {
    cancelAnimationFrame(animationFrameId);
    startTime = Date.now();

    function update() {
      if (!isPlaying || isHovered) {
        animationFrameId = requestAnimationFrame(update);
        return;
      }

      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / AUTOPLAY_INTERVAL, 1);

      if (progressFill) {
        progressFill.style.width = `${progress * 100}%`;
      }

      if (progress >= 1) {
        nextSlide();
        return;
      }

      animationFrameId = requestAnimationFrame(update);
    }

    animationFrameId = requestAnimationFrame(update);
  }

  function resetAutoplayTimer() {
    if (progressFill) {
      progressFill.style.width = '0%';
    }
    startProgressAnimation();
  }

  // Autoplay Toggle (Play / Pause)
  function togglePlayPause() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      if (pauseIcon) pauseIcon.style.display = 'block';
      if (playIcon) playIcon.style.display = 'none';
      if (playPauseBtn) playPauseBtn.setAttribute('aria-label', 'Pause Autoplay');
      startTime = Date.now();
      startProgressAnimation();
    } else {
      if (pauseIcon) pauseIcon.style.display = 'none';
      if (playIcon) playIcon.style.display = 'block';
      if (playPauseBtn) playPauseBtn.setAttribute('aria-label', 'Play Autoplay');
      cancelAnimationFrame(animationFrameId);
    }
  }

  // Setup Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
    });
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlayPause();
    });
  }

  // Thumbnail clicks & keyboard accessibility
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.getAttribute('data-index'), 10);
      goToSlide(idx);
    });

    thumb.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(thumb.getAttribute('data-index'), 10);
        goToSlide(idx);
      }
    });
  });

  // Pause on hover over hero slide
  if (viewport) {
    viewport.addEventListener('mouseenter', () => {
      isHovered = true;
    });

    viewport.addEventListener('mouseleave', () => {
      isHovered = false;
      startTime = Date.now() - (parseFloat(progressFill?.style?.width || 0) / 100) * AUTOPLAY_INTERVAL;
    });

    // Touch Swipe Navigation for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      isHovered = true;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      isHovered = false;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }, { passive: true });
  }

  // Keyboard navigation when user is on the section
  document.addEventListener('keydown', (e) => {
    const rect = viewport?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    }
  });

  // Start initial autoplay
  if (counterCurrent) {
    counterCurrent.textContent = String(currentSlide + 1).padStart(2, '0');
  }
  startProgressAnimation();
}

/**
 * Renders the verified certificates section with category filter tabs and modern cards
 */
function renderCertificates() {
  const container = document.getElementById('certs-container-view');
  const tabsContainer = document.getElementById('certs-filter-tabs');
  if (!container) return;

  const rawCerts = PORTFOLIO_DATA.certificates || [];
  if (rawCerts.length === 0) return;

  // Month map for accurate chronological sorting
  const monthMap = {
    jan: 1, january: 1,
    feb: 2, february: 2,
    mar: 3, march: 3,
    apr: 4, april: 4,
    may: 5,
    jun: 6, june: 6,
    jul: 7, july: 7,
    aug: 8, august: 8,
    sep: 9, september: 9,
    oct: 10, october: 10,
    nov: 11, november: 11,
    dec: 12, december: 12
  };

  const getCertSortScore = (cert) => {
    const str = String(cert.date || '').toLowerCase().trim();
    const yearMatches = str.match(/\b(20\d\d)\b/g);
    const year = yearMatches ? parseInt(yearMatches[0], 10) : 2020;
    let month = 1;
    for (const [mName, mVal] of Object.entries(monthMap)) {
      if (new RegExp('\\b' + mName + '\\b').test(str)) {
        month = mVal;
        break;
      }
    }
    return year * 100 + month;
  };

  // Clone and sort certificates in Descending Order (2026, 2025, 2024, 2023, 2022)
  const certs = [...rawCerts].sort((a, b) => getCertSortScore(b) - getCertSortScore(a));

  // 1. Build Category Filter Tabs
  if (tabsContainer) {
    const categories = ['All'];
    certs.forEach(cert => {
      const cat = cert.category || 'General';
      if (!categories.includes(cat)) {
        categories.push(cat);
      }
    });

    let activeCategory = 'All';

    function renderTabs() {
      tabsContainer.innerHTML = categories.map(cat => {
        const count = cat === 'All' ? certs.length : certs.filter(c => (c.category || 'General') === cat).length;
        const isActive = cat === activeCategory;
        return `
          <button type="button" class="certs-filter-btn ${isActive ? 'active' : ''}" data-category="${escapeHTML(cat)}" role="tab" aria-selected="${isActive}">
            <span>${escapeHTML(cat)}</span>
            <span class="certs-filter-count">${count}</span>
          </button>
        `;
      }).join('');

      // Add click listeners to tabs
      tabsContainer.querySelectorAll('.certs-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const cat = btn.getAttribute('data-category');
          activeCategory = cat;
          renderTabs();
          filterAndRenderGrid(activeCategory);
        });
      });
    }

    renderTabs();
  }

  // 2. Render Cards Grid
  function filterAndRenderGrid(selectedCategory = 'All') {
    const filtered = selectedCategory === 'All' 
      ? certs 
      : certs.filter(c => (c.category || 'General') === selectedCategory);

    container.innerHTML = filtered.map(cert => {
      const skills = cert.skills || [];
      return `
        <article class="cert-card" data-category="${escapeHTML(cert.category || 'General')}">
          <div class="cert-frame" onclick="window.openImageZoom('${escapeHTML(cert.image)}', '${escapeHTML(cert.title)}')" role="button" tabindex="0" aria-label="Inspect certificate ${escapeHTML(cert.title)}">
            <img src="${escapeHTML(cert.image)}" alt="${escapeHTML(cert.title)}" class="cert-image" loading="lazy" />
            <div class="cert-overlay">
              <span class="cert-inspect-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6M21 3l-7 7M9 21H3v-6M3 21l7-7"></path>
                </svg>
                <span>Inspect Certificate</span>
              </span>
            </div>
          </div>

          <div class="cert-body">
            <div class="cert-meta-row">
              <span class="cert-issuer-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                  <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                </svg>
                <span>${escapeHTML(cert.issuer)}</span>
              </span>

              <span class="cert-date-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>${escapeHTML(cert.date)}</span>
              </span>
            </div>

            <h3 class="cert-title">${escapeHTML(cert.title)}</h3>
            <p class="cert-desc">${escapeHTML(cert.description || '')}</p>

            ${cert.credentialId ? `
              <div class="cert-credential-row">
                <span class="cert-credential-label">Credential:</span>
                <code class="cert-credential-code">${escapeHTML(cert.credentialId)}</code>
              </div>
            ` : ''}

            ${skills.length > 0 ? `
              <div class="cert-skills-row">
                ${skills.map(s => `<span class="cert-skill-pill">${escapeHTML(s)}</span>`).join('')}
              </div>
            ` : ''}

            <div class="cert-footer">
              <button type="button" class="cert-inspect-link-btn" onclick="window.openImageZoom('${escapeHTML(cert.image)}', '${escapeHTML(cert.title)}')">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6M21 3l-7 7M9 21H3v-6M3 21l7-7"></path>
                </svg>
                <span>View High-Resolution Certificate</span>
              </button>

              ${cert.credentialUrl ? `
                <a href="${escapeHTML(cert.credentialUrl)}" target="_blank" rel="noopener noreferrer" class="cert-verify-link-btn">
                  <span>Verify</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              ` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  filterAndRenderGrid('All');
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
