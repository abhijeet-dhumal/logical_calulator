import React, { useState } from "react";

export default function Constant(props) {
  
  const handleSelection = (event) => {
    console.log("entedred in handler const",props)
    console.log(event.target.value)
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
        console.log("and performed")
      } else if (props.op === "or") {
        if (event.target.value === "true") {
          props.setResult(props.result || true);
        } else if (event.target.value === "false") {
          props.setResult(props.result || false);
        }
        console.log("or performed")
      }
    }
  };

  return (
    <>
    <select onChange={handleSelection} className="form-select my-1 mx-1" style={{width:'12vw'}}>
      <option value={null}>Select Const</option>
      <option value={true}>True</option>
      <option value={false}>False</option>
    </select>
    </>
  );
}
