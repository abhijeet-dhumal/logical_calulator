import React from "react";
import Option from './Options';
import NestedNode from './NestedNode';

function LogicNode(props) {
  const { node, setNode, level } = props;

  function handleAddOption() {
    setNode({ type: "option", value: true });
  }

  function handleAddNested() {
    setNode({ type: "nested", left: null, right: null, operator: "and" });
  }

  function handleOperatorChange(event) {
    setNode({ ...node, operator: event.target.value });
  }

  function handleDelete() {
    setNode(null);
  }

  function handleNestedLeftChange(newNode) {
    setNode({ ...node, left: newNode });
  }

  function handleNestedRightChange(newNode) {
    setNode({ ...node, right: newNode });
  }

  if (!node) {
    return (
      <div>
        <button class="btn-sm mx-1 my-1" onClick={handleAddOption}>Add Option</button>
        <button class="btn-sm mx-1 my-1" onClick={handleAddNested}>Add Nested</button>
      </div>
    );
  }

  if (node.type === "option") {
    return (
      <div>
        {Array.from({ length: level }).map((_, index) => (
          <span key={index}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        ))}
        <Option node={node} setNode={setNode} />
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }

  return (
    <div>
      {Array.from({ length: level }).map((_, index) => (
        <span key={index}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      ))}
      <select value={node.operator} onChange={handleOperatorChange}>
        <option value="and">AND</option>
        <option value="or">OR</option>
      </select>
      <button onClick={handleDelete}>Delete</button>
      <br />
      <NestedNode
        node={node.left}
        setNode={handleNestedLeftChange}
        level={level + 1}
      />
      <NestedNode
        node={node.right}
        setNode={handleNestedRightChange}
        level={level + 1}
      />
    </div>
  );
}

export default LogicNode;
