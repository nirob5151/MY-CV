/**
 * ==============================================================================
 * NIROB PORTFOLIO - GRID BACKGROUND COMPONENT (assets/js/grid-background.js)
 * High-performance animated glowing circuit board grid on HTML5 canvas.
 * 
 * Features:
 * - Dark navy/black base (#070b14)
 * - Dense grid of thin squares in many sizes like a glowing circuit board
 * - Dim teal/cyan lines with subtle junction nodes
 * - Random lit squares (5-10 active): fade in (0.5s), stay lit (1-2s), fade out (1.5s)
 * - Seamless slow drift sideways & upward (10-20 px/s)
 * - Traveling electric pulses along circuit lines every few seconds
 * - Interactive desktop mouse proximity glow
 * - Responsive: larger cells & fewer squares on mobile
 * - Performance: requestAnimationFrame at 60fps, DPR scaled, IntersectionObserver
 * - Accessibility: respects prefers-reduced-motion (draws single static frame)
 * ==============================================================================
 */

class GridBackground {
  constructor(container, options = {}) {
    if (!container) return;
    this.container = container;

    // Check motion preference
    this.prefersReducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Config options
    this.options = Object.assign({
      baseBg: '#070b14',
      lineColor: 'rgba(34, 211, 238, 0.08)',
      accentLineColor: 'rgba(34, 211, 238, 0.14)',
      nodeColor: 'rgba(34, 211, 238, 0.22)',
      driftSpeedX: 13, // pixels per second sideways (drift right)
      driftSpeedY: -16, // pixels per second upward (drift up)
      colors: [
        { hex: '#22d3ee', rgb: '34, 211, 238', weight: 0.60 }, // Bright Cyan
        { hex: '#818cf8', rgb: '129, 140, 248', weight: 0.25 }, // Indigo
        { hex: '#a855f7', rgb: '168, 85, 247', weight: 0.15 }  // Faint Purple
      ]
    }, options);

    this.initDOM();
    this.initProperties();
    this.initEvents();
    this.initObserver();

    if (this.prefersReducedMotion) {
      this.renderStaticFrame();
    } else {
      this.start();
    }
  }

  /**
   * Inject canvas & dark readability overlay into target container if needed
   */
  initDOM() {
    let wrap = this.container.querySelector(':scope > .grid-bg-container');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'grid-bg-container';
      wrap.setAttribute('aria-hidden', 'true');

      const canvas = document.createElement('canvas');
      canvas.className = 'grid-bg-canvas';

      const overlay = document.createElement('div');
      overlay.className = 'grid-bg-overlay';

      wrap.appendChild(canvas);
      wrap.appendChild(overlay);
      this.container.prepend(wrap);
    }

