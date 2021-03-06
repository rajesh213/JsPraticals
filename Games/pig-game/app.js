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
  previousDiceValue = 0,
  diceValue = 0,
  defaultWinningScore = 10;

function whoPlays() {
  return activePlayer ? 1 : 0;
}


function diceValueAndImage() {
  if (gameActive) {
    var diceValue = (Math.floor(Math.random() * 6) + 1);
    var image = document.getElementById("dice");
    switch (diceValue) {
      case 1:
        image.src = "dice-1.png";
        break;
      case 2:
        image.src = "dice-2.png";
        break;
      case 3:
        image.src = "dice-3.png";
        break;
      case 4:
        image.src = "dice-4.png";
        break;
      case 5:
        image.src = "dice-5.png";
        break;
      case 6:
        image.src = "dice-6.png";
        break;
    }
    return diceValue;
  }
}


function roll() {
  winningScore = document.getElementById("winningScore")
    .value;
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
    previousDiceValue = diceValue;
    diceValue = diceValueAndImage();
    if (diceValue == 1) {
      currentScore.innerHTML = 0;
      if (activePlayer == 0)
        activePlayer = 1;
      else
        activePlayer = 0;
    } else if ((diceValue == 6) && (previousDiceValue == 6)) {
      currentScore.innerHTML = 0;
      var globalSco = document.getElementById(score);
      globalSco.innerHTML = 0;
      if (activePlayer == 0)
        activePlayer = 1;
      else
        activePlayer = 0;
    } else {
      currentScore.innerHTML = Number.parseInt(currentScore.innerHTML) + diceValue;
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
    if (winningScore == " ")
      winningScore = defaultWinningScore;
    if (globalScore >= (+winningScore)) {
      var win = document.getElementById(name);
      win.innerHTML = "WINNER";
      gameActive = 0;
    }
  }
}

function winningScore(winningScore) {
  if ((winningScore == 0) || (winningScore == " "))
    return 10;
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
  gameActive = 1;
}