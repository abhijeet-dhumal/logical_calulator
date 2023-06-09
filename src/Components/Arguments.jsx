import React, { useEffect, useState } from "react";

export default function Arguments(props) {

  useEffect(() => {
    props.setArgs(props.args);
  }, [props.args]);

  const handleInputChange = (event, index) => {
    let { name, value } = event.target;
    const newData = [...props.args];
    if (name != null) {
      if (value === "true") {
        value = true;
      } else if (value === "false") {
        value = false;
      }
      newData[index][name] = value;
      props.setArgs(newData);
    }
  };

  const addInput = () => {
    props.setArgs([...props.args, { arg: "", value: '' }]);
  };

  const removeLast = () => {
    let len = props.args.length;
    if (props.args.length > 1) {
      props.setArgs(props.args.slice(0, len - 1));
    }
  };

  return (
    <div style={{ marginBottom: 35 }}>
      {props.args.map((item, index) => (
        <div className="container d-flex my-1">
          <input
            className="input mx-1"
            style={{ padding: "3px" }}
            name="arg"
            value={item.arg}
            placeholder="Type arg here"
            onChange={(event) => handleInputChange(event, index)}
          />

          <select
            className="form-select"
            style={{ width: "90px" }}
            name="value"
            value={item.value}
            onChange={(event) => handleInputChange(event, index)}
          >
            <option value={''}>Select</option>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
      ))}
      <button
        style={{
          backgroundColor: "rgb(46, 50, 94)",
          margin: 5,
          borderColor: "white",
          color: "white",
        }}
        type="button"
        onClick={addInput}
      >
        +
      </button>
      <button
        style={{
          backgroundColor: "rgb(46, 50, 94)",
          margin: 5,
          borderColor: "white",
          color: "white",
        }}
        onClick={removeLast}
      >
        x
      </button>
    </div>
  );
}
