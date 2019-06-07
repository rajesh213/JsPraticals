/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var globalScore, dice, currentScore, activePlayer = 0,
  gameActive = 1,
  diceValue = 0,
  dice1value, dice2Value;

function whoPlays() {
  return activePlayer ? 1 : 0;
}


function diceValueAndImage() {
  if (gameActive) {
    dice1Value = (Math.floor(Math.random() * 6) + 1);
    dice2Value = (Math.floor(Math.random() * 6) + 1);
    document.getElementById("dice")
      .src = 'dice-' + dice1Value + '.png';
    document.getElementById("dice1")
      .src = 'dice-' + dice2Value + '.png';
  }
}


function roll() {
  if (gameActive) {
    var player;
    if (whoPlays()) {
      player = "current-1";
      score = "score-1"
      name = "name-1"
    } else {
      player = "current-0";
      score = "score-0";
      name = "name-0"
    }
    var currentScore = document.getElementById(player);
    diceValueAndImage();
    if (dice1Value == 1 || dice2Value == 1) {
      currentScore.innerHTML = 0;
      if (activePlayer == 0)
        activePlayer = 1;
      else
        activePlayer = 0;
    } else {
      currentScore.innerHTML = Number.parseInt(currentScore.innerHTML) + dice1Value + dice2Value;
    }
  }
}


function hold() {
  if (gameActive) {
    var player, score;
    if (whoPlays()) {
      player = "current-1";
      score = "score-1"
      name = "name-1"
    } else {
      player = "current-0";
      score = "score-0";
      name = "name-0"
    }
    var globalSco = document.getElementById(score);
    var currentScore = document.getElementById(player);
    globalScore = Number.parseInt(globalSco.innerHTML) + Number.parseInt(currentScore.innerHTML);
    globalSco.innerHTML = globalScore;
    currentScore.innerHTML = 0;
    if (globalScore >= 10) {
      var win = document.getElementById(name);
      win.innerHTML = "WINNER";
      gameActive = 0;
      document.getElementById("dice")
        .src = 'start.png';
      document.getElementById("dice1")
        .src = 'start.png';
    }
  }
}



function newGame() {
  var currentScore0 = document.getElementById("current-0");
  var currentScore1 = document.getElementById("current-1");
  currentScore0.innerHTML = 0;
  currentScore1.innerHTML = 0;
  var globalSc0 = document.getElementById("score-0");
  var globalSc1 = document.getElementById("score-1");
  globalSc0.innerHTML = 0;
  globalSc1.innerHTML = 0;
  if (whoPlays()) {
    name = "name-1"
  } else {
    name = "name-0"
  }
  var win = document.getElementById(name);
  if (name == "name-0")
    win.innerHTML = "PLAYER 1";
  else
    win.innerHTML = "PLAYER 2";
  var image = document.getElementById("dice");
  image.src = "start.png";
  var image = document.getElementById("dice1");
  image.src = "start.png";
  gameActive = 1;
}