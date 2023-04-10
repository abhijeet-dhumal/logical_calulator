import React, { useState } from "react";
import Main from "./Menu";

export default function And(props) {
  return (
    <div style={{ marginLeft: 10, marginTop: 5 }}>
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
