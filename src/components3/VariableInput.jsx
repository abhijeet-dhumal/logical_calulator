import React from 'react';

function VariableInput({ name, value, onChange }) {
  const handleValueChange = (event) => {
    onChange(name, event.target.value === 'true');
  };

  return (
    <div>
      <label htmlFor={name}>{name}: </label>
      <select id={name} value={value.toString()} onChange={handleValueChange}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
  );
}

export default VariableInput;
