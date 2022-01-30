'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  const tooLow = function (score) {
    document.querySelector(`.message`).textContent = `You lost !`;
    document.querySelector(`.score`).textContent = 0;
  };

  console.log(guess, typeof guess);
  // When there is NO input !
  if (!guess) {
    displayMessage(`No number input !`);
  }
  // When player WINS
  else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `You guessed the number !`;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    document.querySelector(`.number`).textContent = secretNumber;

    // Highscore
    if (highScore < score) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // When the player is wrond
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? `Too high` : `Too low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      tooLow();
    }
  }
});
// again button
document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.message`).textContent = `Start guessing... !`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
