const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.nav-toggle');

if (nav && toggle) {
  const setLock = (locked) => {
    document.body.style.overflow = locked ? 'hidden' : '';
  };

  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    setLock(false);
  };

  const open = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    setLock(true);
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.contains('is-open') ? close() : open();
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && nav.classList.contains('is-open')) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealTargets = [
  '.pillar',
  '.stat',
  '.program-card',
  '.board-member',
  '.info-card',
  '.impact-top',
  '.mission-head',
  '.section-title',
  '.story-grid > *',
  '.partner-card',
  '.panel-grid > *',
  '.three-col > *',
  '.footer-grid > *'
];

const revealEls = [];
revealTargets.forEach((sel) => {
  document.querySelectorAll(sel).forEach((el) => {
    if (el.closest('.site-nav')) return;
    el.classList.add('reveal');
    revealEls.push(el);
  });
});

let revealIndex = 0;
revealEls.forEach((el) => {
  if (revealIndex % 4 === 1) el.classList.add('reveal-delay-1');
  else if (revealIndex % 4 === 2) el.classList.add('reveal-delay-2');
  else if (revealIndex % 4 === 3) el.classList.add('reveal-delay-3');
  revealIndex++;
});

if (prefersReduced) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

const countUp = () => {
  document.querySelectorAll('.stat .num').forEach((node) => {
    if (node.dataset.counted) return;
    const target = parseInt(node.textContent.replace(/[^0-9]/g, ''), 10) || 0;
    if (target === 0 || Number.isNaN(target)) return;
    node.dataset.counted = 'true';
    if (prefersReduced) return;
    const suffixEl = node.querySelector('span');
    const suffix = suffixEl ? suffixEl.textContent : '';
    if (suffixEl) suffixEl.textContent = '';
    const dur = 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
      else if (suffix) node.textContent = target + suffix;
    };
    requestAnimationFrame(tick);
  });
};

if (!prefersReduced && 'IntersectionObserver' in window) {
  const statIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp();
          statIO.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );
  if (document.querySelector('.stat .num')) statIO.observe(document.querySelector('.stats'));
}