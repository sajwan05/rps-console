console.log("Javascript is connected successfully!");

let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const length = choices.length;
    let index = Math.floor(Math.random() * length);
    return choices[index].toLowerCase();
}
// for result showing up 
const humanChoice = document.querySelector(".human");
const computerChoice = document.querySelector(".computer");
const roundResult = document.querySelector(".whoWon");
const gameResult = document.querySelector(".finalWon");
const currentScore = document.querySelector(".score");
const buttons = document.querySelectorAll("button");

function getHumanChoice() {
    const choice = prompt(`This game will play for 5 rounds 
        so keep submitting your choices rock paper or scissors 5 times 
        and open console to see the result because it is console application
        Rock paper scissors shoot.....`, "rock").toLowerCase().trim();

    if (choice === "rock" || choice === "scissors" || choice === "paper"){
        return choice;
    }else {
        console.log("Please enter valid choice");
    }
}



function playRound(userChoice, botChoice) {
    if ((userChoice === "rock" && botChoice === "scissors") || 
    (userChoice === "scissors" && botChoice === "paper") || 
    (userChoice === "paper" && botChoice === "rock") ){
        humanScore++;
        roundResult.textContent =`You won the round`;
        humanChoice.textContent = ` ${userChoice}` 
        computerChoice.textContent = `${botChoice}`
        currentScore.textContent =`user: ${humanScore} --- Bot: ${computerScore}`;
    }else if(userChoice === botChoice) {
        humanScore++;
        computerScore++;
        roundResult.textContent =`This round got Tied`;
        humanChoice.textContent = ` ${userChoice}` 
        computerChoice.textContent = `${botChoice}`
        currentScore.textContent =`user: ${humanScore} --- Bot: ${computerScore}`;
    }else {
        computerScore++;
        roundResult.textContent =`This round got Tied`;
        humanChoice.textContent = ` ${userChoice}` 
        computerChoice.textContent = `${botChoice}`
        currentScore.textContent =`user: ${humanScore} --- Bot: ${computerScore}`;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const humanChoice = e.target.id;
        
        const computerChoice = getComputerChoice();

        

        if(humanScore < 5 && computerScore < 5){
            playRound(humanChoice, computerChoice);
        }

        if(humanScore === 5 || computerScore === 5) {
            getWinner();
        }
    })
})


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

// getWinner();
