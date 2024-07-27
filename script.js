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

// the code below 






