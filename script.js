/**
 * script.js — Advocate Manisha Gandhi Official Legal & Research Portal
 * Features:
 *  1. BCI Rule 36 Disclaimer Modal & persistence (localStorage)
 *  2. Navbar: transparent → solid on scroll + cross-page active link highlight
 *  3. Hamburger mobile menu toggle
 *  4. Smooth scroll with offset for fixed nav
 *  5. Scroll-triggered fade-in animations (IntersectionObserver)
 *  6. Interactive Legal Query & Consultation Form with validation
 *  7. Interactive Category Filter Tabs (Research / Blog)
 *  8. Inspirational Jurist Quotes Carousel
 *  9. Dynamic Footer Year
 */

/* ============================================================
   1. DOM READY
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initBciDisclaimer();
  initNavbar();
  initHamburger();
  initSmoothScroll();
  initScrollAnimations();
  initActiveNavLink();
  initLegalQueryForm();
  initCategoryFilters();
  initQuoteCarousel();
  setFooterYear();
});

/* ============================================================
   1B. THEME TOGGLE (LIGHT / DARK) — Defaults to Light
============================================================ */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const iconSpan = document.getElementById('themeIcon');
  const STORAGE_KEY = 'adv_theme';

  const updateIcon = (theme) => {
    if (iconSpan) {
      // If dark theme, show sun icon (click to switch to light)
      // If light theme, show moon icon (click to switch to dark)
      iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  };

  // Determine active theme (default to light)
  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem(STORAGE_KEY, nextTheme);
      updateIcon(nextTheme);
    });
  }
}

/* ============================================================
   2. BAR COUNCIL OF INDIA (BCI RULE 36) DISCLAIMER MODAL
============================================================ */
function initBciDisclaimer() {
  const modalOverlay = document.getElementById('bciModalOverlay');
  const agreeBtn = document.getElementById('bciAgreeBtn');
  const declineBtn = document.getElementById('bciDeclineBtn');
  const triggerBtns = document.querySelectorAll('.bci-disclaimer-trigger');

  if (!modalOverlay) return;

  const STORAGE_KEY = 'bci_rule36_accepted';

  // Check previous acknowledgment
  const isAccepted = localStorage.getItem(STORAGE_KEY);
  if (!isAccepted) {
    // Show modal on entry with a gentle delay
    setTimeout(() => {
      modalOverlay.classList.add('active');
    }, 400);
  }

  // Agree button: store consent and close modal
  if (agreeBtn) {
    agreeBtn.addEventListener('click', () => {
      localStorage.setItem(STORAGE_KEY, 'true');
      modalOverlay.classList.remove('active');
    });
  }

  // Decline button: redirect or provide exit
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      alert('Under Bar Council of India guidelines, access to this site is restricted without voluntary acknowledgment.');
      window.location.href = 'https://www.google.com';
    });
  }

  // Allow re-opening disclaimer from footer or menu
  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.add('active');
    });
  });
}

/* ============================================================
   3. NAVBAR — SCROLL STATE
============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   4. HAMBURGER MENU (MOBILE)
============================================================ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Close mobile drawer when any link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });
}

/* ============================================================
   5. SMOOTH SCROLL WITH FIXED NAV OFFSET
============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      // Handle on-page hash vs cross-page hash
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const pathPart = href.slice(0, hashIndex);
      const hashPart = href.slice(hashIndex);

      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const isTargetOnCurrentPage = !pathPart || pathPart === currentPath || (currentPath === '' && pathPart === 'index.html');

      if (isTargetOnCurrentPage) {
        const target = document.querySelector(hashPart);
        if (target) {
          e.preventDefault();
          const navHeight = document.getElementById('navbar')?.offsetHeight ?? 68;
          const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

          window.scrollTo({
            top: targetTop,
            behavior: 'smooth',
          });

          // Update URL hash without jumping
          if (history.pushState) {
            history.pushState(null, null, hashPart);
          }
        }
      }
    });
  });
}

/* ============================================================
   6. SCROLL-TRIGGERED ANIMATIONS (INTERSECTION OBSERVER)
============================================================ */
function initScrollAnimations() {
  const autoTargets = [
    '.section-label',
    '.section-title',
    '.section-subtitle',
    '.about-bio p',
    '.detail-card',
    '.service-card',
    '.law-glimpse-card',
    '.research-card',
    '.pub-entry',
    '.blog-card',
    '.contact-item',
    '.query-card',
  ];

  autoTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (!el.classList.contains('fade-up')) {
        el.classList.add('fade-up');
      }
    });
  });

  const staggerTargets = ['.services-grid', '.research-grid', '.blog-grid'];
  staggerTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('stagger');
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.stagger').forEach(el => staggerObserver.observe(el));
}

