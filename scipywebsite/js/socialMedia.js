const track = document.getElementById('slider-track');

// Clone all slides
const slides = [...track.children];
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

// Auto-scroll
let speed = 0.5; // Adjust scroll speed
let position = 0;

function animate() {
  position -= speed;
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();