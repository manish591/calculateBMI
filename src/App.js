import { useState } from "react";
import "./styles.css";

let inputWeight = 10;
let inputHeight = 50;

export default function App() {
  const [output, setOutput] = useState("output");
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
    setOutput(`${calculation}`);
  }

  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p class="slider-output">Weight: {weight}Kg</p>
        <input
          className="input-slider"
          onChange={readInputWeight}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p class="slider-output">Height: {height}cm</p>
        <input
          className="input-slider"
          onChange={readInputHeight}
          type="range"
          step="1"
          min="140"
          max="220"
        />
      </div>
      <div className="outputsection">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </div>
  );
}
