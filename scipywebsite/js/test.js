const track = document.getElementById('slider-track');

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

  document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.testimonial-slide');
            const indicators = document.querySelectorAll('.indicator');
            const prevBtn = document.querySelector('.prev-slide');
            const nextBtn = document.querySelector('.next-slide');
            let currentSlide = 0;
            let slideInterval;

            // Initialize slider
            function startSlider() {
                slideInterval = setInterval(() => {
                    nextSlide();
                }, 5000); // Change slide every 5 seconds
            }

            function showSlide(index) {
                // Wrap around if at ends
                if (index >= slides.length) {
                    currentSlide = 0;
                } else if (index < 0) {
                    currentSlide = slides.length - 1;
                } else {
                    currentSlide = index;
                }

                // Update slides
                slides.forEach(slide => slide.classList.remove('active'));
                slides[currentSlide].classList.add('active');

                // Update indicators
                indicators.forEach(ind => ind.classList.remove('active'));
                indicators[currentSlide].classList.add('active');
            }

            function nextSlide() {
                showSlide(currentSlide + 1);
            }

            function prevSlide() {
                showSlide(currentSlide - 1);
            }

            // Event listeners
            nextBtn.addEventListener('click', () => {
                clearInterval(slideInterval);
                nextSlide();
                startSlider();
            });

            prevBtn.addEventListener('click', () => {
                clearInterval(slideInterval);
                prevSlide();
                startSlider();
            });

            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    clearInterval(slideInterval);
                    showSlide(index);
                    startSlider();
                });
            });

            // Start the slider
            startSlider();
        });