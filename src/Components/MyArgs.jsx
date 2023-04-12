import React, { useState } from "react";

export default function MyArgs(props) {
  function evaluateBooleanString(booleanString) {
    if(booleanString[booleanString.length-1]==="&" || booleanString[booleanString.length-1]==="|"){
      console.log("entered")
      booleanString=booleanString.slice(0,booleanString.length-1);
      console.log(booleanString);
    }
    // Split the boolean string into an array of variables
    const variables = booleanString.split(/&|\|/);
  
    // Split the boolean string into an array of operators
    const operators = booleanString.match(/&|\|/g);
  
    // Initialize the output variable to the first variable in the array
    let output = variables[0] === 'true';
    console.log(variables,operators)
    // Loop through the variables and operators and evaluate the boolean expression
    for (let i = 0; i < operators.length; i++) {
      const variable = variables[i + 1] === 'true';
  
      if (operators[i] === '&') {
        output = output && variable;
      } else if (operators[i] === '|') {
        output = output || variable;
      }
    }
  
    return output;
  }

  const handleSelection = (event) => {
    if (event.target.value !== null) {
      let ans;
      if (props.op === null) {
        if (event.target.value === "true") {
          props.setResult(true);
        } else if (event.target.value === "false") {
          props.setResult(false);
        }
      } else {
        if (props.op === "and") {
          if (event.target.value === "true") {
            ans = true;
          } else if (event.target.value === "false") {
            ans = false;
          }
          props.vars[0].arr += `${ans}&`;
          console.log("and performed");
        } else if (props.op === "or") {
          if (event.target.value === "true") {
            ans = true;
          } else if (event.target.value === "false") {
            ans = false;
          }
          props.vars[0].arr += `${ans}|`;
          console.log("or performed");
        }
        let result = evaluateBooleanString(`${props.vars[0].arr}`);
        console.log("result is: ", result);
        props.setResult(result);
      }
    }
  };

  return (
    <select
      onChange={handleSelection}
      className="form-select my-1 mx-1"
      style={{ width: "140px" }}
    >
      <option value={null}>Select Arg</option>
      {props.args.map((e) => (
        <option value={e.value}>{e.arg.toString()}</option>
      ))}
    </select>
  );
}
