import React, { useState } from "react";
import Constant from "./Constant";
import MyArgs from "./MyArgs";
import And from "./And";
import Or from "./Or";
import DropDownMenu from "./DropDownMenu";

export default function Menu(props) {
  let [selectedP, setSelectedP] = useState("");
  let operation = null;
  if (props.op === "and") {
    operation = "and";
  } else if (props.op === "or") {
    operation = "or";
  }
  function close() {
    setSelectedP('');
    console.log("closed ",props.vars);
    if(props.vars[props.index].val){
    props.vars.splice(props.index, 1)
    }
  }
  return (
    <div
      style={{
        marginTop: "3vh",
        width: "100%",
        display: "flex",

        justifyContent: "center",
      }}
      className="d-flex"
    >
      {selectedP === "" && (
        <DropDownMenu
          selectedP={selectedP}
          setSelectedP={setSelectedP}
          setResult={props.setResult}
        />
      )}

      {selectedP === "A" && (
        <Constant
          args={props.args}
          setArgs={props.setArgs}
          result={props.result}
          setResult={props.setResult}
          op={props.op}
          val={props.vars.val}
          index={props.index}
          vars={props.vars}
          setVars={props.setVars}
        />
      )}
      {selectedP === "B" && (
        <MyArgs
        args={props.args}
        setArgs={props.setArgs}
        result={props.result}
        setResult={props.setResult}
        op={props.op}
        val={props.vars.val}
        index={props.index}
        vars={props.vars}
        setVars={props.setVars}
        />
      )}
      {selectedP === "C" && (
        <And
          args={props.args}
          setArgs={props.setArgs}
          result={props.result}
          setResult={props.setResult}
          op={operation}
          vars={props.vars}
          setVars={props.setVars}
          index={props.index}
        />
      )}
      {selectedP === "D" && (
        <Or
        args={props.args}
        setArgs={props.setArgs}
        result={props.result}
        setResult={props.setResult}
        op={operation}
        vars={props.vars}
        setVars={props.setVars}
        index={props.index}
        />
      )}
      <button
        style={{
          backgroundColor: "rgb(46, 50, 94)",
          margin: 5,
          borderColor: "white",
          color: "white",
        }}
        onClick={close}
      >
        X
      </button>
    </div>
  );
}
