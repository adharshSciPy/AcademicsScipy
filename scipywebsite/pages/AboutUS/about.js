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
