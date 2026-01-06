console.log("Javascript is connected successfully!");

let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    let index = Math.floor(Math.random() * 3);
    return choices[index].toLowerCase();
}


function getHumanChoice() {
    const choice = prompt(`This game will play for 5 rounds 
        so keep submitting your choices rock paper or scissors 5 times 
        and open console to see the result because it is console application
        Rock paper scissors shoot.....`).toLowerCase();

    if (choice === "rock" || choice === "scissors" || choice === "paper"){
        return choice;
    }else {
        console.log("Please enter valid choice");
    }
}



function playRound(userChoice, botChoice, i) {
    if ((userChoice === "rock" && botChoice === "scissors") || (userChoice === "scissors" && botChoice === "rock") || (userChoice === "paper" && botChoice === "rock") ){
        humanScore++;
        console.log(`You won the round ${i}
            human chose: ${userChoice} and computer chose: ${botChoice}
            Score after round ${i} : user: ${humanScore} --- Bot: ${computerScore}`);
    }else if(userChoice === botChoice) {
        humanScore++;
        computerScore++;
        console.log(`Round ${i} Tied!
            human chose: ${userChoice} and computer chose: ${botChoice}
            Score after round ${i} : user: ${humanScore} --- Bot: ${computerScore}`);
    }else {
        computerScore++;
        console.log(`You lost the round ${i}
            human chose: ${userChoice} and computer chose: ${botChoice}
            Score after round ${i} : user: ${humanScore} --- Bot: ${computerScore}`);
    }
}

function playGame() {
    

    for (let i = 1; i <= 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let res = playRound(humanChoice, computerChoice, i);
    }

}

function getWinner() {
    playGame();

    if (humanScore > computerScore) {
        console.log(`You won the game 
            Final Score: User: ${humanScore} ---- ${computerScore}`);
    }else if(humanScore === computerScore) {
        console.log(`Game got Tied!
            Final Score: User: ${humanScore} ---- ${computerScore}`);
    }else {
        console.log(`You lost the game!
            Final Score: User: ${humanScore} ---- ${computerScore}`);
    }
}

getWinner();
