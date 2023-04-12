import React, { useState } from 'react';
import LogicNode from './LogicNode';

function LogicTree() {
  const [rootNode, setRootNode] = useState({ type: "var1" });

  return (
    <div>
      <LogicNode node={rootNode} setNode={setRootNode} level={0} />
    </div>
  );
}

export default LogicTree;
