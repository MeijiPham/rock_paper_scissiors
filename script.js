// Getting attributes from html elements
let winBoardDisplay = document.querySelector("#gameboard-display");
let loseBoardDisplay = document.querySelector("#gameboard-display");
let playerScoreDisplay = document.querySelector("#player-score");
let computerScoreDisplay = document.querySelector("#computer-score");
let drawBoardDisplay = document.querySelector("#gameboard-display");
let playerScoreNumber = document.createElement("p");
let computerScoreNumber = document.createElement("p");
let resetBoard = document.querySelector("#gameboard-display");

// Starting score
let playerScore = 0;
let computerScore = 0;
let maxScore = 5;


// Player and Computer inputs

function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  let randomOption = (Math.floor(Math.random() * options.length));
  return options[randomOption];
  };

let rockOption = document.querySelector("#rock");
rockOption.addEventListener("click", function() {
  compareInputs("Rock");
});

let paperOption = document.querySelector("#paper");
paperOption.addEventListener("click", function() {
  compareInputs("Paper");
});

let scissorsOption = document.querySelector("#scissors");
scissorsOption.addEventListener("click", function() {
  compareInputs("Scissors");
});


// Compare the inputs from player and computer

function compareInputs(playerInput) {
  let computerInput = computerPlay();

  switch (playerInput + computerInput) {
    // Draw
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      scenario.draw();
      break;
    // Player wins
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      winBoardDisplay.textContent = `${playerInput} beats ${computerInput.toLowerCase()}. You win!`;
      scenario.win();
      break;
    // Computer wins
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      loseBoardDisplay.textContent = `${playerInput} does not beat ${computerInput.toLowerCase()}. You lose!`;
      scenario.lose();
      break;
  }

    
  

};

// Keeping scores and stopping scores from changing if game ended

let scenario = {
  win: function() {
    if (playerScore < maxScore && computerScore != maxScore) {
      playerScore++;
      playerScoreDisplay.textContent = "";

      playerScoreNumber.textContent = "Player's Score: " + playerScore;
      playerScoreDisplay.appendChild(playerScoreNumber);
      endGame();
    }
    else {
      playerScoreNumber.textContent = "Player's Score: " + playerScore;
      winBoardDisplay.textContent = "";
      alert("Hit the reset button to play again!");
    }
  },
  lose: function() {
    if (computerScore < maxScore && playerScore != maxScore) {
      computerScore++;
      computerScoreDisplay.textContent = "";

      computerScoreNumber.textContent = "Computer's Score: " + computerScore;
      computerScoreDisplay.appendChild(computerScoreNumber);
      endGame();
    }
    else {
      computerScoreNumber.textContent = "Computer's Score: " + computerScore;
      loseBoardDisplay.textContent = "";
      alert("Hit the reset button to play again!");
    }
  },
  draw: function() {
    if (computerScore < maxScore && playerScore < maxScore) {
      drawBoardDisplay.textContent = "Draw!";
    }
    else {
      drawBoardDisplay.textContent = "";
      alert("Hit the reset button to play again!");
    }    
   }  
};

// End game

function endGame() {
  if (playerScore === maxScore) {
    alert("Player wins!")
  }
  else if (computerScore === maxScore) {
    alert("Computer wins!")
  }
};


// Reset the game

let resetting = document.querySelector("#reset-game");
resetting.addEventListener("click", function() {
  resetGame();
});

function resetGame() {
  playerScoreNumber.textContent = "Player's Score: 0";
  computerScoreNumber.textContent = "Computer's Score: 0";
  resetBoard.textContent = "";
  playerScore = 0;
  computerScore = 0;
};














