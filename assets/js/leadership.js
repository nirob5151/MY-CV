/**
 * ==============================================================================
 * LEADERSHIP & ACTIVITIES PAGE LOGIC (leadership.js)
 * Powers the Leadership & Extracurricular Experience Activity Tree & Category Filters
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  renderActivitiesTimeline('all');
  initActivitiesFilterTabs();
});

function initActivitiesFilterTabs() {
  const filterBtns = document.querySelectorAll('.timeline-filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderActivitiesTimeline(filter);
    });
  });
}

function renderActivitiesTimeline(filter = 'all') {
  const container = document.getElementById('activities-timeline');
  if (!container) return;

  const allActivities = PORTFOLIO_DATA.activities || [];
  const filtered = filter === 'all' 
    ? allActivities 
    : allActivities.filter(a => a.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="timeline-empty-message">
        <p>No experiences found in this category.</p>
      </div>
    `;
    return;
  }

  const itemsHtml = filtered.map((act, idx) => {
    const isLeft = (idx % 2 === 0);
    const sideClass = isLeft ? 'item-left' : 'item-right';
    const cat = act.category || 'internship';

    const cardHtml = `
      <div class="timeline-tree-card-wrap">
        <article class="timeline-tree-card card-${escapeHTML(cat)}">
          <div class="timeline-tree-card-badges">
            <span class="badge-category badge-${escapeHTML(cat)}">
              <span class="badge-icon">${getCategoryBadgeIcon(cat)}</span>
              <span>${escapeHTML(act.categoryLabel || 'Experience')}</span>
            </span>
            ${act.badgeRole ? `
              <span class="badge-role">
                <span class="badge-icon">${getRoleBadgeIcon(act.badgeRole)}</span>
                <span>${escapeHTML(act.badgeRole)}</span>
              </span>
            ` : ''}
          </div>

          <h3 class="timeline-tree-card-title">${escapeHTML(act.title)}</h3>
          <div class="timeline-tree-card-org">${escapeHTML(act.organization)}</div>

          ${act.location ? `
            <div class="timeline-tree-card-loc">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${escapeHTML(act.location)}</span>
            </div>
          ` : ''}

          ${act.bullets && act.bullets.length > 0 ? `
            <ul class="timeline-tree-card-bullets">
              ${act.bullets.map(b => `
                <li>
                  <span class="bullet-check" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>${escapeHTML(b)}</span>
                </li>
              `).join('')}
            </ul>
          ` : ''}

          ${act.tags && act.tags.length > 0 ? `
            <div class="timeline-tree-card-tags">
              ${act.tags.map(t => `<span class="tag-pill">${escapeHTML(t)}</span>`).join('')}
            </div>
          ` : ''}
        </article>
      </div>
    `;

    const datePillHtml = `
      <div class="timeline-tree-date-wrap">
        <div class="timeline-date-pill">
          <svg class="date-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>${escapeHTML(act.date)}</span>
        </div>
      </div>
    `;

    const nodeHtml = `
      <div class="timeline-tree-node-wrap">
        <div class="timeline-tree-node node-${escapeHTML(cat)}" title="${escapeHTML(act.categoryLabel || '')}" aria-hidden="true">
          ${getNodeIconSvg(act.nodeIcon || cat)}
        </div>
      </div>
    `;

    return `
      <div class="timeline-tree-item ${sideClass} reveal reveal-delay-${(idx % 2) + 1}" data-category="${escapeHTML(cat)}">
        <!-- Desktop Slot 1: Card if left, Date if right -->
        <div class="timeline-slot timeline-slot-left">
          ${isLeft ? cardHtml : datePillHtml}
        </div>

        <!-- Slot 2: Glowing Node in Center Spine -->
        <div class="timeline-slot timeline-slot-center">
          ${nodeHtml}
        </div>

        <!-- Slot 3: Date if left, Card if right -->
        <div class="timeline-slot timeline-slot-right">
          ${isLeft ? datePillHtml : cardHtml}
        </div>

        <!-- Mobile Slot: Direct linear view for phones -->
        <div class="timeline-mobile-view">
          ${datePillHtml}
          ${cardHtml}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="timeline-tree-spine" aria-hidden="true"></div>
    <div class="timeline-tree-list">
      ${itemsHtml}
    </div>
  `;

  if (typeof window.initScrollAnimations === 'function') {
    window.initScrollAnimations();
  }
}

function getNodeIconSvg(type) {
  const t = String(type || '').toLowerCase();
  if (t.includes('briefcase') || t.includes('internship')) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
  }
  if (t.includes('cpu') || t.includes('ai') || t.includes('tech')) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`;
  }
  if (t.includes('crown') || t.includes('president') || t.includes('chair') || t.includes('leader')) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><circle cx="12" cy="19" r="2"/></svg>`;
  }
  if (t.includes('palette') || t.includes('design') || t.includes('art')) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.61 17.5 2 12 2z"/></svg>`;
  }
  if (t.includes('trophy') || t.includes('icpc') || t.includes('contest') || t.includes('champion')) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34"/><path d="M6 4h12v7a6 6 0 0 1-12 0V4z"/></svg>`;
  }
  if (t.includes('volunteer') || t.includes('heart') || t.includes('community')) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  }
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`;
}

function getCategoryBadgeIcon(cat) {
  const c = String(cat || '').toLowerCase();
  if (c === 'internship') {
    return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
  }
  if (c === 'leadership') {
    return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><circle cx="12" cy="19" r="2"/></svg>`;
  }
  if (c === 'design') {
    return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.61 17.5 2 12 2z"/></svg>`;
  }
  return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
}

function getRoleBadgeIcon(role) {
  const r = String(role || '').toLowerCase();
  if (r.includes('intern')) {
    return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
  }
  if (r.includes('president') || r.includes('chair') || r.includes('convener') || r.includes('leader')) {
    return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><circle cx="12" cy="19" r="2"/></svg>`;
  }
  if (r.includes('designer') || r.includes('design')) {
    return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.61 17.5 2 12 2z"/></svg>`;
  }
  return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`;
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
