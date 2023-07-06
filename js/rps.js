const choices = ["ROCK","PAPER","SCISSORS"];
let scores = [0,0];

function getSelection(e){
    if((scores[0] > 4) || (scores[1] > 4)) return; 
    let playerSelection = this.textContent;
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if((scores[0] > 4)) document.querySelector(".announcement").textContent = "Player Wins!";
    if((scores[1] > 4)) document.querySelector(".announcement").textContent = "Computer Wins!";
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', getSelection))

function getComputerChoice() {
    let comp = choices[Math.floor(Math.random() * 3)];
    return comp;
}

function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection.toUpperCase();

    if(playerSelection == computerSelection)
         return "It's a tie!";

    let a = playerSelection == "ROCK" && computerSelection == "PAPER";
    let b = playerSelection == "PAPER" && computerSelection == "SCISSORS";
    let c = playerSelection == "SCISSORS" && computerSelection == "ROCK";
    if(a || b || c){
        scores[1] += 1;
        document.querySelector(".computerScore").textContent = scores[1];
        return `You Lose! ${computerSelection} beats ${playerSelection}`;}
    else{
        scores[0] += 1; 
        document.querySelector(".userScore").textContent = scores[0];
        return `You Win! ${playerSelection} beats ${computerSelection}`;}
        
  }

/*function isValid(playerSelection){
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
}*/