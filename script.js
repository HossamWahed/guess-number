'use strict';
let secretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretnumber);
let score = 20;
let highscore = 0;
const displeymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displeymessage('no number');
  } else if (guess === secretnumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').textContent = secretnumber;
    displeymessage('correct number');
    document.querySelector('body').style.backgroundColor = 'red';

    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretnumber) {
    if (guess > 20) {
      displeymessage('chosse between 1 to 20');
    } else if (score > 1) {
      displeymessage(guess > secretnumber ? 'too high' : 'too lwo');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displeymessage('you lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber();
  document.querySelector('.score').textContent = score;
  displeymessage('start guessing ....');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
