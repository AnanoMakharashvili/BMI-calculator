const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const getBmiButton = document.getElementById("num-bmi-button");
const welcomeButton = document.getElementById("welcome-button");

let heightValue = 0;
let weightValue = 0;

heightInput.addEventListener("input", (event) => {
  heightValue = Number(event.target.value);
  calculateBmi();
});

weightInput.addEventListener("input", (event) => {
  weightValue = Number(event.target.value);
  calculateBmi();
});

const calculateBmi = () => {
  const dividedHeight = heightValue / 100;
  const bmi = weightValue / (dividedHeight * dividedHeight);
  getBmiButton.textContent = bmi.toFixed(1);
};
