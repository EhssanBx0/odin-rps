function getComputerChoice(){
    let randNum = Math.floor(Math.random()*3)
    if (randNum == 0) return "rock";
    if (randNum == 1) return "paper";
    if (randNum == 2) return "scissors";
};

function getHumanChoice(){
    return prompt("Select Rock, Paper or Scissors");
};

let humanScore = 0;
let computerScore = 0;