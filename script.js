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
  initDynamicSlogan();
  initBciDisclaimer();
  initNavbar();
  initHamburger();
  initSmoothScroll();
  initScrollAnimations();
  initActiveNavLink();
  initLegalQueryForm();
  initCategoryFilters();
  initQuoteCarousel();
  initStudyHub();
  setFooterYear();
});

/* ============================================================
   1B. THEME TOGGLE (LIGHT / DARK) — Strictly Defaults to Light
============================================================ */
function initThemeToggle() {
  const toggleBtns = document.querySelectorAll('.theme-toggle');
  const STORAGE_KEY = 'adv_theme';

  const updateToggleUI = (theme) => {
    const isDark = theme === 'dark';
    toggleBtns.forEach(btn => {
      const iconSpan = btn.querySelector('.theme-icon') || btn.querySelector('span');
      if (iconSpan) {
        iconSpan.textContent = isDark ? '☀️' : '🌙';
      }
      btn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    });
  };

  // Determine active theme: default strictly to 'light'
  let savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme !== 'dark') {
    savedTheme = 'light';
  }
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateToggleUI(savedTheme);

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (err) {
        console.warn('Storage unavailable', err);
      }
      updateToggleUI(next);
    });
  });
}

/* ============================================================
   1C. DYNAMIC LEGAL SLOGAN & CONSTITUTIONAL WISDOM
   Inspiring law students & public faith in the rule of law
============================================================ */
const LEGAL_SLOGANS = [
  {
    quote: "Educate, Agitate, Organise. Cultivate the mind; it is the ultimate foundation of human existence and constitutional liberty.",
    author: "Dr. B.R. Ambedkar",
    designation: "Architect of the Constitution of India",
    theme: "Inspiration for Law Students"
  },
  {
    quote: "The law must not remain a stranger to the people it governs. Justice is not a cloistered virtue; it must reach the humblest citizen.",
    author: "Justice V.R. Krishna Iyer",
    designation: "Eminent Supreme Court Jurist & Human Rights Champion",
    theme: "Public Faith in the Rule of Law"
  },
  {
    quote: "The Constitution was not made for the aggrandizement of those who govern; it was framed to preserve the liberties of the governed.",
    author: "Nani A. Palkhivala",
    designation: "Legendary Constitutional Jurist & Senior Advocate",
    theme: "Constitutional Conscience"
  },
  {
    quote: "Even if you are a minority of one, the truth is still the truth. Real swaraj comes by the capacity of all citizens to resist authority when abused.",
    author: "Mahatma Gandhi",
    designation: "Father of the Nation & Legal Pioneer",
    theme: "Courage, Truth & Public Faith"
  },
  {
    quote: "A lawyer without history or literature is a mechanic, a mere working mason; if he possesses some knowledge for these, he may venture to call himself an architect.",
    author: "Sir Walter Scott / Chief Justice Marshall",
    designation: "Foundational Maxim for Legal Education",
    theme: "Inspiration for Law Students"
  },
  {
    quote: "If the salt have lost his savour, wherewith shall it be salted? In a democracy governed by the rule of law, the independence of the bar and judiciary is non-negotiable.",
    author: "Justice H.R. Khanna",
    designation: "Supreme Court Jurist (Kesavananda & ADM Jabalpur Dissent)",
    theme: "Judicial Integrity & Student Conscience"
  },
  {
    quote: "Law is not an end in itself; it is an instrument of social justice. The strength of a legal system lies in the fairness with which it protects the vulnerable.",
    author: "Justice P.N. Bhagwati",
    designation: "Former Chief Justice of India & Pioneer of PIL",
    theme: "Public Faith in the Legal System"
  },
  {
    quote: "A lawyer’s duty is not just to win cases, but to assist the court in arriving at truth and justice with unflinching professional ethics.",
    author: "Fali S. Nariman",
    designation: "Eminent Senior Advocate & Constitutional Scholar",
    theme: "Ethics & Duty of the Bar"
  }
];

