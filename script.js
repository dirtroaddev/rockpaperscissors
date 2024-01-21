function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let decision = ["Rock", "Paper", "Scissors"];
    return decision[rand];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return `You Win!!! Rock beats Scissors`
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return `You Lose!! Paper beats Rock`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return `You Lose!! Rock beats Scissors`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return `You Win!! Scissors beats Paper`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return `You Win!! Paper beats Rock`;
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return `You Lose!! Scissors beats Paper`;
    } else  {
        return `Tie!! ${playerSelection} is the same as ${computerSelection}`;
    }
}

function game() {
    for(let i = 0; i < 5; i += 1) {
        let playerAnswer = prompt("Enter your choice");
        let compAnswer = getComputerChoice();
        alert(playRound(playerAnswer, compAnswer));

    }
}

game();