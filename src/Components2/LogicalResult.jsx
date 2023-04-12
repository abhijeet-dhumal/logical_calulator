import React from 'react';

const LogicalResult = ({ result }) => {
  return <div>{result ? 'True' : 'False'}</div>;
};

export default LogicalResult;
