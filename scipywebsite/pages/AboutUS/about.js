document.addEventListener('DOMContentLoaded', () => {
    const emblaNode = document.querySelector('.embla');
    const viewportNode = emblaNode.querySelector('.embla__viewport');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    const options = { loop: true };
    const autoplay = EmblaCarouselAutoplay({ delay: 3000 });
    const embla = EmblaCarousel(viewportNode, options, [autoplay]);

    prevButton.addEventListener('click', () => {
        autoplay.stop(); // Optional
        embla.scrollPrev();
    });

    nextButton.addEventListener('click', () => {
        autoplay.stop();
        embla.scrollNext();
    });
});



// Helper function to enable/disable buttons based on scroll position
function updateButtonStates(embla, prevBtn, nextBtn) {
  prevBtn.disabled = !embla.canScrollPrev();
  nextBtn.disabled = !embla.canScrollNext();
}

// Button click handlers
function setupPrevNextButtons(embla, prevBtn, nextBtn, autoplay) {
  const onPrevClick = () => {
    autoplay && autoplay.stop();
    embla.scrollPrev();
  };

  const onNextClick = () => {
    autoplay && autoplay.stop();
    embla.scrollNext();
  };

  prevBtn.addEventListener('click', onPrevClick);
  nextBtn.addEventListener('click', onNextClick);

  // Update buttons when carousel is re-initialized or slide is selected
  embla.on('select', () => updateButtonStates(embla, prevBtn, nextBtn));
  embla.on('reInit', () => updateButtonStates(embla, prevBtn, nextBtn));

  // Initial state
  updateButtonStates(embla, prevBtn, nextBtn);
}