// Helper method to add new slogans dynamically at runtime
window.addLegalSlogan = function(sloganObj) {
  if (sloganObj && sloganObj.quote && sloganObj.author) {
    LEGAL_SLOGANS.push({
      quote: sloganObj.quote,
      author: sloganObj.author,
      designation: sloganObj.designation || 'Jurist / Legal Scholar',
      theme: sloganObj.theme || 'Legal Wisdom'
    });
    const counterEl = document.getElementById('sloganCounter');
    if (counterEl) {
      const currentIdx = parseInt(counterEl.dataset.index || '0', 10);
      counterEl.textContent = `Quote ${currentIdx + 1} of ${LEGAL_SLOGANS.length}`;
    }
  }
};

function initDynamicSlogan() {
  const quoteEl = document.getElementById('sloganQuoteText');
  const authorEl = document.getElementById('sloganAuthorText');
  const roleEl = document.getElementById('sloganRoleText');
  const themeEl = document.getElementById('sloganTheme');
  const counterEl = document.getElementById('sloganCounter');
  const shuffleBtn = document.getElementById('btnShuffleSlogan');
  const sectionEl = document.querySelector('.dynamic-slogan-section');

  if (!quoteEl || !authorEl) return;

  let currentIndex = 0;
  let autoTimer = null;
  let isTransitioning = false;

  function renderSlogan(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex = (index + LEGAL_SLOGANS.length) % LEGAL_SLOGANS.length;
    const item = LEGAL_SLOGANS[currentIndex];

    // Smooth fade transition
    quoteEl.classList.add('fading');

    setTimeout(() => {
      quoteEl.textContent = `"${item.quote}"`;
      authorEl.textContent = `— ${item.author}`;
      if (roleEl) roleEl.textContent = item.designation;
      if (themeEl) themeEl.textContent = item.theme;
      if (counterEl) {
        counterEl.textContent = `Quote ${currentIndex + 1} of ${LEGAL_SLOGANS.length}`;
        counterEl.dataset.index = currentIndex;
      }
      quoteEl.classList.remove('fading');
      isTransitioning = false;
    }, 280);
  }

  function startAutoCycle() {
    stopAutoCycle();
    autoTimer = setInterval(() => {
      renderSlogan(currentIndex + 1);
    }, 8000);
  }

  function stopAutoCycle() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      renderSlogan(currentIndex + 1);
      startAutoCycle();
    });
  }

  // Pause rotation on user hover
  if (sectionEl) {
    sectionEl.addEventListener('mouseenter', stopAutoCycle);
    sectionEl.addEventListener('mouseleave', startAutoCycle);
  }

  renderSlogan(0);
  startAutoCycle();
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

