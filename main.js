var playerpoints = 0;
var pcpoints = 0;

const playerSelection = "paper";


for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));



    if (i === 4) {
        if (playerpoints > pcpoints) {
            alert("player wins");
        }
        else {
            alert("pc wins");

        }
        playerpoints = 0;
        pcpoints = 0;
    }
}

function playRound(playerSelection, computerSelection) {
    const playerSel = playerSelection.toLowerCase();
    const compuSel = computerSelection.toLowerCase();




    if (playerSel === "scissors" && compuSel === "paper") {
        console.log("player wins");
        playerpoints++;

    }
    else if (playerSel === "paper" && compuSel === "scissors") {
        console.log("computer wins");
        pcpoints++;
    }
    else if (playerSel === "scissors" && compuSel === "rock") {
        console.log("computer wins");
        pcpoints++;
    }
    else if (playerSel === "rock" && compuSel === "scissors") {
        console.log("player wins");
        playerpoints++;
    }
    else if (playerSel === "paper" && compuSel === "scissors") {
        console.log("computer wins");
        pcpoints++;


    }
    else if (playerSel === "scissors" && compuSel === "paper") {
        console.log("player wins");
        playerpoints++;
    }
    else if (playerSel === "paper" && compuSel === "rock") {
        console.log("player wins");
        playerpoints++;
    }
    else if (playerSel === "rock" && compuSel === "paper") {
        console.log("computer wins");
        pcpoints++;
    }
    else {
        console.log("Nobody wins");
    }


}

function getComputerChoice() {
    const randomnum = Math.floor(Math.random() * 3) + 1;
    var gameplay;
    switch (randomnum) {
        case 1: gameplay = "Rock";
            break;
        case 2: gameplay = "Paper";
            break;
        case 3: gameplay = "Scissors";
            break;
    }
    return gameplay;


}
