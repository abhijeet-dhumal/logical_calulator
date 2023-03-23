import React, { useState } from "react";

export default function Constant(props) {

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
    <select onChange={handleSelection}>
      <option value={null}>Select</option>
      <option value={true}>True</option>
      <option value={false}>False</option>
    </select>
    </>
  );
}
