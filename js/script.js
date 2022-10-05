// function getComputerChoice
// - pass in: nothing
// - create an array variable with 3 strings of "Rock", "Paper", "Scissors"
// - create a variable called computerChoice
// - Use Math.Random to select one of the 3 strings in the array and store it in computerChoice
// - return computerChoice

// function playRound
// - pass in: playerSelection & computerSelection
// - format playerSelection, lowercase the string and make the first letter capital
// - Compare both arguments based this criteria:
// if playerSelection === compSelection return "Tie"
// else {
// 	if playerSelection === "rock"
// 		if compSelection == "paper" return "Lose"
// 		if compSelection == "scissors" return "Win"
// 	else if playerSelection === "paper"
// 		if compSelection == "rock" return "win"
// 		if compSelection == "scissors" return "Lose"
// 	else
// 		if compSelection == "rock" return "Lose"
// 		if compSelection == "paper" return "Win"
// - Return a string of outcome - "Win", "Lose" or "Tie" depending on comparison results above.

// function game
// - pass in: nothing
// - create a 2 element array to keep track of each score call scores, intial value will be 0, 0
// - use for loop to play 5 rounds of playRound()
//   - If "lose", increase computer score and message user "You Lose!"
//   - If "win", increase player score and message user "You Win!"
//   - If "tie", no increase and message user "Its a tie!"
//   - Message the user the round number using the loop iterator

// Message the user, "Welcome To Rock Paper Scissors"
// Message the user, "Rules of Rock Paper Scissors"

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie";
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") return "You Lose! Paper beats Rock!";
            if (computerSelection === "scissors") return "You Win! Rock beats Scissors";
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") return "You Win! Paper beats Rock!";
            if (computerSelection === "scissors") return "You Lose! Scissors beats Paper";
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") return "You Lose! Rock beats Scissors";
            if (computerSelection === "paper") return "You Win! Paper beats Rock"
        }
    }

}

function game() {
    let scores = [0,0];
    for (let i = 0; i < 10; i++) {
        let playerSelection = readline.question("Make a choice of Rock, Paper or Scissors. : ");
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);

        if (round.includes("Win")) {
            scores[0]++;
        } else {
            scores[1]++;
        }
        console.log(round);

        console.log(scores);
    }
}

const readline = require("readline-sync");

game();