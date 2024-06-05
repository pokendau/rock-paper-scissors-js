const choices = ["rock", "paper", "scissors"];

const scissorBtn = document.getElementById("scissor_btn");
const rockBtn = document.getElementById("rock_btn");
const paperBtn = document.getElementById("paper_btn");

const player = document.getElementById("player");
const computer = document.getElementById("computer");

console.log(`${player}, ${computer}`);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  return prompt("give a value");
}

function playRound(humanChoice, computerChoice) {
  const formated = humanChoice.toLowerCase();
  if (formated == computerChoice) {
    console.log("It is a tie");
  } else if (
    (formated == "rock" && computerChoice == "scissors") ||
    (formated == "paper" && computerChoice == "rock") ||
    (formated == "scissors" && computerChoice == "paper")
  ) {
    console.log(
      `You win! ${formated.charAt(0).toUpperCase() + formated.slice(1)} beats ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }`
    );
    humanScore++;
  } else {
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${formated.charAt(0).toUpperCase() + formated.slice(1)}`
    );
    computerScore++;
  }
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
    scissorBtn.disabled = false;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
  }, 1000);
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function checkWinner(playerChoice, computerChoice) {
  const txt = document.getElementById("screen__text");
  if (playerChoice == computerChoice) {
    txt.innerHTML = "It is a tie 🫤";
    txt.style.color = "yellow";
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    txt.innerHTML = "You won 🥳";
    txt.style.color = "limegreen";
  } else {
    computerScore++;
    txt.innerHTML = "Computer won 😤";
    txt.style.color = "red";
  }
  changeScore();
}

function changeScore() {
  document.getElementById("player__score").innerHTML = humanScore;
  document.getElementById("computer__score").innerHTML = computerScore;
}
