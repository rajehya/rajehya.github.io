/* Yasser Alrajeh Portfolio — central project-page behavior.
   New project pages only need project-system.css + this file. */
(() => {
  'use strict';
  const body = document.body;
  if (!body || !body.classList.contains('project-page')) return;

  const main = document.querySelector('main.doc') || document.querySelector('main');
  if (!main) return;

  // Resolve portfolio root from this script path, so local preview and GitHub Pages both work.
  const self = document.currentScript || [...document.scripts].find(s => /assets\/js\/project-system\.js(?:\?|$)/.test(s.src));
  let homeHref = '../../index.html#projects';
  if (self) {
    const srcAttr = self.getAttribute('src') || '';
    const prefix = srcAttr.replace(/assets\/js\/project-system\.js(?:\?.*)?$/, '');
    if (prefix !== srcAttr) homeHref = prefix + 'index.html#projects';
  }

  // Remove legacy project navigation only; project content remains untouched.
  main.querySelectorAll('.project-end-actions, .project-bottom-nav, .project-actions').forEach(el => el.remove());
  main.querySelectorAll('.cta').forEach(el => {
    const links = [...el.querySelectorAll('a')];
    if (links.some(a => /portfolio|main page/i.test(a.textContent || ''))) el.classList.add('project-nav-legacy');
  });

  // Canonical two-button ending used on every project page.
  const nav = document.createElement('div');
  nav.className = 'project-end-actions';
  nav.setAttribute('aria-label', 'Project navigation');
  nav.innerHTML = `<a class="back-main" href="${homeHref}">← Back to Main Page</a><a class="back-top" href="#">↑ Back to Top</a>`;
  const container = main.querySelector(':scope > .container') || main.querySelector('.container');
  (container || main).appendChild(nav);
  nav.querySelector('.back-top').addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
