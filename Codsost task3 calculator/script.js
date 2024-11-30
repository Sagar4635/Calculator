// script.js
let display = document.getElementById("display");

function clearDisplay() {
  display.textContent = "";
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1);
}

function appendNumber(number) {
  display.textContent += number;
}

function appendOperator(operator) {
  const lastChar = display.textContent.slice(-1);
  if (!["+", "-", "*", "/"].includes(lastChar)) {
    display.textContent += operator;
  }
}

function calculate() {
  try {
    display.textContent = eval(display.textContent) || "";
  } catch {
    display.textContent = "Error";
  }
}
