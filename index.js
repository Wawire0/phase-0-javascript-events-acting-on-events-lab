const dodger = document.getElementById('dodger');
const game = document.getElementById('game');

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});

function moveDodgerRight() {

  const left = parseInt(dodger.style.left) || 0;

  
  const newLeft = left + 1;

  const gameWidth = game.offsetWidth;
  const dodgerWidth = dodger.offsetWidth;
  
  if (newLeft + dodgerWidth <= gameWidth) {
    dodger.style.left = `${newLeft}px`;
  }
}
.

