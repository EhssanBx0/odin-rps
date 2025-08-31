function getComputerChoice(){
    let randNum = Math.floor(Math.random()*3)
    if (randNum == 0) return "rock";
    if (randNum == 1) return "paper";
    if (randNum == 2) return "scissors";
};

function getHumanChoice(){
    return prompt("Select Rock, Paper or Scissors");
};

let roundCounter = 0;
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
};

function playGame(){
    while(humanScore < 3 && computerScore < 3){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore === 3) console.log(`Player Wins Game! ${humanScore} rounds to ${computerScore}`);
    if (computerScore === 3) console.log(`Computer Wins Game! ${computerScore} rounds to ${humanScore}`);
    humanScore = 0;
    computerScore = 0;
}

const playerSelectionBtns = document.querySelector(".playerSelectionBtns");
const messageDisplay = document.querySelector(".messageDisplay");

function playSelection(event){
    if (!event.target.matches(".btn")) return;
    
    if (roundCounter === 0) messageDisplay.textContent = "";

    let humanSelection = event.target.textContent.toLowerCase();
    let computerSelection = getComputerChoice();

    if (humanSelection === 'rock' && computerSelection === 'scissors' ||
        humanSelection === 'paper' && computerSelection === 'rock' ||
        humanSelection === 'scissors' && computerSelection === 'paper'){
            humanScore++
            messageDisplay.textContent += `\bYou Win! ${humanSelection} beats ${computerSelection}\n`;
        }

    if (humanSelection === 'rock' && computerSelection === 'paper' ||
        humanSelection === 'paper' && computerSelection === 'scissors' ||
        humanSelection === 'scissors' && computerSelection === 'rock'){
            computerScore++
            messageDisplay.textContent += `\bYou Lose! ${computerSelection} beats ${humanSelection}\n`;
        }

    if (humanSelection === computerSelection) {
        messageDisplay.textContent += `\bDraw! You both chose ${humanSelection}\n`
    }

    roundCounter++

    if (humanScore === 3) {
        messageDisplay.textContent += `\bPlayer Wins Game! ${humanScore} rounds to ${computerScore}\n`;
    }
    if (computerScore === 3) {
        messageDisplay.textContent += `\bComputer Wins Game! ${computerScore} rounds to ${humanScore}\n`;
    }

    if (humanScore === 3 || computerScore === 3){
        humanScore = 0;
        computerScore = 0;
        roundCounter = 0;
    }
}

playerSelectionBtns.addEventListener("click", playSelection)