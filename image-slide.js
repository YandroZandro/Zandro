document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-container img');
  const descriptions = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo fugit eum veniam laboriosam quaerat culpa..",
    "Another description for the second image.",
    "Yet another description for the third image."
  ];
  const heading = document.querySelector('.heading');
  const description = document.querySelector('.description');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.remove('prev', 'next', 'active');
      if (i === index) {
        img.classList.add('active');
      } else if (i === (index - 1 + images.length) % images.length) {
        img.classList.add('prev');
      } else if (i === (index + 1) % images.length) {
        img.classList.add('next');
      }
    });
    heading.textContent = `Mercedes Limo ${index + 1}`;
    description.textContent = descriptions[index];
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  nextButton.addEventListener('click', showNextSlide);
  prevButton.addEventListener('click', showPrevSlide);

  // Initial display
  showSlide(currentIndex);
});