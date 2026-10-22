/**
 * ==============================================================================
 * NIROB PORTFOLIO - VANTA.NET 3D CONSTELLATION BACKGROUND
 * Three.js r134 + Vanta.NET effect with responsive controls & clean lifecycle
 * Color: 0x2e3787, Background: 0x1d1a20
 * ==============================================================================
 */

(function () {
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function ensureDependencies() {
    if (typeof THREE === 'undefined') {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
      } catch (e) {
        await loadScript('assets/vendor/three.r134.min.js');
      }
    }
    if (typeof VANTA === 'undefined' || !VANTA.NET) {
      try {
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');
      } catch (e) {
        await loadScript('assets/vendor/vanta.net.min.js');
      }
    }
  }

  async function initVanta() {
    await ensureDependencies();

    if (typeof VANTA === 'undefined' || !VANTA.NET) {
      console.warn('[VANTA] Vanta.NET could not be initialized.');
      return;
    }

    // Ensure #vanta-bg exists in the DOM
    let el = document.getElementById('vanta-bg');
    if (!el) {
      el = document.createElement('div');
      el.id = 'vanta-bg';
      el.setAttribute('aria-hidden', 'true');
      document.body.prepend(el);
    }

    // Clean up previous instance if any
    if (window._vantaEffect) {
      try {
        window._vantaEffect.destroy();
      } catch (e) {}
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check current theme
    const isDark = (document.documentElement.getAttribute('data-theme') || 'dark') !== 'light';

    try {
      window._vantaEffect = VANTA.NET({
        el: el,
        mouseControls: !prefersReducedMotion,
        touchControls: !prefersReducedMotion,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: isDark ? 0x2e3787 : 0x818cf8,
        backgroundColor: isDark ? 0x0a0d16 : 0xf8fafc,
        maxDistance: 21.00,
        spacing: 11.00
      });
    } catch (err) {
      console.error('[VANTA] Init error:', err);
    }
  }

  // Expose theme switcher callback to reconfigure colors dynamically
  window.updateVantaTheme = function (theme) {
    if (typeof VANTA === 'undefined' || !VANTA.NET) return;
    initVanta();
  };

  // Handle tab visibility to save GPU resources when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (!window._vantaEffect) return;
    if (document.hidden) {
      if (typeof window._vantaEffect.pause === 'function') {
        window._vantaEffect.pause();
      }
    } else {
      if (typeof window._vantaEffect.restart === 'function') {
        // Vanta continues animation loop automatically
      }
    }
  });

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVanta);
  } else {
    initVanta();
  }
})();
