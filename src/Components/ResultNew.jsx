import React from "react";

function Result(props) {
  const { node } = props;

  function calculate(node) {
    if (node.type === "option") {
      return node.value;
    } else if (node.type === "and") {
      return node.children.every(calculate);
    } else if (node.type === "or") {
      return node.children.some(calculate);
    }
  }
  try {
    const result = calculate(node);

    return <div>Result: {result.toString()}</div>;
  } catch (error) {
    console.log(error);
    return <div>Result: Undefined</div>;
  }
}

export default Result;
