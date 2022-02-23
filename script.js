//universal variables

const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

//for loop 

for (let i = 0; i < 5; i++){

//player selection

let userChoice = prompt ("Rock, Paper, Scissors").toLowerCase();
if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
    console.log("You chose " + userChoice); 
    } else {
        console.log("Error! Try again!");
}

//computer play

let computerPlay = choices [Math.floor(Math.random() *3)];
console.log("Computer chose " + computerPlay);

//play round

const round = playRound (userChoice, computerPlay);

function playRound () {
    if (userChoice === "rock") {
        if (computerPlay === "rock"){
            console.log("it's a tie!");
            console.log ("User Score is " + userScore + " & " + "Computer Score is " + computerScore);
        } else if (computerPlay === "paper") {
            computerScore++;
            console.log("you lose, paper beats rock!");
            console.log ("User Score is " + userScore + " & " + "Computer Score is " + computerScore);
        } else if (computerPlay === "scissors") {
            userScore++;
            console.log("you win, rock beats scissors!");
            console.log ("User Score is " + userScore + " & " + "Computer Score is " + computerScore);
        }
    } else if (userChoice === "paper") {
        if (computerPlay === "rock"){
            userScore++;
            console.log("you win, paper beats rock!");
            console.log ("User Score is " + userScore + " & " + "Computer Score is " + computerScore);
        } else if (computerPlay === "scissors") {
            computerScore++;
            console.log("you lose, scissors beat paper!");
            console.log ("User Score is " + userScore + " & " + "Computer Score is " + computerScore);
        } else if (computerPlay === "paper") {
            console.log("it's a tie!");
            console.log ("User Score is " + userScore + " & " + "Computer Score is " + computerScore);
        }
    } else if (userChoice === "scissors") {
        if (computerPlay === "scissors") {
            console.log("it's a tie!");
            console.log ("User Score is " + userScore + " & " + "Computer Score is " + computerScore);
        } else if (computerPlay === "rock") {
            userScore++;
            console.log("you win, scissors beat rock!");
            console.log ("User Score is " + userScore + " & " + "Computer Score is " + computerScore);
            userScore++;
        } else if (computerPlay === "paper") {
            computerScore++;
            console.log("you lose, paper beats scissors!");
            console.log ("User Score is " + userScore + " & " + "Computer Score is " + computerScore);
            
        }
        }
        }
    }