/* ============================================================
   7. ACTIVE NAV LINK (MULTI-PAGE & ON-PAGE SCROLL)
============================================================ */
function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!navLinks.length) return;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Check if we are on a standalone page:
  const isStandalonePage = ['research.html', 'publications.html', 'blog.html'].includes(currentPath);

  if (isStandalonePage) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes(currentPath)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    return;
  }

  // On main landing page (index.html): scroll spy
  const sections = document.querySelectorAll('section[id]');
  const navHeight = document.getElementById('navbar')?.offsetHeight ?? 68;

  const updateActiveLink = () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      if (href.endsWith(`#${current}`) || href === `#${current}`) {
        link.classList.add('active');
      } else if (href.startsWith('#') || href.includes('index.html#')) {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

/* ============================================================
   8. LEGAL QUERY & CONSULTATION INTAKE FORM HANDLER
============================================================ */
function initLegalQueryForm() {
  const form = document.getElementById('legalQueryForm');
  const statusDiv = document.getElementById('formStatus');
  if (!form || !statusDiv) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = document.getElementById('queryName')?.value.trim();
    const emailVal = document.getElementById('queryEmail')?.value.trim();
    const phoneVal = document.getElementById('queryPhone')?.value.trim();
    const categoryVal = document.getElementById('queryCategory')?.value;
    const briefVal = document.getElementById('queryBrief')?.value.trim();
    const consentVal = document.getElementById('queryConsent')?.checked;

    // Validation
    if (!nameVal || !emailVal || !categoryVal || !briefVal) {
      showStatus('Please complete all required fields.', 'error');
      return;
    }

    if (!consentVal) {
      showStatus('Please confirm the Bar Council of India voluntary consultation acknowledgment.', 'error');
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Success response simulation
    showStatus('Thank you for reaching out. Your query has been recorded. Advocate Manisha Gandhi’s office will review your matter and connect with you via email/phone shortly.', 'success');
    form.reset();

    // In case user wants to send an email client draft as fallback:
    const subject = encodeURIComponent(`Legal Consultation Query: ${categoryVal} - ${nameVal}`);
    const body = encodeURIComponent(
      `Name: ${nameVal}\nEmail: ${emailVal}\nPhone: ${phoneVal || 'Not provided'}\nPractice Area: ${categoryVal}\n\nBrief of Query:\n${briefVal}\n\n[Submitted via adv-manisha.github.io]`
    );

    // Provide optional direct mailto fallback link in status
    const mailtoLink = `mailto:priyman.gandhi1830@gmail.com?subject=${subject}&body=${body}`;
    const mailtoNotice = document.createElement('p');
    mailtoNotice.style.marginTop = '8px';
    mailtoNotice.style.fontSize = '0.78rem';
    mailtoNotice.innerHTML = `You can also send this query directly from your email app: <a href="${mailtoLink}" style="color:var(--gold);text-decoration:underline;">Click here to open email draft</a>.`;
    statusDiv.appendChild(mailtoNotice);
  });

  function showStatus(msg, type) {
    statusDiv.className = `form-status ${type}`;
    statusDiv.textContent = msg;
    statusDiv.style.display = 'block';
  }
}

/* ============================================================
   9. CATEGORY FILTER TABS (FOR RESEARCH / PUBLICATIONS / BLOG)
============================================================ */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter') || 'all';
      const items = document.querySelectorAll('[data-category]');

      items.forEach(item => {
        const itemCat = item.getAttribute('data-category') || '';
        if (filterValue === 'all' || itemCat.includes(filterValue)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================================
   10. QUOTE CAROUSEL
============================================================ */
function initQuoteCarousel() {
  const slides    = document.querySelectorAll('.quote-slide');
  const dotsWrap  = document.getElementById('carouselDots');
  const prevBtn   = document.getElementById('quotePrev');
  const nextBtn   = document.getElementById('quoteNext');
  if (!slides.length || !dotsWrap) return;

  let current   = 0;
  let autoTimer = null;

  dotsWrap.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Quote ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    if (dotsWrap.children[current]) {
      dotsWrap.children[current].classList.remove('active');
    }
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dotsWrap.children[current]) {
      dotsWrap.children[current].classList.add('active');
    }
  }

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  startAuto();
}

/* ============================================================
   11. FOOTER COPYRIGHT YEAR
============================================================ */
function setFooterYear() {
  const yearEls = document.querySelectorAll('.footer-year, #footer-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear;
  });
}
