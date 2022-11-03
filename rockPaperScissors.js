console.log("Hi");
const computerMove = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return computerMove[Math.floor(Math.random() * computerMove.length)];
}

let player = 0;
let computer = 0;

for (let i = 0; i < 5; i++) {
  let userPrompt = prompt("Rock, Paper, or Scissors?");
  let computerChoice = getComputerChoice();
  console.log(player);
  console.log(computer);
  playRound(userPrompt, computerChoice);
}
alert("Player Score: " + `${player}\n` + "Computer Score: " + `${computer}`);

function playRound(playerChoice, computerChoice) {
  if (playerChoice.toUpperCase() == "ROCK") {
    if (computerChoice == "Paper") {
      alert("Computer Chooses Paper! \nYou Lose!");
      computer += 1;
    } else if (computerChoice == "Scissors") {
      alert("Computer Chooses Scissors! \nYou Win");
      player += 1;
    } else {
      alert("Computer Chooses Rock \nIts a Tie!");
    }
  } else if (playerChoice.toUpperCase() == "SCISSORS") {
    computerChoice;
    if (computerChoice == "Rock") {
      alert("Computer Chooses Rock! \nYou Lose!");
      computer += 1;
    } else if (computerChoice == "Paper") {
      alert("Computer Chooses Paper \nYou Win!");
      player += 1;
    } else {
      alert("Computer Chooses Scissors \nIts a Tie!");
    }
  } else if (playerChoice.toUpperCase() == "PAPER") {
    computerChoice;
    if (computerChoice == "Scissors") {
      alert("Computer Chooses Scissors! \nYou Lose!");
      computer += 1;
    } else if (computerChoice == "Rock") {
      alert("Computer Chooses Rock! \nYou Win!");
      player += 1;
    } else {
      alert("Computer Chooses Paper \nIts a Tie");
    }
  } else {
    prompt("Try Again!");
  }
}
