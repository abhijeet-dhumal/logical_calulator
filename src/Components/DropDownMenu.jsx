import React from "react";

export default function DropDownMenu(props) {
  const handleSelectionP = (event) => {
    props.setResult(true);
    props.setSelectedP(event.target.value);
  };
  return (
    <div>
      <select
        onChange={handleSelectionP}
        className="form-select my-2"
        style={{ width: "10vw" }}
      >
        <option value={""}>Select...</option>
        <option value={"A"}>Constant</option>
        <option value={"B"}>My-args</option>
        <option value={"C"}>And</option>
        <option value={"D"}>Or</option>
      </select>
    </div>
  );
}
