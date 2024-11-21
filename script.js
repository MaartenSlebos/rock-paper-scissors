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

    return computerChoice
}

