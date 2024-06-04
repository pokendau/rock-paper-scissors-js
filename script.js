const choices = ["rock", "paper", "scissors"];

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
  switch (formated) {
    case "rock":
      checkRock(computerChoice);
      break;
    case "paper":
      checkPaper(computerChoice);
      break;
    case "scissors":
      checkScissors(computerChoice);
      break;
  }
}

function checkRock(computerChoice) {
  if (computerChoice == "rock") {
    console.log("It is a draw");
  } else if (computerChoice == "paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  } else {
    console.log("You win! Rock beats Scissors.");
    humanScore++;
  }
}

function checkPaper(computerChoice) {
  if (computerChoice == "scissors") {
    console.log("You lose! Scissors beat Paper.");
    computerScore++;
  } else if (computerChoice == "rock") {
    console.log("You win! Paper beats Rock.");
    humanScore++;
  } else {
    console.log("It is a draw");
  }
}

function checkScissors(computerChoice) {
  if (computerChoice == "paper") {
    console.log("You win! Scissors beat Paper.");
    humanScore++;
  } else if (computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors.");
    computerScore++;
  } else {
    console.log("It is a draw");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(
      `Round ${
        i + 1
      } Human Score is ${humanScore} and computer score is ${computerScore}`
    );
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log(
    `The score is: ${humanScore} for the human and ${computerScore} for the computer`
  );
}

playGame();
