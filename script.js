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