/* ============================================================
   12. STUDY HUB (DYNAMIC RENDERING & DATA-DRIVEN ENGINE)
============================================================ */
function initStudyHub() {
  const tabBtns = document.querySelectorAll('.study-tab-btn');
  const panels = document.querySelectorAll('.study-tab-panel');
  const searchInput = document.getElementById('studySearchInput');
  const searchClear = document.getElementById('studySearchClear');
  const filterPills = document.querySelectorAll('.filter-pill');
  const emptyState = document.getElementById('studyEmptyState');
  const viewToggleBtns = document.querySelectorAll('.view-toggle-btn');
  const courtScopeSelect = document.getElementById('courtScopeSelect');

  // If page doesn't have study elements, exit early
  if (!tabBtns.length && !document.getElementById('viewCardsGrid') && !document.getElementById('notesCardsGrid') && !document.getElementById('tricksCardsGrid')) {
    return;
  }

  let activeFilter = 'all';
  let activeCourtScope = 'all';

  // Render dynamic study data if STUDY_DATA is loaded
  renderDynamicStudyData();

  // 1. Tab Switching (Judgments vs Notes vs Tricks)
  if (tabBtns.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const targetId = btn.getAttribute('data-tab');
        panels.forEach(p => {
          p.classList.remove('active');
        });

        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }

        if (history.replaceState) {
          history.replaceState(null, null, '#' + targetId);
        }

        applyFilterAndSearch();
      });
    });

    // Check URL hash on page load for direct tab linking (e.g. study.html#tabNotes)
    function activateTabFromHash() {
      const hash = window.location.hash;
      if (hash && (hash === '#tabNotes' || hash === '#tabTricks' || hash === '#tabJudgments')) {
        const matchBtn = document.querySelector(`.study-tab-btn[data-tab="${hash.substring(1)}"]`);
        if (matchBtn && !matchBtn.classList.contains('active')) {
          matchBtn.click();
        }
      }
    }

    activateTabFromHash();
    window.addEventListener('hashchange', activateTabFromHash);
  }

  // 2. Sub-View Switching in Landmark Judgments (Cards vs Subject Table vs Year Table)
  if (viewToggleBtns.length) {
    viewToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        viewToggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const viewType = btn.getAttribute('data-view');
        const matrixViews = document.querySelectorAll('.legal-matrix-view');
        matrixViews.forEach(v => v.classList.remove('active'));

        if (viewType === 'subject-table') {
          const target = document.getElementById('viewSubjectTable');
          if (target) target.classList.add('active');
        } else if (viewType === 'year-table') {
          const target = document.getElementById('viewYearTable');
          if (target) target.classList.add('active');
        } else if (viewType === 'cards') {
          const target = document.getElementById('viewCards');
          if (target) target.classList.add('active');
        }

        applyFilterAndSearch();
      });
    });
  }

  // 3. Court Scope Dropdown Filter
  if (courtScopeSelect) {
    courtScopeSelect.addEventListener('change', () => {
      activeCourtScope = courtScopeSelect.value || 'all';
      applyFilterAndSearch();
    });
  }

  // 4. Category Filter Pills
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter') || 'all';
      applyFilterAndSearch();
    });
  });

  // 5. Live Search Input
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (searchClear) {
        if (searchInput.value.trim().length > 0) {
          searchClear.classList.add('visible');
        } else {
          searchClear.classList.remove('visible');
        }
      }
      applyFilterAndSearch();
    });
  }

  // 6. Clear Search Button
  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchClear.classList.remove('visible');
        searchInput.focus();
      }
      applyFilterAndSearch();
    });
  }

  // 7. Clipboard Copy Citation Handler
  function bindCopyCitationButtons() {
    document.querySelectorAll('.btn-copy-citation').forEach(btn => {
      btn.onclick = function() {
        const citation = btn.getAttribute('data-citation') || '';
        if (!citation) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(citation).then(handleSuccess).catch(fallbackCopy);
        } else {
          fallbackCopy();
        }

        function fallbackCopy() {
          const temp = document.createElement('textarea');
          temp.value = citation;
          document.body.appendChild(temp);
          temp.select();
          try {
            document.execCommand('copy');
            handleSuccess();
          } catch(e) {}
          document.body.removeChild(temp);
        }

        function handleSuccess() {
          const originalHTML = btn.innerHTML;
          btn.innerHTML = '<span>✓ Copied!</span>';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('copied');
          }, 2000);
        }
      };
    });
  }

  // 8. Dynamic Data Rendering Engine
  function renderDynamicStudyData() {
    if (typeof STUDY_DATA === 'undefined') return;

    // A. Render Judgments Cards Grid
    const judgmentsGrid = document.getElementById('viewCardsGrid');
    if (judgmentsGrid && STUDY_DATA.judgments && STUDY_DATA.judgments.length) {
      judgmentsGrid.innerHTML = STUDY_DATA.judgments.map(item => {
        const bulletsHtml = (item.takeaways || item.bullets || []).map(b => `<li>${b}</li>`).join('');
        let badgeCourtClass = item.courtBadgeClass || 'badge-sc';
        if (item.court === 'hc-gujarat') badgeCourtClass = 'badge-hc badge-hc-gujarat';
        else if (item.court === 'hc-bombay') badgeCourtClass = 'badge-hc badge-hc-bombay';
        else if (item.court === 'hc-delhi') badgeCourtClass = 'badge-hc badge-hc-delhi';
        else if (item.courtType === 'hc') badgeCourtClass = 'badge-hc';

        return `
          <article class="judgment-card" data-court="${item.court}" data-court-type="${item.courtType}" data-subject="${item.subject}" data-year="${item.year}" data-keywords="${item.keywords || ''}">
            <div class="card-top-row">
              <span class="subject-badge" data-subject="${item.subject}">${item.subjectLabel || item.subject}</span>
              <div style="display:flex;align-items:center;gap:6px;">
                <span class="court-badge ${badgeCourtClass}">${item.courtLabel}</span>
                <span class="bench-badge">${item.bench ? item.bench.split('(')[0].trim() : ''} · ${item.year}</span>
              </div>
            </div>
            <h3>${item.title}</h3>
            <div class="judgment-citation">${item.citation}</div>
            <div class="judgment-ratio-box">
              <div class="case-glimpse-header">
                <span class="case-glimpse-badge"><span class="glimpse-icon">⚖️</span> Case Glimpse</span>
                <span class="ratio-label">Core Ratio Decidendi</span>
              </div>
              <p class="ratio-text">"${item.caseGlimpse || item.ratio}"</p>
            </div>
            <ul class="judgment-bullets">
              ${bulletsHtml}
            </ul>
            <div class="card-actions-row">
              <a href="${item.pdfUrl}" class="btn-download-pdf" download title="Download full detail case brief PDF">
                <span class="btn-download-left">
                  <span class="pdf-badge-tag">PDF</span>
                  <span class="pdf-icon">📄</span>
                  <span>Full Detail Brief (PDF)</span>
                </span>
                <span class="pdf-size-badge">${item.pdfSize || 'Detailed Brief'}</span>
              </a>
              <button type="button" class="btn-copy-citation" data-citation="${item.citation}" title="Copy legal citation">
                <span class="copy-icon">📋</span>
                <span>Copy Citation</span>
              </button>
            </div>
          </article>
        `;
      }).join('');
    }

    // B. Render Dynamic Year-Wise Table
    const yearTableContainer = document.getElementById('viewYearTable');
    if (yearTableContainer && STUDY_DATA.judgments && STUDY_DATA.judgments.length) {
      const epochMeta = [
        { id: "2026–2025", title: "📅 2026 – 2025: Contemporary Precedents (AI, Data Privacy, BNSS & Liberty)" },
        { id: "2024–2023", title: "📅 2024 – 2023: Landmark Constitutional, Federal & Arbitration Epoch" },
        { id: "2022–2020", title: "📅 2022 – 2020: Reform, Corporate & Bail Jurisprudence" },
        { id: "2019–2015", title: "📅 2019 – 2015: Commercial Insolvency, Privacy & Fundamental Dignity" },
        { id: "2014–2010", title: "📅 2014 – 2010: Procedural Safeguards, Investor Protection & Property Certainty" },
        { id: "Foundational Precedents", title: "📅 Foundational Precedents (Pre-2010): Apex Constitutional, Criminal & Commercial Bedrocks" }
      ];

      let yearHtml = '<div class="table-scroll-hint">← Scroll horizontally on small screens to inspect the full legal matrix →</div>';
      epochMeta.forEach(ep => {
        const epCases = STUDY_DATA.judgments.filter(j => j.epoch === ep.id);
        if (!epCases.length) return;

        const rowsHtml = epCases.map(j => `
          <tr data-court="${j.court}" data-court-type="${j.courtType}" data-subject="${j.subject}" data-year="${j.year}" data-keywords="${j.keywords || ''}">
            <td><strong>${j.year}</strong></td>
            <td><span class="court-badge ${j.courtBadgeClass || 'badge-sc'}">${j.courtLabel}</span></td>
            <td>
              <div class="col-case-title">${j.title}</div>
              <div class="col-case-citation">${j.citation}</div>
            </td>
            <td><span class="col-statutory">${j.subjectLabel}</span></td>
            <td>
              <div class="col-ratio-text">${j.caseGlimpse || j.ratio}</div>
            </td>
            <td>
              <a href="${j.pdfUrl}" class="btn-table-pdf" download title="Download Full Detail Case Brief PDF">
                <span>📄</span> PDF
              </a>
            </td>
          </tr>
        `).join('');

        yearHtml += `
          <div class="legal-group-section" data-year-group="${ep.id}">
            <div class="legal-group-header">
              <h3 class="legal-group-title">${ep.title}</h3>
              <span class="legal-group-count">${epCases.length} Landmark Decisions</span>
            </div>
            <div class="legal-table-responsive">
              <table class="legal-table">
                <thead>
                  <tr>
                    <th style="width: 8%;">Year</th>
                    <th style="width: 14%;">Court / Forum</th>
                    <th style="width: 26%;">Case Title &amp; Citation</th>
                    <th style="width: 14%;">Subject Area</th>
                    <th style="width: 28%;">Ratio Decidendi &amp; Key Holding</th>
                    <th style="width: 10%;">Brief</th>
                  </tr>
                </thead>
                <tbody>
                  ${rowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        `;
      });
      yearTableContainer.innerHTML = yearHtml;
    }

    // C. Render Dynamic Subject-Wise Table
    const subjectTableContainer = document.getElementById('viewSubjectTable');
    if (subjectTableContainer && STUDY_DATA.judgments && STUDY_DATA.judgments.length) {
      const subjectMeta = [
        { id: "constitutional", title: "🏛️ Constitutional Law & Fundamental Rights" },
        { id: "criminal", title: "⚖️ Criminal Law, Procedure & New Criminal Sanhitas (BNSS/BNS)" },
        { id: "cpc-sra", title: "📑 Civil Procedure (CPC) & Specific Relief (SRA)" },
        { id: "contracts", title: "📜 Law of Contracts & Commercial Obligations" },
        { id: "corporate-sebi", title: "🏢 Corporate Governance, SEBI & Securities Law" },
        { id: "ibc-commercial", title: "💼 Commercial Insolvency (IBC) & Negotiable Instruments (NI Act)" },
        { id: "arbitration", title: "🤝 Arbitration, Conciliation & ADR" },
        { id: "family", title: "👨‍👩‍👧 Family Law, Matrimonial & Succession" },
        { id: "property-tpa", title: "🏡 Transfer of Property Act (TPA) & Property Law" },
        { id: "environmental", title: "🌿 Environmental Law & Public Interest Litigation (PIL)" },
        { id: "evidence-bsa", title: "🔍 Evidence Law, Technology & BSA 2023" }
      ];

      let subjHtml = '<div class="table-scroll-hint">← Scroll horizontally on small screens to inspect the full legal matrix →</div>';
      subjectMeta.forEach(sm => {
        const smCases = STUDY_DATA.judgments.filter(j => j.subject === sm.id);
        if (!smCases.length) return;

        const scCases = smCases.filter(j => j.courtType === 'sc');
        const hcCases = smCases.filter(j => j.courtType === 'hc');

        let subSectionsHtml = '';

        function renderSubgroup(cases, label, badgeClass) {
          if (!cases.length) return '';
          const rows = cases.map(j => `
            <tr data-court="${j.court}" data-court-type="${j.courtType}" data-subject="${j.subject}" data-year="${j.year}" data-keywords="${j.keywords || ''}">
              <td>
                <div class="col-case-title">${j.title}</div>
                <div class="col-case-citation">${j.citation}</div>
              </td>
              <td>
                <div>${j.year}</div>
                <div class="col-case-bench">${j.bench ? j.bench.split('(')[0].trim() : ''}</div>
              </td>
              <td><span class="court-badge ${j.courtBadgeClass || 'badge-sc'}">${j.courtLabel}</span></td>
              <td><span class="col-statutory">${j.statutory || 'N/A'}</span></td>
              <td>
                <div class="col-ratio-text">${j.ratio}</div>
                <div class="col-ratio-takeaway">${j.takeaways && j.takeaways.length ? j.takeaways[0] : ''}</div>
              </td>
              <td>
                <a href="${j.pdfUrl}" class="btn-table-pdf" download title="Download Full Detail Case Brief PDF">
                  <span>📄</span> PDF
                </a>
              </td>
            </tr>
          `).join('');

          return `
            <div class="court-subgroup" data-court-subgroup="${cases[0].courtType}">
              <div class="court-subgroup-title">
                <span class="court-badge ${badgeClass}">${label}</span>
                <span>(${cases.length} Landmark Decisions)</span>
              </div>
              <div class="legal-table-responsive">
                <table class="legal-table">
                  <thead>
                    <tr>
                      <th style="width: 24%;">Case Title &amp; Citation</th>
                      <th style="width: 12%;">Year &amp; Bench</th>
                      <th style="width: 12%;">Forum</th>
                      <th style="width: 14%;">Statutory Focus</th>
                      <th style="width: 28%;">Ratio Decidendi &amp; Key Holding</th>
                      <th style="width: 10%;">Brief</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rows}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        if (scCases.length) subSectionsHtml += renderSubgroup(scCases, 'Supreme Court of India', 'badge-sc');
        if (hcCases.length) subSectionsHtml += renderSubgroup(hcCases, 'State High Courts', 'badge-hc');

        subjHtml += `
          <div class="legal-group-section" data-subject="${sm.id}">
            <div class="legal-group-header">
              <h3 class="legal-group-title">${sm.title}</h3>
              <span class="legal-group-count">${smCases.length} Landmark Decisions</span>
            </div>
            ${subSectionsHtml}
          </div>
        `;
      });
      subjectTableContainer.innerHTML = subjHtml;
    }

    // D. Render Notes Cards Grid
    const notesGrid = document.getElementById('notesCardsGrid');
    if (notesGrid && STUDY_DATA.notes && STUDY_DATA.notes.length) {
      notesGrid.innerHTML = STUDY_DATA.notes.map(item => {
        const sectionsHtml = (item.sectionsCovered || []).map(s => `<li>• ${s}</li>`).join('');
        return `
          <article class="note-card" data-subject="${item.subject}" data-keywords="${item.keywords || ''}">
            <div class="card-top-row">
              <span class="subject-badge" data-subject="${item.subject}">${item.subjectLabel}</span>
              <span class="bench-badge">Study Module</span>
            </div>
            <h3>${item.title}</h3>
            <p class="note-desc">${item.desc || item.description || ''}</p>
            <div class="note-sections-wrap">
              <div class="note-sections-title">Key Statutory Provisions Covered:</div>
              <ul class="note-sections-list">
                ${sectionsHtml}
              </ul>
            </div>
            <div class="card-actions-row">
              <a href="${item.pdfUrl}" class="btn-download-pdf" download title="Download statutory study note PDF">
                <span class="btn-download-left">
                  <span class="pdf-badge-tag">PDF</span>
                  <span class="pdf-icon">📄</span>
                  <span>Full Detail Notes (PDF)</span>
                </span>
                <span class="pdf-size-badge">${item.pdfSize || 'Study Brief'}</span>
              </a>
            </div>
          </article>
        `;
      }).join('');
    }

    // E. Render Tricks Cards Grid
    const tricksGrid = document.getElementById('tricksCardsGrid');
    if (tricksGrid && STUDY_DATA.tricks && STUDY_DATA.tricks.length) {
      tricksGrid.innerHTML = STUDY_DATA.tricks.map(item => {
        const breakdownHtml = (item.breakdown || []).map(b => `<li><strong>${b.letter}</strong> — ${b.desc}</li>`).join('');
        return `
          <article class="trick-card" data-subject="${item.subject}" data-keywords="${item.keywords || ''}">
            <div class="card-top-row">
              <span class="subject-badge" data-subject="${item.subject}">${item.subjectLabel}</span>
              <span class="bench-badge">Memory Trick</span>
            </div>
            <h3>${item.title}</h3>
            <div class="trick-formula-box">
              <div>
                <span class="trick-formula-label">${item.formulaLabel || 'Mnemonic Formula'}</span>
                <div class="trick-formula-text">${item.formula}</div>
              </div>
              <div style="font-size: 1.8rem;" aria-hidden="true">💡</div>
            </div>
            <ul class="trick-breakdown">
              ${breakdownHtml}
            </ul>
            ${item.practicalTip ? `<div class="trick-tip-box"><strong>Practical Exam Tip:</strong> ${item.practicalTip}</div>` : ''}
            <div class="card-actions-row" style="margin-top:16px;">
              <a href="${item.pdfUrl}" class="btn-download-pdf" download title="Download cognitive mnemonic flashcard PDF">
                <span class="btn-download-left">
                  <span class="pdf-badge-tag">PDF</span>
                  <span class="pdf-icon">📄</span>
                  <span>Full Detail Sheet (PDF)</span>
                </span>
                <span class="pdf-size-badge">${item.pdfSize || 'Trick Card'}</span>
              </a>
            </div>
          </article>
        `;
      }).join('');
    }

    bindCopyCitationButtons();
  }

  // Expose global refresh function so adding new data dynamically re-renders
  window.refreshStudyHub = function() {
    renderDynamicStudyData();
    applyFilterAndSearch();
  };

  // 9. Unified Filter & Search Logic
  function applyFilterAndSearch() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const activePanel = document.querySelector('.study-tab-panel.active') || document.querySelector('.study-section');
    if (!activePanel) return;

    let visibleCount = 0;

    // Helper: Court matching logic
    function matchesCourt(courtId, courtType) {
      if (activeCourtScope === 'all') return true;
      if (activeCourtScope === 'sc') return courtType === 'sc';
      if (activeCourtScope === 'hc-all') return courtType === 'hc';
      return courtId === activeCourtScope;
    }

    // A. Filter Table Views (viewSubjectTable & viewYearTable)
    const activeMatrixView = activePanel.querySelector('.legal-matrix-view.active');
    if (activeMatrixView && (activeMatrixView.id === 'viewSubjectTable' || activeMatrixView.id === 'viewYearTable')) {
      const rows = activeMatrixView.querySelectorAll('tbody tr[data-court]');
      
      rows.forEach(row => {
        const rowSubject = row.getAttribute('data-subject') || '';
        const rowCourt = row.getAttribute('data-court') || '';
        const rowCourtType = row.getAttribute('data-court-type') || '';
        const rowKeywords = (row.getAttribute('data-keywords') || '').toLowerCase();
        const rowText = row.textContent.toLowerCase();

        const filterMatch = (activeFilter === 'all') || (rowSubject === activeFilter);
        const courtMatch = matchesCourt(rowCourt, rowCourtType);
        const searchMatch = (!query) || rowText.includes(query) || rowKeywords.includes(query);

        if (filterMatch && courtMatch && searchMatch) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });

      // Show/hide parent sections/subgroups based on child row visibility
      const groups = activeMatrixView.querySelectorAll('.legal-group-section');
      groups.forEach(group => {
        const groupRows = group.querySelectorAll('tbody tr[data-court]');
        const hasVisible = Array.from(groupRows).some(r => r.style.display !== 'none');
        group.style.display = hasVisible ? '' : 'none';

        const subgroups = group.querySelectorAll('.court-subgroup');
        subgroups.forEach(sub => {
          const subRows = sub.querySelectorAll('tbody tr[data-court]');
          const subHasVisible = Array.from(subRows).some(r => r.style.display !== 'none');
          sub.style.display = subHasVisible ? '' : 'none';
        });
      });
    }

    // B. Filter Cards (in viewCardsGrid or note-card / trick-card)
    const cards = activePanel.querySelectorAll('.judgment-card, .note-card, .trick-card');
    cards.forEach(card => {
      const subject = card.getAttribute('data-subject') || '';
      const cardCourt = card.getAttribute('data-court') || '';
      const cardCourtType = card.getAttribute('data-court-type') || '';
      const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();
      const text = card.textContent.toLowerCase();

      // Check Category Filter
      const matchesFilter = (activeFilter === 'all') || (subject === activeFilter);

      // Check Court Filter (if applicable to judgment cards)
      const matchesCourtScope = cardCourt ? matchesCourt(cardCourt, cardCourtType) : true;

      // Check Keyword Search
      const matchesSearch = (!query) || text.includes(query) || keywords.includes(query);

      if (matchesFilter && matchesCourtScope && matchesSearch) {
        card.style.display = 'flex';
        if (!activeMatrixView || activeMatrixView.id === 'viewCards') {
          visibleCount++;
        }
      } else {
        card.style.display = 'none';
      }
    });

    // Update empty state
    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.add('visible');
      } else {
        emptyState.classList.remove('visible');
      }
    }
  }

  // Initial pass on load
  applyFilterAndSearch();
}

