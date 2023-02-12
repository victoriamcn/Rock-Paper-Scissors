var win = 0;
var lose = 0;
var tie = 0;
var totalGames = 0;


// array of choices for the computer
var choices = ['R', 'P', 'S'];

var playGame = function() {
  var userChoice = window.prompt("Enter R, P, or S:");

  // if user cancels game
  if (!userChoice) {
    return;
  }
  //better comparison in case use enters lower cas letter
  userChoice = userChoice.toUpperCase();

  //Choose from random index in array
  //math.floor, any possible number, including decimals
  //math.random chooses any random whole number
  var index = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[index];

  window.alert("The computer chose " + computerChoice + ".");

  //tie
  if (userChoice === computerChoice) {
    tie++;
    totalGames++;
    window.alert("It's a tie!");
  //player won
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    win++;
    totalGames++;
    window.alert("You win!!");
  //player lost
  } else {
    lose++;
    totalGames++;
    window.alert("You lost!");
  }

    // function adding all games won, lost and tied
    //var totalPlayed = function() {
      //var total = win + lose + tie;
    //}

  window.alert(
    "Stats:\nWins: " + win + "\nLosses: " + lose + "\nTies: " + tie + "\nTotal Games: " + totalGames
  );

  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();