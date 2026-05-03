/* IronWood Property Repair — Site scripts */

// Mobile nav toggle
(function() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Contact form handler
// IMPORTANT: This sends submissions via Formspree.
// To activate: 1) Sign up at https://formspree.io (free, 50/month)
//              2) Create a new form, copy your form ID (e.g. "xyzabcde")
//              3) Replace YOUR_FORMSPREE_ID below
//
// Alternative: Web3Forms (free, unlimited)
//   - Sign up at https://web3forms.com, get your access key
//   - Change the fetch URL to: https://api.web3forms.com/submit
//   - Add a hidden input: <input type="hidden" name="access_key" value="YOUR_KEY">
(function() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // <-- REPLACE THIS
  const successEl = form.querySelector('.form__success');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot check — if filled, silently "succeed" (it's a bot)
    if (form.querySelector('[name="website"]').value) {
      successEl.textContent = "Thanks — we'll be in touch shortly.";
      successEl.classList.add('is-visible');
      form.reset();
      return;
    }

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending…';

    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        successEl.textContent = "Message sent — we'll respond within a few hours.";
        successEl.classList.add('is-visible');
        form.reset();
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      successEl.textContent = "Couldn't send right now. Please call us at the number above or email directly.";
      successEl.style.background = '#fce8e2';
      successEl.style.borderColor = '#b25b3d';
      successEl.style.color = '#7a3a22';
      successEl.classList.add('is-visible');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
})();

// Set active nav link based on current page
(function() {
  const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const linkPath = link.getAttribute('href').replace(/\/$/, '');
    if (path.endsWith(linkPath) || (linkPath === 'index.html' && (path === '/' || path === '/index.html'))) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
