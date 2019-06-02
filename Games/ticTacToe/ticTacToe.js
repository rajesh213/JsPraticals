list = ['X', 'O'];


function random(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}


function dataOfB1() {
  return document.getElementById("button1")
    .innerHTML;
}


function dataOfB2() {
  return document.getElementById("button2")
    .innerHTML;
}

function dataOfB3() {
  return document.getElementById("button3")
    .innerHTML;
}

function dataOfB4() {
  return document.getElementById("button4")
    .innerHTML;
}

function dataOfB5() {
  return document.getElementById("button5")
    .innerHTML;
}

function dataOfB6() {
  return document.getElementById("button6")
    .innerHTML;
}



function dataOfB7() {
  return document.getElementById("button7")
    .innerHTML;
}

function dataOfB8() {
  return document.getElementById("button8")
    .innerHTML;
}

function dataOfB9() {
  return document.getElementById("button9")
    .innerHTML;
}



function button1() {
  var curData = dataOfB1();
  var newData = document.getElementById("button1");
  if (curData == ".") {
    var randomValue = random(0, 1);
    newData.innerHTML = list[randomValue];
    if (dataOfB1() == dataOfB2()) {
      if (dataOfB2() == dataOfB3())
        win();
    } else if (dataOfB1() == dataOfB4()) {
      if (dataOfB4() == dataOfB7())
        win();
    } else if (dataOfB1() == dataOfB5()) {
      if (dataOfB5() == dataOfB9())
        win();
    }
  }
}



function button2() {
  var curData = dataOfB2();
  var newData = document.getElementById("button2");
  if (curData == ".") {
    var randomValue = random(0, 1);
    newData.innerHTML = list[randomValue];
    if (dataOfB2() == dataOfB1()) {
      if (dataOfB2() == dataOfB3())
        win();
    } else if (dataOfB2() == dataOfB5()) {
      if (dataOfB5() == dataOfB8())
        win();
    }
  }
}


function button3() {
  var curData = dataOfB3();
  var newData = document.getElementById("button3");
  if (curData == ".") {
    var randomValue = random(0, 1);
    newData.innerHTML = list[randomValue];
    if (dataOfB3() == dataOfB2()) {
      if (dataOfB2() == dataOfB1())
        win();
    } else if (dataOfB3() == dataOfB5()) {
      if (dataOfB5() == dataOfB7())
        win();
    } else if (dataOfB3() == dataOfB6()) {
      if (dataOfB6() == dataOfB9())
        win();
    }
  }
}


function button4() {
  var curData = dataOfB4();
  var newData = document.getElementById("button4");
  if (curData == ".") {
    var randomValue = random(0, 1);
    newData.innerHTML = list[randomValue];
    if (dataOfB4() == dataOfB1()) {
      if (dataOfB4() == dataOfB7())
        win();
    } else if (dataOfB4() == dataOfB5()) {
      if (dataOfB5() == dataOfB6())
        win();
    }
  }
}

function button5() {
  var curData = dataOfB5();
  var newData = document.getElementById("button5");
  if (curData == ".") {
    var randomValue = random(0, 1);
    newData.innerHTML = list[randomValue];
    if (dataOfB5() == dataOfB1()) {
      if (dataOfB5() == dataOfB9())
        win();
    } else if (dataOfB5() == dataOfB7()) {
      if (dataOfB5() == dataOfB3())
        win();
    } else if (dataOfB5() == dataOfB2()) {
      if (dataOfB5() == dataOfB8())
        win();
    } else if (dataOfB5() == dataOfB4()) {
      if (dataOfB5() == dataOfB6())
        win();
    }
  }
}



function button6() {
  var curData = dataOfB6();
  var newData = document.getElementById("button6");
  if (curData == ".") {
    var randomValue = random(0, 1);
    newData.innerHTML = list[randomValue];
    if (dataOfB6() == dataOfB3()) {
      if (dataOfB6() == dataOfB9())
        win();
    } else if (dataOfB6() == dataOfB5()) {
      if (dataOfB5() == dataOfB4())
        win();
    }
  }
}



function button7() {
  var curData = dataOfB7();
  var newData = document.getElementById("button7");
  if (curData == ".") {
    var randomValue = random(0, 1);
    newData.innerHTML = list[randomValue];
    if (dataOfB7() == dataOfB4()) {
      if (dataOfB4() == dataOfB1())
        win();
    } else if (dataOfB7() == dataOfB8()) {
      if (dataOfB8() == dataOfB9())
        win();
    } else if (dataOfB7() == dataOfB5()) {
      if (dataOfB5() == dataOfB3())
        win();
    }
  }
}



function button8() {
  var curData = dataOfB8();
  var newData = document.getElementById("button8");
  if (curData == ".") {
    var randomValue = random(0, 1);
    newData.innerHTML = list[randomValue];
    if (dataOfB8() == dataOfB5()) {
      if (dataOfB5() == dataOfB2())
        win();
    } else if (dataOfB8() == dataOfB7()) {
      if (dataOfB8() == dataOfB9())
        win();
    }
  }
}



function button9() {
  var curData = dataOfB9();
  var newData = document.getElementById("button9");
  if (curData == ".") {
    var randomValue = random(0, 1);
    newData.innerHTML = list[randomValue];
    if (dataOfB9() == dataOfB6()) {
      if (dataOfB6() == dataOfB3())
        win();
    } else if (dataOfB9() == dataOfB8()) {
      if (dataOfB8() == dataOfB7())
        win();
    } else if (dataOfB9() == dataOfB5()) {
      if (dataOfB5() == dataOfB1())
        win();
    }
  }
}


function win() {
  return document.getElementById("win")
    .innerHTML = "congratulations you won!";
}



function reload() {
  location.reload();
}