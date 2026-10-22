/**
 * ==============================================================================
 * NIROB PORTFOLIO - CORE LOGIC (main.js)
 * Global theme toggling, responsive navigation, scroll animations & lightbox
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initThemeToggle();
  initHeaderScroll();
  initMobileNavigation();
  initScrollAnimations();
  initFooterYear();
  initFooterLinks();
  initZoomLightbox();
  highlightActiveNavLink();
});

// --------------------------------------------------------------------------
// 1. THEME SWITCHER (Dark & Light Mode with localStorage Persistence)
// --------------------------------------------------------------------------
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-toggle-icon');

  // Check saved preference or fallback to system preference
  const savedTheme = localStorage.getItem('nirob_portfolio_theme');
  const currentTheme = savedTheme || 'dark';
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('nirob_portfolio_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window.updateVantaTheme === 'function') {
      window.updateVantaTheme(theme);
    }
    if (!themeIcon) return;
    if (theme === 'dark') {
      // Show Sun icon in dark mode so clicking switches to light
      themeIcon.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
    } else {
      // Show Moon icon in light mode so clicking switches to dark
      themeIcon.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    }
  }
}

// --------------------------------------------------------------------------
// 1b. FIXED HEADER BLURRED BACKGROUND ON SCROLL
// --------------------------------------------------------------------------
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// --------------------------------------------------------------------------
// 1c. SCROLL PROGRESS BAR (<ScrollProgress /> component)
// - Fixed at very top of screen, above navbar (z-index 99999)
// - Gradient blue -> purple -> green with scaleX(0 -> 1)
// - Smooth spring interpolation (Framer Motion useSpring style) without lag
// - Instant updates with prefers-reduced-motion
// - Resets to 0% on page load / navigation
// - pointer-events: none
// --------------------------------------------------------------------------
function initScrollProgress() {
  let bar = document.getElementById('scroll-progress-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'scroll-progress-bar';
    bar.className = 'scroll-progress-bar';
    bar.setAttribute('aria-hidden', 'true');
    document.body.prepend(bar);
  }

  // Initial reset to 0%
  let targetProgress = 0;
  let currentProgress = 0;
  let isTicking = false;

  bar.style.transform = 'scaleX(0)';

  const prefersReducedMotion = () => {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  const calculateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
  };

  const updateProgress = () => {
    if (prefersReducedMotion()) {
      currentProgress = targetProgress;
      bar.style.transform = `scaleX(${currentProgress})`;
      isTicking = false;
      return;
    }

    // Spring/lerp smoothing for 60fps lag-free animation
    const delta = targetProgress - currentProgress;
    currentProgress += delta * 0.16;

    if (Math.abs(delta) < 0.0005) {
      currentProgress = targetProgress;
    }

    bar.style.transform = `scaleX(${currentProgress})`;

    if (currentProgress !== targetProgress) {
      requestAnimationFrame(updateProgress);
    } else {
      isTicking = false;
    }
  };

  const onScroll = () => {
    targetProgress = calculateProgress();
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updateProgress);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // Initial calculation on page load
  targetProgress = calculateProgress();
  if (prefersReducedMotion()) {
    currentProgress = targetProgress;
    bar.style.transform = `scaleX(${currentProgress})`;
  } else {
    isTicking = true;
    requestAnimationFrame(updateProgress);
  }
}

// --------------------------------------------------------------------------
// 2. MOBILE NAVIGATION DRAWER
// --------------------------------------------------------------------------
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  // Close drawer when any nav link is tapped
  drawer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// --------------------------------------------------------------------------
// 3. FADE-IN ON SCROLL (IntersectionObserver)
// --------------------------------------------------------------------------
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
window.initScrollAnimations = initScrollAnimations;

// --------------------------------------------------------------------------
// 4. CURRENT YEAR DYNAMIC STAMP
// --------------------------------------------------------------------------
function initFooterYear() {
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = currentYear;
  });
}

function initFooterLinks() {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  const footer = PORTFOLIO_DATA.footer;

  // 1. Sync Brand Info if available in DOM
  if (footer?.brand) {
    const brandName = document.getElementById('footer-brand-name');
    if (brandName) brandName.textContent = footer.brand.name;

    const brandRole = document.getElementById('footer-brand-role');
    if (brandRole) brandRole.textContent = footer.brand.role;

    const brandBio = document.getElementById('footer-bio');
    if (brandBio) brandBio.textContent = footer.brand.bio;
  }

  // 1b. Sync Navigation Links
  if (footer?.navigation?.links) {
    const navList = document.getElementById('footer-nav-list');
    if (navList) {
      navList.innerHTML = footer.navigation.links.map(item => `
        <li><a href="${item.url}">${item.label}</a></li>
      `).join('');
    }
  }

  // 2. Sync Quick Links
  if (footer?.quickLinks?.links) {
    const quickList = document.getElementById('footer-quick-list');
    if (quickList) {
      quickList.innerHTML = footer.quickLinks.links.map(item => `
        <li>
          <a href="${item.url}" 
             ${item.download ? `download="${item.download}"` : ''} 
             ${item.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} 
             class="footer-quick-link">
            <span class="footer-quick-icon">${item.iconSvg}</span>
            <span>${item.label}</span>
          </a>
        </li>
      `).join('');
    }
  }

  // 3. Sync Bottom Bar text
  if (footer?.bottomBar) {
    const builtWith = document.getElementById('footer-built-with');
    if (builtWith && footer.bottomBar.builtWith) {
      builtWith.textContent = footer.bottomBar.builtWith;
    }
  }

  // 4. Smooth Back to Top handler
  const backToTopBtns = document.querySelectorAll('.footer-back-to-top, .back-to-top');
  backToTopBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// --------------------------------------------------------------------------
// 5. GLOBAL LIGHTBOX ZOOM VIEWER
// --------------------------------------------------------------------------
function initZoomLightbox() {
  // Create overlay element if not already present
  let zoomOverlay = document.getElementById('lightbox-zoom-overlay');
  if (!zoomOverlay) {
    zoomOverlay = document.createElement('div');
    zoomOverlay.id = 'lightbox-zoom-overlay';
    zoomOverlay.className = 'lightbox-zoom-overlay';
    zoomOverlay.innerHTML = `
      <button class="lightbox-zoom-close" id="lightbox-zoom-close" aria-label="Close zoom view">&times;</button>
      <img id="lightbox-zoom-image" src="" alt="Enlarged view">
    `;
    document.body.appendChild(zoomOverlay);

    // Event listeners to close
    zoomOverlay.addEventListener('click', (e) => {
      if (e.target.id === 'lightbox-zoom-overlay' || e.target.id === 'lightbox-zoom-close') {
        zoomOverlay.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && zoomOverlay.classList.contains('active')) {
        zoomOverlay.classList.remove('active');
      }
    });
  }
}

// Helper to open any image in enlarged lightbox
window.openImageZoom = function (src, alt = 'Enlarged Image') {
  const overlay = document.getElementById('lightbox-zoom-overlay');
  const img = document.getElementById('lightbox-zoom-image');
  if (overlay && img) {
    img.src = src;
    img.alt = alt;
    overlay.classList.add('active');
  }
};

// --------------------------------------------------------------------------
// 6. HIGHLIGHT ACTIVE NAV LINK
// --------------------------------------------------------------------------
function highlightActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
