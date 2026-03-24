const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const feetToMeter = 0.304;
const literToGallon = 0.264;
const gallonToLiter = 3.785;
const kilogramToPound = 2.204;
const poundTokilogram = 0.453;

convertBtn.addEventListener("click", function () {
  let baseValue = input.value;

  lengthEl.innerHTML = `${baseValue} meter = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(
    3,
  )} meter`;

  volumeEl.innerHTML = `${baseValue} liters = ${(
    baseValue * literToGallon
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue * gallonToLiter
  ).toFixed(3)} liters`;

  massEl.innerHTML = `${baseValue} kilograms = ${(
    baseValue * kilogramToPound
  ).toFixed(3)} pounds | ${baseValue} pounds = ${(
    baseValue * poundTokilogram
  ).toFixed(3)} kilograms`;
});
