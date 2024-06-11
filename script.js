const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const getBmiResult = document.getElementById("num-bmi-style");
const welcomeButton = document.getElementById("welcome-style");

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
  getBmiResult.textContent = bmi.toFixed(1);
  if (calculateBmi > 0) {
    getBmiResult.style.display = "block";
  } else {
    welcomeButton.style.display = "none";
  }
};
