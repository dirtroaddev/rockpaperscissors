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
    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');
    let result = document.querySelector('#result');
    let turns = document.querySelector('#turns');
    let turnsCount = 0;

    

    rock.addEventListener('click', (e) => {
        e.preventDefault();
        let compAnswer = getComputerChoice();
        result.textContent = playRound('rock', compAnswer)
        turnsCount += 1;
        turns.textContent = turnsCount;
        
    });
    paper.addEventListener('click', (e) => {
        e.preventDefault();
        let compAnswer = getComputerChoice();
        result.textContent = playRound('paper', compAnswer)
        turnsCount += 1;
        turns.textContent = turnsCount;
    });
    scissors.addEventListener('click', (e) => {
        e.preventDefault();
        let compAnswer = getComputerChoice();
        result.textContent = playRound('scissors', compAnswer)
        turnsCount += 1;
        turns.textContent = turnsCount;
    });
}

game();