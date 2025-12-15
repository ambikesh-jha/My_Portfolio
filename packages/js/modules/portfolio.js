// portfolio.js: Initializes portfolio Swiper
export function initPortfolio() {
  // Requires Swiper to be loaded globally (from swiper-bundle.min.js)
  if (typeof Swiper !== 'undefined') {
    let swiperPortfolio = new Swiper(".portfolio__container", {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    console.warn('Swiper not loaded for portfolio.');
  }
}