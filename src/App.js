import { useState } from "react";
import "./styles.css";

let inputWeight = 10;
let inputHeight = 50;

export default function App() {
  const [output, setOutput] = useState("Your output will show here!");
  const [height, setHeight] = useState(inputHeight);
  const [weight, setWeight] = useState(inputWeight);

  function readInputHeight(e) {
    inputHeight = e.target.value;
    setHeight(inputHeight);
    calculateBmi();
  }

  function readInputWeight(e) {
    inputWeight = e.target.value;
    setWeight(inputWeight);
    calculateBmi();
  }

  function calculateBmi() {
    let height = inputHeight / 100;
    let calculation = (inputWeight / (height * height)).toFixed(1);
    setOutput(`Your BMI is ${calculation}`);
  }

  return (
    <div className="App">
      <div className="containerone">
        <h1 className="title">BMI CALCULATOR</h1>
        <p className="description">
          Body mass index (BMI) is a value derived from the mass (weight) and
          height of a person. The BMI is defined as the body mass divided by the
          square of the body height, and is expressed in units of kg/m2,
          resulting from mass in kilograms and height in metres.
        </p>
        <p className="checkindex">Check here for index</p>
        <ol class="bmiindex">
          <li>BMI below 18.5 : Underweight</li>
          <li>BMI between 18.5 and 24.9 : Healthy weight</li>
          <li>BMI between 25 and 29.9 : Overweight</li>
          <li>BMI above 30 : Obese</li>
        </ol>
      </div>

      <div className="containertwo">
        <div className="div">
          <label>
            Weight(in Kg)
            <input
              onChange={readInputWeight}
              type="range"
              step="1"
              min="10"
              max="220"
            />
            <p>Your Weight is {weight}</p>
          </label>
          <label>
            Height(in cm)
            <input
              onChange={readInputHeight}
              type="range"
              step="1"
              min="50"
              max="220"
            />
            <p>Your Height is {height}</p>
          </label>
        </div>
        <div>{output}</div>
      </div>
    </div>
  );
}
