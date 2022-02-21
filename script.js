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

//declare winner

const winner = declareWinner (userChoice, computerPlay);
 
function declareWinner (userChoice, computerPlay) {
    if (userChoice === "rock" && computerPlay === "paper") {
        console.log("You Lose, paper beats rock!");
    } else if (userChoice === "rock" && computerPlay === "scissors") {
        console.log("You Win, rock beats scissors!");
    } else {
        console.log("You Tie");
     }
}