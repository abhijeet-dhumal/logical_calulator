import React, { useState } from "react";

export default function MyArgs(props) {
  function updateResult(str) {
    let stack = [];
    let i = 0;
    if (str[str.length - 1] === "|" || str[str.length - 1] === "&") {
      str = str.slice(0, str.length - 1);
      console.log(str);
    }
    while (i < str.length) {
      if (str[i] === " ") {
        // ignore whitespace
        i++;
      } else if (str[i] === "t") {
        // found "true", push true onto stack
        stack.push(true);
        i += 4;
      } else if (str[i] === "f") {
        // found "false", push false onto stack
        stack.push(false);
        i += 5;
      } else if (str[i] === "&") {
        // found "&", pop two values off stack and evaluate
        if(stack.length>1){
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        console.log(`performed ${operand1} && ${operand2}`)
        stack.push(operand1 && operand2);
        }
        i++;
      } else if (str[i] === "|") {
        // found "|", pop two values off stack and evaluate
        if(stack.length>1){
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        console.log(`performed ${operand1} || ${operand2}`)
        stack.push(operand1 || operand2);
        }
        i++;
      }
      console.log(stack);
    }
    if(stack[0]){
    return stack[0];
    }else{
      return stack[1];
    }
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
        console.log(props.vars[0].arr)
        let result = updateResult(`${props.vars[0].arr}`);
        console.log("result is: ",result);
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
