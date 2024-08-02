document.addEventListener("DOMContentLoaded", function() {
  const cardContainer = document.querySelector('.website-card');
  const cards = cardContainer.querySelectorAll('.card');
  
  if (cards.length === 1) {
    cardContainer.classList.add('single-card');
  } else if (cards.length > 1 && cards.length < 4) {
    cardContainer.classList.add('few-cards');
  }
});