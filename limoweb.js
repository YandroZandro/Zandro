const toggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

toggler.addEventListener('click', () => {
  navbar.classList.toggle('active'); // Toggle visibility
});

const video = document.querySelector('.background-video');
video.addEventListener('ended', () => {
  video.currentTime = 0; // Reset to the start of the video
  video.play();          // Play again
});
