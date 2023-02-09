navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('nav-open');
    const page = link.getAttribute('href');
    window.location = page;
  });
});
