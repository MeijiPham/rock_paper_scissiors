let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
let maxRound = 5;



// Player and Computer inputs

function computerPlay() {
  let options = ["r", "p", "s"];
  let randomOption = (Math.floor(Math.random() * options.length));
  return options[randomOption];
  };

let playerInput = {
  chooseRock: function() {
    compareInputs("r");
  },
  choosePaper: function() {
    compareInputs("p");
  },
  chooseScissors: function() {
    compareInputs("s");
  }
};

// Compare the inputs from player and computer

function compareInputs(playerInput) {
  let computerChoice = computerPlay();

  switch (playerInput + computerChoice) {
    // Draw
    case "rr":
    case "pp":
    case "ss":
      scenario.draw();
      break;
    // Player wins
    case "rs":
      console.log("Rock beats scissors! You win!");
      scenario.win();
      break;
    case "pr":
      console.log("Paper beats rock! You win!");
      scenario.win();
      break;
    case "sp":
      console.log("Scissors beats paper! You win!");
      scenario.win();
      break;
    // Computer wins
    case "rp":
      console.log("Rock does not beat paper! You lose!");;
      scenario.lose();
      break;
    case "ps":
      console.log("Paper does not beat scissors! You lose!");
      scenario.lose();
      break;
    case "sr":
      console.log("Scissors does not beat rock! You lose!");
      scenario.lose();
      break;
  }
  endGameScenario.endGameScenario1();
  endGameScenario.endGameScenario2();
  endGameScenario.endGameScenario3();

};

// Keeping Scores

let scenario = {
  win: function() {
    playerScore++;
    roundCount++;
    console.log("Player's Score: " + playerScore);
    console.log("Computer's Score: " + computerScore);
  },
  lose: function() {
    computerScore++;
    roundCount++;
    console.log("Player's Score: " + playerScore);
    console.log("Computer's Score: " + computerScore);
  },
  draw: function() {
    console.log("Draw!")
    console.log("Player's Score: " + playerScore);
    console.log("Computer's Score: " + computerScore);
  }
  
};

// End game

let endGameScenario = {
endGameScenario1: function() {
  if (roundCount === maxRound) {
    if (playerScore > computerScore) {
      alert("Player wins!");
      resetGame();
    }
    else if (playerScore < computerScore) {
      alert("Computer wins!");
      resetGame();
    }
  }
},
endGameScenario2: function() {
  if (roundCount === 4) {
    if (playerScore === 4) {
      alert("Player wins!");
      resetGame();
    }
    else if (computerScore === 4) {
      alert("Computer wins!");
      resetGame();
    }
  }
},
endGameScenario3: function() {
  if (roundCount === 3 || roundCount === 4) {
    if (playerScore === 3) {
      alert("Player wins!");
      resetGame();
    }
    else if (computerScore === 3) {
      alert("Computer wins!");
      resetGame();
    }  
  }
}
}

// Reset the game

function resetGame() {
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
}










