const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const reset = document.querySelector('#reset')
const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector('#scissors');

const choices = ['rock', 'paper', 'scissors'];
let playScore = 0;
let compScore = 0;

function computerPlay(){
    const comp = [Math.floor(Math.random() * choices.length)];
    return (comp, choices[comp])
}

startGame()

function playRound(playerChoice, computerChoice){
    //playerChoice = playerChoice.toLowerCase();
    if (playerChoice == 'rock' && computerChoice === 'rock'
    || playerChoice == 'paper' && computerChoice === 'paper'
    || playerChoice == 'scissors' && computerChoice === 'scissors'){
        roundResults.textContent = 'Tie!!'
    } else if (playerChoice == 'rock' && computerChoice === 'scissors'
    || playerChoice == 'paper' && computerChoice === 'rock'
    || playerChoice == 'scissors' && computerChoice === 'paper'){
        roundResults.textContent = (`Good job! ${playerChoice} beats ${computerChoice}`);
        playerScore.textContent = ++playScore
    } else {
        roundResults.textContent = (`Too bad! ${computerChoice} beats ${playerChoice}`);
        computerScore.textContent = ++compScore
    }
    checkWinner();
}

resetMatch();

function checkWinner(){
    if (playerScore === 5 && compScore === 5){
        roundResults.textContent = 'Tie game!';
        roundResults.styleColor = 'green';
        optionBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
        });
    } else if (playerScore === 5) {
        roundResults.textContent = 'You beat the computer!';
        roundResults.styleColor = 'red';
        optionBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
        });
    } else if (computerScore === 5){
        roundResults.textContent = 'The computer beat you!';
        roundResults.styleColor = 'blue';
        optionBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice)
        });
    }
}

function resetMatch() {
    reset.addEventListener('click',() => 
        location.reload())
    
}

function startGame() {
    optionBtn.forEach(button => {
        button.addEventListener('click', getPlayerChoice);
    })
}

function getPlayerChoice(e) {
    playerSelection = (e.target.id)
    playRound(playerSelection, computerPlay())
}

// function game(){
//     for (let round = 0; round < 5; round++){
//       let playerInput = prompt('Choose an option, Rock, paper, scissors');
//       let compInput = computerPlay();

//       playRound(playerInput, compInput)

//       console.log(`player input: ${playerInput}, computer input: ${compInput}, player score: ${playScore}, computer score: ${compScore}`);
// }

// if (playScore > compScore){
//     alert(`Congrats you win! Player score: ${playScore}; Computer score ${compScore}`);
// } else if (compScore > playScore) {
//     alert(`You lost! Computer wins! Player score: ${playScore}; Computer score ${compScore}`);
// } else {
//     alert(`It was a tie! Player score ${playScore}; Computer score ${compScore}`);
// }
// }

// game()
