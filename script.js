'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

//Helper Functions
const message = msg => {
  document.querySelector('.message').textContent = msg;
};

const scoreDisplay = curr =>
  (document.querySelector('.score').textContent = curr);

//1st See if Guess Exists. -> EVERY SCENARIO FOR GUESS
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No Input
  if (!guess) {
    message('✔ Input Number !');
    //When Player Wins
  } else if (guess === secretNumber) {
    message(' 🔥👏 You Won!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'orangered';
    document.querySelector('.number').style.width = '30rem';
    //Update High Score . if curr>highScore then curr becomes highScore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Wrong Guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? '❌Too High ' : '❌Too Low ');
      score--;

      scoreDisplay(score);
    } else {
      message('😆 Game Lost ! ');

      scoreDisplay(0);
    }
  }
});

//RESET
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';

  message(' Start Guessing !');
  document.querySelector('.number').textContent = '?';

  scoreDisplay(score);
});
