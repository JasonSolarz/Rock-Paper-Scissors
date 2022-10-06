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
            if (computerSelection === "paper") return "You Win! Scissors beats Paper"
        }
    }

}

function game() {
    let scores = [0,0];
    for (let i = 0; i < 5; i++) {
        let playerSelection = readline.question("Make a choice of Rock, Paper or Scissors. : ");
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);

        if (round.includes("Win")) {
            scores[0]++;
        } else if (round.includes("Lose")) {
            scores[1]++;
        }
        console.log(round);

        console.log(scores);
    }

    if (scores[0] > scores[1]) {
        console.log("You Won The 5 Rounds Of Rock, Paper Scissors!");
    } else if(scores[0] < scores[1]) {
        console.log("You Lost The 5 Rounds of Rock, Paper, Scissors!");
    } else {
        console.log("It's A Tie After 5 Rounds of Rock, Paper, Scissors!");
    }
}

const readline = require("readline-sync");

game();