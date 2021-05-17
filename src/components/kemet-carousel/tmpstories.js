export const enableNext = (event) => {
  const carousel = event.target.closest('kemet-carousel');
  carousel.querySelector('kemet-carousel-next').disabled = false;
};
