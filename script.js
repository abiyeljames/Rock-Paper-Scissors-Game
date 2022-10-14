const posibilities = ["rock", "paper", "scissors"]
function computerPlay() {
    random = Math.floor(Math.random() * posibilities.length)
    return posibilities[random];
}
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                return 2;
            }
            else if (computerSelection == "scissors") {
                return 1;
            }
            else {
                return 0;
            }
        case "paper":
            if (computerSelection == "scissors") {
                return 2;
            }
            else if (computerSelection == "rock") {
                return 1;
            }
            else {
                return 0;
            }
        case "scissors":
            if (computerSelection == "rock") {
                return 2;
            }
            else if (computerSelection == "paper") {
                return 1;
            }
            else {
                return 0;}
    }
}
function game() {
    let scores = [5];
    let computerScore = 0;
    let userScore = 0;
    let playerSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        do {
            if (playerSelection) {
                if (!posibilities.includes(playerSelection.toLowerCase())) {
                    playerSelection = prompt(`Round(${i + 1}) You made a mistake. Please enter rock, paper or scissors:`);
                }
                else {
                    playerSelection = prompt(`Round(${i + 1}) Please enter rock, paper or scissors:`);
                }
            }
            else {
                playerSelection = prompt(`Round(${i + 1}) Please enter rock, paper or scissors:`);
            }
        } while (!posibilities.includes(playerSelection.toLowerCase()));
        computerSelection = computerPlay();
        scores[i] = playRound(playerSelection, computerSelection);
        playerSelection = false;
        if (scores[i] == 2) {
            computerScore++;
            console.log(`The computer wins this round. Computer:${computerScore} You:${userScore}`);
        }
        else if (scores[i] == 1) {
            userScore++;
            console.log(`You wins this round! Computer:${computerScore} You:${userScore}`);}
        else {
            console.log(`It's a tie game. Computer:${computerScore} You:${userScore}`);
        }
    }
    if (computerScore > userScore) {
        console.log(`The computer wins the game. Computer:${computerScore} You:${userScore}`);}
    else if (userScore > computerScore) {
        console.log(`You wins the game! Computer:${computerScore} You:${userScore}`);}
    else {
        console.log(`It's a tie game. Computer:${computerScore} You:${userScore}`);
    }
}
game();