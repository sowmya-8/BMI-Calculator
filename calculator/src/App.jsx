import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) return;

    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setMessage("Underweight – Eat a balanced diet and consult a nutritionist.");
    } else if (bmiValue < 24.9) {
      setMessage("Normal – Great job! Keep maintaining your health.");
    } else if (bmiValue < 29.9) {
      setMessage("Overweight – Include regular exercise in your routine.");
    } else {
      setMessage("Obese – Seek professional advice for healthy weight loss.");
    }
  };

  return (
    <div className="app-container">
      <div className="calculator">
        <h2>BMI Calculator</h2>
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button onClick={calculateBMI}>Calculate BMI</button>

        {bmi && (
          <div className="result">
            <p>Your BMI is: <strong>{bmi}</strong></p>
            <p className="suggestion">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

