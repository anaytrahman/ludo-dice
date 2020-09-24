// DOM selection
var btnDice = document.querySelector("#throwDice");
var diceImg = document.querySelector("#diceImg");
var btnPlay = document.querySelector("#playGame");
var btnPlayAgain = document.querySelector("#playAgain");
var $totalScore = document.querySelector("#totalScore");
var winStatus = document.querySelector("#winStatus");
var $playArea = winStatus.parentElement;


// basic settings
var score = 0;
var winningScore = 30;
var winningText = "Winner!!!!";

function init() {
    // basic settings
    score = 0;
    winningScore = 50;
    winningText = "Wow Winner!!!!";

    winStatus.innerHTML = "Start New Game";
    $playArea.classList.remove('winner');

    btnPlayAgain.classList.add('hide');
    btnDice.parentElement.classList.remove('hide');
    $totalScore.innerHTML = score;
}

// start the game
btnPlay.addEventListener("click", function(e) {
    btnDice.parentElement.classList.remove('hide');
    e.target.classList.add('hide');
    winStatus.innerHTML = "Now Playing";
    $playArea.classList.add('playing');
});

// click handler for dice
btnDice.addEventListener("click", function() {
    throwDice();
});

// play again button
btnPlayAgain.addEventListener("click", function() {
    init();
});



// throw dice is a main method
function throwDice() {
    var randomNumber = Math.floor((Math.random() * 6) + 1);

    // update score
    updateScore(randomNumber);

    
    gameStatus();

    // todo dual player -  with own score

    // this will change the dice according to the value
    diceImg.setAttribute('src', `./images/dice-six-faces-${randomNumber}.svg`);
}



// this method will check the logic of winner or looser or any another rules
function gameStatus() {
    // if score is 20 reset it
    if(score == 20) {
        score = 0;
    } else if(score >= winningScore) {
        btnDice.parentElement.classList.add('hide');
        btnPlayAgain.classList.remove('hide');
        winStatus.innerHTML = winningText;
        $playArea.classList.remove('playing');
        $playArea.classList.add('winner');

    }
}

// method for update score
function updateScore(randomNumber) {
    score += randomNumber;

    // update score in the score baord
    $totalScore.innerHTML = score;
}


// todo : will have two section for each player
// todo : player will be switched automatically - same like normal ludo
// todo: score will be started after first 6
// todo : levels (easy, medium, difficult)