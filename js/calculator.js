const choices = ["ROCK","PAPER","SCISSORS"];

function getComputerChoice() {
    let comp = choices[Math.floor(Math.random() * 3)];
    return comp;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if(playerSelection == computerSelection)
         return "It's a tie!";

    let a = playerSelection == "ROCK" && computerSelection == "PAPER";
    let b = playerSelection == "PAPER" && computerSelection == "SCISSORS";
    let c = playerSelection == "SCISSORS" && computerSelection == "ROCK"
    if(a || b || c)
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    else
        return `You Win! ${playerSelection} beats ${computerSelection}`;    
  }