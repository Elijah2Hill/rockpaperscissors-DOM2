let wins = 0;
let losses = 0;
let ties = 0;

const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');
const win_score = document.querySelector('win_score');
const loss_score = document.querySelector('loss_score');
const tie_score = document.querySelector('tie_score');
const result = document.querySelector('result');

rock_button.addEventListener('click', function(){
    gamePlay('rock');
});

paper_button.addEventListener('click', function(){
    gamePlay('paper');
});

scissors_button.addEventListener('click', function(){
    gamePlay('scissors');
});

function gamePlay(userChoice){
	const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let combinedChoices = userChoice + '-' + computerChoice;
	switch (combinedChoices) {
        case 'rock-paper':	
        case 'paper-scissors':
        case 'scissors-rock':
			result.textContent = 'You lose! You chose ' + userChoice + ' and the computer chose ' + computerChoice;
            user_loses();
            break;

        case 'rock-scissors':
        case 'paper-rock':
        case 'scissors-paper':
            result.textContent = 'You win! You chose ' + userChoice + ' and the computer chose ' + computerChoice;
			user_wins();
            break;

        default:
			result.textContent = 'It\'s a tie! You and the computer both chose ' + userChoice;
			user_ties();   
    }
}

function user_loses(){
    losses++;
	loss_score.textContent = losses;
}

function user_wins(){
    wins++;
	win_score.textContent = wins;
} 

function user_ties(){
    ties++;
	tie_score.textContent = ties;
} 
