import React, { useState } from 'react';
import VariableInput from './VariableInput';
import LogicalOperatorInput from './LogicalOperatorInput';
import VariableForm from './VariableForm';

function NestedLogicalOperation() {
  const [variables, setVariables] = useState({});
  const [operator, setOperator] = useState('and');
  const [result, setResult] = useState(false);

  const handleVariableChange = (name, value) => {
    setVariables({ ...variables, [name]: value });
  };

  const handleOperatorChange = (operator) => {
    setOperator(operator);
  };

  const handleResultChange = () => {
    const values = Object.values(variables);
    if (operator === 'and') {
      setResult(values.every((value) => value));
    } else {
      setResult(values.some((value) => value));
    }
  };

  const handleFormSubmit = (name, value) => {
    setVariables({ ...variables, [name]: value });
  };

  const childComponents = Object.entries(variables).map(([name, value]) => (
    <VariableInput key={name} name={name} value={value} onChange={handleVariableChange} />
  ));

  return (
    <div>
      {childComponents}
      <LogicalOperatorInput operator={operator} onChange={handleOperatorChange} />
      <button onClick={handleResultChange}>Calculate result</button>
      {result !== false && <div>The result is {result.toString()}</div>}
      <VariableForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default NestedLogicalOperation;
