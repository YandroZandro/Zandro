const toggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

toggler.addEventListener('click', () => {
  navbar.classList.toggle('active'); // Toggle visibility
});
