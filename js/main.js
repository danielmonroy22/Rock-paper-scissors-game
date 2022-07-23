var playerchoice = document.querySelectorAll('.drawing');
var p_player = document.querySelector('.p-player');
var p_pc = document.querySelector('.p-pc');


var choice_player;
var pc_choice;
var playerpoints = 0;
var pcpoints = 0;
var clicks = 0;


// each time they click they are playing against each other
playerchoice.forEach(choice => {

    choice.addEventListener('click', (e) => {
        clicks++;
        choice_player = choice.id;
        pc_choice = getComputerChoice();
        playRound(choice_player, pc_choice);
        if (clicks === 5) {
            alert("se ha acabado el juego");
            p_player.innerHTML = 0;
            p_pc.innerHTML = 0;
        }
    });
});

//function to define who wins the round


function playRound(playerSelection, computerSelection) {
    const playerSel = playerSelection.toLowerCase();
    const compuSel = computerSelection.toLowerCase();




    if (playerSel === "scissors" && compuSel === "paper") {

        playerpoints++;
        p_player.innerHTML = playerpoints;

    }
    else if (playerSel === "paper" && compuSel === "scissors") {

        pcpoints++;
        p_pc.innerHTML = pcpoints;
    }
    else if (playerSel === "scissors" && compuSel === "rock") {

        pcpoints++;
        p_pc.innerHTML = pcpoints;
    }
    else if (playerSel === "rock" && compuSel === "scissors") {

        playerpoints++;
        p_player.innerHTML = playerpoints;
    }
    else if (playerSel === "paper" && compuSel === "scissors") {

        pcpoints++;
        p_pc.innerHTML = pcpoints;


    }
    else if (playerSel === "scissors" && compuSel === "paper") {
        // console.log("You Won! Scissors beats Paper ");
        playerpoints++;
        p_player.innerHTML = playerpoints;
    }
    else if (playerSel === "paper" && compuSel === "rock") {
        // console.log("Yobu Won! Paper beats Rock ");
        playerpoints++;
        p_player.innerHTML = playerpoints;
    }
    else if (playerSel === "rock" && compuSel === "paper") {
        // console.log("You Lost! Paper beats Rock ");
        pcpoints++;
        p_pc.innerHTML = pcpoints;
    }
    else {
        // console.log("Nobody wins");
    }


}
//function to get the computer choice

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





