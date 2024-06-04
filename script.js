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

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(
      `Round ${
        i + 1
      } Human Score is ${humanScore} and computer score is ${computerScore}`
    );
    const computerChoice = getComputerChoice();
    // console.log("Computer choice for testing is " + computerChoice);
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log(
    `The score is: ${humanScore} for the human and ${computerScore} for the computer`
  );
}

playGame();
