function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function playRound(playerSelection) {
        const computerSelection = getComputerChoice();
        console.log(`Human: ${playerSelection} | Computer: ${computerSelection}`);
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            humanScore++;
        } else if (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
        ) {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        } else {
            console.log("It's a draw!");
        }
        console.log(`Score - Human: ${humanScore} | Computer: ${computerScore}`);
    }

    // Add event listeners for the buttons
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
}

playGame();