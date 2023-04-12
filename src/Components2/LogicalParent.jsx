import React, { useState } from 'react';
import LogicalOperation from './LogicalOperation';
import LogicalOperatorDropdown from './LogicalOperatorDropdown';
import Result from './Result';

const LogicalParent = () => {
  const [selectedOperator, setSelectedOperator] = useState('');
  const [operations, setOperations] = useState([{
    operator:null,
    variables:[true]
  }
  ]);

  const addOperation = () => {
    setOperations([...operations, { operator: '', variables: [] }]);
  };

  const removeOperation = (index) => {
    const updatedOperations = [...operations];
    updatedOperations.splice(index, 1);
    setOperations(updatedOperations);
  };

  const updateOperation = (index, updatedOperation) => {
    const updatedOperations = [...operations];
    updatedOperations[index] = updatedOperation;
    setOperations(updatedOperations);
  };

  const calculateResult = () => {
    let result = true;
    operations.forEach((operation) => {
      if (operation.operator === 'and') {
        result = result && operation.variables.every((variable) => variable.value);
      } else if (operation.operator === 'or') {
        result = result || operation.variables.some((variable) => variable.value);
      }
    });
    return result;
  };

  return (
    <div>
      {operations.map((operation, index) => (
        <LogicalOperation
          key={index}
          index={index}
          selectedOperator={selectedOperator}
          setSelectedOperator={setSelectedOperator}
          operation={operation}
          updateOperation={updateOperation}
          removeOperation={removeOperation}
        />
      ))}
      <LogicalOperatorDropdown
        selectedOperator={selectedOperator}
        setSelectedOperator={setSelectedOperator}
        addOperation={addOperation}
      />
      <Result result={calculateResult()} />
    </div>
  );
};

export default LogicalParent;
