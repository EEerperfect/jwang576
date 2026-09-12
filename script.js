const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const showMoreButton = document.querySelector('.show-more');
const extraPapers = document.querySelectorAll('.extra-paper');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || savedTheme === 'light') {
  root.dataset.theme = savedTheme;
}

themeButton?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
});

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  });
});

showMoreButton?.addEventListener('click', () => {
  const expanded = showMoreButton.getAttribute('aria-expanded') === 'true';
  showMoreButton.setAttribute('aria-expanded', String(!expanded));
  extraPapers.forEach((paper) => paper.classList.toggle('is-visible', !expanded));
  showMoreButton.innerHTML = expanded
    ? 'Show more publications <span aria-hidden="true">↓</span>'
    : 'Show fewer publications <span aria-hidden="true">↑</span>';
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
