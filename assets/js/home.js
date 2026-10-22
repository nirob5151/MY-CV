/**
 * ==============================================================================
 * HOME PAGE LOGIC (home.js)
 * Populates hero data, typewriter effect, tools showcase, and 3 featured projects
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  renderHeroData();
  initHeroTypewriter();
  initHeroPhotoTilt();
  renderToolsList();
  renderFocusAreas();
  renderFeaturedProjects();
  setupProjectModal();
});

function renderHeroData() {
  const profile = PORTFOLIO_DATA.profile;
  if (!profile) return;

  const heroNameEl = document.getElementById('hero-name');
  const heroBioEl = document.getElementById('hero-bio');
  const heroPhotoEl = document.getElementById('hero-photo');

  if (heroNameEl) heroNameEl.textContent = profile.name;
  if (heroBioEl) heroBioEl.textContent = profile.shortBio;
  if (heroPhotoEl) {
    heroPhotoEl.src = profile.photo;
    heroPhotoEl.alt = "Portrait of Masudur Rahman Nirob";
  }

  // Hero Status Tag on Photo
  const statusTagText = document.querySelector('.status-tag-text');
  if (statusTagText && profile.educationShort) {
    statusTagText.textContent = profile.educationShort;
  }

  // CV Download Button
  const heroCvBtn = document.getElementById('btn-hero-cv');
  if (heroCvBtn && profile.resumePdf) {
    heroCvBtn.href = profile.resumePdf;
  }

  // Hero Contact Bar Items
  const locEl = document.getElementById('hero-location-text');
  if (locEl && profile.location) locEl.textContent = profile.location;

  const emailLink = document.getElementById('hero-email-link');
  const emailText = document.getElementById('hero-email-text');
  if (emailLink && profile.email) {
    emailLink.href = `mailto:${profile.email}`;
    if (emailText) emailText.textContent = profile.email;
  }

  const phoneLink = document.getElementById('hero-phone-link');
  const phoneText = document.getElementById('hero-phone-text');
  if (phoneLink && profile.phone) {
    phoneLink.href = `tel:${profile.phoneTel || profile.phone.replace(/\s+/g, '')}`;
    if (phoneText) phoneText.textContent = profile.phone;
  }

  // Hero Social Buttons
  const linkedinBtn = document.getElementById('hero-social-linkedin');
  const behanceBtn = document.getElementById('hero-social-behance');
  const githubBtn = document.getElementById('hero-social-github');
  const facebookBtn = document.getElementById('hero-social-facebook');

  if (linkedinBtn && profile.social?.linkedin) linkedinBtn.href = profile.social.linkedin;
  if (behanceBtn && profile.social?.behance) behanceBtn.href = profile.social.behance;
  if (githubBtn && profile.social?.github) githubBtn.href = profile.social.github;
  if (facebookBtn && profile.social?.facebook) facebookBtn.href = profile.social.facebook;
}

/**
 * ==============================================================================
 * HERO TYPEWRITER ANIMATION
 * - Types each role one letter at a time (~90ms per letter)
 * - Pauses ~1.5s when role is fully typed
 * - Deletes letter by letter (~50ms per letter)
 * - Pauses briefly, then loops through roles forever
 * - Thin blinking cursor stays blinking throughout
 * - Handles prefers-reduced-motion
 * ==============================================================================
 */
function initHeroTypewriter() {
  const textEl = document.getElementById('hero-typewriter-text');
  if (!textEl) return;

  const roles = (PORTFOLIO_DATA.profile && PORTFOLIO_DATA.profile.typewriterRoles) || [
    "Graphic Designer",
    "CSE Student",
    "Programmer"
  ];

  // Accessibility: prefers-reduced-motion check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    textEl.textContent = roles[0] || 'Designer';
    const cursor = document.getElementById('typewriter-cursor');
    if (cursor) cursor.style.display = 'none';
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPE_SPEED = 90;         // ~90ms per letter
  const DELETE_SPEED = 50;       // ~50ms per letter
  const HOLD_TIME = 1500;        // 1.5s pause when fully typed
  const PAUSE_BEFORE_NEXT = 400; // brief pause before next role

  function typeTick() {
    const currentRole = roles[roleIndex % roles.length];

    if (!isDeleting) {
      // Forward typing
      charIndex++;
      textEl.textContent = currentRole.substring(0, charIndex);

      if (charIndex >= currentRole.length) {
        // Role complete: pause 1.5s before deleting
        isDeleting = true;
        setTimeout(typeTick, HOLD_TIME);
        return;
      }
      setTimeout(typeTick, TYPE_SPEED);
    } else {
      // Backward deleting
      charIndex--;
      textEl.textContent = currentRole.substring(0, charIndex);

      if (charIndex <= 0) {
        // Fully erased: switch to next role, pause briefly, then type forward
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeTick, PAUSE_BEFORE_NEXT);
        return;
      }
      setTimeout(typeTick, DELETE_SPEED);
    }
  }

  // Start the typing loop
  typeTick();
}

