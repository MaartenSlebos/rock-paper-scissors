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

function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

