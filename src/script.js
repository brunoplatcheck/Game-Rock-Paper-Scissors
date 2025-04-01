let wins = 0;
let draws = 0;
let losses = 0;
let isFirstGame = true; // Variable to check if it's the first game

// Choices array for display
const choices = ["Rock", "Paper", "Scissors"];

function play() {
  if (isFirstGame) {
    const age = prompt("What is your age?");
    
    if (age < 18) {
      alert("You cannot play the game");
      return;
    }

    isFirstGame = false; // Set to false after the first game
  }

  const playersChoice = parseInt(prompt("Rock-1, Paper-2, Scissors-3"));
  const machineChoice = Math.floor(Math.random() * 3) + 1;

  // Display which choices were made
  alert(`Player chose ${choices[playersChoice - 1]}, Machine chose ${choices[machineChoice - 1]}`);

  if (playersChoice == machineChoice) {
    draws++;
    alert("It's a Draw");
  } else if (
    (playersChoice == 1 && machineChoice == 3) || // Rock beats Scissors
    (playersChoice == 2 && machineChoice == 1) || // Paper beats Rock
    (playersChoice == 3 && machineChoice == 2)    // Scissors beats Paper
  ) {
    wins++;
    alert("You Win!");
  } else {
    losses++;
    alert("You Lose!");
  }

  // Update scoreboard
  document.getElementById('wins').textContent = wins;
  document.getElementById('draws').textContent = draws;
  document.getElementById('losses').textContent = losses;

  // Show "Play Again" button
  document.getElementById('playAgainBtn').style.display = 'block';
}

function playAgain() {
  // Reset the game for the next round
  document.getElementById('playAgainBtn').style.display = 'none'; // Hide "Play Again" button
}