/**
 * ==============================================================================
 * HERO PROFILE PHOTO 3D TILT INTERACTION
 * Tilts the frame in 3D perspective toward the mouse cursor on hover.
 * ==============================================================================
 */
function initHeroPhotoTilt() {
  const frame = document.getElementById('hero-profile-frame');
  const container = document.getElementById('hero-visual-container');
  if (!frame || !container) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let isHovered = false;

  container.addEventListener('mouseenter', () => {
    isHovered = true;
    frame.style.animationPlayState = 'paused';
  });

  container.addEventListener('mousemove', (e) => {
    if (!isHovered) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt (max ~7.5 degrees)
    const rotateX = ((centerY - y) / centerY) * 7.5;
    const rotateY = ((x - centerX) / centerX) * 7.5;

    frame.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
  });

  container.addEventListener('mouseleave', () => {
    isHovered = false;
    frame.style.transform = '';
    frame.style.animationPlayState = 'running';
  });
}

function renderToolsList() {
  const track = document.getElementById('tools-marquee-track');
  if (!track) return;

  const tools = (PORTFOLIO_DATA.profile && PORTFOLIO_DATA.profile.tools) || [];
  if (tools.length === 0) return;

  // Helper to generate a single tool card markup
  const createCardHTML = (tool, isDuplicate = false) => {
    const iconHtml = tool.svg || `
      <div class="tool-icon-box ${escapeHTML(tool.icon || '')}">
        <span>${escapeHTML((tool.name || '').substring(0, 2))}</span>
      </div>
    `;

    return `
      <div class="tool-card ${isDuplicate ? 'tool-card-duplicate' : ''}" data-tool="${escapeHTML(tool.name)}">
        <div class="tool-icon-wrapper ${escapeHTML(tool.icon || '')}">
          ${iconHtml}
        </div>
        <div class="tool-info">
          <h3 class="tool-name">${escapeHTML(tool.name)}</h3>
          <p class="tool-desc">${escapeHTML(tool.description || '')}</p>
        </div>
      </div>
    `;
  };

  // Original list + duplicate list once so loop has no gap or jump
  const originalCards = tools.map(tool => createCardHTML(tool, false)).join('');
  const duplicateCards = tools.map(tool => createCardHTML(tool, true)).join('');

  track.innerHTML = originalCards + duplicateCards;

  // Enable mobile swipe & pause interaction
  initMarqueeInteraction();
}

function initMarqueeInteraction() {
  const container = document.getElementById('tools-marquee-container');
  const track = document.getElementById('tools-marquee-track');
  if (!container || !track) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let isTouching = false;
  let lastTouchEndTime = 0;

  const pauseScrolling = () => {
    track.style.animationPlayState = 'paused';
    track.classList.add('is-paused');
    track.classList.remove('is-running');
  };

  const resumeScrolling = () => {
    track.style.animationPlayState = 'running';
    track.classList.remove('is-paused');
    track.classList.add('is-running');
  };

  // TOUCH EVENTS
  container.addEventListener('touchstart', () => {
    isTouching = true;
    pauseScrolling();
  }, { passive: true });

  container.addEventListener('touchmove', () => {
    if (isTouching) {
      pauseScrolling();
    }
  }, { passive: true });

  const handleTouchEnd = () => {
    isTouching = false;
    lastTouchEndTime = Date.now();
    resumeScrolling();

    if (document.activeElement && container.contains(document.activeElement)) {
      document.activeElement.blur();
    }
  };

  container.addEventListener('touchend', handleTouchEnd, { passive: true });
  container.addEventListener('touchcancel', handleTouchEnd, { passive: true });

  // POINTER EVENTS
  container.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      isTouching = true;
      pauseScrolling();
    }
  });

  const handlePointerUp = (e) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      isTouching = false;
      lastTouchEndTime = Date.now();
      resumeScrolling();
    }
  };

  container.addEventListener('pointerup', handlePointerUp);
  container.addEventListener('pointercancel', handlePointerUp);

  // MOUSE HOVER EVENTS
  container.addEventListener('mouseenter', () => {
    if (Date.now() - lastTouchEndTime < 700 || isTouching) return;
    pauseScrolling();
  });

  container.addEventListener('mouseleave', () => {
    if (isTouching) return;
    resumeScrolling();
  });

  window.addEventListener('blur', () => {
    if (!isTouching) {
      resumeScrolling();
    }
  });
}

