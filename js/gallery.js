const images = document.querySelectorAll('.gallery-image');
const prevButton = document.querySelector('.gallery-btn-prev');
const nextButton = document.querySelector('.gallery-btn-next');

let currentImageIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

// Initial display
showImage(currentImageIndex);
