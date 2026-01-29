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
const btn = document.querySelector(".btn");

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

    humanChoice.setAttribute("style", "font-weight: bold; font-size: 1.23rem;")
    computerChoice.setAttribute("style", "font-weight: bold; font-size: 1.23rem;")
    roundResult.setAttribute("style", "text-align: center; line-height: 100px; font-weight:bolder;");
function playRound(userChoice, botChoice) {
    if ((userChoice === "rock" && botChoice === "scissors") || 
    (userChoice === "scissors" && botChoice === "paper") || 
    (userChoice === "paper" && botChoice === "rock") ){
        humanScore++;
        roundResult.textContent =`You won the round`;
        humanChoice.textContent = ` ${userChoice}` 
        computerChoice.textContent = `${botChoice}`
        currentScore.textContent =`Current-Score user: ${humanScore} --- Bot: ${computerScore}`;
    }else if(userChoice === botChoice) {
        humanScore++;
        computerScore++;
        roundResult.textContent =`This round got Tied`;
        humanChoice.textContent = ` ${userChoice}` 
        computerChoice.textContent = `${botChoice}`
        currentScore.textContent =`Current-Score: user: ${humanScore} --- Bot: ${computerScore}`;
    }else {
        computerScore++;
        roundResult.textContent =`This round got Tied`;
        humanChoice.textContent = ` ${userChoice}` 
        computerChoice.textContent = `${botChoice}`
        currentScore.textContent =`Current-Score: user: ${humanScore} --- Bot: ${computerScore}`;
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
});

btn.addEventListener("click", (e) => {
    humanScore = 0;
    computerScore = 0;
    roundResult.textContent ="";
    gameResult.textContent = "";
    currentScore.textContent = "";
})


function getWinner() {
    gameResult.setAttribute("style", "background: hotpink; font-weight: bold; font-size: 1.5rem; padding: 1rem;")
    if (humanScore > computerScore) {
        gameResult.textContent = `You won the game 
            Final Score: User: ${humanScore} ---- Bot: ${computerScore}`;
    }else if(humanScore === computerScore) {
        gameResult.textContent =`Game got Tied!
            Final Score: User: ${humanScore} ---- Bot: ${computerScore}`;
    }else {
        gameResult.textContent = `You lost the game!
            Final Score: User: ${humanScore} ---- Bot: ${computerScore}`;
    }

    currentScore.textContent = "";
}

// getWinner();
