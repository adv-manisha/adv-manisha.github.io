/**
 * script.js — Manisha Gandhi Law Portfolio
 * Features:
 *  1. Navbar: transparent → solid on scroll + active link highlight
 *  2. Hamburger mobile menu toggle
 *  3. Smooth scroll with offset for fixed nav
 *  4. Scroll-triggered fade-in animations (IntersectionObserver)
 *  5. Footer year auto-update
 *  6. Active nav link based on scroll position
 */
 
/* ============================================================
   1. DOM READY
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
 
  initNavbar();
  initHamburger();
  initSmoothScroll();
  initScrollAnimations();
  initActiveNavLink();
  initQuoteCarousel();
  setFooterYear();
 
});
 
/* ============================================================
   2. NAVBAR — scroll state
============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
 
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
 
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}
 
/* ============================================================
   3. HAMBURGER MENU (mobile)
============================================================ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;
 
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    // Animate the three bars into an X
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
 
  // Close menu when any nav link is clicked
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
   4. SMOOTH SCROLL WITH NAV OFFSET
============================================================ */
function initSmoothScroll() {
  // Intercept all anchor clicks that point to an on-page #id
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetSelector = this.getAttribute('href');
      if (targetSelector === '#') return; // ignore bare #
      const target = document.querySelector(targetSelector);
      if (!target) return;
 
      e.preventDefault();
 
      const navHeight = document.getElementById('navbar')?.offsetHeight ?? 68;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
 
      window.scrollTo({
        top:      targetTop,
        behavior: 'smooth',
      });
    });
  });
}
 
/* ============================================================
   5. SCROLL-TRIGGERED ANIMATIONS (IntersectionObserver)
============================================================ */
function initScrollAnimations() {
  // Automatically add .fade-up to key elements
  const autoTargets = [
    '.section-label',
    '.section-title',
    '.section-subtitle',
    '.about-bio p',
    '.detail-card',
    '.research-card',
    '.pub-entry',
    '.blog-card',
    '.contact-item',
    '.contact-note',
  ];
 
  autoTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (!el.classList.contains('fade-up')) {
        el.classList.add('fade-up');
      }
    });
  });
 
  // Add stagger class to grid containers
  const staggerTargets = ['.research-grid', '.blog-grid'];
  staggerTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('stagger');
    });
  });
 
  // Observer for .fade-up elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );
 
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
 
  // Observer for .stagger containers
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
   6. ACTIVE NAV LINK (highlight based on scroll position)
============================================================ */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;
 
  const navHeight = document.getElementById('navbar')?.offsetHeight ?? 68;
 
  const updateActiveLink = () => {
    let current = '';
 
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 80;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
 
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };
 
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // run once
}
 
/* ============================================================
   7. QUOTE CAROUSEL
============================================================ */
function initQuoteCarousel() {
  const slides    = document.querySelectorAll('.quote-slide');
  const dotsWrap  = document.getElementById('carouselDots');
  const prevBtn   = document.getElementById('quotePrev');
  const nextBtn   = document.getElementById('quoteNext');
  if (!slides.length || !dotsWrap) return;
 
  let current   = 0;
  let autoTimer = null;
 
  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Quote ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
 
  function goTo(index) {
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
  }
 
  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 4500);
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
   8. FOOTER YEAR
============================================================ */
function setFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
