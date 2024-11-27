function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const roundResult = document.getElementById("round-result");
    const scoreDisplay = document.getElementById("score");
    const winnerDisplay = document.getElementById("winner");

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function checkWinner() {
        if (humanScore === 5) {
            winnerDisplay.textContent = "Congratulations! You win the game!";
            disableButtons();
        } else if (computerScore === 5) {
            winnerDisplay.textContent = "Oh no! The computer wins the game.";
            disableButtons();
        }
    }

    function disableButtons() {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }

    function playRound(playerSelection) {
        const computerSelection = getComputerChoice();
        let resultMessage;

        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            resultMessage = `You win this round! ${playerSelection} beats ${computerSelection}`;
            humanScore++;
        } else if (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
        ) {
            resultMessage = `You lose this round! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        } else {
            resultMessage = "This round is a draw!";
        }

        // Update the DOM with results
        roundResult.textContent = resultMessage;
        scoreDisplay.textContent = `Score - Human: ${humanScore} | Computer: ${computerScore}`;

        // Check for winner
        checkWinner();
    }

    // Add event listeners for the buttons
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
}

playGame();