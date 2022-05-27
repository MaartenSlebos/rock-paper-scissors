
function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        return "rock"
    } else if (randomNumber === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound() {
    let userInput = window.prompt("Guess: Rock, Paper or Scissors?").toLowerCase()
    let computerGuess = computerPlay();
    if (computerGuess === userInput) {
        return "It's a tie!"
    } else if (userInput === "rock" && computerGuess === "scissors") {
        return "You win! Rock crushes scissors"
    } else if (userInput === "paper" && computerGuess === "rock") {
        return "You win! Paper covers rock"
    } else if (userInput === "scissors" && computerGuess === "paper") {
        return "You win! Scissors cut paper"
    } else if (userInput === "rock" && computerGuess === "paper"){
        return "You lose! Paper covers rock"
    } else if (userInput === "paper" && computerGuess === "scissors") {
        return "You lose! Scissors cut paper"
    } else if (userInput === "scissors" && computerGuess === "rock") {
        return "You lose! Rock crushes scissors"
    }
}

console.log(playRound())