import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>bmi calculator</h1>
      <h2>Info</h2>
      <div className="div">
        <label>
          Weight(in Kg)
          <input type="number" min="1" />
        </label>
        <label>
          Height(in cm)
          <input type="number" min="1" />
        </label>
      </div>
    </div>
  );
}
