import React from "react";

const LogicalOperatorDropdown = ({ handleAddOperation }) => {
  return (
    <div>
      <select>
        <option value="AND">AND</option>
        <option value="OR">OR</option>
      </select>
      <button onClick={handleAddOperation}>Add Operation</button>
    </div>
  );
};

export default LogicalOperatorDropdown;
