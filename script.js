function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  

function getComputerChoice() {
     let outcome = getRandomInt(1,4);
     if (outcome === 1) {
        console.log("The computer has Rock")
     } else if (outcome === 2) {
        console.log("The computer has Paper")
     } else {
        console.log("The computer has Scissors")
     }
}

getComputerChoice()

