var win = 0;
var lose = 0;
var tie = 0;
var gameSum = 0;

// array of choices for the computer
var choices = ['R', 'P', 'S'];

var playGame = function() {
  varUserChoice = window.prompt("Enter R, P, or S:");

  // function adding all games won, lost and tied
  function gameSum(a+b+c) {
  var gameSum= wins + losses + ties;
}

  // if user cancels game
  if (!userChoice) {
    return;
  }

  //better comparison in case use enters lower cas letter
  userChoice = userChoice.toUpperCase();

  //Choose from random index in array
  //math.floor, rounding up/making a whole number.... math.random chooses any random number
  var index = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[index];

  window.alert("The computer chose " + computerChoice + ".");

  //tie
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");
  //player won
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!!");
  //player lost
  } else {
    losses++;
    window.alert("You lost!");
  }

  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();