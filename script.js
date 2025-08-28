function getComputerChoice(){
    let randNum = Math.floor(Math.random()*3)
    if (randNum == 0) return "rock"
    if (randNum == 1) return "paper"
    if (randNum == 2) return "scissors"
}