console.log("Hi");
const computerMove = ["Rock", "Paper", "Scissors"];

const userPrompt = prompt("Rock, Paper, or Scissors?");

function getComputerChoice() {
  return computerMove[Math.floor(Math.random() * computerMove.length)];
}
let computerChoice = getComputerChoice();

//checking if user input is valid entry

function playRound(playerChoice, computerChoice) {
  if (userPrompt.toUpperCase() == "ROCK") {
    computerChoice;
    if (computerChoice == "Paper") {
      alert("Paper! \nYou Lose!");
    } else {
      alert("Computer Chooses Paper! \nYou Win");
    }
  } else if (playerChoice.toUpperCase() == "SCISSORS") {
    computerChoice;
    if (computerChoice == "Rock") {
      alert("Rock! \nYou Lose!");
    } else {
      alert("Computer Chooses Rock! \nYou Win!");
    }
  } else if (playerChoice.toUpperCase() == "PAPER") {
    computerChoice;
    if (computerChoice == "Scissors") {
      alert("Scissors! \nYou Lose!");
    } else {
      alert("Computer Chooses Rock! \nYou Win!");
    }
  } else {
    prompt("Try Again!");
  }
}
playRound(userPrompt, computerChoice);
