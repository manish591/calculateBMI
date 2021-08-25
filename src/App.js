import { useState } from "react";
import "./styles.css";

let inputWeight = 0;
let inputHeight = 0;

export default function App() {
  const [output, setOutput] = useState("Your output will show here!");

  function readInputHeight(e) {
    inputHeight = e.target.value;
  }

  function readInputWeight(e) {
    inputWeight = e.target.value;
  }

  function calculateBmi() {
    let height = inputHeight / 100;
    console.log(inputHeight);
    console.log(height);
    let calculation = inputWeight / (height * height);
    setOutput(`Your BMI is ${calculation}`);
  }

  return (
    <div className="App">
      <h1>bmi calculator</h1>
      <h2>Info</h2>
      <div className="div">
        <label>
          Weight(in Kg)
          <input onChange={readInputWeight} type="number" min="1" />
        </label>
        <label>
          Height(in cm)
          <input onChange={readInputHeight} type="number" min="1" />
        </label>
        <button onClick={calculateBmi}>Calculate</button>
      </div>
      <div>{output}</div>
    </div>
  );
}
