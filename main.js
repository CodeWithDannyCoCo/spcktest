let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const updateNumberDisplay = (number) => {
  document.querySelector('.number-display').textContent = number;
};

document.querySelector('.check-btn').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess < 1 || guess > 20) {
    displayMessage('⛔️ Invalid number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('body').classList.add('correct');  // Animation trigger
    updateNumberDisplay(secretNumber);  // Change question mark to number

    document.querySelector('.check-btn').disabled = true;
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📉 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.play-again-btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  
  displayMessage('Start guessing...');
  updateNumberDisplay('?');  // Reset question mark
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').classList.remove('correct');
  document.querySelector('.check-btn').disabled = false;
});

