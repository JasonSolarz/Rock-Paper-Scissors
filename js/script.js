const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const playerChoice = document.getElementById("playerChoice");
const computerOption = document.getElementById("computerChoice");
const icon = document.getElementById("icon");

let scores = [0, 0];

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    playerChoice.innerText = "ROCK";
});

btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    playerChoice.innerText = "PAPER";
});

btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    playerChoice.innerText = "SCISSORS";
});

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    computerOption.innerText = computerChoice.toUpperCase();
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        result.innerText = `It's a Tie! Go again...`;
        icon.innerText = "=";
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                scores[1]++;
                result.innerText = "You Lose! Paper beats Rock!";
                icon.innerText = "<";
            }
            if (computerSelection === "scissors") {
                scores[0]++;
                result.innerText = "You Win! Rock beats Scissors";
                icon.innerText = ">";
            } 
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                scores[0]++;
                result.innerText = "You Win! Paper beats Rock!";
                icon.innerText = ">";
            }
            if (computerSelection === "scissors") {
                scores[1]++;
                result.innerText = "You Lose! Scissors beats Paper";
                icon.innerText = "<";
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                scores[1]++;
                result.innerText = "You Lose! Rock beats Scissors";
                icon.innerText = "<";
            }
            if (computerSelection === "paper") {
                scores[0]++;
                result.innerText = "You Win! Scissors beats Paper"
                icon.innerText = ">";
            }
        }
    }

    updateScore();

}

function updateScoreText() {
    playerScore.innerText = `Player Score: ${scores[0]}`;
    computerScore.innerText = `Computer Score: ${scores[1]}`;
}

function updateScore() {
    updateScoreText();

    setTimeout(function() {
        if (scores[0] === 5) {
            alert("You have won the game!");
            resetGame()
    
        } else if (scores[1] === 5) {
            alert("You have lost the game!");
            resetGame()
        }
    }, 300);
}

function resetGame() {
    scores = [0, 0];
    result.innerText = "";
    icon.innerText = "";
    playerChoice.innerText = "Player Choice";
    computerOption.innerText = "Computer Choice";
    updateScoreText();
}