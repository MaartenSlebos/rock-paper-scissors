// create a function that randomly returns 'rock', 'paper', or 'scissors'.
// create a random integer, 1, 2 or 3. 
// if the number == 1, rock, if == 2, paper, if == 3 scissors.  

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

// create a function that takes a string as user input
// return the user input

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors?");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

// take human input and computer input 
// compare the inputs 
// increment the round winners score 
// log the winner in the console

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock")
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper")
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors")
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors")
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock")
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!")
        humanScore++;
    } else {
        console.log("Draw!")
    }
    console.log(humanScore)
    console.log(computerScore)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

