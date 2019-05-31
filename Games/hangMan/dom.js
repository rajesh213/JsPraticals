var temp;


function gameStart() {
  document.getElementById('data')
    .style.display = 'none';
  document.getElementById('text')
    .style.display = 'block';
  var item = document.getElementById("Items")
    .value;
  displayNames(item);
}

function displayNames(item) {
  var Vegetables = ['artichoke', 'asparagus', 'beetroot', 'bellpepper', 'broccoli', 'cabbage', 'carrot', 'cauliflower', 'celery', 'corn', 'cucumber', 'pea', 'eggplant', 'greenbean', 'potato', 'tomato', 'radish', 'onion'];
  var Fruits = ['apple', 'watermelon', 'orange', 'pear', 'cherry', 'strawberry', 'nectarine', 'grape', 'mango', 'blueberry', 'pomegranate', 'plum', 'banana', 'raspberry', 'mandarin', 'papaya', 'pineapple', 'lemon'];
  var Animals = ['ant', 'bear', 'bee', 'bird', 'camel', 'cat', 'cheetah', 'chicken', 'chimpanzee', 'cow', 'crocodile', 'deer', 'dog', 'dolphin', 'duck', 'eagle', 'elephant', 'fish', 'fly', 'fox', 'frog', 'giraffe', 'goat', 'horse', 'kangaroo', 'lion', 'monkey', 'owl', 'pig', 'rabbit', 'rat'];
  var random, pattern, timeLeft = 15;

  if (item == "Vegetables") {
    random = getRandomInt(Vegetables.length);
    pattern = patternString(Vegetables[random]);
    temp = Vegetables[random];
    document.getElementById('pattern')
      .innerHTML = pattern;
  } else if (item == "Animals") {
    random = getRandomInt(Animals.length);
    pattern = patternString(Animals[random]);
    temp = Animals[random];
    document.getElementById('pattern')
      .innerHTML = pattern;
  } else {
    random = getRandomInt(Fruits.length);
    temp = random;
    temp = Fruits[random];
    pattern = patternString(Fruits[random]);
    document.getElementById('pattern')
      .innerHTML = pattern;


  }


  var elem = document.getElementById('some_div');

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      alert("lose");
      window.location.href = "index.html";
    } else {
      some_div.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }
}







function check() {
  var takeInput = document.getElementById('input')
    .value;
  if (takeInput == temp) {
    alert("You win the game");
    window.location.href = "index.html";
  } else {
    alert("lose");
    window.location.href = "index.html";
  }
}




function patternString(random) {
  var pattern = [],
    temp = [];
  pattern = random.split("");
  console.log(pattern);
  for (var i = 0; i < pattern.length; i++) {
    if (i % 2 != 0)
      temp.push(pattern[i])
    else
      temp.push("_");
  }
  return temp.join("");

}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}