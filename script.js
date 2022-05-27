
let userScore = 0;
let computerScore = 0; 


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
        userScore++;
        return "You win! Rock crushes scissors"
    } else if (userInput === "paper" && computerGuess === "rock") {
        userScore++;
        return "You win! Paper covers rock"
    } else if (userInput === "scissors" && computerGuess === "paper") {
        userScore++;
        return "You win! Scissors cut paper"
    } else if (userInput === "rock" && computerGuess === "paper"){
        computerScore++;
        return "You lose! Paper covers rock"
    } else if (userInput === "paper" && computerGuess === "scissors") {
        computerScore++;
        return "You lose! Scissors cut paper"
    } else if (userInput === "scissors" && computerGuess === "rock") {
        computerScore++;
        return "You lose! Rock crushes scissors"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound()) 
    } 
    console.log("Your score is: " + userScore)
    console.log("The computer score is: " + computerScore)
    if (userScore === computerScore) {
        console.log("The game is a tie!") 
    } else if (userScore > computerScore) {
        console.log("You won the 5 round game!")
    } else {
        console.log("You lost the 5 round game!")
    }
}



game()