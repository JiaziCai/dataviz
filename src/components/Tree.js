import React, { useState } from "react";
import TreeChart from "./TreeChart";
import ForceChart from "./ForceChart";

const initialData = {
  name: "😐",
  children: [
    {
      name: "🙂",
      children: [
        {
          name: "😀",
        },
        {
          name: "😁",
        },
        {
          name: "🤣",
        },
      ],
    },
    {
      name: "😔",
    },
  ],
};

function Tree() {
  const [data, setData] = useState(initialData);

  return (
    <React.Fragment>
      <h1>🪐 D3 Force Layout</h1>
      <ForceChart data={data} />
      <h1>Animated Tree Chart</h1>
      <TreeChart data={data} />
      <button onClick={() => setData(initialData.children[0])}>
        Update data
      </button>
    </React.Fragment>
  );
}

export default Tree;
