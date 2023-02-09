const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

window.onload = function() {
  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
};

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('nav-open');
    const page = link.getAttribute('href');
    console.log(page);
    window.open(page, '_self');
  });
});