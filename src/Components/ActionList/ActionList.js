// src/components/ActionList/ActionList.js
var React = require('react');
var PropTypes = require('prop-types');
require('./ActionList.css'); // Import styles if needed

function ActionList({ actions }) {
  return (
    <div className="action-list">
      <h2>Action List</h2>
      <ul>
        {actions.map((action) => (
          <li key={action.id}>{action.name}</li>
        ))}
      </ul>
    </div>
  );
}

ActionList.propTypes = {
  actions: PropTypes.array.isRequired,
};

module.exports = ActionList;
