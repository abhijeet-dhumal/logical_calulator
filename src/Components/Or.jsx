import React, { useState } from "react";
import Menu from "./Menu";

export default function Or(props) {
  let [vars, setVars] = useState([
    {
      args: props.args,
      setArgs: props.setArgs,
      result: props.result,
      setResult: props.setResult,
      op: "or",
      arr: "",
      index: 0,
    },
  ]);

  const addMenu = () => {
    setVars([
      ...vars,
      {
        args: props.args,
        setArgs: props.setArgs,
        result: props.result,
        setResult: props.setResult,
        op: "or",
        index: vars.length,
        vars: vars,
        setVars: setVars,
      },
    ]);
    console.log(vars);
  };
  return (
    <div style={{ marginLeft: 20, marginTop: 5 }}>
      <label>
        {Object.keys(vars).map((item, index) => (
          <Menu
            args={props.args}
            setArgs={props.setArgs}
            result={props.result}
            setResult={props.setResult}
            op={"or"}
            arr={vars[0].arr}
            index={index}
            vars={vars}
            setVars={setVars}
          />
        ))}
        <button
          style={{
            backgroundColor: "rgb(46, 50, 94)",
            margin: 5,
            borderColor: "white",
            color: "white",
          }}
          type="button"
          onClick={addMenu}
        >
          +
        </button>
      </label>
    </div>
  );
}
