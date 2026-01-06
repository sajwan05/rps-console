console.log("Javascript is connected successfully!");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    let index = Math.floor(Math.random() * 3)
    console.log(choices[index].toLowerCase());
    return choices[index].toLowerCase();
}

getComputerChoice();

function getHumanChoice() {
    const choice = prompt("Rock Paper scissors shoot....").toLowerCase();

    if (choice === "rock" || choice === "scissors" || choice === "paper"){
        console.log(choice);
        return choice;
    }else {
        console.log("Please enter valid choice");
    }
}

getHumanChoice();
