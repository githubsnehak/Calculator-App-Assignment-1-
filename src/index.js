// src/index.js (or your parent component)
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Components/Calculator/Calculator.js';
import './index.css';

const App = () => {
  const [calculatorState, setCalculatorState] = useState({
    operation: 'add',
    input1: 0,
    input2: 0,
  });

  const handleInputChange = (name, value) => {
    setCalculatorState((prevState) => ({
      ...prevState,
      [name]: name === 'operation' ? value : Number(value),
    }));
  };

  return (
    <div>
      <Calculator
        operation={calculatorState.operation}
        onInputChange={handleInputChange}
        input1={calculatorState.input1}
        input2={calculatorState.input2}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
