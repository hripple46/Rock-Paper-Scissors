console.log("Hi");

const computerMove = ["Rock", "Paper", "Scissors"];

let userPrompt = prompt("Rock, Paper, or Scissors?");

//checking if user input is valid entry
if (userPrompt.toUpperCase() == "ROCK") {
  computerMove[Math.floor(Math.random() * computerMove.length)];
  if (
    computerMove[Math.floor(Math.random() * computerMove.length)] == "Paper"
  ) {
    alert("Paper! \nYou Lose!");
  } else {
    alert("Computer Chooses Paper! \nYou Win");
  }
} else if (userPrompt.toUpperCase() == "SCISSORS") {
  computerMove[Math.floor(Math.random() * computerMove.length)];
  if (computerMove[Math.floor(Math.random() * computerMove.length)] == "Rock") {
    alert("Rock! \nYou Lose!");
  } else {
    alert("Computer Chooses Rock! \nYou Win!");
  }
} else if (userPrompt.toUpperCase() == "PAPER") {
  computerMove[Math.floor(Math.random() * computerMove.length)];
  if (
    computerMove[Math.floor(Math.random() * computerMove.length)] == "Scissors"
  ) {
    alert("Scissors! \nYou Lose!");
  } else {
    alert("Computer Chooses Rock! \nYou Win!");
  }
} else {
  prompt("Try Again!");
}

function getComputerChoice() {
  computerMove[Math.floor(Math.random() * computerMove.length)];
}
