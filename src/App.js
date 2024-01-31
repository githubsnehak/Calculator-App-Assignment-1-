// src/components/App.js
var React = require('react');
var Calculator = require('./Calculator/Calculator');
var ActionList = require('./ActionList/ActionList');
var actionsData = require('../data/actions.json');
require('./App.css'); // Import styles if needed

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: 0,
      input2: 0,
      operation: 'add',
    };
  }

  handleInputChange(name, value) {
    this.setState({ [name]: Number(value) });
  }

  
  render() {
    return (
      <div className="app">
        <Calculator
          operation={this.state.operation}
          onInputChange={(name, value) => this.handleInputChange(name, value)}
          input1={this.state.input1}
          input2={this.state.input2}
        />
        <ActionList actions={actionsData} />
      </div>
    );
  }
}

module.exports = App;
