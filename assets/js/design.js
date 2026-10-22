/**
 * ==============================================================================
 * GRAPHIC DESIGN GALLERY & MODAL LOGIC (design.js)
 * Filtering (All, Posters, Banners, Social Media, Branding, UI Design),
 * project cards rendering, and detailed modal with lightbox zoom
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  initDesignGallery();
  setupDesignModal();
});

let currentFilter = 'All';

function initDesignGallery() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryGrid = document.getElementById('design-gallery-grid');

  if (!galleryGrid) return;

  // Render initial items
  renderFilteredProjects(currentFilter);

  // Setup filter button listeners
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'All';
      renderFilteredProjects(currentFilter);
    });
  });
}

function renderFilteredProjects(filterCategory) {
  const galleryGrid = document.getElementById('design-gallery-grid');
  if (!galleryGrid) return;

  const allProjects = PORTFOLIO_DATA.graphicDesignProjects || [];
  const filtered = (filterCategory === 'All')
    ? allProjects
    : allProjects.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase());

  if (filtered.length === 0) {
    galleryGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600;">No projects currently under this category.</p>
        <p style="font-size: 0.9rem;">You can add items in <code>assets/js/data.js</code>.</p>
      </div>
    `;
    return;
  }

  galleryGrid.innerHTML = filtered.map(project => `
    <article class="project-card reveal active" data-project-id="${escapeHTML(project.id)}">
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
            View Brief &amp; Result
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach click listeners to open detailed view
  galleryGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-project-id');
      const project = allProjects.find(p => p.id === pId);
      if (project) openProjectModal(project);
    });
  });
}

function setupDesignModal() {
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
