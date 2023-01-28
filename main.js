'use strict';

const calcButton = document.querySelector('.calc');
const inputNum = document.querySelector('.input');
const outcome = document.querySelector('.outcome');
const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function calculate(inputRomanNum) {
  let outcome = 0;
  let curr;
  let next;
  for (let i = 0; i < inputRomanNum.length; i++) {
    curr = romanNumbers[inputRomanNum[i]];
    next = romanNumbers[inputRomanNum[i + 1]];
    if (next && next > curr) {
      outcome -= curr;
    } else {
      outcome += curr
    }
  }
  return outcome
}

function printOutcome() {
  inputNum.value = inputNum.value.toUpperCase()
  outcome.innerHTML = calculate(inputNum.value)
  // if (inputNum.checkValidity()) {
  //   outcome.innerHTML = calculate(inputNum.value.toUpperCase())
  // } else {
  //   outcome.innerHTML = inputNum.validationMessage;
  // }
}