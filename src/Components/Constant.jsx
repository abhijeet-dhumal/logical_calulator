import React from "react";

export default function Constant(props) {

  // to convert boolean expression string to result
  function evaluateBooleanString(booleanString) {
    if (
      booleanString[booleanString.length - 1] === "&" ||
      booleanString[booleanString.length - 1] === "|"
    ) {
      console.log("entered");
      booleanString = booleanString.slice(0, booleanString.length - 1);
      console.log(booleanString);
    }
    // Split the boolean string into an array of variables
    const variables = booleanString.split(/&|\|/);

    // Split the boolean string into an array of operators
    const operators = booleanString.match(/&|\|/g);

    // Initialize the output variable to the first variable in the array
    let output = variables[0] === "true";
    // Loop through the variables and operators and evaluate the boolean expression
    if (operators !== null) {
      for (let i = 0; i < operators.length; i++) {
        const variable = variables[i + 1] === "true";
        if (operators[i] === "&") {
          output = output && variable;
        } else if (operators[i] === "|") {
          output = output || variable;
        }
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
          props.vars[props.index].val = ans;
          props.vars[props.index].op = props.op;
          console.log("and performed");
        } else if (props.op === "or") {
          if (event.target.value === "true") {
            ans = true;
          } else if (event.target.value === "false") {
            ans = false;
          }
          props.vars[props.index].val = ans;
          props.vars[props.index].op = props.op;
          console.log("or performed");
        }

        const booleanExpressionString = function(vars) {
          let s="";
          for(let i=0;i<props.vars.length;i++){
            s+=`${vars[i].val}${props.op==="and"?'&':'|'}`;
          }
          console.log("converted string is : ",s);
          return s;
        };
        let result = evaluateBooleanString(booleanExpressionString(props.vars));
        console.log("result is: ", result);
        props.setResult(result);
      }
    }
  };

  return (
    <>
      <select
        onChange={handleSelection}
        className="form-select my-1 mx-1"
        style={{ width: "140px" }}
      >
        <option value={null}>Select Const</option>
        <option value={true}>True</option>
        <option value={false}>False</option>
      </select>
    </>
  );
}
