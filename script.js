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

console.log(getComputerChoice())

// first, I need to get human input. 
// then I need to parse that into lowercase letters


function getHumanChoice() {
    let choice = prompt("Choose: 'rock', 'paper' or 'scissors'");
    choice = choice.toLowerCase();
    return choice;
}

console.log(getHumanChoice())

let humanScore = 0;

let computerScore = 0;



