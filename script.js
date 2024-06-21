const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const getBmiResult = document.getElementById("num-bmi-style");
const welcomeButton = document.getElementById("welcome-style");
const getHealthyWeight = document.getElementById("bmi-suggest");
const getMetricSection = document.getElementById("metric-name");
const getImperialRadio = document.getElementById("imperial");
const getMetricRadio = document.getElementById("metric");
const getImperialSection = document.getElementById("imperial-section");
const heightElement = document.getElementById("height-ft-input");
const weightElement = document.getElementById("weight-st-input");
const bmiResult = document.getElementById("bmi-lbs");
const getHealthy = document.getElementById("healthy-weight-bmi-style");

let heightValue = 0;
let weightValue = 0;
let imperialValue = 0;
let heightAmount = 0;
let weightAmount = 0;

heightInput.addEventListener("input", (event) => {
  heightValue = Number(event.target.value);
  calculateBmi();
});

heightElement.addEventListener("input", (event) => {
  heightAmount = Number(event.target.value);
  calculateBmiElement();
});

weightInput.addEventListener("input", (event) => {
  weightValue = Number(event.target.value);
  calculateBmi();
});

weightElement.addEventListener("input", (event) => {
  weightAmount = Number(event.target.value);
  calculateBmiElement();
});

getImperialRadio.addEventListener("click", (event) => {
  if (event.target.checked) {
    getImperialSection.style.display = "flex";
    getMetricSection.style.display = "none";
  }
});

getMetricRadio.addEventListener("click", (event) => {
  if (event.target.checked) {
    getImperialSection.style.display = "none";
    getMetricSection.style.display = "block";
  }
});

const calculateBmi = () => {
  const dividedHeight = heightValue / 100;
  const bmi = weightValue / (dividedHeight * dividedHeight);
  getBmiResult.textContent = bmi.toFixed(1);
  if (bmi > 0) {
    getHealthyWeight.style.display = "block";
  } else {
    welcomeButton.style.display = "none";
  }
};

const calculateBmiElement = () => {
  const dividedHeight = heightAmount / 100;
  const bmi = weightAmount / (dividedHeight * dividedHeight);
  bmiResult.textContent = bmi.toFixed(1);
};
