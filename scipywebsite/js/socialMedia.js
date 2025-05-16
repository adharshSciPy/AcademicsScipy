document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 2;
  const slideCount = slides.length;
  let autoRotateInterval;
  
  function getSlideWidth() {
    return slides[0].offsetWidth;
  }
  
  function getGapWidth() {
    // Parse margin value (20px from "0 20px")
    return parseInt(window.getComputedStyle(slides[0]).marginRight) * 2;
  }
  
  function centerActiveSlide() {
    const slideWidth = getSlideWidth();
    const gapWidth = getGapWidth();
    const totalSlideWidth = slideWidth + gapWidth;
    const containerWidth = track.parentElement.offsetWidth;
    
    // Calculate position to center active slide
    const targetPosition = (containerWidth / 2) - 
                         (slideWidth / 2) - 
                         (currentIndex * totalSlideWidth);
    
    track.style.transform = `translateX(${targetPosition}px)`;
  }
  
  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });
    centerActiveSlide();
  }
  
  function autoRotate() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }
  
  function startAutoRotate() {
    autoRotateInterval = setInterval(autoRotate, 3000);
  }
  
  function handleResize() {
    clearInterval(autoRotateInterval);
    updateSlider();
    startAutoRotate();
  }
  
  // Initialize
  updateSlider();
  startAutoRotate();
  
  // Event listeners
  window.addEventListener('resize', handleResize);
  track.addEventListener('mouseenter', () => clearInterval(autoRotateInterval));
  track.addEventListener('mouseleave', startAutoRotate);
});



document.addEventListener('DOMContentLoaded', function () {
  const trackfb = document.querySelector('.slider-track-fb');
  const slidesfb = document.querySelectorAll('.slide-fb');
  let currentIndexfb = 2;
  const slideCountfb = slidesfb.length;
  let autoRotateIntervalfb;

  function getSlideWidthfb() {
    return slidesfb[0].offsetWidth;
  }

  function getGapWidthfb() {
    return parseInt(window.getComputedStyle(slidesfb[0]).marginRight) * 2;
  }

  function centerActiveSlidefb() {
    const slideWidthfb = getSlideWidthfb();
    const gapWidthfb = getGapWidthfb();
    const totalSlideWidthfb = slideWidthfb + gapWidthfb;
    const containerWidthfb = trackfb.parentElement.offsetWidth;

    const targetPositionfb =
      containerWidthfb / 2 - slideWidthfb / 2 - currentIndexfb * totalSlideWidthfb;

    trackfb.style.transform = `translateX(${targetPositionfb}px)`;
  }

  function updateSliderfb() {
    slidesfb.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndexfb);
    });
    centerActiveSlidefb();
  }

  function autoRotatefb() {
    currentIndexfb = (currentIndexfb + 1) % slideCountfb;
    updateSliderfb();
  }

  function startAutoRotatefb() {
    autoRotateIntervalfb = setInterval(autoRotatefb, 3000);
  }

  function handleResizefb() {
    clearInterval(autoRotateIntervalfb);
    updateSliderfb();
    startAutoRotatefb();
  }

  // Initialize
  updateSliderfb();
  startAutoRotatefb();

  // Event listeners
  window.addEventListener('resize', handleResizefb);
  trackfb.addEventListener('mouseenter', () => clearInterval(autoRotateIntervalfb));
  trackfb.addEventListener('mouseleave', startAutoRotatefb);
});
  