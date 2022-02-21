const choices = ["Rock", "Paper", "Scissors"];

//player selection //

const userChoice = prompt ("Rock, Paper, Scissors");
if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
    console.log("You chose " + userChoice); 
    } else {
        console.log("Error! Try again!");
}

//computer play//

let computerPlay = choices [Math.floor(Math.random() *3)];
console.log("Computer chose " + computerPlay);

//game//