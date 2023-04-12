import React from 'react';
import LogicalOperatorDropdown from './LogicalOperatorDropdown';
import UserDefinedVariables from './UserDefinedVariables';
import Result from './Result';

class LogicalOperation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      operator: 'and',
      variables: {},
      subOperations: []
    };
  }

  handleOperatorChange = (operator) => {
    this.setState({
      operator
    });
  };

  handleVariableChange = (variable, value) => {
    const variables = { ...this.state.variables, [variable]: value };
    this.setState({
      variables
    });
  };

  handleSubOperationAdd = () => {
    const subOperations = [...this.state.subOperations, {
      operator: 'and',
      variables: {},
      subOperations: []
    }];
    this.setState({
      subOperations
    });
  };

  handleSubOperationChange = (index, subOperation) => {
    const subOperations = [...this.state.subOperations];
    subOperations[index] = subOperation;
    this.setState({
      subOperations
    });
  };

  handleSubOperationDelete = (index) => {
    const subOperations = [...this.state.subOperations];
    subOperations.splice(index, 1);
    this.setState({
      subOperations
    });
  };

  calculateResult = () => {
    const { operator, variables, subOperations } = this.state;

    let result;
    if (operator === 'and') {
      result = true;
      for (const variable in variables) {
        result = result && variables[variable];
      }
      for (const subOperation of subOperations) {
        result = result && subOperation.calculateResult();
      }
    } else if (operator === 'or') {
      result = false;
      for (const variable in variables) {
        result = result || variables[variable];
      }
      for (const subOperation of subOperations) {
        result = result || subOperation.calculateResult();
      }
    }

    return result;
  };

  render() {
    const { operator, variables, subOperations } = this.state;

    return (
      <div>
        <h2>Logical Operation</h2>
        <LogicalOperatorDropdown operator={operator} onOperatorChange={this.handleOperatorChange} />
        <UserDefinedVariables variables={variables} onVariableChange={this.handleVariableChange} />
        <button onClick={this.handleSubOperationAdd}>Add Operation</button>
        {subOperations.map((subOperation, index) => (
          <LogicalOperation
            key={index}
            operator={subOperation.operator}
            variables={subOperation.variables}
            subOperations={subOperation.subOperations}
            onSubOperationChange={(subOperation) => this.handleSubOperationChange(index, subOperation)}
            onSubOperationDelete={() => this.handleSubOperationDelete(index)}
          />
        ))}
        <Result result={this.calculateResult()} />
      </div>
    );
  }
}

export default LogicalOperation;