    this.canvasWrap = wrap;
    this.canvas = wrap.querySelector('.grid-bg-canvas');
    this.ctx = this.canvas.getContext('2d', { alpha: false });
    this.updateSize();
  }

  /**
   * Setup simulation state
   */
  initProperties() {
    this.isRunning = false;
    this.isVisible = false;
    this.rafId = null;
    this.lastTime = 0;

    // Grid coordinates & drift
    this.driftX = 0;
    this.driftY = 0;

    // Lit squares collection
    this.activeSquares = [];
    this.targetSquaresCount = this.isMobile() ? 3 : 8;

    // Electric pulses collection
    this.pulses = [];
    this.pulseCooldown = 1.5 + Math.random() * 2.0; // time until next pulse spawn

    // Mouse tracking (desktop only)
    this.mouse = {
      x: -9999,
      y: -9999,
      active: false,
      hoverOpacity: 0
    };

    // Populate initial lit squares with staggered ages
    const count = this.targetSquaresCount;
    for (let i = 0; i < count; i++) {
      const sq = this.createLitSquare();
      if (sq) {
        // Stagger age so they don't fade simultaneously
        sq.age = Math.random() * (sq.totalDuration * 0.8);
        this.activeSquares.push(sq);
      }
    }
  }

  isMobile() {
    return window.innerWidth < 768;
  }

  getCellSize() {
    return this.isMobile() ? 52 : 36;
  }

  /**
   * Resize canvas matching container rect and DPR
   */
  updateSize() {
    const rect = this.container.getBoundingClientRect();
    this.width = Math.max(rect.width, 300);
    this.height = Math.max(rect.height, 200);

    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.width * this.dpr);
    this.canvas.height = Math.round(this.height * this.dpr);

    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  /**
   * Listen for window resize, mouse movement, and visibility changes
   */
  initEvents() {
    this.handleResize = () => {
      this.updateSize();
      this.targetSquaresCount = this.isMobile() ? 3 : 8;
      if (this.prefersReducedMotion) {
        this.renderStaticFrame();
      }
    };
    window.addEventListener('resize', this.handleResize, { passive: true });

    // Desktop mouse interaction
    if (!('ontouchstart' in window) && !this.isMobile()) {
      this.container.addEventListener('pointerenter', (e) => {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
        this.mouse.active = true;
      }, { passive: true });

      this.container.addEventListener('pointermove', (e) => {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
        this.mouse.active = true;
      }, { passive: true });

      this.container.addEventListener('pointerleave', () => {
        this.mouse.active = false;
      }, { passive: true });
    }

    // Stop animation when browser tab is hidden
    this.handleVisibility = () => {
      if (document.hidden) {
        this.pause();
      } else if (this.isVisible && !this.prefersReducedMotion) {
        this.start();
      }
    };
    document.addEventListener('visibilitychange', this.handleVisibility);
  }

  /**
   * IntersectionObserver: run animation loop only when section is in viewport
   */
  initObserver() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          this.isVisible = entry.isIntersecting;
          if (this.isVisible && !document.hidden && !this.prefersReducedMotion) {
            this.start();
          } else {
            this.pause();
          }
        });
      }, { threshold: 0.05 });
      this.observer.observe(this.container);
    } else {
      this.isVisible = true;
      this.start();
    }
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTime = performance.now();
    this.loop = (now) => {
      if (!this.isRunning) return;
      const dt = Math.min((now - this.lastTime) / 1000, 0.1);
      this.lastTime = now;

      this.update(dt);
      this.draw();

      this.rafId = requestAnimationFrame(this.loop);
    };
    this.rafId = requestAnimationFrame(this.loop);
  }

  pause() {
    this.isRunning = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  /**
   * Spawn a new lit square in a random position on the circuit grid
   */
  createLitSquare() {
    const cellSize = this.getCellSize();
    const cols = Math.ceil(this.width / cellSize) + 2;
    const rows = Math.ceil(this.height / cellSize) + 2;

    const col = Math.floor(Math.random() * cols) - 1;
    const row = Math.floor(Math.random() * rows) - 1;

    // Random square sizes: 1x1 (65%), 2x2 (25%), 3x3 (10%)
    const sizeRoll = Math.random();
    let sizeMultiplier = 1;
    if (sizeRoll > 0.90 && !this.isMobile()) {
      sizeMultiplier = 3;
    } else if (sizeRoll > 0.65) {
      sizeMultiplier = 2;
    }
    const size = cellSize * sizeMultiplier;

    // Pick color scheme based on weights
    const colorRoll = Math.random();
    let chosenColor = this.options.colors[0]; // Cyan default
    let cumulative = 0;
    for (const c of this.options.colors) {
      cumulative += c.weight;
      if (colorRoll <= cumulative) {
        chosenColor = c;
        break;
      }
    }

    // Durations: fade in (0.5s), stay lit (1 to 2s), fade out (1.5s)
    const fadeIn = 0.5;
    const hold = 1.0 + Math.random() * 1.0;
    const fadeOut = 1.5;
    const totalDuration = fadeIn + hold + fadeOut;

    // Initial position locked to moving grid
    const startX = col * cellSize + (this.driftX % cellSize);
    const startY = row * cellSize + (this.driftY % cellSize);

    return {
      x: startX,
      y: startY,
      size,
      cellSize,
      color: chosenColor,
      fadeIn,
      hold,
      fadeOut,
      totalDuration,
      age: 0
    };
  }

  /**
   * Spawn an electric pulse traveling along grid lines
   */
  spawnPulse() {
    const cellSize = this.getCellSize();
    const cols = Math.max(1, Math.floor(this.width / cellSize));
    const rows = Math.max(1, Math.floor(this.height / cellSize));

    const col = Math.floor(Math.random() * cols);
    const row = Math.floor(Math.random() * rows);

    const startX = col * cellSize + (this.driftX % cellSize);
    const startY = row * cellSize + (this.driftY % cellSize);

    // Random cardinal direction [dx, dy]
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ];
    const dir = dirs[Math.floor(Math.random() * dirs.length)];

    // 45% chance of making a 90 degree turn at a junction along the way
    const turnAt = Math.random() < 0.45 ? (cellSize * (1 + Math.floor(Math.random() * 2))) : null;

    // Color: cyan or purple/indigo
    const pulseColors = ['#22d3ee', '#818cf8', '#a855f7'];
    const color = pulseColors[Math.floor(Math.random() * pulseColors.length)];

    this.pulses.push({
      x: startX,
      y: startY,
      dx: dir[0],
      dy: dir[1],
      speed: 280 + Math.random() * 80, // px/s
      traveled: 0,
      maxDist: 180 + Math.random() * 220,
      turnAt,
      hasTurned: false,
      color,
      history: []
    });
  }

  /**
   * Simulation step
   */
  update(dt) {
    const cellSize = this.getCellSize();

    // 1. Slow drift (sideways + upward)
    this.driftX += this.options.driftSpeedX * dt;
    this.driftY += this.options.driftSpeedY * dt;

    // 2. Update lit squares
    for (let i = this.activeSquares.length - 1; i >= 0; i--) {
      const sq = this.activeSquares[i];
      sq.age += dt;

      // Move square with grid drift
      sq.x += this.options.driftSpeedX * dt;
      sq.y += this.options.driftSpeedY * dt;

      // Calculate opacity
      if (sq.age < sq.fadeIn) {
        sq.alpha = sq.age / sq.fadeIn;
      } else if (sq.age < sq.fadeIn + sq.hold) {
        sq.alpha = 1.0;
      } else if (sq.age < sq.totalDuration) {
        sq.alpha = 1.0 - (sq.age - (sq.fadeIn + sq.hold)) / sq.fadeOut;
      } else {
        // Expired
        this.activeSquares.splice(i, 1);
      }
    }

    // Replenish lit squares to target count
    while (this.activeSquares.length < this.targetSquaresCount) {
      const sq = this.createLitSquare();
      if (sq) this.activeSquares.push(sq);
    }

    // 3. Electric pulses update
    this.pulseCooldown -= dt;
    if (this.pulseCooldown <= 0 && this.pulses.length < 3) {
      this.spawnPulse();
      this.pulseCooldown = 2.0 + Math.random() * 2.5; // Next pulse in 2-4.5s
    }

    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const p = this.pulses[i];
      const step = p.speed * dt;
      p.x += p.dx * step + this.options.driftSpeedX * dt;
      p.y += p.dy * step + this.options.driftSpeedY * dt;
      p.traveled += step;

      // Handle 90 degree turn
      if (p.turnAt && !p.hasTurned && p.traveled >= p.turnAt) {
        p.hasTurned = true;
        if (p.dx !== 0) {
          p.dx = 0;
          p.dy = Math.random() < 0.5 ? 1 : -1;
        } else {
          p.dy = 0;
          p.dx = Math.random() < 0.5 ? 1 : -1;
        }
      }

      // Record trail
      p.history.unshift({ x: p.x, y: p.y });
      if (p.history.length > 12) {
        p.history.pop();
      }

      // Expire pulse
      if (p.traveled >= p.maxDist ||
          p.x < -80 || p.x > this.width + 80 ||
          p.y < -80 || p.y > this.height + 80) {
        this.pulses.splice(i, 1);
      }
    }

    // 4. Mouse glow smoothing
    if (this.mouse.active) {
      this.mouse.hoverOpacity = Math.min(1.0, this.mouse.hoverOpacity + dt * 4);
    } else {
      this.mouse.hoverOpacity = Math.max(0.0, this.mouse.hoverOpacity - dt * 2.5);
    }
  }

  /**
   * Render frame
   */
  draw() {
    const { ctx, width, height } = this;
    const cellSize = this.getCellSize();

    // 1. Clear dark navy base
    ctx.fillStyle = this.options.baseBg;
    ctx.fillRect(0, 0, width, height);

    // 2. Draw Circuit Grid Lines
    const offX = (this.driftX % cellSize + cellSize) % cellSize;
    const offY = (this.driftY % cellSize + cellSize) % cellSize;

    ctx.lineWidth = 0.75;
    ctx.strokeStyle = this.options.lineColor;
    ctx.beginPath();

    // Vertical lines
    for (let x = offX - cellSize; x <= width + cellSize; x += cellSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    // Horizontal lines
    for (let y = offY - cellSize; y <= height + cellSize; y += cellSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // 3. Accent circuit bus lines (every 4th line slightly brighter)
    ctx.lineWidth = 1;
    ctx.strokeStyle = this.options.accentLineColor;
    ctx.beginPath();
    for (let x = offX - cellSize; x <= width + cellSize; x += cellSize) {
      const colIndex = Math.round((x - this.driftX) / cellSize);
      if (colIndex % 4 === 0) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
    }
    for (let y = offY - cellSize; y <= height + cellSize; y += cellSize) {
      const rowIndex = Math.round((y - this.driftY) / cellSize);
      if (rowIndex % 4 === 0) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
    }
    ctx.stroke();

    // 4. Circuit Junction Nodes (solder pads at grid intersections)
    ctx.fillStyle = this.options.nodeColor;
    ctx.beginPath();
    const padR = 1.4;
    for (let x = offX - cellSize; x <= width + cellSize; x += cellSize) {
      const col = Math.round((x - this.driftX) / cellSize);
      for (let y = offY - cellSize; y <= height + cellSize; y += cellSize) {
        const row = Math.round((y - this.driftY) / cellSize);
        // Deterministic pseudo-random pattern for junction nodes
        if ((Math.abs(col * 73856093 ^ row * 19349663) % 19) === 0) {
          ctx.moveTo(x + padR, y);
          ctx.arc(x, y, padR, 0, Math.PI * 2);
        }
      }
    }
    ctx.fill();

    // 5. Desktop Mouse Interactive Proximity Glow
    if (this.mouse.hoverOpacity > 0.01) {
      const mx = this.mouse.x;
      const my = this.mouse.y;
      const radius = 150;
      const alpha = this.mouse.hoverOpacity;

      // Soft radial glow spotlight on the grid
      const glowGrad = ctx.createRadialGradient(mx, my, 0, mx, my, radius);
      glowGrad.addColorStop(0, `rgba(34, 211, 238, ${0.16 * alpha})`);
      glowGrad.addColorStop(0.5, `rgba(129, 140, 248, ${0.08 * alpha})`);
      glowGrad.addColorStop(1, 'rgba(7, 11, 20, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(mx - radius, my - radius, radius * 2, radius * 2);

      // Nearby lines glow brighter
      ctx.save();
      ctx.strokeStyle = `rgba(34, 211, 238, ${0.45 * alpha})`;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#22d3ee';
      ctx.shadowBlur = 10 * alpha;
      ctx.beginPath();

      const minX = Math.floor((mx - radius - offX) / cellSize) * cellSize + offX;
      const maxX = Math.ceil((mx + radius - offX) / cellSize) * cellSize + offX;
      for (let x = minX; x <= maxX; x += cellSize) {
        const dx = Math.abs(x - mx);
        if (dx < radius) {
          const dySpan = Math.sqrt(radius * radius - dx * dx);
          ctx.moveTo(x, my - dySpan);
          ctx.lineTo(x, my + dySpan);
        }
      }

      const minY = Math.floor((my - radius - offY) / cellSize) * cellSize + offY;
      const maxY = Math.ceil((my + radius - offY) / cellSize) * cellSize + offY;
      for (let y = minY; y <= maxY; y += cellSize) {
        const dy = Math.abs(y - my);
        if (dy < radius) {
          const dxSpan = Math.sqrt(radius * radius - dy * dy);
          ctx.moveTo(mx - dxSpan, y);
          ctx.lineTo(mx + dxSpan, y);
        }
      }
      ctx.stroke();
      ctx.restore();
    }

    // 6. Draw Lit Glowing Squares
    for (const sq of this.activeSquares) {
      let alpha = sq.alpha || 0;
      if (alpha <= 0.001) continue;

      // Check desktop mouse proximity boost
      if (this.mouse.hoverOpacity > 0.01) {
        const cx = sq.x + sq.size / 2;
        const cy = sq.y + sq.size / 2;
        const dist = Math.hypot(cx - this.mouse.x, cy - this.mouse.y);
        if (dist < 150) {
          const boost = (1 - dist / 150) * 0.45 * this.mouse.hoverOpacity;
          alpha = Math.min(1.0, alpha + boost);
        }
      }

      ctx.save();
      // Soft translucent fill
      ctx.fillStyle = `rgba(${sq.color.rgb}, ${0.10 * alpha})`;
      ctx.fillRect(sq.x, sq.y, sq.size, sq.size);

      // Glowing outline
      ctx.shadowColor = sq.color.hex;
      ctx.shadowBlur = (10 + (sq.size / sq.cellSize) * 4) * alpha;
      ctx.strokeStyle = `rgba(${sq.color.rgb}, ${0.90 * alpha})`;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(sq.x + 0.75, sq.y + 0.75, sq.size - 1.5, sq.size - 1.5);

      // Circuit corner micro-brackets for multi-cell blocks
      if (sq.size > sq.cellSize) {
        ctx.strokeStyle = `rgba(${sq.color.rgb}, ${1.0 * alpha})`;
        ctx.lineWidth = 2;
        const cornerLen = 6;
        ctx.beginPath();
        // Top-left
        ctx.moveTo(sq.x, sq.y + cornerLen);
        ctx.lineTo(sq.x, sq.y);
        ctx.lineTo(sq.x + cornerLen, sq.y);
        // Top-right
        ctx.moveTo(sq.x + sq.size - cornerLen, sq.y);
        ctx.lineTo(sq.x + sq.size, sq.y);
        ctx.lineTo(sq.x + sq.size, sq.y + cornerLen);
        // Bottom-right
        ctx.moveTo(sq.x + sq.size, sq.y + sq.size - cornerLen);
        ctx.lineTo(sq.x + sq.size, sq.y + sq.size);
        ctx.lineTo(sq.x + sq.size - cornerLen, sq.y + sq.size);
        // Bottom-left
        ctx.moveTo(sq.x + cornerLen, sq.y + sq.size);
        ctx.lineTo(sq.x, sq.y + sq.size);
        ctx.lineTo(sq.x, sq.y + sq.size - cornerLen);
        ctx.stroke();
      }

      ctx.restore();
    }

    // 7. Draw Electric Pulses (traveling circuit tracers)
    for (const p of this.pulses) {
      if (p.history.length < 2) continue;

      ctx.save();
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 14;

      // Draw glowing comet trail
      ctx.beginPath();
      ctx.moveTo(p.history[0].x, p.history[0].y);
      for (let i = 1; i < p.history.length; i++) {
        ctx.lineTo(p.history[i].x, p.history[i].y);
      }
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Glowing bright spark head
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  /**
   * Static single-frame render for prefers-reduced-motion
   */
  renderStaticFrame() {
    this.updateSize();
    const { ctx, width, height } = this;
    const cellSize = this.getCellSize();

    ctx.fillStyle = this.options.baseBg;
    ctx.fillRect(0, 0, width, height);

    // Base lines
    ctx.lineWidth = 0.75;
    ctx.strokeStyle = this.options.lineColor;
    ctx.beginPath();
    for (let x = 0; x <= width; x += cellSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y <= height; y += cellSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // A few static lit squares
    const staticSquares = [
      { col: 3, row: 2, size: 1, color: this.options.colors[0] },
      { col: 8, row: 4, size: 2, color: this.options.colors[1] },
      { col: 14, row: 3, size: 1, color: this.options.colors[0] },
      { col: 6, row: 8, size: 1, color: this.options.colors[2] },
      { col: 12, row: 9, size: 2, color: this.options.colors[0] }
    ];

    for (const s of staticSquares) {
      const x = s.col * cellSize;
      const y = s.row * cellSize;
      const size = s.size * cellSize;
      ctx.save();
      ctx.fillStyle = `rgba(${s.color.rgb}, 0.12)`;
      ctx.fillRect(x, y, size, size);
      ctx.shadowColor = s.color.hex;
      ctx.shadowBlur = 12;
      ctx.strokeStyle = `rgba(${s.color.rgb}, 0.85)`;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x, y, size, size);
      ctx.restore();
    }
  }

  destroy() {
    this.pause();
    if (this.observer) this.observer.disconnect();
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('visibilitychange', this.handleVisibility);
    if (this.canvasWrap && this.canvasWrap.parentNode) {
      this.canvasWrap.parentNode.removeChild(this.canvasWrap);
    }
  }
}

/**
 * Auto-initialize on any container with [data-grid-background]
 */
GridBackground.initAll = function() {
  document.querySelectorAll('[data-grid-background]').forEach(el => {
    if (!el._gridBgInstance) {
      el._gridBgInstance = new GridBackground(el);
    }
  });
};

// Auto-run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => GridBackground.initAll());
} else {
  GridBackground.initAll();
}

// Global export for component usage
window.GridBackground = GridBackground;
