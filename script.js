"use strict";

const nrFirst = document.querySelector("#firstnumber");
const nrSecond = document.querySelector("#secondnumber");
const operator = document.querySelector("#operator");
const result = document.querySelector("#results");

document.addEventListener("DOMContentLoaded", start);

function start() {
  nrFirst.value;
  nrSecond.value;
  operator.value;

  console.log(operator.value);

  document
    .querySelector("#calculate")
    .addEventListener("click", clickCalculateButton);
}

function clickCalculateButton() {
  let nrFirstSomNr = parseInt(nrFirst.value);
  let nrSecondSomNr = parseInt(nrSecond.value);
  console.log(operator.value);

  if (operator.value == "add") {
    nrFirst.value = nrFirstSomNr + nrSecondSomNr;
  } else if (operator.value == "sub") {
    nrFirst.value = nrFirstSomNr - nrSecondSomNr;
  } else if (operator.value == "mul") {
    nrFirst.value = nrFirstSomNr * nrSecondSomNr;
  } else if (operator.value == "div") {
    nrFirst.value = nrFirstSomNr / nrSecondSomNr;
  }

  nrSecond.value = "";
  gemtResultater(result);
}

function gemtResultater(result) {
  let gemtResultat = document.createElement("li");
  gemtResultat.textContent = result;
  results.appendChild(gemtResultat);
}
