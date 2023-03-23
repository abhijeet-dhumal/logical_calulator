import React, { useState } from "react";
import Main from "./Main";

export default function And(props) {
  return (
    <div style={{ marginLeft: 20, marginTop: 5 }}>
      <label>
      <Main 
              args={props.args} 
              setArgs={props.setArgs} 
              result={props.result} 
              setResult={props.setResult}
              op={"and"}
        /> 
        <Main 
              args={props.args} 
              setArgs={props.setArgs} 
              result={props.result} 
              setResult={props.setResult}
              op={"and"}
        /> 
      </label>
    </div>
  );
}
