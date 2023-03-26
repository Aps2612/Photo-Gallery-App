const gallery = document.querySelector('.gallery');
const galleryItems = document.querySelectorAll('.gallery-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

// Show the current image
function showImage() {
  galleryItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Go to the previous image
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = galleryItems.length - 1;
  }
  showImage();
}

// Go to the next image
function nextImage() {
  currentIndex++;
  if (currentIndex >= galleryItems.length) {
    currentIndex = 0;
  }
  showImage();
}

// Set up event listeners
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Show the first image
showImage();

// Add event listeners to gallery items to allow users to view images in a larger size
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const largeSrc = item.querySelector('img').getAttribute('data-large-src');
    window.open(largeSrc);
  })
});