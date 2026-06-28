window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.skill-card, .project-card');

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 50){
      card.style.opacity = '1';
      card.style.transform = 'translateY(0px)';
    }
  });
});