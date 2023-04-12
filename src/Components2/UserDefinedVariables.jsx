import React, { useState } from "react";

const UserDefinedVariables = ({ onChange }) => {
  const [variables, setVariables] = useState({});

  const handleKeyChange = (index, e) => {
    const key = e.target.value;
    const value = variables[index]?.value || false;
    setVariables({ ...variables, [index]: { key, value } });
    onChange({ ...variables, [index]: { key, value } });
  };

  const handleValueChange = (index, e) => {
    const key = variables[index]?.key || "";
    const value = e.target.value === "true";
    setVariables({ ...variables, [index]: { key, value } });
    onChange({ ...variables, [index]: { key, value } });
  };

  const handleAdd = () => {
    const index = Object.keys(variables).length;
    setVariables({ ...variables, [index]: { key: "", value: false } });
    onChange({ ...variables, [index]: { key: "", value: false } });
  };

  const handleDelete = (index) => {
    const newVariables = { ...variables };
    delete newVariables[index];
    setVariables(newVariables);
    onChange(newVariables);
  };

  return (
    <div>
      <h3>User-Defined Variables</h3>
      <div>
        {Object.keys(variables).map((index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Key"
              value={variables[index]?.key || ""}
              onChange={(e) => handleKeyChange(index, e)}
            />
            <span style={{ margin: "0 8px" }}>=</span>
            <select
              value={variables[index]?.value ? "true" : "false"}
              onChange={(e) => handleValueChange(index, e)}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default UserDefinedVariables;
