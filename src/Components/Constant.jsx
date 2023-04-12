import React, { useState } from "react";

export default function Constant(props) {
  const handleSelection = (event) => {
    if (event.target.value !== null) {
      if (props.op === null) {
        if (event.target.value === "true") {
          props.setResult(true);
        } else if (event.target.value === "false") {
          props.setResult(false);
        }
      } else if (props.op === "and") {
        if (event.target.value === "true") {
          let ans=props.result && true;
          if (props.vars[0].arr.length===0){
            props.vars[0].arr+=`(${1?ans===true:0}&`;
          }else{
            props.vars[0].arr+=`${1?ans===true:0})`;
          }
          
        } else if (event.target.value === "false") {
          let ans=props.result && false;
          if (props.vars[0].arr.length===0){
            props.vars[0].arr+=`(${1?ans===true:0}&`;
          }else{
            props.vars[0].arr+=`${1?ans===true:0})`;
          }
        }
        console.log("and performed");
        
      } else if (props.op === "or") {
        if (event.target.value === "true") {
          let ans=props.result || true
          if (props.vars[0].arr.length===0){
            props.vars[0].arr+=`(${1?ans===true:0}|`;
          }else{
            props.vars[0].arr+=`${1?ans===true:0})`;
          }
        } else if (event.target.value === "false") {
          let ans=props.result || false
          if (props.vars[0].arr.length===0){
            props.vars[0].arr+=`(${1?ans===true:0}|`;
          }else{
            props.vars[0].arr+=`${1?ans===true:0})`;
          }
        }
        console.log("or performed");
      }
    }
    console.log(props.vars);
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
