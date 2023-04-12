import React from 'react';
import LogicNode from './LogicNode';

function NestedNode(props) {
  const { node, setNode, level } = props;

  function handleDelete() {
    setNode(null);
  }

  return (
    <div>
      {Array.from({ length: level }).map((_, index) => (
        <span key={index}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      ))}
      <LogicNode node={node} setNode={setNode} level={level} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default NestedNode;
