var playerchoice = document.querySelectorAll('.drawing');

var choice1;



playerchoice.forEach(choice => {
    choice.addEventListener('click', (e) => {
        choice1 = choice.id;
        console.log(choice1);
    });
});



// for (let i = 0; i < 5; i++) {
//     // const playerSelection = prompt("What's your selection?");;
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));



//     if (i === 4) {
//         if (playerpoints > pcpoints) {
//             alert("player wins");
//         }
//         else {
//             alert("pc wins");

//         }
//         playerpoints = 0;
//         pcpoints = 0;
//     }
// }

// // function to define who wins the round
// var playerpoints = 0;
// var pcpoints = 0;

// function playRound(playerSelection, computerSelection) {
//     const playerSel = playerSelection.toLowerCase();
//     const compuSel = computerSelection.toLowerCase();




//     if (playerSel === "scissors" && compuSel === "paper") {
//         console.log("You Won! Scissors beats Paper");
//         playerpoints++;

//     }
//     else if (playerSel === "paper" && compuSel === "scissors") {
//         console.log("You Lost! Scissors beats Paper");
//         pcpoints++;
//     }
//     else if (playerSel === "scissors" && compuSel === "rock") {
//         console.log("You Lost! Rock beats Scissors");
//         pcpoints++;
//     }
//     else if (playerSel === "rock" && compuSel === "scissors") {
//         console.log("You Won! Rock beats Scissors");
//         playerpoints++;
//     }
//     else if (playerSel === "paper" && compuSel === "scissors") {
//         console.log("You Lost! Scissors beats Paper ");
//         pcpoints++;


//     }
//     else if (playerSel === "scissors" && compuSel === "paper") {
//         console.log("You Won! Scissors beats Paper ");
//         playerpoints++;
//     }
//     else if (playerSel === "paper" && compuSel === "rock") {
//         console.log("You Won! Paper beats Rock ");
//         playerpoints++;
//     }
//     else if (playerSel === "rock" && compuSel === "paper") {
//         console.log("You Lost! Paper beats Rock ");
//         pcpoints++;
//     }
//     else {
//         console.log("Nobody wins");
//     }


// }
// // function to get the computer choice

// function getComputerChoice() {
//     const randomnum = Math.floor(Math.random() * 3) + 1;
//     var gameplay;
//     switch (randomnum) {
//         case 1: gameplay = "Rock";
//             break;
//         case 2: gameplay = "Paper";
//             break;
//         case 3: gameplay = "Scissors";
//             break;
//     }
//     return gameplay;


// }





