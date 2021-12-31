'use strict';

//selectin Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currScore0El = document.getElementById('current--0');
const currScore1El = document.getElementById('current--1');

//starting conditions

let scores, currScore, activePlayer, playing;
init();
//roll dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //roll dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display correct dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //check for rolled 1
    if (dice !== 1) {
      //add dice to current score
      currScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score to active player's score
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //Finish Game
      diceEl.classList.remove('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //if not switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
function init() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  scores = [0, 0];
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
  currScore = 0;
  activePlayer = 0;
  playing = true;
}

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer ? 0 : 1;
  currScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
