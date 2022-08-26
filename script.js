'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');

const dice = document.querySelector('.dice');

const randomNum = function (start, end) {
  return Math.floor(Math.random() * end + start);
};

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const score0Current = document.querySelector('#current--0');
const score1Current = document.querySelector('#current--1');

const overlay0 = document.querySelector('.player--0');
const overlay1 = document.querySelector('.player--1');

console.log(score0Current);

score0.textContent = 0;
score1.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

dice.classList.add('hidden');

btnNew.addEventListener('click', function () {
  dice.classList.add('hidden');
});

btnRoll.addEventListener('click', function () {
  const diceNum = randomNum(1, 6);
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNum}.png`;
  if (diceNum == 1) {
    console.log('sıra diğer oyuncuda');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    overlay0.classList.toggle('player--active');
    overlay1.classList.toggle('player--active');
  } else {
    console.log('puan toplamaya devam');
    currentScore += diceNum;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
/*
btnHold.addEventListener('click', function () {
  score0.textContent += currentScore;
  currentScore = 0;
});*/
