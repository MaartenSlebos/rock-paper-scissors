// the code below generates a random computer choice in the game. 

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  

function getComputerChoice() {
     let outcome = getRandomInt(1,4);
     if (outcome === 1) {
        return "rock";
        return outcome;
     } else if (outcome === 2) {
        return "paper";
     } else {
        return "scissors";
     }
}

// first, I need to get human input. 
// then I need to parse that into lowercase letters


function getHumanChoice() {
    let choice = prompt("Choose: 'rock', 'paper' or 'scissors'");
    choice = choice.toLowerCase();
    return choice;
}

let humanScore = 0;

let computerScore = 0;

// Rock beats scissors, scissors beats paper, and paper beats rock 

function playRound(humanSelection, computerSelection) {
    console.log("Human chose "+humanSelection+" and computer chose "+computerSelection)
    if (humanSelection === computerSelection) {

        console.log("It's a draw.")
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore++
        console.log("Human wins!")
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        humanScore++
        console.log("Human wins!")
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore++
        console.log("Human wins!")
    } else {
        computerScore++
        console.log("Computer wins!")
    } console.log("The score of the human is: " + humanScore.toString() + " and the score of the computer is: " + computerScore.toString());

}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    
}

playGame()


