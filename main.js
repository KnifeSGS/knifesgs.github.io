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
  let tmp1;
  let tmp2;
  for (let i = 0; i < inputRomanNum.length; i++) {
    tmp1 = romanNumbers[inputRomanNum[i].toUpperCase()];
    if (inputRomanNum[i - 1]) {
      tmp2 = romanNumbers[inputRomanNum[i - 1].toUpperCase()];
      if (tmp1 > tmp2) {
        outcome -= tmp2 * 2;
      }
      outcome += tmp1;
    } else {
      outcome += tmp1
    }
  }
  return outcome
}

function printOutcome() {
  if (inputNum.checkValidity()) {
    outcome.innerHTML = calculate(inputNum.value)
  } else {
    outcome.innerHTML = inputNum.validationMessage;
  }
}