/**
 * ==============================================================================
 * FOCUS AREAS & CORE STRENGTHS RENDERER
 * Dynamic rendering of the 3 cards from PORTFOLIO_DATA.focusAreas
 * ==============================================================================
 */
function renderFocusAreas() {
  const container = document.getElementById('focus-cards-grid');
  if (!container) return;

  const focusData = PORTFOLIO_DATA.focusAreas;
  if (!focusData || !Array.isArray(focusData) || focusData.length === 0) return;

  const delays = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

  container.innerHTML = focusData.map((area, index) => {
    const delayClass = delays[index % delays.length] || '';
    const accent = area.accent || 'blue';
    const bulletsHtml = (area.bullets || []).map(b => `
      <li class="focus-card-bullet-item">
        <span class="focus-card-bullet-dot" aria-hidden="true"></span>
        <span>${escapeHTML(b)}</span>
      </li>
    `).join('');

    return `
      <div class="focus-card reveal ${delayClass}" data-accent="${escapeHTML(accent)}">
        <div class="focus-card-icon-box" aria-hidden="true">
          ${area.iconSvg || ''}
        </div>
        <h3 class="focus-card-title">${escapeHTML(area.title || '')}</h3>
        <div class="focus-card-subtitle">${escapeHTML(area.subtitle || '')}</div>
        <ul class="focus-card-bullets">
          ${bulletsHtml}
        </ul>
        <div class="focus-card-divider" aria-hidden="true"></div>
        <span class="focus-card-tag">${escapeHTML(area.tag || '')}</span>
      </div>
    `;
  }).join('');

  if (typeof window.initScrollAnimations === 'function') {
    window.initScrollAnimations();
  }
}

function renderFeaturedProjects() {
  const grid = document.getElementById('featured-projects-grid');
  if (!grid) return;

  // Filter 3 featured projects
  const allProjects = PORTFOLIO_DATA.graphicDesignProjects || [];
  let featured = allProjects.filter(p => p.featured);
  if (featured.length < 3) {
    featured = allProjects.slice(0, 3);
  } else {
    featured = featured.slice(0, 3);
  }

  grid.innerHTML = featured.map((project, idx) => `
    <article class="project-card reveal reveal-delay-${idx + 1}" data-project-id="${escapeHTML(project.id)}">
      <div class="project-image-container">
        <span class="project-category-badge">${escapeHTML(project.category)}</span>
        <img src="${escapeHTML(project.coverImage)}" alt="${escapeHTML(project.title)}" loading="lazy" />
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">${escapeHTML(project.title)}</h3>
        <p class="project-card-client">${escapeHTML(project.client)}</p>
        <p class="project-card-excerpt">${escapeHTML(project.brief.substring(0, 115))}...</p>
        <div class="project-card-footer">
          <div class="project-tools-list">
            ${project.tools.map(t => `<span class="project-tool-tag">${escapeHTML(t)}</span>`).join('')}
          </div>
          <span class="project-view-link">
            Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach click events
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-project-id');
      const project = allProjects.find(p => p.id === pId);
      if (project) openProjectModal(project);
    });
  });
}

// --------------------------------------------------------------------------
// MODAL DETAILS POPUP
// --------------------------------------------------------------------------
function setupProjectModal() {
  const modalOverlay = document.getElementById('project-detail-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  closeBtn?.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      modalOverlay.classList.remove('active');
    }
  });
}

function openProjectModal(project) {
  const modalOverlay = document.getElementById('project-detail-modal');
  if (!modalOverlay) return;

  document.getElementById('modal-category-badge').textContent = project.category;
  document.getElementById('modal-title').textContent = project.title;

  const modalImg = document.getElementById('modal-cover-img');
  modalImg.src = project.coverImage;
  modalImg.alt = project.title;
  modalImg.onclick = () => window.openImageZoom(project.coverImage, project.title);

  document.getElementById('modal-client').textContent = project.client;
  document.getElementById('modal-role').textContent = project.role;
  document.getElementById('modal-tools').textContent = project.tools.join(', ');

  document.getElementById('modal-brief').textContent = project.brief;
  document.getElementById('modal-process').textContent = project.process;
  document.getElementById('modal-result').textContent = project.result;

  modalOverlay.classList.add('active');
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
