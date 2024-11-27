
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
        let computerChoice
        if (randomNumber == 0) {
            computerChoice = "rock"
        } else if (randomNumber == 1) {
            computerChoice = "paper"
        } else {
            computerChoice = "scissors"
        }
        return computerChoice;
    }
    function getHumanChoice() {
        let humanChoice = prompt("rock, paper, or scissors?");
        return humanChoice.toLowerCase();
    }



    function playRound(humanChoice, computerChoice) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Human: ${humanSelection} | Computer: ${computerSelection}`)
        if (humanSelection === "rock" && computerSelection === "paper") {
            console.log("You lose! Paper beats Rock")
            computerScore++;
        } else if (humanSelection === "paper" && computerSelection === "scissors") {
            console.log("You lose! Scissors beats Paper")
            computerScore++;
        } else if (humanSelection === "scissors" && computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors")
            computerScore++;
        } else if (humanSelection === "rock" && computerSelection === "scissors") {
            console.log("You win! Rock beats Scissors")
            humanScore++;
        } else if (humanSelection === "paper" && computerSelection === "rock") {
            console.log("You win! Paper beats Rock")
            humanScore++;
        } else if (humanSelection === "scissors" && computerSelection === "paper") {
            console.log("You win! Scissors beats Paper!")
            humanScore++;
        } else {
            console.log("Draw!")
        }
        console.log(`Current Score - Human: ${humanScore} | Computer: ${computerScore}`);
    }
}

playGame()

