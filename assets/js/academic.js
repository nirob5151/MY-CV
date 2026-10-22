/**
 * ==============================================================================
 * ACADEMIC PAGE LOGIC (academic.js)
 * Renders Academic Projects & Coursework at BUBT
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  renderEducation();
  renderAcademicTools();
  renderAcademicProjects();
});

function renderEducation() {
  const container = document.getElementById('education-grid');
  if (!container) return;

  const educationList = PORTFOLIO_DATA.education || [];
  container.innerHTML = educationList.map((item, idx) => {
    const delayClass = `reveal-delay-${(idx % 2) + 1}`;

    return `
      <article class="education-card reveal ${delayClass}">
        <div class="education-card-top">
          <div class="education-icon-box" aria-hidden="true">
            ${item.icon === 'degree' ? `
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            ` : `
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/>
                <path d="M2 20h20"/>
                <path d="M14 12v.01"/><path d="M10 12v.01"/><path d="M14 16v.01"/><path d="M10 16v.01"/><path d="M10 8h4"/>
              </svg>
            `}
          </div>
          <div class="education-status-badges">
            ${item.group ? `
              <span class="edu-badge edu-badge-group">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span>Group: ${escapeHTML(item.group)}</span>
              </span>
            ` : ''}
            <span class="edu-badge edu-badge-period">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>${escapeHTML(item.period)}</span>
            </span>
          </div>
        </div>

        <h3 class="education-degree-title">${escapeHTML(item.degree)}</h3>
        <div class="education-institution">${escapeHTML(item.institution)}</div>
        
        <div class="education-location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${escapeHTML(item.location)}</span>
        </div>

        ${item.details && item.details.length > 0 ? `
          <ul class="education-details-list">
            ${item.details.map(d => `
              <li>
                <span class="bullet-check" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>${escapeHTML(d)}</span>
              </li>
            `).join('')}
          </ul>
        ` : ''}

        ${item.tags && item.tags.length > 0 ? `
          <div class="education-tags">
            ${item.tags.map(t => `<span class="tag-pill">${escapeHTML(t)}</span>`).join('')}
          </div>
        ` : ''}
      </article>
    `;
  }).join('');
}

function renderAcademicProjects() {
  const container = document.getElementById('academic-projects-grid');
  if (!container) return;

  const defaultLinkedin = (PORTFOLIO_DATA.profile && PORTFOLIO_DATA.profile.social && PORTFOLIO_DATA.profile.social.linkedin) || "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/";

  const projects = PORTFOLIO_DATA.academicProjects || [];
  container.innerHTML = projects.map((project, idx) => {
    const linkedinLink = project.linkedinUrl || defaultLinkedin;
    const delayClass = `reveal-delay-${(idx % 3) + 1}`;

    return `
      <article class="academic-card reveal ${delayClass}">
        <div class="academic-card-top">
          <span class="course-badge">
            <span class="course-badge-icon" aria-hidden="true">${project.iconSvg || getDefaultCourseIcon(project.course)}</span>
            <span class="course-badge-text">${escapeHTML(project.course)}</span>
          </span>
          <span class="academic-semester-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            <span>${escapeHTML(project.semester)}</span>
          </span>
        </div>
        <h3 class="academic-card-title">${escapeHTML(project.title)}</h3>
        <p class="academic-card-role"><strong>Role:</strong> ${escapeHTML(project.role)}</p>
        <p class="academic-card-desc">${escapeHTML(project.description)}</p>
        
        <div class="academic-tech-pills">
          ${(project.technologies || []).map(tech => `<span class="tech-pill">${escapeHTML(tech)}</span>`).join('')}
        </div>

        <div class="academic-card-links">
          ${linkedinLink ? `
            <a href="${escapeHTML(linkedinLink)}" target="_blank" rel="noopener noreferrer" class="academic-link-btn academic-linkedin-btn" title="View details for ${escapeHTML(project.title)} on LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>More Details on LinkedIn &rarr;</span>
            </a>
          ` : ''}
          ${project.githubUrl ? `
            <a href="${escapeHTML(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="academic-link-btn" title="Code Repository">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>Code Repository</span>
            </a>
          ` : ''}
          ${project.demoUrl ? `
            <a href="${escapeHTML(project.demoUrl)}" target="_blank" rel="noopener noreferrer" class="academic-link-btn" title="Live Demo">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>Live Demo</span>
            </a>
          ` : ''}
        </div>
      </article>
    `;
  }).join('');

  if (typeof window.initScrollAnimations === 'function') {
    window.initScrollAnimations();
  }
}

function getDefaultCourseIcon(courseName) {
  const c = String(courseName || '').toLowerCase();
  if (c.includes('web') || c.includes('database')) {
    return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
  }
  if (c.includes('iot') || c.includes('embedded') || c.includes('sensor')) {
    return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`;
  }
  if (c.includes('game')) {
    return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line><rect x="2" y="6" width="20" height="12" rx="6"></rect></svg>`;
  }
  if (c.includes('robot') || c.includes('microcontroller') || c.includes('hardware')) {
    return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
  }
  if (c.includes('mobile') || c.includes('flutter') || c.includes('android')) {
    return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`;
  }
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
}

function renderAcademicTools() {
  const track = document.getElementById('academic-tools-marquee-track');
  if (!track) return;

  const tools = PORTFOLIO_DATA.technicalTools || [];
  if (tools.length === 0) return;

  // Helper to generate a single tool card markup matching Primary Creative & Design Tools
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

  initAcademicMarqueeInteraction();
}

function initAcademicMarqueeInteraction() {
  const container = document.getElementById('academic-tools-marquee-container');
  const track = document.getElementById('academic-tools-marquee-track');
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

  // TOUCH EVENTS (Mobile & Tablet)
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

    // Clear active/focus pseudo states from touched card
    if (document.activeElement && container.contains(document.activeElement)) {
      document.activeElement.blur();
    }
  };

  container.addEventListener('touchend', handleTouchEnd, { passive: true });
  container.addEventListener('touchcancel', handleTouchEnd, { passive: true });

  // POINTER EVENTS (Windows touch screens, Stylus & Pointer)
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

  // MOUSE HOVER EVENTS (Desktop with mouse)
  container.addEventListener('mouseenter', () => {
    // Ignore synthetic mouseenter right after touch release (within 700ms)
    if (Date.now() - lastTouchEndTime < 700 || isTouching) return;
    pauseScrolling();
  });

  container.addEventListener('mouseleave', () => {
    if (isTouching) return;
    resumeScrolling();
  });

  // When window/tab loses focus, ensure scrolling resumes if not actively touched
  window.addEventListener('blur', () => {
    if (!isTouching) {
      resumeScrolling();
    }
  });
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

