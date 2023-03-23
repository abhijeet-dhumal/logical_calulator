import React, { useState } from "react";

export default function MyArgs(props) {
  
  const handleSelection = (event) => {
    console.log("entedred in handler const",props)
    if (event.target.value !== null) {
      if (props.op === null) {
        if (event.target.value === "true") {
          props.setResult(true);
        } else if (event.target.value === "false") {
          props.setResult(false);
        }
      } else if (props.op === "and") {
        if (event.target.value === "true") {
          props.setResult(props.result && true);
        } else if (event.target.value === "false") {
          props.setResult(props.result && false);
        }
      } else if (props.op === "or") {
        if (event.target.value === "true") {
          props.setResult(props.result || true);
        } else if (event.target.value === "false") {
          props.setResult(props.result || false);
        }
      }
    }
  };


  return (
        <select onChange={handleSelection}>
          <option value={null}>Select</option>
          {props.args.map(e => <option value={e.value}>{e.arg.toString()}</option>)}
        </select>      
  );
}
