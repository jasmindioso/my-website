const navToggle = document.querySelector('.nav-toggle');
let navLinks;

function initNavLinks() {
  navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.remove('nav-open');
      const page = link.getAttribute('href');
      console.log(page);
      window.open(page, '_self');
    });
  });
}

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

initNavLinks();
