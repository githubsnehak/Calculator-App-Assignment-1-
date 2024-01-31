import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

function Calculator({ operation, onInputChange, input1, input2 }) {
  let result = 0;

  switch (operation) {
    case 'add':
      result = input1 + input2;
      break;
    case 'subtract':
      result = input1 - input2;
      break;
    case 'multiply':
      result = input1 * input2;
      break;
    case 'divide':
      // Check for division by zero
      result = input2 !== 0 ? input1 / input2 : 'Infinity';
      break;
    default:
      result = 0;
  }

  return (
    
    <div className="calculator calculator-box">
      <div className="input-group">
        <h1>Calculator App</h1>
        <label htmlFor="input1">First Number:</label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={(e) => onInputChange('input1', e.target.value)}
          placeholder="Enter the first number"
        />
      </div>
      <div className="input-group">
        <label htmlFor="input2">Second Number:</label>
        <input
          type="text"
          id="input2"
          value={input2}
          onChange={(e) => onInputChange('input2', e.target.value)}
          placeholder="Enter the second number"
        />
      </div>
      <div className="input-group">
        
        <select
          id="operation"
          className="operation-select"
          onChange={(e) => onInputChange('operation', e.target.value)}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </div>
      
      <div className="result">The Result is: {result}</div>
    </div>
  );
}

Calculator.propTypes = {
  operation: PropTypes.oneOf(['add', 'subtract', 'multiply', 'divide']).isRequired,
  onInputChange: PropTypes.func.isRequired,
  input1: PropTypes.number.isRequired,
  input2: PropTypes.number.isRequired,
};

export default Calculator;