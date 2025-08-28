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

function playRound(humanSelection, computerSelection){
    humanSelection = humanSelection.toLowerCase();

    if (humanSelection === 'rock' && computerSelection === 'scissors' ||
        humanSelection === 'paper' && computerSelection === 'rock' ||
        humanSelection === 'scissors' && computerSelection === 'paper'){
            humanScore++
            console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
        }

    if (humanSelection === 'rock' && computerSelection === 'paper' ||
        humanSelection === 'paper' && computerSelection === 'scissors' ||
        humanSelection === 'scissors' && computerSelection === 'rock'){
            computerScore++
            console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);

        }

    console.log(`Draw! You both chose ${humanSelection}`)
}