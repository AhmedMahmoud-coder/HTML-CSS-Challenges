//

let firstNum = "";
let operat = "";
let lastNum = "";
let screen = document.querySelector("#screen");

let numBtn = document.querySelectorAll(".num-btn");

let operato = document.querySelectorAll(".operator");

numBtn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    let clicknum = event.target.textContent;

    if (operat === "") {
      firstNum += clicknum;
      screen.value = firstNum;
    } else {
      lastNum += clicknum;
      screen.value = lastNum;
    }
  });
});

operato.forEach(function (b) {
  b.addEventListener("click", function (event) {
    operat = event.target.textContent;
  });
});

let clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  if (operat === "") {
    firstNum = firstNum.slice(0, -1);
    screen.value = firstNum;
  } else {
    lastNum = lastNum.slice(0, -1);
    screen.value = lastNum;
  }
});

let clearall = document.querySelectorAll(".clearall");
clearall.forEach(function (btn) {
  btn.addEventListener("click", function () {
    firstNum = "";
    operat = "";
    lastNum = "";
    screen.value = "";
  });
});

let sig = document.querySelector(".sign");
sig.addEventListener("click", function (e) {
  if (operat === "") {
    firstNum = (parseFloat(firstNum) * -1).toString();
    screen.value = firstNum;
  } else {
    lastNum = (parseFloat(lastNum) * -1).toString();
    screen.value = lastNum;
  }
});

let equalBtn = document.querySelector("#equal");

equalBtn.addEventListener("click", function () {
  if (firstNum !== "" && operat !== "" && lastNum !== "") {
    let result = 0;
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(lastNum);

    switch (operat) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "X":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }

    screen.value = result;

    firstNum = result.toString();
    operat = "";
    lastNum = "";
  }
});
