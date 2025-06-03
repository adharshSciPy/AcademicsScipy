document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 2;
  const slideCount = slides.length;
  let autoRotateInterval;

  function getSlideWidth() {
    return slides[0].offsetWidth;
  }

  function getGapWidth() {
    return parseInt(window.getComputedStyle(slides[0]).marginRight) * 2;
  }

function centerActiveSlide() {
  const slideWidth = getSlideWidth();

  // Get both margin-left and margin-right
  const style = window.getComputedStyle(slides[0]);
  const marginLeft = parseInt(style.marginLeft) || 0;
  const marginRight = parseInt(style.marginRight) || 0;
  const gapWidth = marginLeft + marginRight;

  const totalSlideWidth = slideWidth + gapWidth;
  const containerWidth = track.parentElement.offsetWidth;

  const targetPosition =
    containerWidth / 2 - slideWidth / 2 - currentIndex * totalSlideWidth;

  track.style.transform = `translateX(${targetPosition}px)`;
}


  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
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
  window.addEventListener("resize", handleResize);
  track.addEventListener("mouseenter", () => clearInterval(autoRotateInterval));
  track.addEventListener("mouseleave", startAutoRotate);
});

document.addEventListener("DOMContentLoaded", function () {
  const trackfb = document.querySelector(".slider-track-fb");
  const slidesfb = document.querySelectorAll(".slide-fb");
  let currentIndexfb = 2;
  const slideCountfb = slidesfb.length;
  let autoRotateIntervalfb;

  function getSlideWidthfb() {
    return slidesfb[0].offsetWidth;
  }

  function getGapWidthfb() {
    const style = window.getComputedStyle(slidesfb[0]);
    const marginLeft = parseInt(style.marginLeft) || 0;
    const marginRight = parseInt(style.marginRight) || 0;
    return marginLeft + marginRight;
  }

  function centerActiveSlidefb() {
    const slideWidthfb = getSlideWidthfb();
    const gapWidthfb = getGapWidthfb();
    const totalSlideWidthfb = slideWidthfb + gapWidthfb;
    const containerWidthfb = trackfb.parentElement.offsetWidth;

    const targetPositionfb =
      containerWidthfb / 2 -
      slideWidthfb / 2 -
      currentIndexfb * totalSlideWidthfb;

    trackfb.style.transform = `translateX(${targetPositionfb}px)`;
  }

  function updateSliderfb() {
    slidesfb.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndexfb);
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
  window.addEventListener("resize", handleResizefb);
  trackfb.addEventListener("mouseenter", () =>
    clearInterval(autoRotateIntervalfb)
  );
  trackfb.addEventListener("mouseleave", startAutoRotatefb);
});

document.addEventListener("DOMContentLoaded", function () {
  const trackyt = document.querySelector(".slider-track-yt");
  const slidesyt = document.querySelectorAll(".slide-yt");
  let currentIndexyt = 2;
  const slideCountyt = slidesyt.length;
  let autoRotateIntervalyt;

  function getSlideWidthyt() {
    return slidesyt[0].offsetWidth;
  }

  function getGapWidthyt() {
    const style = window.getComputedStyle(slidesyt[0]);
    const marginLeft = parseInt(style.marginLeft) || 0;
    const marginRight = parseInt(style.marginRight) || 0;
    return marginLeft + marginRight;
  }

  function centerActiveSlideyt() {
    const slideWidthyt = getSlideWidthyt();
    const gapWidthyt = getGapWidthyt();
    const totalSlideWidthyt = slideWidthyt + gapWidthyt;
    const containerWidthyt = trackyt.parentElement.offsetWidth;

    const targetPositionyt =
      containerWidthyt / 2 -
      slideWidthyt / 2 -
      currentIndexyt * totalSlideWidthyt;

    trackyt.style.transform = `translateX(${targetPositionyt}px)`;
  }

  function updateSlideryt() {
    slidesyt.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndexyt);
    });
    centerActiveSlideyt();
  }
  function autoRotateyt() {
    currentIndexyt = (currentIndexyt+ 1) % slideCountyt;
    updateSlideryt();
  }

  function startAutoRotateyt() {
    autoRotateIntervalyt = setInterval(autoRotateyt, 3000);
  }

  function handleResizeyt() {
    clearInterval(autoRotateIntervalyt);
    updateSlideryt();
    startAutoRotateyt();
  }

  // Initialize
  updateSlideryt();
  startAutoRotateyt();

  // Event listeners
  window.addEventListener("resize", handleResizeyt);
  trackyt.addEventListener("mouseenter", () =>
    clearInterval(autoRotateIntervalyt)
  );
  trackyt.addEventListener("mouseleave", startAutoRotateyt);
});
