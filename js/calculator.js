const choices = ["ROCK","PAPER","SCISSORS"];
game();

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

function isValid(playerSelection){
    let check = playerSelection.toUpperCase();
        if(check == "ROCK" || check == "PAPER" || check == "SCISSORS")
            return true;
        else
            return false
}
function game(){

    for(i = 0; i < 5; i++){
        let playerSelection = prompt("Please type rock, paper, or scissors");
        if(!isValid(playerSelection)){
            console.log("ERROR, you did not type rock, paper, or scissors");
            break;
        }
        console.log(playRound(playerSelection, getComputerChoice()));
    }  

}