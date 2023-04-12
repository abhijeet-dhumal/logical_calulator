import React from 'react';

function LogicalOperatorInput({ operator, onChange }) {
  const handleOperatorChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="operator">Operator: </label>
      <select id="operator" value={operator} onChange={handleOperatorChange}>
        <option value="and">And</option>
        <option value="or">Or</option>
      </select>
    </div>
  );
}

export default LogicalOperatorInput;
