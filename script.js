function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const roundResult = document.getElementById("round-result");
    const scoreDisplay = document.getElementById("score");

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function playRound(playerSelection) {
        const computerSelection = getComputerChoice();
        let resultMessage;

        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            resultMessage = `You win! ${playerSelection} beats ${computerSelection}`;
            humanScore++;
        } else if (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
        ) {
            resultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        } else {
            resultMessage = "It's a draw!";
        }

        // Update the DOM with results
        roundResult.textContent = resultMessage;
        scoreDisplay.textContent = `Score - Human: ${humanScore} | Computer: ${computerScore}`;
    }

    // Add event listeners for the buttons
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
}

playGame();