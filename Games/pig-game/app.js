/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var globalScore, dice, currentScore, activePlayer = 0;

function whoPlays() {
  return activePlayer ? 1 : 0;
}


function diceValueAndImage() {
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



function roll() {
  var player;
  if (whoPlays()) {
    player = "current-1";
  } else {
    player = "current-0";
  }
  var currentScore = document.getElementById(player);
  var diceValue = diceValueAndImage();
  if (diceValue != 1)
    currentScore.innerHTML = Number.parseInt(currentScore.innerHTML) + diceValue;
  else {
    currentScore.innerHTML = 0;
    if (activePlayer == 0)
      activePlayer = 1;
    else
      activePlayer = 0;
  }
}



function hold() {
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
  if (globalScore >= 100) {
    var win = document.getElementById(name);
    win.innerHTML = "WINNER";
  }
}