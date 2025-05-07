document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('videoSlider');
  let scrollAmount = 0;
  const scrollSpeed = 1; // Adjust speed here (higher = faster)
  let isScrolling = true;
  
  function startScrolling() {
      if (!isScrolling) return;
      
      scrollAmount += scrollSpeed;
      slider.scrollLeft = scrollAmount;
      
      // When we've scrolled through all original cards, reset to start
      if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
          slider.scrollLeft = 0;
      }
      
      requestAnimationFrame(startScrolling);
  }
  
  // Pause on hover
  slider.addEventListener('mouseenter', () => {
      isScrolling = false;
  });
  
  slider.addEventListener('mouseleave', () => {
      isScrolling = true;
      startScrolling();
  });
  
  // Start the animation
  startScrolling();
});