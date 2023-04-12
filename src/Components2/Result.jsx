import React from "react";

const Result = ({ result }) => {
  return (
    <div className="result-container">
      <h2>Result:</h2>
      <p>{result.toString()}</p>
    </div>
  );
};

export default Result;
