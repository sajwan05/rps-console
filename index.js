console.log("Javascript is connected successfully!");

let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    let index = Math.floor(Math.random() * 3)
    console.log(choices[index].toLowerCase());
    return choices[index].toLowerCase();
}


function getHumanChoice() {
    // const choice = prompt("Rock Paper scissors shoot....").toLowerCase();

    if (choice === "rock" || choice === "scissors" || choice === "paper"){
        console.log(choice);
        return choice;
    }else {
        console.log("Please enter valid choice");
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

let res = playRound(humanChoice, computerChoice);

function playRound(userChoice, botChoice) {
    if ((userChoice === "rock" && botChoice === "scissors") || (userChoice === "scissors" && botChoice === "rock") || (userChoice === "paper" && botChoice === "rock") ){
        humanScore++;
        console.log("You Won this round");
    }else if(userChoice === botChoice) {
        humanScore++;
        computerScore++;
        console.log("This round is Tied!")
    }else {
        computerScore++;
        console.log("You lost");
    }
}

function playGame() {
    
}
