const choices = ["rock", "paper", "scissors"];

const scissorBtn = document.getElementById("scissor_btn");
const rockBtn = document.getElementById("rock_btn");
const paperBtn = document.getElementById("paper_btn");

const player = document.getElementById("player");
const computer = document.getElementById("computer");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

scissorBtn.addEventListener("click", (ev) => {
  onBtnClick("scissors");
});

rockBtn.addEventListener("click", (ev) => {
  onBtnClick("rock");
});

paperBtn.addEventListener("click", (ev) => {
  onBtnClick("paper");
});

function onBtnClick(playerChoice) {
  player.children[0].src = "./images/fist.png";
  computer.children[0].src = "./images/fist.png";

  scissorBtn.disabled = true;
  rockBtn.disabled = true;
  paperBtn.disabled = true;

  const computerChoice = getComputerChoice();

  toggleClass(player, "animated");
  toggleClass(computer, "animated2");

  setTimeout(() => {
    toggleClass(player, "animated");
    toggleClass(computer, "animated2");

    player.children[0].src = `./images/${playerChoice}.png`;
    computer.children[0].src = `./images/${computerChoice}.png`;

    const winner = checkWinner(playerChoice, computerChoice);
    console.log(winner);
  }, 950);

  setTimeout(() => {
    if (computerScore != 5 && humanScore != 5) {
      scissorBtn.disabled = false;
      rockBtn.disabled = false;
      paperBtn.disabled = false;
    }
  }, 1000);
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function checkWinner(playerChoice, computerChoice) {
  const txt = document.getElementById("screen__text");
  const body = document.querySelector("body");
  body.classList.remove(
    "default_gradient",
    "winning_gradient",
    "losing_gradient"
  );

  if (playerChoice == computerChoice) {
    txt.innerHTML = "It is a tie 🫤";
    txt.style.color = "yellow";
    body.classList.add("default_gradient");
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    txt.innerHTML = "You won 🥳";
    txt.style.color = "limegreen";
    body.classList.add("winning_gradient");
  } else {
    computerScore++;
    txt.innerHTML = "Computer won 😤";
    txt.style.color = "red";
    body.classList.add("losing_gradient");
  }
  changeScore();
  checkEnd();
}

function changeScore() {
  document.getElementById("player__score").innerHTML = humanScore;
  document.getElementById("computer__score").innerHTML = computerScore;
}

function checkEnd() {
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore == 5) {
      confetti({
        particleCount: 1000,
        angle: 90,
        spread: 180,
        ticks: 300,
        shapes: ["circle", "square", "star"],
      });
      document.getElementById("screen__main").innerHTML = "You won 🥳";
    } else {
      document.getElementById("screen__main").innerHTML = "The computer won 🤖";
    }
    document.getElementById("screen__main").classList.add("screen__main_final");
    rockBtn.disabled = true;
    scissorBtn.disabled = true;
    paperBtn.disabled = true;
  }
}
