const choices = ["rock", "paper", "scissors"];

//player selection

const userChoice = prompt ("Rock, Paper, Scissors");
if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
    console.log("You chose " + userChoice); 
    } else {
        console.log("Error! Try again!");
}

//computer play

let computerPlay = choices [Math.floor(Math.random() *3)];
console.log("Computer chose " + computerPlay);

//play round

const winner = playRound (userChoice, computerPlay);
 
function playRound (userChoice, computerPlay) {
    if (userChoice === "rock") {
        if (computerPlay === "rock"){
            console.log("it's a tie!");
        } else if (computerPlay === "paper") {
            console.log("you lose, paper beats rock!")
        } else if (computerPlay === "scissors") {
            console.log("you win, rock beats scissors!");
        }
    } else if (userChoice === "paper") {
        if (computerPlay === "rock"){
            console.log("you win, paper beats rock!");
        } else if (computerPlay === "scissors") {
            console.log("you lose, scissors beat paper!")
        } else if (computerPlay === "paper") {
            console.log("it's a tie!")
        }
    } else if (userChoice === "scissors") {
        if (computerPlay === "scissors") {
            console.log("it's a tie!");
        } else if (computerPlay === "rock") {
            console.log("you win, scissors beat rock!")
        } else if (computerPlay === "paper") {
            console.log("you lose, paper beats scissors!")
        }
        }
    }
