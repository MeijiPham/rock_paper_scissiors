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
    case "rr":
    case "pp":
    case "ss":
      scenario.draw();
      break;
    case "rs":
    case "pr":
    case "sp":
      scenario.win();
      break;
    case "rp":
    case "ps":
    case "sr":
      scenario.lose();
      break;
  }
  endGame();

};

// Keeping Scores

let scenario = {
  win: function() {
    playerScore++;
    roundCount++;
    console.log("You win!");
    console.log("Player's Score: " + playerScore);
    console.log("Computer's Score: " + computerScore);
  },
  lose: function() {
    computerScore++;
    roundCount++;
    console.log("You lost!")
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

function endGame() {
  if (roundCount === maxRound) {
    if (playerScore > computerScore) {
      alert("Player wins!");
    }
    else {
      alert("Computer wins!");
    }
  }
}







