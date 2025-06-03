const track = document.getElementById('slider-track2');

// Clone slides for smooth infinite scroll
const slides = [...track.children];
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

let position = 0;
const speed = 1; // Adjust for faster or slower scroll

function animate() {
  position -= speed;
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
