import React, { useState } from "react";
import Menu from "./Menu";

export default function And(props) {

  const addMenu = () => {
    props.setVars(
      [...props.vars, { args:props.args,
      setArgs:props.setArgs, 
      result:props.result,
      setResult:props.setResult,
      op:"and",
      val:null,
      index:props.index+1,
      vars:props.vars,
      setVars:props.setVars
      }]
    );
    console.log(props.vars);
  };
  return (
    <div style={{ marginLeft: 10, marginTop: 5 }}>
      
      <label>
      {Object.keys(props.vars).map((item, index) => (
        <Menu
          args={props.args}
          setArgs={props.setArgs} 
          result={props.result} 
          setResult={props.setResult}
          op={"and"} 
          // arr={vars[0].arr}
          val={props.vars[index].val} 
          index={props.vars.length-1}
          vars={props.vars}
          setVars={props.setVars}
        />
      ))}
      <button 
          style={{backgroundColor:"rgb(46, 50, 94)",margin:5,borderColor:"white",color:"white"}} 
          type="button" onClick={addMenu}>
        +
      </button>
      </label>
    </div>
  );
}
