const emojis = document.querySelectorAll('.emoji');

emojis.forEach(emoji => {
  emoji.addEventListener('click', () => {
    const rating = emoji.dataset.rating;
    console.log("Selected rating:", rating);
  });
});

document.addEventListener('keydown', (event) => {
  const currentIndex = Array.from(emojis).findIndex(emoji => emoji.classList.contains('selected'));
  
  if (event.key === 'ArrowRight' && currentIndex < emojis.length - 1) {
    emojis[currentIndex].classList.remove('selected');
    emojis[currentIndex + 1].classList.add('selected');
  } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
    emojis[currentIndex].classList.remove('selected');
    emojis[currentIndex - 1].classList.add('selected');
  }
});

emojis[0].classList.add('selected');
