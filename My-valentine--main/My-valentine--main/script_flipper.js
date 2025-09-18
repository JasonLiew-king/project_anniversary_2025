const images = document.querySelectorAll('.gallery img');
let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// Initially show the first image
showImage(current);

// Add click event to the gallery
document.querySelector('.gallery').addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});
