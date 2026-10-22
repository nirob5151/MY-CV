/**
 * ==============================================================================
 * CONTACT PAGE LOGIC (contact.js)
 * Form submission handling, social links population, and CV download binding
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  populateContactDetails();
  initContactForm();
});

function populateContactDetails() {
  const profile = PORTFOLIO_DATA.profile;

  // Email
  const emailLink = document.getElementById('contact-email-link');
  if (emailLink && profile.email) {
    emailLink.href = `mailto:${profile.email}`;
    emailLink.textContent = profile.email;
  }

  // Phone
  const phoneLink = document.getElementById('contact-phone-link');
  if (phoneLink && profile.phone) {
    phoneLink.href = `tel:${profile.phoneTel || profile.phone.replace(/\s+/g, '')}`;
    phoneLink.textContent = profile.phone;
  }

  // Location
  const locationEl = document.getElementById('contact-location');
  if (locationEl && profile.location) {
    locationEl.textContent = profile.location;
  }

  // Social Links
  const linkedinEl = document.getElementById('social-linkedin');
  const behanceEl = document.getElementById('social-behance');
  const facebookEl = document.getElementById('social-facebook');
  const githubEl = document.getElementById('social-github');

  if (linkedinEl && profile.social?.linkedin) linkedinEl.href = profile.social.linkedin;
  if (behanceEl && profile.social?.behance) behanceEl.href = profile.social.behance;
  if (facebookEl && profile.social?.facebook) facebookEl.href = profile.social.facebook;
  if (githubEl && profile.social?.github) githubEl.href = profile.social.github;

  // CV Download Button
  const cvBtn = document.getElementById('download-cv-btn');
  if (cvBtn && profile.resumePdf) {
    cvBtn.href = profile.resumePdf;
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status-msg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const messageInput = document.getElementById('user-message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    // Submit feedback simulation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      if (statusEl) {
        statusEl.innerHTML = `
          <strong>Thank you, ${escapeHTML(name)}!</strong><br>
          Your message has been received. I will get back to you promptly at ${escapeHTML(email)}.
        `;
        statusEl.className = 'form-status success';
      }
    }, 700);
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
