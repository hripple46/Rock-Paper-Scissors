console.log("Hi");
const computerMove = ["Rock", "Paper", "Scissors"];

//let computerChoice = getComputerChoice();
/*function getComputerChoice() {
  return computerMove[Math.floor(Math.random() * computerMove.length)];
}*/

let player = 0;
let computer = 0;

//adding event listener for each button
let rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => {
  function getComputerChoice() {
    return computerMove[Math.floor(Math.random() * computerMove.length)];
  }
  playRound("Rock", getComputerChoice());
});

let paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => {
  function getComputerChoice() {
    return computerMove[Math.floor(Math.random() * computerMove.length)];
  }
  playRound("Paper", getComputerChoice());
});

let scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", () => {
  function getComputerChoice() {
    return computerMove[Math.floor(Math.random() * computerMove.length)];
  }
  playRound("Scissors", getComputerChoice());
});

//calling playround function with user input
function playRound(playerChoice, computerChoice) {
  if (playerChoice.toUpperCase() == "ROCK") {
    if (computerChoice == "Paper") {
      alert("Computer Chooses Paper! \nYou Lose!");
      computer += 1;
      document.querySelector("#computerResults").innerHTML =
        "Computer: " + computer;
      document.querySelector("#playerResults").innerHTML = "Player: " + player;
    } else if (computerChoice == "Scissors") {
      alert("Computer Chooses Scissors! \nYou Win");
      player += 1;
      document.querySelector("#computerResults").innerHTML =
        "Computer: " + computer;
      document.querySelector("#playerResults").innerHTML = "Player: " + player;
    } else {
      alert("Computer Chooses Rock \nIts a Tie!");
    }
    document.querySelector("#computerResults").innerHTML =
      "Computer: " + computer;
    document.querySelector("#playerResults").innerHTML = "Player: " + player;
  } else if (playerChoice.toUpperCase() == "SCISSORS") {
    computerChoice;
    if (computerChoice == "Rock") {
      alert("Computer Chooses Rock! \nYou Lose!");
      computer += 1;
      document.querySelector("#computerResults").innerHTML =
        "Computer: " + computer;
      document.querySelector("#playerResults").innerHTML = "Player: " + player;
    } else if (computerChoice == "Paper") {
      alert("Computer Chooses Paper \nYou Win!");
      player += 1;
      document.querySelector("#computerResults").innerHTML =
        "Computer: " + computer;
      document.querySelector("#playerResults").innerHTML = "Player: " + player;
    } else {
      alert("Computer Chooses Scissors \nIts a Tie!");
      document.querySelector("#computerResults").innerHTML =
        "Computer: " + computer;
      document.querySelector("#playerResults").innerHTML = "Player: " + player;
    }
  } else if (playerChoice.toUpperCase() == "PAPER") {
    computerChoice;
    if (computerChoice == "Scissors") {
      alert("Computer Chooses Scissors! \nYou Lose!");
      computer += 1;
      document.querySelector("#computerResults").innerHTML =
        "Computer: " + computer;
      document.querySelector("#playerResults").innerHTML = "Player: " + player;
    } else if (computerChoice == "Rock") {
      alert("Computer Chooses Rock! \nYou Win!");
      player += 1;
      document.querySelector("#computerResults").innerHTML =
        "Computer: " + computer;
      document.querySelector("#playerResults").innerHTML = "Player: " + player;
    } else {
      alert("Computer Chooses Paper \nIts a Tie");
      document.querySelector("#computerResults").innerHTML =
        "Computer: " + computer;
      document.querySelector("#playerResults").innerHTML = "Player: " + player;
    }
  } else {
    prompt("Try Again!");
  }
  checkResults();
}

function checkResults() {
  if (player == 5) {
    if (
      alert(
        "You've Slain the Machine! \n\nFinal Result:\n" +
          "Player: " +
          player +
          "    " +
          "Computer: " +
          computer
      )
    ) {
    } else {
      window.location.reload();
    }
  } else if (computer == 5) {
    if (
      alert(
        "The Machine Has Bested You... \n\nFinal Result:\n" +
          "Player: " +
          player +
          "   " +
          "Computer: " +
          computer
      )
    ) {
    } else {
      window.location.reload();
    }
  }
}
