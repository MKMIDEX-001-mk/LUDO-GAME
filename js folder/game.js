let firstDice = document.getElementById("first");

let firstNumber;

let btn_1 = document.getElementById("btn_1");

let secondDice = document.getElementById("second");

let secondNumber;

let btn_2 = document.getElementById("btn_2");

function play1() {
  firstNumber = Math.floor(Math.random() * 6 + 1);

  let change1 = "images/dice" + firstNumber + ".jpeg";

  firstDice.src = change1;

  btn_1.classList.add("green");
}

btn_1.addEventListener("click", play1);

function play2() {
  secondNumber = Math.floor(Math.random() * 6 + 1);

  let change2 = "images/dice" + secondNumber + ".jpeg";

  secondDice.src = change2;

  btn_2.classList.add("green");
}

btn_2.addEventListener("click", play2);

let check = document.getElementById("check");

function confirm() {
  if (firstNumber == null && secondNumber == null) {
    document.getElementsByTagName("h2")[0].textContent =
      "Both players must play first";
  } else if (firstNumber == null) {
    document.getElementsByTagName("h2")[0].textContent =
      "1st player should play also";
  } else if (secondNumber == null) {
    document.getElementsByTagName("h2")[0].textContent =
      "2nd player should play also";
  } else if (firstNumber > secondNumber) {
    document.getElementsByTagName("h2")[0].textContent = "1st player win";
  } else if (firstNumber < secondNumber) {
    document.getElementsByTagName("h2")[0].textContent = "2nd player win";
  } else {
    document.getElementsByTagName("h2")[0].textContent = "Draw";
  }

  check.classList.add("bng");

  console.log(check);
}

console.log(check);

check.addEventListener("click", confirm);
