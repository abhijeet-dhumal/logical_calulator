import React, { useState, useEffect } from 'react';
import LogicalOperatorDropdown from './LogicalOperatorDropdown';

const LogicalOperation = ({ onChange }) => {
  const [operator, setOperator] = useState('and');
  const [variables, setVariables] = useState([
    { key: '', value: '' },
    { key: '', value: '' },
  ]);

  useEffect(() => {
    onChange({ operator, variables });
  }, [operator, variables, onChange]);

  const handleVariableChange = (index, key, value) => {
    setVariables((prev) => {
      const newVars = [...prev];
      newVars[index] = { key, value };
      return newVars;
    });
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const handleAddVariable = () => {
    setVariables((prev) => [...prev, { key: '', value: '' }]);
  };

  return (
    <div>
      <LogicalOperatorDropdown onOperatorSelect={handleOperatorChange} />
      {variables.map((variable, index) => (
        <div key={index}>
          <input
            type="text"
            value={variable.key}
            onChange={(e) =>
              handleVariableChange(index, e.target.value, variable.value)
            }
          />
          <select
            value={variable.value}
            onChange={(e) =>
              handleVariableChange(index, variable.key, e.target.value)
            }
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      ))}
      <button onClick={handleAddVariable}>Add Variable</button>
    </div>
  );
};

export default LogicalOperation;
