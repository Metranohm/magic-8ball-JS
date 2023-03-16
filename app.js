const ballAnswers = [
  "Sure thing brah!",
  "No doubt!",
  "Fo shizzle!",
  "Totally gnarly!",
  "As if!",
  "Cowabunga!",
  "Radical!",
  "Don't be a kook, of course!",
  "Hang ten and ask again!",
  "Wipeout! Try again."
];

const ball = document.querySelector('.ball');
const askButton = document.querySelector('#ask-button');

function shakeBall() {
  ball.classList.add('ball-shake');
  setTimeout(getAnswer, 500);
}

function getAnswer() {
  const randomIndex = Math.floor(Math.random() * ballAnswers.length);
  ball.textContent = ballAnswers[randomIndex];
  ball.classList.remove('ball-shake');
}

askButton.addEventListener('click', shakeBall);