import React from 'react';

function Option(props) {
  const { node, setNode } = props;

  function handleValueChange(event) {
    setNode({ ...node, value: event.target.checked });
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={node.value}
        onChange={handleValueChange}
      />
    </div>
  );
}

export default Option;
