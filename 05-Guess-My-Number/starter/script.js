'use strict';
let secretNumber = generateNumber();
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessage('⛔️ no number!');
  } else if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    updateBackground('#60b347');
    updateNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // guess too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? setMessage('📈 Too high!')
        : setMessage('📉 Too low!');
      score--;
      setScore(score);
    } else {
      setMessage('💥 you lost the game');
      setScore(0);
    }
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 you lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   //guess to low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 you lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  setMessage('?');
  secretNumber = generateNumber();
  updateBackground('#222');
  updateNumber('?');
  score = 20;
  setScore(score);
  document.querySelector('.guess').value = '';
  setMessage('Start guessing...');
});
function updateBackground(value) {
  document.querySelector('body').style.backgroundColor = value';
}

function updateNumber(value) {
  document.querySelector('.number').textContent = value;
  document.querySelector('.number').style.width =
    value === '?' ? '15rem' : '30rem';
}

function setScore(score) {
  document.querySelector('.score').textContent = score;
}

function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function setMessage(message) {
  document.querySelector('.message').textContent = message;
}
