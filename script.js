const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.nav-toggle');

if (nav && toggle) {
  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
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